---
title: 并查集
date: 2020-10-10
tags:
 - 并查集
 - 算法
categories:
 - Alogrithm
publish: true
---
并查集可以实现Union操作和find操作的时间复杂度O(1)

<!-- more -->
# Union Find

## What's Union Find

对应两个不同的节点进行如下两种操作，做到`时间复杂度O（1）`

- `isSameSet(A,B)`: 判断两个节点是否属于同一个集合
- `union(A,B)`: 将A,B两个节点各自所在的集合合并成为一个集合

**注意:** 并查集需要全部的数据样本，也就是说不支持动态的节点增加。

对于集合的实现：

1） 如果采用`链表`实现集合：那么对于`union操作`，需要遍历整个链表，`时间复杂度O（n）`

2）如果采用`HashSet`来实现集合：`isSameSet操作`的时间复杂度可以做到`O(1)`，但是在进行`union操作`时会遍历B所在的集合，将元素搬到A所在的集合。此时`时间复杂度O（n）`

**以上两个方法都无法实现查、合并两种操作时间复杂度O(1)**

<font color='red'>并查集的集合实现方式：</font>

每个集合有一个代表节点，初始化时自己是一个集合，自己是自己的代表节点，如1图所示：

![](https://gitee.com/KingJzt/myblog-image-bed/raw/master/20201012151909.png)


**代表节点**：在一个集合中，某个节点指回自己就是代表节点，如上图的1节点。

**怎么判断两个节点是否属于同一个集合？**

![2](https://i.loli.net/2020/10/12/3R4nCSeWDxtlUVk.png)



<font color='red'>如果两个节点的代表节点是同一个节点，那么就是属于一个集合。——isSameSet的实现。</font>

如2节点的代表节点是1，3节点的代表节点是1，那么2和3节点就是属于一个集合。

**怎么实现两个节点所在的集合合并？**

将下图的3和5所在集合进行合并：

![3](https://i.loli.net/2020/10/12/2xE6RTsk48r5uKi.png)





<font color='red'>元素少的集合挂在元素多的集合的底下</font>

`Union(3,5)`：找到两个节点的代表节点。3和5的代表节点，分别是4和1，把4挂在1的下面就可以实现两个集合的合并。如下图所示：

**注意**：不是把3，5合并，而是把3，5所在的集合合并。



![4](https://i.loli.net/2020/10/12/SjlDQwqTCERrmcu.png)

**思考：** 当在找一个节点的代表节点的时候，需要往上找，直到某个节点指回自己就结束。有没有什么优化的方法，使得不需要往上找，直接得到代表节点呢？

![5](https://i.loli.net/2020/10/12/p4kfNozCdvSgewA.png)





当在找4的代表节点时，如上图所示，在往上找代表节点的过程中，将沿途节点【扁平化】，也就是将它们的父节点直接指向代表节点。

## source code

```java
package class_05;

import java.util.HashMap;
import java.util.List;

public class Code_04_UnionFind {

	public static class Node {
		// whatever you like
	}

	public static class UnionFindSet {
		public HashMap<Node, Node> fatherMap;
		public HashMap<Node, Integer> sizeMap;

		public UnionFindSet() {
			fatherMap = new HashMap<Node, Node>();
			sizeMap = new HashMap<Node, Integer>();
		}

		public void makeSets(List<Node> nodes) {
			fatherMap.clear();
			sizeMap.clear();
			for (Node node : nodes) {
				fatherMap.put(node, node);
				sizeMap.put(node, 1);
			}
		}

		private Node findHead(Node node) {
			Node father = fatherMap.get(node);
			if (father != node) {
				father = findHead(father);
			}
			fatherMap.put(node, father);
			return father;
		}
		
		public boolean isSameSet(Node a, Node b) {
			return findHead(a) == findHead(b);
		}

		public void union(Node a, Node b) {
			if (a == null || b == null) {
				return;
			}
			Node aHead = findHead(a);
			Node bHead = findHead(b);
			if (aHead != bHead) {
				int aSetSize= sizeMap.get(aHead);
				int bSetSize = sizeMap.get(bHead);
				if (aSetSize <= bSetSize) {
					fatherMap.put(aHead, bHead);
					sizeMap.put(bHead, aSetSize + bSetSize);
				} else {
					fatherMap.put(bHead, aHead);
					sizeMap.put(aHead, aSetSize + bSetSize);
				}
			}
		}

	}

	public static void main(String[] args) {

	}

}

```



## Problem-island

岛问题
一个矩阵中只有0和1两种值， 每个位置都可以和自己的上、 下、 左、 右四个位置相连， 如果有一片1连在一起， 这个部分叫做一个岛， 求一个矩阵中有多少个岛？
举例：
0 0 1 0 1 0
1 1 1 0 1 0
1 0 0 1 0 0
0 0 0 0 0 0
这个矩阵中有三个岛。

**思路：**

1）可以用递归，采用单核CPU，两层for循环，位置出现1，岛的数量加一，infect函数将上下左右四个位置递归一次，将所有的1变成2。如果是0或者2，那么就不用判断，直接返回。

2）如果矩阵非常大，而且有多核CPU，那么就可以将矩阵进行切割成多个块，每个块计算岛的数量，然后再合并。在合并的过程中，考虑边界上有没有合并到一个岛的情况，如果有的话就要将总岛数减一。如果已经合并到一个岛了，那么就不需要减一了。判断是否属于同一个岛以及合并到一个岛的方法就是采用并查集，如下图所示：对于一小块，将某一个位置作为中心，然后属于同一个岛的点加入岛这个集合中，左右块的边界上点进行两种操作：`isSameSet` ，`Unionset`。不是同一个集合就将岛数减一，并且将两个点所在的集合进行合并。

![6](https://i.loli.net/2020/10/12/fVj23nFxiRypdZ5.png)



同样地，对于矩阵分成4块及以上地情况，那么就处理上下左右四个边界即可。判断是否属于一个岛（集合），再合并。

至于切多少块以及一些细节的情况，再和面试官细细讨论。