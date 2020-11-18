---
title: 【java基础】String类的方法
date: 2020-11-09
categories:
 - Java
tags:
 - String
---

## String API

最常用的方法

```java
public class Welcome
{
   public static void main(String[] args)
   {
      String greeting = "𝕆aWelcome to Core Java!";
      //char charAt(int index)
      System.out.println(greeting.charAt(0));// ?
      //int codePointAt(int index)
      System.out.println(greeting.codePointAt(0));//120134
      
      System.out.println(greeting.length());//24
      int[] codePoints = greeting.codePoints().toArray();
      System.out.println(codePoints.length);//23
      for(int i = 0;i < codePoints.length;i++) {
    	  System.out.println(codePoints[i]);
    	  /**
    	   * 
120134
97
87
101
108
99
111
109
101
32
116
111
32
67
111
114
101
32
74
97
118
97
33
    	   */
      }
      System.out.println(codePoints[1]);//97
    //int offsetByCodePoints(int startIndex,int cpCount)
      System.out.println(greeting.offsetByCodePoints(0, 5));//6
      System.out.println(new String(codePoints,0,3));//𝕆aW
      
      //int compareTo(String other)
      System.out.println("a".compareTo("b"));//-1
      //boolean equals(Object other)
      System.out.println("a".equals("b"));//false
      //boolean equalsIgnoreCase(String other)
      System.out.println("aB".equalsIgnoreCase("ab"));//true
      //boolean startsWith(String prefix)
      System.out.println("hello my baby".startsWith("hello"));//true
      //boolean endsWith(String suffix)
      System.out.println("hello my baby".endsWith("baby"));//true
      //int indexOf(String str)
      System.out.println("hello my baby".indexOf("my"));//6
      //int indexOf(String str,int fromIndex)
      System.out.println("hello my my baby".indexOf("my",7));//9
      //int indexOf(int cp)
      System.out.println("hello my my baby".indexOf('a'));//13
      //int indexOf(int cp,int fromIndex)
      System.out.println("hello my my baby".indexOf('m',7));//9
      //int lastIndexOf(String str)
      System.out.println("hello my my baby".lastIndexOf("my"));//9
      //int lastIndexOf(String str,int fromIndex)
      System.out.println("hello my my baby".lastIndexOf("my",8));//6
      //int lastIndexOf(int cp)
      System.out.println("hello my my baby".lastIndexOf('b'));//14
      //int lastIndexOf(int cp,int fromIndex)
      System.out.println("hello my my baby".lastIndexOf('b', 13));//12
      //int length()
      System.out.println("hello my my baby".length());//16
      //int codePointCount(int startIndex,int endIndex) 
      System.out.println("aWelcome to Core Java!".codePointCount(0, 3));//3
      System.out.println("𝕆aWelcome to Core Java!".codePointCount(0, 3));//2
      //String replace(CharSequence oldString, CharSequence new String)
      System.out.println("hello my baby".replace("hello","Hi"));//Hi my baby
      //String substring(int beginIndex)
      System.out.println("hello my baby".substring(6));//my baby
      //String substring(int beginIndex,int endIndex)
      System.out.println("hello my baby".substring(6,8));//my
      //String toLowerCase()
      System.out.println("HI MY BABY".toLowerCase());//hi my baby
      //String toUpperCase()
      System.out.println("hi my baby".toUpperCase());//HI MY BABY
      //String trim()
      System.out.println("   hi my baby  ".trim());//hi my baby
      //String join(CharSequence delimiter,CharSequence ..elements)
      System.out.println(String.join(" - ", "S","M","L","XL"));//S - M - L - XL
   }
}
```

## 构建字符串



```java
	   StringBuilder builder = new StringBuilder();
	   //StringBuilder append(char c)
	   builder.append('H');//appends a single character
	   //StringBuilder append(String str)
	   builder.append("i my baby");//appends a string
	   String completeString = builder.toString();
	   System.out.println(completeString);//Hi my baby
	   //int length();
	   System.out.println(builder.length());//10
	   //StringBuilder appendCodePoint(int cp)
	   builder.appendCodePoint(120134);
	   System.out.println(builder.toString());//Hi my baby𝕆
	   //void setCharAt(int i,char c)
	   builder.setCharAt(10, 'a');
	   System.out.println(builder.toString());//Hi my babya?
	   //StringBuilder insert(int offset,String str)
	   System.out.println(builder.insert(11,"code"));//Hi my babyacode?
	   //StringBuilder insert(int offset,Char c)
	   System.out.println(builder.insert(11,'_'));//Hi my babya_code?
	   //StringBuilder delete(int startIndex,int endIndex)
	   System.out.println(builder.delete(16, 17));//Hi my babya_code
	   //String toString()
	   System.out.println(builder.toString());//Hi my babya_code
```



## 输入输出

```java
	   //Scanner(InputStream in)
	   Scanner in = new Scanner(System.in);
	   System.out.println("What's your name?");
	   //String nextLine();
	   String name = in.nextLine();//Jiang Zhengtao
	   System.out.println(name);//Jiang Zhengtao
	   System.out.println("input your name gain?");
	   //String next() 空格作为分隔符
	   String firstName = in.next();
	   String secondName = in.next();
	   System.out.println("your firstName = " + firstName);//Jiang
	   System.out.println("your secondName = " + secondName);//Zhengtao
	   System.out.println("How old are you?");
	   //int nextInt()
	   int age = in.nextInt();
	   System.out.println("your age is " + age);//23
	   
	   //Console
	   Console cons = System.console();
	   String username = cons.readLine("User name: ");
	   char[] passwd = cons.readPassword("Password: ");
	   System.out.println("username = " + username);
	   System.out.println("Password = " + passwd.toString());
	   
	   //boolean hasNext() boolean hasNextInt() boolean hasNextDouble()
	   System.out.println("input whatever you want:");
	   while(in.hasNext()) {
		   System.out.println(in.next());//girl friend
	   }
```



**格式化输出**：

