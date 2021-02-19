---
title: Java数组
date: 2021-02-18
categories:
 - Java
tags:
 - 数组
---



## 数组

### 数组的创建

![image-20210217193956251](https://i.loli.net/2021/02/17/YLoxnDq9eBfPwuX.png)

```java
public class ArrayDemo01 {
    public static void main(String[] args) {
        int[] nums;//声明数组
        nums = new int[10];//创建一个数组
        int[] nums2 = new int[10];//合二为一
        for (int i = 0; i < nums.length; i++) {
            nums[i] = i;
        }
        int sum = 0;
        for (int i = 0; i < nums.length; i++) {
            sum = sum + nums[i];
        }
        System.out.println(sum);
    }
 }
```

### 内存分析

![image-20210217194704335](https://i.loli.net/2021/02/17/BPyweUxKQr2ZFma.png)

![java内存分析](https://i.loli.net/2021/02/17/sTGVPealp64jKDW.png)如上所示，java内存分为栈和堆：

1、当声明一个数组时，会在栈里创建引用数组的变量。

2、接着创建一个数组，new int[10]，会在堆里存放10个int元素的数组。

3、当给数组元素赋值时，会在堆里进行数组元素赋值。

java的三种初始化：静态初始化+动态初始化+默认初始化

```java
		//静态初始化：创建+赋值
        int[] nums = {1,2,3,4,5,6,7};
        Man[] men = {new Man(1,2),new Man(3,4)};


        //动态初始化（包含默认初始化）：声明+创建
        int[] nums2 = new int[10];//默认为0
        nums2[0] = 1;
        nums2[1] = 2;
        System.out.println(nums2[1]);//2
        System.out.println(nums2[2]);//0
```

### 数组边界

数组是相同数据类型（数据类型可以为任意类型）的有序集合

数组也是对象。数组元素相当于对象的成员变量

数组变量属引用类型，数组也可以看成是对象，数组中的每个元素相当于该对象的成员变量。数组本身就是对象，Java中对象是在堆中的，因此数组无论保存原始类型还是其它对象类型，数组对象本身是在堆中的。

数组长度确定的，不可变的。如果越界，则报：ArrayIndexOutOfBounds

### 数组使用

 普通For循环

For-each循环

数组作为方法入参

数组作返回值

```java
public class ArrayDemo03 {
    public static void main(String[] args) {
        int[] nums = {1,2,3,4,5,6,7};
        //打印数组元素
        for (int i = 0; i < nums.length; i++) {
            System.out.println(nums[i]);
        }
        //求数组和
        int sum  = 0;
        for (int i = 0; i < nums.length; i++) {
            sum += nums[i];
        }
        System.out.println("sum = " + sum);

        //求最大值
        int max = nums[0];
        for (int i = 1; i < nums.length; i++) {
            if(max < nums[i]){
                max = nums[i];
            }
        }
        System.out.println("max = " + max);
    }
}

```



```java
public class ArrayDemo04 {
    public static void main(String[] args) {
        int[] arrays = {1,2,3,4,5,6,7};
        //foreach循环
        for (int array : arrays) {
            System.out.println(array);
        }
        //数组作方法入参
        printArray(arrays);
        //数组作返回值
        int[] result = reverse(arrays);
        printArray(result);
    }
    public static void printArray(int[] arrays){
        for (int i = 0; i < arrays.length; i++) {
            System.out.print(arrays[i] + " ");
        }
        System.out.println("===========");
    }

    public static int[] reverse(int []arrays){
        int[] result = new int[arrays.length];
        for (int i = 0,j = result.length - 1; i < arrays.length; i++,j--) {
            result[i] = arrays[j];
        }
        return result;
    }
}
```

### 多维数组

![多维数组](https://i.loli.net/2021/02/18/5tjYio1OuXmqzeF.png)

### Arrays

![image-20210218132053437](https://i.loli.net/2021/02/18/8ZIuUnvRWBa5zei.png)



```java
public class ArrayDemo05 {
    public static void main(String[] args) {
        int[] a = {1,2,3,4,55,6,888,134,334535,13};
        System.out.println(a);//直接打印 [I@7c30a502
        System.out.println(Arrays.toString(a));//按元素打印
        printArray(a);
        Arrays.sort(a);//排序
        System.out.println(Arrays.toString(a));
        //填充
        Arrays.fill(a,0);
        System.out.println(Arrays.toString(a));
    }
    public static void printArray(int[] a){
        for (int i = 0; i < a.length; i++) {
            if(i == 0) System.out.print("["+a[i]+", ");
            else if(i == a.length - 1) System.out.println(a[i]+"]");
            else
                System.out.print(a[i] + ", ");

        }
    }
}
```

### 冒泡排序

```java
package array;

import java.util.Arrays;

public class ArrayDemo06 {
    public static void main(String[] args) {
        int [] a = {4,5,2,1,3,7,4,6,0};
        bubbleSort(a);
        System.out.println(Arrays.toString(a));
    }
    public static void bubbleSort(int[] a){
        //从小到大 冒泡排序
        for(int i = 0; i < a.length - 1; i++){
            for(int j = 0;j < a.length - 1 - i;j++){
                if(a[j] > a[j + 1]){
                    int tmp = a[j];
                    a[j] = a[j + 1];
                    a[j + 1] = tmp;
                }
            }
        }
    }
}
```

**优化:**

![image-20210219193625997](https://i.loli.net/2021/02/19/DsjH6VyB8aYzed5.png)

### 稀疏数组

```java
package array;

public class ArrayDemo07 {
    public static void main(String[] args) {
        //创建原始数组 0无棋 1白棋 2黑棋
        int[][] a = new int[11][11];
        a[1][2] = 1;
        a[2][3] = 2;
        //打印原始数组
        for (int i = 0; i < a.length; i++) {
            for (int j = 0; j < a[i].length; j++) {
                System.out.print(a[i][j] + "\t");
            }
            System.out.println();
        }
        System.out.println("====================");

        //找出无棋数量
        int sum = 0;
        for (int[] ints : a) {
            for (int anInt : ints) {
                if(anInt !=0 ) sum++;
            }
        }
        //创建稀疏数组 原始数组转换为稀疏数组
        int[][] a2 = new int[sum + 1][3];
        a2[0][0] = a.length;
        a2[0][1] = a[0].length;
        a2[0][2] = sum;
        int count = 0;
        for (int i = 0; i < a.length; i++) {
            for (int j = 0; j < a[i].length; j++) {
                if(a[i][j] != 0){
                    count++;
                    a2[count][0] = i;
                    a2[count][1] = j;
                    a2[count][2] = a[i][j];
                }
            }
        }
        for (int[] ints : a2) {
            for (int anInt : ints) {
                System.out.print(anInt + "\t");
            }
            System.out.println();
        }
        //稀疏数组转换为原始数组
        int[][] a3 = new int[a2[0][0]][a2[0][1]];
        for (int i = 1; i < a2.length; i++) {
            a3[a2[i][0]][a2[i][1]] = a2[i][2];
        }
        System.out.println("====================");
        //打印原始数组
        for (int i = 0; i < a3.length; i++) {
            for (int j = 0; j < a3[i].length; j++) {
                System.out.print(a3[i][j] + "\t");
            }
            System.out.println();
        }
    }

}
```

