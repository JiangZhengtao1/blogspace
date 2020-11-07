---
title: Git-Your local changes to the following files would be overwritten by merge
date: 2020-11-07
categories:
 - Git
tags:
 - GitBug
---

:::tip

**error: Your local changes to the following files would be overwritten by merge**

错误：本地如下代码文件的修改将会被合并覆盖。

解决：暂存，解决合并；丢弃，直接回退。

:::

<!-- more -->

## Bug

**error: Your local changes to the following files would be overwritten by merge**

本地如下代码文件的修改将会被合并覆盖。

```shell
[eda20709@localhost hypa]$ git pull origin master
From https://gitee.com/KingJzt/hypa

 * branch            master     -> FETCH_HEAD
   Updating 5518ffb..515ab72
   error: Your local changes to the following files would be overwritten by merge:
        checkPar/main.cpp
   Please, commit your changes or stash them before you can merge.
   Aborting
```

## 解释

情景：初试情况，实验室，寝室、远程仓库都有一份代码C版本。

![git1](https://i.loli.net/2020/11/07/PbmyrxJlMYSHtXe.png)

后来，实验室的电脑修改了代码，变成版本A，远程push了一份代码版本A到远程仓库，此时远程仓库存放了代码A，这时寝室电脑没有pull 远程仓库，而是直接修改代码，版本代码B版本，这时想要pull 远程仓库就会提示，可能会覆盖本地代码的修改。

![git](https://i.loli.net/2020/11/07/6nT3scM1k8SmpxB.png)

## 方法

**方法一：保存本地代码**

```properties
git stash
git pull origin master
git stash pop
```

将本地修改的代码暂时封存起来，然后将远程仓库pull下来之后，在将之前本地的代码pop出来，这时需要自己手动解决冲突，从而将两份代码进行合并。

**注意**：这里的两份代码都是commit提交的版本，而不是[保存]现在的版本，所以需要commit提交之后，再进行合并操作。否则刚刚的写的代码就会丢失。

![image-20201107202916039](https://i.loli.net/2020/11/07/I2ODlbUnLAWmNaQ.png)

**方法二：丢失本地代码修改**

将本地代码强制回退到上次提交的版本，从而丢失本地修改。

```properties
git reset --hard
git pull origin master
```

[git pull遇到错误：error: Your local changes to the following files would be overwritten by merge:](https://blog.csdn.net/misakaqunianxiatian/article/details/51103734)

