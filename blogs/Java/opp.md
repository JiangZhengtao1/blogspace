---
title: 面向对象
date: 2021-03-01
categories:
 - Java
tags:
 - 面向对象
---

## 面向对象

### 方法的定义

```java
package opp;

public class Demo01 {
    public static void main(String[] args) {

    }

    public String sayHello(){
        return "hello";
        //这里不能再写了，前面返回结束了！
    }

    //传参数 a,b;还可以不定长参数
    public int add(int a,int b){
        return a + b;
    }
    public int add(int... nums){
        int sum = 0;
        for(int num: nums){
            sum += num;
        }
        return sum;
    }

}

```

## 静态方法和非静态方法

静态方法

```java
public class Demo02 {
    public static void main(String[] args) {
        //调用另外一个类的静态方法
        Student.say();
    }
}

public class Student {
    //静态方法
    public static void say(){
        System.out.println("学生说话了");
    }
}
```

非静态方法

```java
public class Demo02 {
    public static void main(String[] args) {
        //调用另外一个类的非静态方法 需要实例化
        //对象类型 对象名 对象值
        Student student = new Student();
        student.say();
    }
}

public class Student {
    //非静态方法
    public  void say(){
        System.out.println("学生说话了");
    }
}
```

静态方法不允许调用非静态方法

```java
    //类加载就存在
    public static void a(){
        b();//不允许调用，一个存在的调用一个未存在的方法
    }
    //对象实例化后才存在
    public  void b(){
        
    }
```

### 形参和实参

```java
public class Demo03 {
    public static void main(String[] args) {
        //实参1,2，实参和形参的类型要对应
        int add = Demo03.add(1, 2);
        System.out.println(add);
    }
    //形参a，b只有调用的时候才存在
    public static int add(int a,int b){
        return a + b;
    }
}

```

### 值传递和引用传递

```java
//值传递
public class Demo04 {
    public static void main(String[] args) {
        int a = 1;
        System.out.println(a);//1
        change(a);//1
        System.out.println(a);//1
    }
    //值传递
    public static void change(int a){
        a = 10;
    }
}
```



```java
//引用传递，本质也是值传递
public class Demo05 {
    public static void main(String[] args) {
        Person person = new Person();
        System.out.println(person.name);//null
        change(person);
        System.out.println(person.name);//蒋政涛
    }
    public static void change(Person person){
        //person是一个对象，指向的是--->Person person = new Person(); 这是一个具体的人！可以改变属性
        person.name = "蒋政涛";
    }
}
class Person{
    String name;
}
```



以类的方式组织代码，对对象组织数据。

类是对象的抽象，对象是类的具体。例如人是类，某一个具体的人（例如小明）就是对象。

类会初始化：字符串null，整型数据为0.

```java
package opp;

public class Demo06 {
    public static void main(String[] args) {
        Student xiaoming = new Student();
        xiaoming.name = "小明";
        xiaoming.age = 3;
        System.out.println(xiaoming.name);
        System.out.println(xiaoming.age);
        Student xiaohong = new Student();
        System.out.println(xiaohong.name);
        System.out.println(xiaohong.age);
        
        //输出结果
        //小明
        //3
        //null
        //0
    }
}


public class Student {
    String name;
    int age;
}

```



```java
package opp;

public class Person {
    //一个构造器不写，会自动增加一个无参的构造器

    String name;

    //无参
    public Person(){
        this.name = "jiangzhengtao";
    }

    //声明了有参构造器，如果想不传参调用，必须显式写出无参构造器。否则会报错。
    public Person(String name){
        this.name = name;
    }


}


public class Application {
    public static void main(String[] args) {
        Person person = new Person();
        System.out.println(person.name);
        Person person1 = new Person("蒋政涛");
        System.out.println(person1.name);
    }
}
```

cat和dog都是引用变量值。Java的内存分为两个部分，栈和堆。方法区也属于堆，属于堆的一部分。

![Java对象内存：栈、堆、方法区](https://i.loli.net/2021/03/02/1FifIgszkapLHOZ.png)



![img](https://i.loli.net/2021/03/02/VdlgJAw4auhSpMx.png)



[Java 中的内存分配](https://www.cnblogs.com/reformdai/p/10758316.html)

