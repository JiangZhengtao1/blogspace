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

