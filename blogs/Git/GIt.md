---
title:  Git入门
date: 2020-10-31
categories:
 - Git
tags:
 - git
 - github
 - gitee
---
:::tip

此篇为git入门教程：包括 Git基本操作、分支管理、本地库管理远程库

:::

<!-- more -->
转载[Git教程](https://blog.csdn.net/zaishuiyifangxym/article/details/106085462)
## 1.Git基本工作流程

### 1.1Git是什么

Git（读音为/gɪt/）是一个开源的分布式版本控制系统，可以有效、高速地处理从很小到非常大的项目版本管理。
 Git 是 Linus Torvalds 为了帮助管理 Linux 内核开发而开发的一个开放源码的版本控制软件。
 Linus Torvalds 开始着手开发 Git 是为了作为一种过渡方案来替代 BitKeeper 。
 (以上均来自百度百科)

**关于Git的历史**

**注：** 关于Git的历史内容均来自：[动画：扫盲 Git 版本控制](https://mp.weixin.qq.com/s?__biz=MzUyOTk5NDQwOA==&mid=2247491327&idx=3&sn=7e0f5b2e4f6533605b239b3077c22bba&chksm=fa59d938cd2e502e399db6fec24940fade7004f8a7991a43608c72589361e3e97e750df6714f&mpshare=1&scene=24&srcid=&sharer_sharetime=1589258316262&sharer_shareid=c8748994ac876975fc9614193e3a48a9#rd)

> 说起 Git 的崛起特别有意思，最早的版本控制是出于 BitKeeper 公司的。而且应用于最大的开源系统 Linux，Linux 的作者Linus 早就把 Linux 作为全世界的开源项目，Linux 的诞生少不了世界很多开源贡献者的参与。
> 因为贡献的开发者来自世界各地，就会出现上述出现的问题，前期只能靠 Linus一个人手动合并代码，后来系统变的原来越庞大，需要使用 BitKeeper 公司的版本控制， BitKeeper 公司看了他们这么热爱开源，就免费让 Linux 的开发者们使用。
> 面对来自世界各地 Linux 的开发者，更何况这些人都是牛人，风云四起，就喜欢搞点事情，对 BitKeeper 公司版本控制下手了，对公司内部的协议进行了逆向工程（反编译），但是很不幸运，被人家知道了。
> 这下可好了，本来人家公司让你免费试用，你非要破解人家东西，还让人家知道了，弄得 Linux 的作者 Linus 不得不去道歉，但是 Linux 道歉没有妥协，最后人家 BitKeeper 公司收回了免费使用权。
> 兄弟们，既然人家不让用了，那就自己动手丰衣足食呗。 大神Linus 仅仅用十天的时间用 C 语言编写出了 Git 的第一个版本。Git  经过几年火了起来，不愧是玩 Linux 的大神，Git 不仅性能极大的得到提升，而且开源免费，这就使得 Git 在 2008  年入住全球最大的开源社区，为开源项目免费提供存储，导致了很多开发者喜欢上了 Git，现如今 Git 也称为最流行的分布式版本控制系统。
> Git 之前的版本控制是 SVN 和  CVS，但是这两者有很明显的缺点，它是集中式的版本控制，什么是集中式的？就是必须提供一台服务器，团队合作都围绕着这个服务器进行合并。它是基于局域网的，比如现在有些公司还在使用 SVN，一旦到了家里办公，所写的代码就不能提交到这个服务器。
> 但是 Git 是分布式版本控制系统，任何地方，任何地点，不同局域网下，想什么时候提交就什么时候提交，而且提交的速度非常的快。

### 1.2Git工作区域

Git工作区域图下图所示：

![Gitdirectory](https://i.loli.net/2020/10/12/LCxTtq6FYy7aP1s.png)

(1) **工作区(Working Directory)**
 添加、编辑、修改文件等操作。

(2) **暂存区(Stage)**
 暂存已修改的文件，最后会统一提交到Git仓库中。

(3) **Git仓库(Git Repository)**
 最终确定的文件保存到Git仓库成为一个新版本,并且对他人可见.

### 1.3Git工作流程

Git工作流程有：
 (1) 在工作目录中添加、修改、删除文件；
 (2) 将需要进行版本管理的文件放入**暂存区**
 (3) 将暂存区的文件提交到**Git仓库**中；



Git管理的文件三种状态对应Git工作流程：
 (1) 已修改(modified)
 (2) 已暂存(staged)
 (3) 已提交(committed)

**暂存区的作用**:  工作中需要当前文件的进行频繁地修改\撤销等操作,等代码基本上确定的时候, 再将最新的版本提交到仓库中, 而不是每次当代码修改时都提交,这样就留有回旋的余地.此外, 已经添加到暂存区的文件会受到Git的监控跟踪. 

![thestepsofaddingfileintodirectoryinGit](https://i.loli.net/2020/10/12/DtEhKNzber4Hp8Z.png)

### 1.4 实验

**要求：** 向仓库中提交 `README.md` 文件和 `hello_world.cpp` 文件。

Git官网下载：https://git-scm.com/downloads

关于Git安装比较简单，可以参见链接：[Win10系统下Git安装](https://xiongyiming.blog.csdn.net/article/details/106089824)

**准备工作：** 账户初始化
 配置账户信息命令格式：
 配置账户名：`git config --global user.name “GitHub用户名”`
 配置账户邮箱：`git config --global user.email “GitHub邮箱”`

假设不进行初始化，看看有什么效果。

<font color='red'>**第一步：** </font>新建test_git文件夹，在文件夹目录下打开Git Bash，然后命令行输入：`git init` 进行初始化。



![image-20201007095430939](https://i.loli.net/2020/10/12/Yf9UMp5IakViq8N.png)

初始化后，test_git文件夹下出现.git隐藏文件，如果没有，则选择：查看——>隐藏的项目，即可找到隐藏的.git文件

![image-20201007095537188](https://i.loli.net/2020/10/12/Lojx1dKQXam69MH.png)



.git文件将用于跟踪Git版本迭代。

![image-20201007095617292](https://i.loli.net/2020/10/12/nlXfg2HRaB3vzWq.png)

![image-20201007095617292](https://i.loli.net/2020/10/12/nlXfg2HRaB3vzWq.png)

然后通过命令 `touch README.md` 创建文件，也可以通过鼠标右击新建文件，如下图所示：

![image-20201007095712380](https://i.loli.net/2020/10/12/X5cygOVTZLUC7DY.png)



通过命令 `git status` 可以查询当前文件的状态。如下图所示，当前的文件没有提交，`README.md`文件未被追踪。![image-20201007095756412](https://i.loli.net/2020/10/12/aJrqYWHZ4QXIzg2.png)



下面对 `README.md` 文件增加内容然后再提交。修改文件的命令为： `vim README.md`

![image-20201019165519510](https://gitee.com/KingJzt/myblog-image-bed/raw/master/image-20201019165519510.png)



使用命令:wq保存退出后，可以通过命令： `cat README.md` 查看该文档的内容。

![image-20201019165537617](https://gitee.com/KingJzt/myblog-image-bed/raw/master/image-20201019165537617.png)

<font color='red'>**第二步：** </font>将 `README.md` 文件提交到暂存区。
 提交之前通过命令 `git status` 查一下当前文件的状态

![image-20201019165554426](https://gitee.com/KingJzt/myblog-image-bed/raw/master/image-20201019165554426.png)

提交文件到暂存区命令为：`git add README.md`
 提交之后，通过命令：`git status` 查询当前文件的状态，如下图所示：

![image-20201019165617488](https://gitee.com/KingJzt/myblog-image-bed/raw/master/image-20201019165617488.png)

<font color='red'>**第三步：**</font> 将暂存区的文件添加到Git仓库
 提交命令为：`git commit -m “提交README.md文件”`
 如下图所示，可以发现提交未成功，需要配置账户名和邮箱。

![image-20201019165631338](https://gitee.com/KingJzt/myblog-image-bed/raw/master/image-20201019165631338.png)

配置账户信息命令如下：
 配置账户名：`git config --global user.name “KingJzt”`
 配置账户邮箱：`git config --global user.email “2876253980@qq.com”`

可以通过命令： `git config --list` 查看设置信息

![image-20201019165644026](https://gitee.com/KingJzt/myblog-image-bed/raw/master/image-20201019165644026.png)

配置信息后重新提交文件到Git仓库。
 提交之后，通过命令：`git status` 查询当前文件的状态。

![image-20201019165654953](https://gitee.com/KingJzt/myblog-image-bed/raw/master/image-20201019165654953.png)

`README.md` 文件提交到仓库成功后，按照上面同样的步骤：
 **新建 hello_world.cpp 文件** ——> **写程序、保存** ——> **文件提交到暂存区** ——> **文件提交到Git仓库**

### 1.5 小结

Git基本工作流程：**新建或修改文件** ——> **文件提交到缓存区** ——> **文件提交到Git仓库**

1. 新建仓库需要初始化，初始化命令为：`git init`
2. 提交文件到暂存区命令格式为：`git add 文件名`
3. 提交文件到Git仓库格式为：`git commit -m “提交文件的描述”`

**注：** 每次提交文件都可以使用命令 `git status` 来查询当前文件状态。

### 参考资料

[1] https://www.bilibili.com/video/BV1Xx411m7kn?p=7

[2] https://www.bilibili.com/video/BV1bs411N7ny?p=2

[3] https://blog.csdn.net/zaishuiyifangxym/article/details/106085462

## 2.Win10系统下Git安装

https://blog.csdn.net/zaishuiyifangxym/article/details/106089824

## 3.Git基本操作

### 3.1查看当前工作状态

查看当前工作状态命令为： `git status`

(1) 当文件被修改，没有提交到暂存区时，使用命令：`git status` ，结果如下图所示，提示一个文件未被追踪，表示当前修改的文件未被提交到暂存区。

![image-20201031120334303](https://gitee.com/KingJzt/myblog-image-bed/raw/master/image-20201031120334303.png)

(2) 当文件提交到暂存区后，使用命令：`git status` ，结果如下图所示：

![image-20201031120346494](https://gitee.com/KingJzt/myblog-image-bed/raw/master/image-20201031120346494.png)

(3) 文件从暂存区提交到Git仓库后，使用命令：`git status` ，结果如下图所示：

![image-20201031120404730](https://gitee.com/KingJzt/myblog-image-bed/raw/master/image-20201031120404730.png)

### 3.2查看历史提交记录

查看Git历史结交记录命令为： `git log` ，结果如下图所示：

![image-20201031120417374](https://gitee.com/KingJzt/myblog-image-bed/raw/master/image-20201031120417374.png)

通过命令：`git log --pretty=oneline` 可以查看简约版历史提交记录，结果如下图所示：

![image-20201031120430684](https://gitee.com/KingJzt/myblog-image-bed/raw/master/image-20201031120430684.png)

也可以通过命令：`git log --oneline` 可以查看简约版历史提交记录，结果如下图所示：

![image-20201031120438744](https://gitee.com/KingJzt/myblog-image-bed/raw/master/image-20201031120438744.png)

也可以通过命令： `git reflog` 查看历史记录，如下图所示，可以看到有 `HEAD@{0}` 和 `HEAD@{1}` 信息，其作用时方便后退到某一个版本，数字表示后退到当前版本需要多少步。

![image-20201031120451485](https://gitee.com/KingJzt/myblog-image-bed/raw/master/image-20201031120451485.png)

### 3.3版本的前进和后退

首先查看版本提交记录，结果如下图所示：

![image-20201031120501767](https://gitee.com/KingJzt/myblog-image-bed/raw/master/image-20201031120501767.png)

为了方便进行版本的前进和后退操作，对 `README.md` 文件多进行几次修改、提交操作。

第一次修改后提交到仓库，结果如下图所示：

![image-20201031120511211](https://gitee.com/KingJzt/myblog-image-bed/raw/master/image-20201031120511211.png)

接下来与上面的步骤相同，第二次修改后提交到仓库，结果如下图所示：

![image-20201031120522089](https://gitee.com/KingJzt/myblog-image-bed/raw/master/image-20201031120522089.png)

第三次修改后提交到仓库，结果如下图所示：

![image-20201031120533564](https://gitee.com/KingJzt/myblog-image-bed/raw/master/image-20201031120533564.png)

第四次修改后提交到仓库，结果如下图所示：

![image-20201031120544144](https://gitee.com/KingJzt/myblog-image-bed/raw/master/image-20201031120544144.png)

通过命令 `git reflog` 查看历史提交记录，结果如下：

![image-20201031120607452](https://gitee.com/KingJzt/myblog-image-bed/raw/master/image-20201031120607452.png)



**版本的前进和后退需要通过** <font color='red'>**指针 HEAD**</font> **来进行控制**。

**HEAD控制的方式有三种：**
 **(1) 使用版本号进行操作(常用)：**
 命令格式为：`git reset --hard 版本号`

**(2) 使用^符号进行操作，只能后退：**
 命令： `git reset --hard HEAD^` 表示后退一个版本
 命令： `git reset --hard HEAD^^` 表示后退两个版本

**(3) 使用~符号进行操作，只能后退：**
 命令： `git reset --hard HEAD~` 表示后退一个版本；
 命令： `git reset --hard HEAD~~` 表示后退两个版本；
 命令： `git reset --hard HEAD~5` 表示后退5个版本；
 命令： `git reset --hard HEAD~n` 表示后退n个版本；



**注：命令参数有** **soft**, **mixed**, **hard**  **三种类型**
 (1) 参数 **soft** 表示本地Git仓库移动**HEAD指针**。
 (2) 参数 **mixed** 表示本地Git仓库移动**HEAD指针**，**重置暂存区**。
 (3) 参数 **hard** 表示表示本地Git仓库移动**HEAD指针**，**重置暂存区，重置工作区**。

**下面举例说明版本后退和前进。**

使用版本号进行操作，其命令格式为：`git reset --hard 版本号`

**后退**到版本号为：6f34154的版本，命令为：`git reset --hard 1217f11`，结果如下图所示：

![image-20201031120705153](https://gitee.com/KingJzt/myblog-image-bed/raw/master/image-20201031120705153.png)

当然也可以**前进**到刚才的版本：命令为：`git reset --hard 4786d84`，结果如下图所示：

![image-20201031120719289](https://gitee.com/KingJzt/myblog-image-bed/raw/master/image-20201031120719289.png)

### 3.4删除文件后找回文件

#### 3.4.1 Git仓库(本地仓库)删除文件后找回文件

假设新建一个 `d123.txt` 文件后提交到Git仓库，然后仓库需要删除该文件，其步骤为：
 删除工作区 `d123.txt` 文件 ——> 提交到暂存区 ——> 提交到仓库

(1)新建 d123.txt 文件后提交到Git仓库，如下图所示：

![image-20201031120732822](https://gitee.com/KingJzt/myblog-image-bed/raw/master/image-20201031120732822.png)

(2) 删除Git仓库的 `d123.txt` 文件

![image-20201031120745221](https://gitee.com/KingJzt/myblog-image-bed/raw/master/image-20201031120745221.png)

**那么问题来了，工作区、暂存区和仓库中的 d123.txt 文件均被删除，该如何找回删除的文件？**
 <font color='red'>**此时就需要版本的后退，即可找回文件。**</font>

首先查看版本提交记录，然后退回到指定版本即可。如下图所示：

![image-20201031120755563](https://gitee.com/KingJzt/myblog-image-bed/raw/master/image-20201031120755563.png)

#### 3.4.2暂存区删除文件后找回文件

假设新建一个 `d456.txt` 文件后提交到Git仓库，然后删除文件提交到暂存区后，突然想找回该文件，此时仓库的文件并没有本删除，只需要将**指针HEAD**后退到提交 `d456.txt` 文件对应的版本即可，本质就是将调整**指针HEAD**的方向。

(1) 新建 `d456.txt` 文件后提交到Git仓库

![image-20201031120804466](https://gitee.com/KingJzt/myblog-image-bed/raw/master/image-20201031120804466.png)

(2) 删除暂存区的 `d123.txt` 文件

![image-20201031120812699](https://gitee.com/KingJzt/myblog-image-bed/raw/master/image-20201031120812699.png)

(3) **找回文件**
 步骤：通过提交记录，查询提交 `d456.txt` 文件至仓库的版本号，后退到该版本即可。结果如下图所示：

![image-20201031120828089](https://gitee.com/KingJzt/myblog-image-bed/raw/master/image-20201031120828089.png)

### 3.5版本中的文件内容比较

对于版本之间同样文件内容比较可以使用命令 `git diff` 进行操作

**比较文件的差异有多种情况：**

1. 第一种：**工作区**和**暂存区**文件比较，命令格式为： `git diff 文件名`
2. 第二种：**工作区**和**Git仓库**文件比较，命令格式为：`git diff HEAD 文件名`
3. 第三种：**工作区**和**Git仓库** 的 **不同版本**文件比较，命令格式为：`git diff 版本号 文件名`

**注：不添加文件名进行比较时，将自动比较多个相同文件名文件。**

**举例说明：**
 假设当前Git仓库有 `d123.txt` 和 `d456.txt` 文件，现在对工作区文件进行修改。

**(1) 工作区文件修改，不提交到暂存区**
 使用命令：`git diff d123.txt` 进行工作区和暂存区文件比较
 使用命令：`git diff d456.txt` 进行工作区和暂存区文件比较

![image-20201031120838370](https://gitee.com/KingJzt/myblog-image-bed/raw/master/image-20201031120838370.png)

当不添加文件名时（`git diff`），自动比较多个文件，如下图所示：

![image-20201031120847535](https://gitee.com/KingJzt/myblog-image-bed/raw/master/image-20201031120847535.png)

**(2) 工作区文件修改，提交到暂存区，并未提交到仓库**

![image-20201031120855207](https://gitee.com/KingJzt/myblog-image-bed/raw/master/image-20201031120855207.png)

使用命令：`git diff d123.txt` 和 `git diff d456.txt` 将工作区文件和暂存区文件对比，如下图所示，工作区和暂存区没有区别，因为工作区文件被提交到暂存区了。

![image-20201031120903296](https://gitee.com/KingJzt/myblog-image-bed/raw/master/image-20201031120903296.png)

使用命令：`git diff HEAD d123.txt` 和 `git diff HEAD d456.txt` 将工作区文件(工作区文件和暂存区相同，因为工作区文件被提交到暂存区了) 和仓库文件对比，如下图所示，发现有区别了。

![image-20201031120910734](https://gitee.com/KingJzt/myblog-image-bed/raw/master/image-20201031120910734.png)

**(3) 工作区文件修改，提交到Git仓库**
 使用命令 `git diff HEAD d123.txt` 和 `git diff HEAD d456.txt` 分别将工作区文件和仓库文件比较，结果如下图所示，发现没有区别。

![image-20201031120919192](https://gitee.com/KingJzt/myblog-image-bed/raw/master/image-20201031120919192.png)

可以通过命令： `git diff 版本号 文件名` 查询工作区和其他版本之间的文件比较，结果如下图所示：

![image-20201031120926640](https://gitee.com/KingJzt/myblog-image-bed/raw/master/image-20201031120926640.png)



`diff --git a/d123.txt b/d123.txt`: 把暂存区和工作目录的文件拷贝到a文件夹和b文件夹。然后比较a文件夹和b文件夹。

`index f03f694..a5fac12 100644`：前面部分是文件的id，100644指定文件的类型和权限。

`--- `旧文件（暂存区域的文件）

`+++ `新文件 （工作目录的文件）

`@@ -1 +1,2 @@`：-表示旧文件，+表示新文件；后面的数字表示开始的行号和连续的行数。旧文件后面没有行数，因为旧文件完全包含在新文件里面了。旧文件没有独有的内容，所有无需单独显示。

`绿色部分`：新文件所特有的，增加的内容。

`浅色部分`：两个文件所共有的。

`红色部分`: 旧文件所特有的。

### 参考资料

[1] https://www.bilibili.com/video/BV1bs411N7ny?p=5
 [2] https://www.bilibili.com/video/BV1pW411A7a5?p=23

## 4.删除文件和重命名文件

### 4.1删除文件

**git删除文件用到的命令有以下几种情况：**

1. 命令：`rm 文件名` 表示删除的是工作区的文件。
2. 命令：`git rm` 表示删除的是工作区和暂存区的文件。
3. 命令：`git rm -f 文件名` 表示当工作目录和暂存区的同一个文件存在不同内容时，执行命令 `git rm -f 文件名` 就可以强制删除工作区和暂存区的文件。
4. 命令：`git rm --cached 文件名` 表示只删除暂存区的文件并且保留工作目录的文件。

**下面对上面的几种删除文件方式依次进行实验。**

假设工作区和仓库均有 `d123.txt` 文件，如下图所示：

![image-20201031120936310](https://gitee.com/KingJzt/myblog-image-bed/raw/master/image-20201031120936310.png)

#### 4.1.1 rm 文件名

使用命令：`rm d123.txt` 删除工作区文件，暂存区和仓库没有被删除，如下图所示

![image-20201031120942945](https://gitee.com/KingJzt/myblog-image-bed/raw/master/image-20201031120942945.png)

如果想继续删除暂存区和仓库的命令，需要提交文件即可，如下图所示:

![image-20201031120953424](https://gitee.com/KingJzt/myblog-image-bed/raw/master/image-20201031120953424.png)

#### 4.1.2git rm 文件名

使用命令：`git rm 文件名` 来删除工作区和暂存区的文件，仓库文件不删除，如下图所示：

![image-20201031121000256](https://gitee.com/KingJzt/myblog-image-bed/raw/master/image-20201031121000256.png)

如果想删除仓库文件，提交命令至仓库即可，结果如下图所示：

![image-20201031121007296](https://gitee.com/KingJzt/myblog-image-bed/raw/master/image-20201031121007296.png)

#### 4.1.3 git rm -f 文件名

命令：`git rm -f 文件名` 表示当工作目录和暂存区的同一个文件存在不同内容时，执行命令 `git rm -f 文件名` 就可以强制删除工作区和暂存区的文件。

假设工作区修改 `d123.txt` 文件不提交到暂存区(表示工作区文件和暂存区文件内容不一样)，然后删除工作区和暂存区文件，发现文件内容不一样，不知道删除哪一个，如下图所示：

![image-20201031121014458](https://gitee.com/KingJzt/myblog-image-bed/raw/master/image-20201031121014458.png)

此时需要命令：`git rm -f 文件名` 来删除两个工作区和暂存区文件，如下图所示：

![image-20201031121022441](https://gitee.com/KingJzt/myblog-image-bed/raw/master/image-20201031121022441.png)

如果想删除仓库文件，提交命令至仓库即可，结果如下图所示：

![image-20201031121029329](https://gitee.com/KingJzt/myblog-image-bed/raw/master/image-20201031121029329.png)

#### 4.1.4git rm --cached 文件名

使用命令：`git rm --cached文件名` 来删除暂存区的文件并且保留工作目录的文件，结果如下图所示：

![image-20201031121037778](https://gitee.com/KingJzt/myblog-image-bed/raw/master/image-20201031121037778.png)

如果想删除仓库文件，提交命令至仓库即可，结果如下图所示：

![image-20201031121045834](https://gitee.com/KingJzt/myblog-image-bed/raw/master/image-20201031121045834.png)

### 4.2重命名文件

重命名文件有来两种情况：

1. 命令：`mv 旧文件名 新文件名` 表示将工作区文件重命名，暂存区和仓库文件名不变。
2. 命令(**常用**)：`git mv 旧文件名 新文件名` 表示将工作区和暂存区的文件重命名，仓库文件名不变。

**下面对上面的几种删除文件方式依次进行实验。**



假设工作区和仓库均有 `d123.txt` 文件，如下图所示：

![image-20201031121055759](https://gitee.com/KingJzt/myblog-image-bed/raw/master/image-20201031121055759.png)

#### 4.2.1mv 旧文件名 新文件名

使用命令 `mv 旧文件名 新文件名` 来将工作区文件重命名，如下图所示：

![image-20201031121104841](https://gitee.com/KingJzt/myblog-image-bed/raw/master/image-20201031121104841.png)

此时工作区文件被重命名，暂存区和仓库文件名保持不变。如需将暂存区和仓库文件重命名，则需要从工作区重命名文件添加到暂存区，然后在提交到仓库即可，如下图所示：

![image-20201031121115247](https://gitee.com/KingJzt/myblog-image-bed/raw/master/image-20201031121115247.png)

#### 4.2.2git mv 旧文件名 新文件名

用命令 `git mv 旧文件名 新文件名` 来将工作区和暂存区文件重命名，如下图所示：

![image-20201031121123314](https://gitee.com/KingJzt/myblog-image-bed/raw/master/image-20201031121123314.png)

此时工作区和暂存区文件被重命名，仓库文件名保持不变。如需将仓库文件重命名，则需要提交到仓库即可，如下图所示：

![image-20201031121131042](https://gitee.com/KingJzt/myblog-image-bed/raw/master/image-20201031121131042.png)

### 参考资料

[1] [https://www.bilibili.com/video/BV1bs411N7ny?p=6](https://www.bilibili.com/video/BV1bs411N7ny?p=5)
 [2] https://blog.csdn.net/qq_42780289/article/details/98353792
 [3] https://www.cnblogs.com/413xiaol/p/10555165.html

## 5.分支管理

### 5.1创建分支与查看分支

**创建分支**命令格式：`git branch 分支名`

**查看分支**命令格式：`git branch -v`
 也可以通过命令：`git log --decorate --all --oneline --graph` 对各个分支进行图形化显示。



假设目前工作区和仓库有 `d123.txt` , `d456.txt` , `hello_world.cpp` , `README.md` 四个文件，现在需要建立分支 feature_sum ， 然后查看该分支。

创建分支，使用命令：`git branch feature_sum` ，然后通过命令：`git branch -v` 查看该分支，也可以通过命令：`git log --decorate --all --oneline --graph` 图形化显示分支，结果如下图所示：

![image-20201031121139947](https://gitee.com/KingJzt/myblog-image-bed/raw/master/image-20201031121139947.png)

### 5.2切换分支

**切换分支**命令格式：`git checkout 分支名`



例如，前面的例子已经创建了 feature_sum 分支，接下来切换到该分支(命令： `git checkout feature_sum` )，结果图下图所示，发现**指针HEAD**指向了分支 feature_sum 。

![image-20201031121148701](https://gitee.com/KingJzt/myblog-image-bed/raw/master/image-20201031121148701.png)

然后在 feature_sum 分支下添加 `test_sum.cpp` 文件并提交到仓库，结果如下图所示：

![image-20201031121157003](https://gitee.com/KingJzt/myblog-image-bed/raw/master/image-20201031121157003.png)

### 5.3合并分支

假设需要将其他分支合并到master分支上，则合并分支前，首先切换到master分支上，然后将其他分支合并到master分支上即可。
 **合并分支**命令格式：`git merge 分支名`

例如：
 由前面的操作可知，当前分支 feature_sum 下增加了 `test_sum.cpp` 文件，可以通过切换分支查看master分支下的文件是否发生变化。

![image-20201031121204706](https://gitee.com/KingJzt/myblog-image-bed/raw/master/image-20201031121204706.png)

![image-20201031121212216](https://gitee.com/KingJzt/myblog-image-bed/raw/master/image-20201031121212216.png)

由上图可知，master分支下并未增加 `test_sum.cpp` 文件，这时通过合并分支操作就可以增加feature_sum分支下的 `test_sum.cpp` 文件。
 **注意：** 若将 feature_sum 分支合并到master分支，此时当前分支状态需要在master分支下。

![image-20201031121220687](https://gitee.com/KingJzt/myblog-image-bed/raw/master/image-20201031121220687.png)

![image-20201031121229376](https://gitee.com/KingJzt/myblog-image-bed/raw/master/image-20201031121229376.png)

### 5.4解决合并分支产生的冲突

**合并分支**的时候可能会产生冲突，下面举一个例子进行说明：
 上一个操作合并分支，则master分支下的文件和feature_sum分支下的文件相同。假设用户A对master分支下 `test_sum.cpp` 文件进行修改然后提交到仓库，用户B对feature_sum分支`test_sum.cpp`文件进行修改然后提交到仓库。用户A和用户B对同一个文件进行修改，那么修改的文件内容在合并时会产生冲突，系统不知道该如何操作，则会出现报错，此时就需要人工修改文件来解决冲突。

下面通过实际操作来说明解决冲突。



(1) master分支下修改 `test_sum.cpp` 文件，然后提交到仓库，结果如下图所示：

![image-20201031121236882](https://gitee.com/KingJzt/myblog-image-bed/raw/master/image-20201031121236882.png)

(2) feature_sum分支下修改`test_sum.cpp`文件，然后提交到仓库

![image-20201031121245129](https://gitee.com/KingJzt/myblog-image-bed/raw/master/image-20201031121245129.png)



(3) 合并分支(feature_sum分支合并到master分支)

![image-20201031121252698](https://gitee.com/KingJzt/myblog-image-bed/raw/master/image-20201031121252698.png)

如上图所示，合并分支时出现冲突，提示 `test_sum.cpp` 文件出现冲突，并且此时还处于合并状态，这是需要解决冲突，通过命令： `vim test_sum.cpp` 打开该文件查看冲突，如下图所示：

![image-20201031121259120](https://gitee.com/KingJzt/myblog-image-bed/raw/master/image-20201031121259120.png)

将 `test_sum.cpp` 文件中 `<<<<<<< HEAD` 提示符 、`======` 分隔符和 `>>>>>> feature_sum`提示符 删除，然后修改内容，如下图所示：

![image-20201031121306290](https://gitee.com/KingJzt/myblog-image-bed/raw/master/image-20201031121306290.png)

接着，**修改文件后保存退出** ——> **解决冲突后的文件提交到暂存区** ——> **解决冲突后的文件提交到仓库**，结果如下图所示：

![image-20201031121313562](https://gitee.com/KingJzt/myblog-image-bed/raw/master/image-20201031121313562.png)

由上图可以看出，合并时出现冲突时，系统处于合并状态，此时需要查看冲突文件，然后修改冲突，将文件提交到暂存区，然后提交到仓库即可完成合并。

**下面对解决合并冲突进行总结：**

**解决冲突的步骤(当前一直处于合并状态)：**

1. 第一步：编辑文件，删除/修改冲突部分，保存退出；
2. 第二步：重新提交文件至暂存区： `git add 文件名`
3. 第三步：重新提交文件至仓库： `git commit -m “提交描述”`
   **注意：** 此时commit后不能带具体的文件名，因为当前一直处在合并状态，默认提交的是当前冲突的文件。

### 5.5删除分支

合并分支结束后，可以删除分支，**删除分支**命令格式：`git branch -d 分支名` 。



如下图所示，使用命令：`git branch -d feature_sum` 删除 feature_sum 分支，结果如下图所示：

![image-20201031121322217](https://gitee.com/KingJzt/myblog-image-bed/raw/master/image-20201031121322217.png)

### 5.6 小结

分支管理中常用的命令如下：

1. **创建分支**命令格式：`git branch 分支名`
2. **查看分支**命令格式：`git branch -v`
3. **切换分支**命令格式：`git checkout 分支名`
4. **合并分支**命令格式：`git merge 分支名`
   **注： 需要注意当前所在分支**
5. **删除分支**命令格式：`git branch -d 分支名`



### 参考资料

[1] https://www.bilibili.com/video/BV1bs411N7ny?p=7
 [2] https://www.bilibili.com/video/BV1pW411A7a5?p=24

## 6.本地库管理远程库

本地库(Git仓库)可以管理远程库(GitHub)，一般地操作有pull, clone 和pull 操作，在实际协作开发项目是一般会有两种情况：

**第一种**是团队之间互相认识，共同开发项目。这样可以建立私人项目或者公开项目，然后邀请项目成员共同开发，这样其他人将看不到团队的项目。
  例如：如下图所示，开发者A在GitHub上新建仓库，接着新建一个分支然后邀请团队成员开发者B在这个分支上提交代码。开发者B在本地库写好的项目代码推送到远程库的分支上，然后可以发送请求给开发者A，要求审核代码并合并分支，开发者A可以将代码拉取下来查看。如果觉得代码可以，那么直接合并代码即可，如果觉得代码不可以，要求开发者B进行修改知道合格为止。

**第二种**是开源的项目，全网都可以看到，任何开发者都可以对你的项目提出建议和修改，达到共同开发的目的。
  例如：如下图所示，开发者A在GitHub上新建仓库，然后开发者C在GitHub上无意间看到了这个仓库，觉得挺好就Fork该仓库，于是开发者C就会出现该仓库。开发者C将这个仓库拉取(pull)本地库进行改进然后推送(push)到自己的远程库上，此时开发者A的仓库不会变化。
 如果开发者C想要将自己的代码合并到开发者仓库中就要提出请求，然后开发者A进行审核，如果通过开发者A觉得可以就进行合并。

![image-20201031121334206](https://gitee.com/KingJzt/myblog-image-bed/raw/master/image-20201031121334206.png)

​	以上两种情况和GitHub协同开发基本类似，不同的是本地库和远程库之间需要进行拉取(pull)和推送(push)操作，pull和push操作也是本地库管理远程库的关键。下面就简单介绍本地库文件推送(push)到远程库、远程库文件拉取(pull)到本地库等基本操作。

### 6.1本地库和远程库

本地库就是开发者将文件提交到Git仓库，此时Git仓库文件还在本地电脑。通过Git仓库可以管理GitHub远程仓库，例如Git仓库可以推送到GitHub仓库上，共享到社区，其他开发者可以看到这个仓库，然后可以提出Bug和改进建议达到共同开发的目的。

#### 6.1.1建立本地库

开发者A新建develop_A文件夹，然后通过git命令初始化，接着新建`test_hello.cpp`文件提交到本地库。如下图所示：

![image-20201031121341617](https://gitee.com/KingJzt/myblog-image-bed/raw/master/image-20201031121341617.png)

#### 6.1.2建立远程库

![image-20201031121354777](https://gitee.com/KingJzt/myblog-image-bed/raw/master/image-20201031121354777.png)

如下图所示，复制teamwork仓库地址：https://github.com/JiangZhengtao1/teamwork.git

![image-20201031121622930](https://i.loli.net/2020/10/31/sYBIWl3Sjp6kcA5.png)

### 6.2本地库管理远程库的基本操作

#### 6.2.1本地库推送(push)到远程库

**本地库推送到远程库**命令格式为：`git push origin分支名`

现在开发者A将本地库推送到GitHub仓库上， 由前面的操作可知，teamwork仓库的地址为：

https://github.com/JiangZhengtao1/teamwork.git

由于地址太长不太好操作，可以用一个简单的名称(别名origin)代替复较长的地址，
 起别名的命令为格式为：`git remote add origin 远程库地址`

例如：git remote add origin https://github.com/JiangZhengtao1/teamwork.git 如下图所示，还可以通过命令：`git remote -v` 查看当前的别名 判断新名称(别名)是否更新成功。

![image-20201031121644447](https://i.loli.net/2020/10/31/Aom1CeqNxLJva64.png)

**注意：**
 **更改远程地址别名**命令：`git remote add origin GitHub仓库地址`
 **删除本地指定的远程地址别名**命令：`git remote remove origin`

例如使用命令：`git push origin master` 表示将本地库master分支下文件推送到远程库
 执行命令后，如下图所示，推送报错，是因为远程库一个README.md文件在本地库没有，此时需要将远程库README.md拉取(pull)到本地库(更新)，然后再推送到远程库。

![image-20201031121656466](https://i.loli.net/2020/10/31/fSgoIyYTw6le8pn.png)

网上查询的解决办法，执行命令：`git pull origin master --allow-unrelated-histories` 结果如下图所示：

![image-20201031121709267](https://i.loli.net/2020/10/31/1fbqu7jzYMiOgpV.png)

接下来将本地库推送到远程库，结果如下图所示：

![image-20201031121718466](https://i.loli.net/2020/10/31/VP3h4dwQifKZlv5.png)

此时刷新网页，查看GitHub仓库有没有更新文件，如下图所示，文件成功的从本地库提交到远程库。

![image-20201031121728432](https://i.loli.net/2020/10/31/DIvJzfqpxBAoH3a.png)

#### 6.2.2远程库克隆(clone)到本地库

远程库克隆(clone)到本地库命令格式为：`git clone 远程仓库地址`

任何开发者都可以将GitHub上的开源的项目克隆到本地仓库。例如，前面操作的远程仓库有了两个文件，如下图所示：

![image-20201031121736798](https://i.loli.net/2020/10/31/7TnZM1CKaVYPmB3.png)

下面新建文件夹test_clone文件夹，使用命令：`git clone 远程仓库地址` 将远程仓库文件下载下来，如下图所示：

![image-20201031121743528](https://i.loli.net/2020/10/31/LUrxkbmJ65YiWHn.png)

远程库克隆到本地库的效果：

1. 完整的把远程库下载到本地库；
2. 初始化本地库；

#### 6.2.3远程库拉取(pull)到本地库

**远程库拉取(pull)到本地库**命令格式为： `git pull origin master` ，origin为远程库地址的别名。

将远程库文件更新到本地库，本地工作区文件将会更新，如果本地有和远程库同名的文件，将会强制更新本地库文件。

例如新建test_pull文件，新建123.txt文件，然后提交到本地库，如下图所示：

![image-20201031121754379](https://i.loli.net/2020/10/31/p5WRlXNJe2rCFcw.png)

将远程库地址更改别名(`git remote add origin 远程库地址`)，然后执行命令：`git pull origin master`

![image-20201031121802402](https://i.loli.net/2020/10/31/GoyKbkuTf4sqJO9.png)

此时发现，pull失败，因为本地库有和远程库不相同的文件，此时可以通过命令：`git pull origin master --allow-unrelated-histories` 强制拉取(pull)

![image-20201031121811556](https://i.loli.net/2020/10/31/haP4gO8WjbeCyBM.png)

下面将本地库文件全部推送到远程库，命令为：`git push origin master` ，结果如下图所示

![image-20201031121818560](https://i.loli.net/2020/10/31/yP7qBsWCjMF1dKw.png)

此时刷新网页，查看GitHub仓库中123.txt文件成功的从本地库提交到远程库，如下图所示：

![image-20201031121829552](https://i.loli.net/2020/10/31/JhzSp4yfFL2bjvk.png)

假设在GitHub仓库中更改文件内容，此时本地库内容没有变，现在然后从将远程库拉取(pull)到本地库，看看会不会强制更新本地库文件内容。

![image-20201031121852875](https://i.loli.net/2020/10/31/16bI95cGwAv7yUd.png)

![image-20201031121909152](https://i.loli.net/2020/10/31/5Brih4GQwf9Abvn.png)

由上图可以看出，远程库123.txt文件被修改，此时将远程库拉取到本地库，执行命令：`git pull origin master` ，结果如下图所示，本地库123.txt文件被更新了。

![image-20201031121917304](https://i.loli.net/2020/10/31/taNdT7l9D3fjeon.png)

当然也可以通过命令： `git fetch origin master` 将远程库文件抓取到本地库缓存区，此时本地库和工作区文件并没有被合并，

通过命令：`git checkout origin/master` 切换到本地库缓存的分支上，然后通过命令： `cat 文件名` 来查看文件内容

接下来可以将缓存区分支文件和本地库文件进行合并，通过命令：`git checkout master`切换到本地库分支上，然后再将缓存区的分支合并到本地库：命令为：`git merge origin/master` 。

### 6.3团队协作开发和跨团队协作开发(开源项目)

团队协作开发和跨团队协作开发(开源项目)可以参考之前的博客：[GitHub协作开发项目](https://xiongyiming.blog.csdn.net/article/details/106056200)

其实重点是远程仓库和本地仓库之间的推送(push)操作和拉取(pull)操作，因为在这个过程中可能出现远程库文件和本地库文件不相同，这是需要自己去判断。具体的问题在实际操作中可能会遇到，等遇到了这些问题在更新自己的笔记。

### 参考资料

[1] https://www.bilibili.com/video/BV1pW411A7a5?p=36
 [2] https://www.cnblogs.com/wbl001/p/11495110.html
 [3] https://www.zhihu.com/question/38305012
 [4] https://blog.csdn.net/a19881029/article/details/42245955
 [5] https://blog.csdn.net/yangfengjueqi/article/details/82849826?utm_medium=distribute.pc_relevant.none-task-blog-baidujs-8
 [6] https://www.cnblogs.com/xiaocai-ios/p/7779741.html

## 参考资料

1. https://blog.csdn.net/zaishuiyifangxym/article/details/106085462
2. https://blog.csdn.net/zaishuiyifangxym/article/details/106089824
3. https://blog.csdn.net/zaishuiyifangxym/article/details/106105282
4. https://blog.csdn.net/zaishuiyifangxym/article/details/106112254
5. https://blog.csdn.net/zaishuiyifangxym/article/details/106126916
6. https://blog.csdn.net/zaishuiyifangxym/article/details/106153902









































