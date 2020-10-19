---
title: 01背包
date: 2020-10-13
tags:
 - 01背包
 - 动态规划
categories:
 - 算法
publish: true
---



:::tip

背包问题是动态规划里面比较经典的问题。0-1背包是背包问题的入门基础。它是讨论

:::

<!-- more -->

## 介绍0-1背包







```java
package code_01bag;

public class SelfAchieve {
	
	public static void  main(String[] args) {
		int [][] dp = new int [5][8];//4个物品，最大重量为7
		Goods[] goods = new Goods[4];
		goods[0] = new Goods(1,1);
		goods[1] = new Goods(3,4);
		goods[2] = new Goods(4,5);
		goods[3] = new Goods(5,7);
		for(int i = 1;i <= 4; i++) {
			int w = goods[i - 1].weight,v = goods[i - 1].value;
			for(int j = 0;j <=7; j++) {
				if(j >= w) {
					dp[i][j] = Math.max(dp[i - 1][j], dp[i -1][j - w] + v);
				}else {
					dp[i][j] = dp[i - 1][j];
				}
			}
		}
		System.out.println(dp[4][7]);
	}
	static class Goods{
		public int weight;
		public int value;
		public Goods(int w,int v) {
			weight = w;
			value = v;
		}
	}
}

```

