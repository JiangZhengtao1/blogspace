---
title: report时序报告
date: 2021-01-28
categories:
 - 科研
tags:
 - PrimeTime
 - 静态时序分析
---

------

[DC学习（9）综合后处理时序分析](https://blog.csdn.net/weixin_30362233/article/details/98743045)

时序名称（Point），通过该单元的延迟（Incr），经过这个单元路径的总延时等信息：

![rk6aPTUsSt28zCq](https://i.loli.net/2021/01/30/l1bdEK3XQDCot9x.png)

report中的incr是指单个cell的delay，path_delay是指从前到后cell delay的累加值 

**clock network delay(idle):**时钟信号从芯片的端口到内部第一个寄存器的延时是0.5ns；

**Inc**:是连线延迟和其后面的单元延迟相加的结果。如要分别报告连线延迟和单元延迟，在使用**report_timing**命令时，加上命令选项"**-input_pins**"。

------



### 静态时序分析



静态时序分析的重要性

![image-20210128172445459](https://i.loli.net/2021/01/28/elDuMjpQHUWw4N8.png)

![image-20210128172535279](https://i.loli.net/2021/01/28/G5vg2Kfk1PspNdT.png)

![image-20210128172626616](https://i.loli.net/2021/01/28/1JuwyGYxUA7vQij.png)

![image-20210128172656630](https://i.loli.net/2021/01/28/gk3JIjQdeHAqGDr.png)

![image-20210128172725079](https://i.loli.net/2021/01/28/B2ZWn7Js5RoYIfp.png)

![image-20210128180812796](https://i.loli.net/2021/01/28/6C8MwkHxAVB2eOs.png)

![image-20210128180621262](https://i.loli.net/2021/01/28/dMseaR45XYmpjtg.png)

![image-20210128180850151](https://i.loli.net/2021/01/28/WhnmUABNV3kIepG.png)

![image-20210128180729236](https://i.loli.net/2021/01/28/oqWGZEFH9k8Dstf.png)

### 参考资料

[大话DC的setup time与hold time](https://mp.weixin.qq.com/s?__biz=MzAxOTIxNTg0Mg==&mid=206807776&idx=2&sn=d6ad9fd4d14de11697a5cfb354399031&scene=21#wechat_redirect)

[时序分析基本概念介绍](https://www.sohu.com/a/241580835_99933533) 

[setup&hold time概念及违约修复](https://blog.csdn.net/weixin_44502896/article/details/106791773)

### 遇到的一些疑惑

路径的延时是怎么计算出来的？静态时序不需要激励，

![image-20210128214006592](https://i.loli.net/2021/01/28/Ekngp1SeHmBqJ9r.png)