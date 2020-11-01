---
title: Leetcode416分割等和子集
date: 2020-10-13
tags:
 - 01背包
 - 动态规划
categories:
 - LeetCode
---

:::tip

给定一个**只包含正整数**的**非空**数组。是否可以将这个数组分割成两个子集，使得两个子集的元素和相等。

:::

<!-- more -->

## 题目

[416. 分割等和子集](https://leetcode-cn.com/problems/partition-equal-subset-sum/)

给定一个**只包含正整数**的**非空**数组。是否可以将这个数组分割成两个子集，使得两个子集的元素和相等。

注意:

1. 每个数组中的元素不会超过 100
2. 数组的大小不会超过 200

示例 1:

> 输入: [1, 5, 11, 5]
>
> 输出: true
>
> 解释: 数组可以分割成 [1, 5, 5] 和 [11].
>

 

示例 2:

> 输入: [1, 2, 3, 5]
>
> 输出: false
>

## 思路

1. 假设此数组的元素和为Sum，如果Sum%2！=0，那么一定不能分割成两个元素和相等的子集。
2. sum/2的01背包问题。

**状态：**`dp[i][j] `表示数组元素下标为【0，i】范围内，能否组成j。

**状态转移方程：** `dp[i][j] = dp[i-1][j] || dp[i - 1][j - nums[i]];`

其中：`j >= nums[i]`

**初始化：**

当nums[0] <= sum/2，就可以nums[0]将其加入背包。

```java
class Solution {
    public boolean canPartition(int[] nums) {
        int sum = sumOf(nums);
        if(sum % 2 == 1){
            return false;
        }
        int target = sum / 2;
        int len = nums.length;
        boolean[][] dp = new boolean[len][target + 1];
        if(nums[0]<=target)
            dp[0][nums[0]] = true;
        for(int i = 1;i < len;i++){
            for(int j = 1;j <= target;j++){
                if(j >= nums[i])
                    dp[i][j] = dp[i-1][j] || dp[i - 1][j - nums[i]];
                else
                    dp[i][j] = dp[i - 1][j];
            }
        }
        return dp[len - 1][target];
    }
    public int sumOf(int[] nums){
        int sum = 0;
        for(int num: nums){
            sum+= num;
        }
        return sum;
    }
}
```

![image-20201101155318441](https://i.loli.net/2020/11/01/Nk61MoJsLljOSzK.png)

**空间优化：**

因为当前行只是用到 上一行的数据，所以去掉一维，然后对内循环采用倒序。

```java
class Solution {
    public boolean canPartition(int[] nums) {
        int sum = sumOf(nums);
        if(sum % 2 == 1){
            return false;
        }
        int target = sum / 2;
        int len = nums.length;
        boolean[] dp = new boolean[target + 1];
        if(nums[0]<=target)
            dp[nums[0]] = true;
        for(int i = 1;i < len;i++){
            for(int j = target;j >= nums[i];j--){
                dp[j] = dp[j] || dp[j - nums[i]];
            }
        }
        return dp[target];
    }
    public int sumOf(int[] nums){
        int sum = 0;
        for(int num: nums){
            sum+= num;
        }
        return sum;
    }
}
```

![image-20201101155541070](https://i.loli.net/2020/11/01/nRBk13C7ycQWFm5.png)

