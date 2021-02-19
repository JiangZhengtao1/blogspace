---
title: 【静态时序分析】TCL脚本
date: 2021-02-19
categories:
 - 科研
tags:
 - 静态时序分析
---

**关于脚本**

1 脚本是一条或者多条命令组成；

2 命令由换行符或者分号隔开；

3 每条命令包含一个或多个单词，由空格或者制表符隔开，第一个单词为命令名，其它单词为参数。

4 使用#号进行注释

 ![image-20210219150538304](https://i.loli.net/2021/02/19/V4sntNR1ITgqj5G.png)

### 语法

#### **替换**

三种变量替换：变量替换$，命令替换[ ] 和反斜杆替换 \

| substitutions | 说明     | 命令表达式        | 结果分析    |
| ------------- | -------- | ----------------- | ----------- |
| $             | 引用变量 | set a 1; set b $a | 将$a替换成1 |

替换的变量名由$后面的所有字母、数字和下划线组成。故遇到非字母，数字和下划线就会终止。如下图所示：

```tcl
(bin) 1 % set a 12
12
(bin) 2 % set b $a
12
(bin) 3 % set a~ 11
11
(bin) 4 % set b $a~
12~
(bin) 5 % set b ${a~}
11
(bin) 6 % 
```

![image-20210219150919370](https://i.loli.net/2021/02/19/q4tG7yVzA2uUdhD.png)

| substitutions | 说明                                   | 命令表达式       | 结果分析                         |
| ------------- | -------------------------------------- | ---------------- | -------------------------------- |
| []            | 里面的内容作为命令执行且返回执行的结果 | set a [expr 1+2] | 将a设置为1+2的结果，即将a设置为3 |

![image-20210219151239228](https://i.loli.net/2021/02/19/YPfXCkiJ8yRBhbz.png)

| substitutions | 说明   | 命令表达式   | 结果分析     |
| ------------- | ------ | ------------ | ------------ |
| \             | 转义符 | set a `"\$"​` | 将a设置为“$” |

#### 引用

TCL语言提供了一些方法，阻止解析器对$和分号等特殊字符进行特殊处理，这些方法称为引用。常用的引用包括反斜杆`\`、双引号`""`和大括号`{}`。

反斜杆阻止了`$`的替换，将`$`解析成字符`$`

下面注意的是：多行代码隔开，反斜杆不需要加空格。否则会出错。

![image-20210219152336522](https://i.loli.net/2021/02/19/xFfGRtlM5aB3Sod.png)

强引用{}和弱引用“”

|          | 弱引用“”                                                     | 强引用{}                                                     | 示例                                                         |
| -------- | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| 引用强度 | 双引号去掉单词和命令分隔符的特殊解释，在双引号内部的substitution和[]仍旧有效 | 大括号去掉其中所有特殊字符的特殊解释。即大括号中的字符串将按照字面上的意思，作为字符付给变量。 | ![image-20210219152940966](https://i.loli.net/2021/02/19/LrZ6i2bxFR1GuYS.png) |
| 可否嵌套 | 不可以                                                       | 可以                                                         |                                                              |

强引用可嵌套，所有可以用于控制流，foreach。

### 三种匹配

tcl中存在三种匹配方式： exact，glob和正则表达式。

exact严格匹配，字符必须完全相同才行。

glob可采用通配符进行匹配。

如下图所示：

![image-20210219153317614](https://i.loli.net/2021/02/19/iABMJSmO71VGhK4.png)

正则表达式

![image-20210219153527973](https://i.loli.net/2021/02/19/wx6ZsLbz2OGINF5.png)

### 变量

![image-20210219165404590](https://i.loli.net/2021/02/19/KkYq5msdOLMV8Sa.png)

1. 无需声明定义，直接使用`set`进行创建，`unset`移除。变量包含变量名和变量值。
2. 使用`$`进行调用
3. 区分大小写
4. 变量名和变量值度可以由任意字符组成，建议使用字母开头，使用字母/下划线加数字进行命名。
5. 常用的变量类型：string list array directionnary， Synopsys 还有专门的collection
6. 变量存储类型分为字符串表达形式和内部表达形式（整数，实数，名称，列表以及tcl脚本）

![image-20210219165412573](https://i.loli.net/2021/02/19/LbuU3WrXepJTx7Q.png)

#### 变量之string

如果你要把某个简单变量当字符串处理/看待，可以使用string命令提供的功能。

string命令的语法：string  option arg ？ arg...？

string命令具有强大的操作字符串的功能，其中的option选项多达20个。

![image-20210219170103355](https://i.loli.net/2021/02/19/H4TCwDQGWlFxLIZ.png)

- **string match ?-nocase? Pattern string**



如果pattern匹配string，返回1，否则返回0；如果有-nocase参数，则不许分大小写

使用glob-style的匹配方式，通配符：

| Character(s) | Meaning                                                    |
| ------------ | ---------------------------------------------------------- |
| ?            | 匹配任意单个字符                                           |
| *            | 匹配无限长的任意字符，包括空字符串                         |
| [char]       | 匹配字符集合chars中给出的任意字符，其中可以使用A-Z这种形式 |
| \x           | 匹配单个字符x，可以用于指定会被特殊处理的字符，如*?[]\     |

![image-20210219170901935](https://i.loli.net/2021/02/19/57ktaT2fdcj3Dqm.png)

- **string equal ?-nocase? ?-length int? string1 string2**



对两个字符串进行比较，如果它们严格（-exact）相同，返回1，否则返回0。-length可以指定匹配的长度

![image-20210219171301896](https://i.loli.net/2021/02/19/svGW4pq36lCmhke.png)



- **string compare ?-nocase? ?-length int? string1 string2**



对两个字符串进行比较，如果它们严格相同，返回0；如果第一个字符串在字典中先于第二个字符串，返回-1；否则返回1。-length可以指定匹配的长度。

![image-20210219171703691](https://i.loli.net/2021/02/19/K957sFErmz32vSt.png)



- **string length string**

返回字符串的长度。空格，换行符也算一个字符。

![image-20210219171953105](https://i.loli.net/2021/02/19/UWTdsQ6b4q8Z2HO.png)



- **string range string first last**



与string index相似，只不过它需要两个索引，返回first到last之间的字符。如果first小于0，则按0来处理；last也是类似。

![image-20210219172249102](https://i.loli.net/2021/02/19/UCTXSD1c9qxa6sb.png)



- **string index string charIndex**

返回string中第charIndex个字符。charIndex可以是下面的值：

整数n：第n个字符（0-based）

end：最后一个字符

end-整数n：倒数第n个字符

如果charIndex小于0，或者大于字符串长度，返回空。

![image-20210219172539534](https://i.loli.net/2021/02/19/1w3sFvmxh95HXyI.png)