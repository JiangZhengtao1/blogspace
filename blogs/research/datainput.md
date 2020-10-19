---
titile: 数据的输入
author: jzt
catogories:
 - 科研
tags:
 - 图分割
 - 研究生科研
 - EDA竞赛
date：2020-10-17
---

:::tip

对数据采用vector数组存储，无需预读，从而动态增加。同时根据design.are数据的特征，实现节点信息查找的时间复杂度O(1)。

:::

<!-- more-->

## 数据结构定义

### 节点数据(Node)

单个节点信息：Node.cpp

```c++
#ifndef __NODE_H__
#define __NODE_H__
#include<string>
#include "../util/splitString.h"
using namespace std;
class Node{
    public:
        string n_id;
        unsigned short int res[10];
        bool timing_list[3];
    Node(string id,int a[10]){
        n_id = id;
        for(int i = 0;i < 10;i++){
            res[i] = a[i];
        }
    }
    Node(string nodestr){
        vector<string> tempstrings = split(nodestr," ");
        n_id = tempstrings[0];
        //cout << n_id << " ";
        for(int i = 1;i < 11;i++){
            //cout << tempstrings[i] << " ";
            res[i-1] = stoi(tempstrings[i]);
        }
        //cout << endl;
    }
};
#endif
```

节点数据有两类，gNodes,gpNodes.且在design.are文件中，gNodes和gpNodes的索引号是依次加一递增的，所以使用一个类Nodes来存放这两类节点，方便在超图/超边中查找节点数据信息的时间复杂度实现O(1)。

design.are中文件部分数据如下所示：

```
g0 0 1157 2304 1975 0 0 0 0 0 0
g1 0 1140 2277 1934 0 0 0 0 0 0
g2 0 5 1 0 0 0 0 0 0 0
g3 0 4 1 0 0 0 0 0 0 0
g4 0 4 1 0 0 0 0 0 0 0
g5 0 5 1 0 0 0 0 0 0 0
g6 0 4 1 0 0 0 0 0 0 0
g7 0 1157 2304 1975 0 0 0 0 0 0
g8 0 5 1 0 0 0 0 0 0 0
g9 0 2 0 0 0 0 0 0 0 0
g10 0 1157 2304 1975 0 0 0 0 0 0
......
gp0 1 0 0 0 0 0 0 0 0 0
gp1 1 0 0 0 0 0 0 0 0 0
gp2 1 0 0 0 0 0 0 0 0 0
gp3 1 0 0 0 0 0 0 0 0 0
gp4 1 0 0 0 0 0 0 0 0 0
gp5 1 0 0 0 0 0 0 0 0 0
gp6 1 0 0 0 0 0 0 0 0 0
gp7 1 0 0 0 0 0 0 0 0 0
```

Nodes.cpp

```c++
#ifndef __NODES_H__
#define __NODES_H__
#include<vector>
using namespace std;
class Nodes{
    public:
        vector<Node> gNodes;
        vector<Node> gpNodes;
};
#endif
```

### 超边

Net.cpp

一条超边会有多个节点，所以直接存放nodes的id信息，用vector存储，处理比较简单。

```c++
#ifndef __NET_H__
#define __NET_H__
#include<vector>
#include<string>
using namespace std;
class Net{
    public:
        int w_id;
        int weight;
        vector<string> nodes;
        Net(int weight){
            this->weight = weight;
        }
        Net(){
            
        }
};
#endif
```

### 超图

Graph.cpp

这里超图包含多条超边，也用vector存储。

```c++
#ifndef __GRAPH_H__
#define __GRAPH_H__
#include <vector>
#include "net.h"
using namespace std;
class Graph{
    public:
        vector<Net> nets;
};
#endif
```

## 文件读入

包括两个函数：读入节点数据readNodes,读入超边数据readNets

```c++
#ifndef __READFILE_H__
#define __READFILE_H__
#include<fstream>
#include<vector>
#include"../defineData/net.h"
#include"../defineData/Node.h"
#include "../defineData/Nodes.h"
#include"../defineData/graph.h"
#include<iostream>
using namespace std;
//从design.are中读所有节点信息
void readNodes(const string &filename,Nodes &nodes){
    //读取节点信息文件
    ifstream ifs(filename);
    if(!ifs){
        cerr << "sorry, open the " << filename << " file error!"<<endl;
        exit(1);
    }
    cout << "reading the " << filename << " file ...." << endl;
    string buffer;
    vector<string> tempstrings;//分割后的字符串数组
    while(getline(ifs,buffer)){//按行读取节点信息文件
        tempstrings = split(buffer," ");
        Node node(buffer);
        if(tempstrings[0].substr(0,2) == "gp"){
            nodes.gpNodes.push_back(node);
        }else{
            nodes.gNodes.push_back(node);
        }
    }
    //关闭文件流
    ifs.close();
}
void readNets(const string &filename,Graph &graph){
    //读取超边信息文件
    ifstream ifs(filename);
    if(!ifs){
        cerr << "sorry, open the " << filename << " file error!"<<endl;
        exit(1);
    }
    cout << "reading the " << filename << " file ...." << endl;
    string buffer;
    vector<string> tempstrings;
    
    bool flag = false;
    Net net;
    while(getline(ifs,buffer) ){//按行读取节点信息文件
        tempstrings = split(buffer," ");//分割后的字符串数组
        //超边start
        if(tempstrings.size() > 2){
            //第一条超边，赋值权重
            if(flag == false){
                net.weight = stoi(tempstrings[2]);
                //非第一条超边
                flag = true;
            }else{
                //将上一条超边加入超图
                graph.nets.push_back(net);
                //生成新一条超边，初始化权重
                net = Net(stoi(tempstrings[2]));
            }
            
        }
        //将当前超边的节点加入超边
        net.nodes.push_back(tempstrings[0]);
    }
    graph.nets.push_back(net);
    //关闭文件流
    ifs.close();
}                                                         
#endif

```



## 测试



### 输入数据

节点信息文件，超边信息文件

```c++
#include<iostream>
#include<fstream>
#include<vector>
#include"defineData/net.h"
#include "util/splitString.h"
#include"defineData/Node.h"
#include"defineData/Nodes.h"
#include"util/readfile.h"
using namespace std;
int main(){
    vector<Net> nets;
    string buffer;
    Nodes nodes;
    string filename = "./data/testdata-0/design.are"; //节点信息
    readNodes(filename,nodes);//读入的所有节点信息
    cout <<"gpNodes's size ="<< nodes.gpNodes.size() << endl;
    cout << "gNodes's size = "<< nodes.gNodes.size() << endl;
    string filename1 = "./data/testdata-0/design.net";
    Graph graph;
    readNets(filename1,graph);
    cout << "graph's size (the number of nets)=" << graph.nets.size() << endl;
    for(int i = 0;i < graph.nets[34].nodes.size();i++){
        string nodestr = graph.nets[34].nodes[i];
        if(nodestr.substr(0,2) == "gp"){
            int gpIndex = stoi(nodestr.substr(2,nodestr.length() - 1));
            cout << gpIndex << " ";
            for(int j = 0;j < 10;j++){
                cout << nodes.gpNodes[gpIndex].res[j]<< " ";
            }
        }else{
            int gIndex = stoi(nodestr.substr(1,nodestr.length() -1));
            cout << gIndex<< " ";
            for(int j = 0;j < 10;j++){
                cout << nodes.gNodes[gIndex].res[j]<< " ";
            }
        }
        cout << endl;
    }
}
```

### 输出结果

```shell
[Running] cd "e:\Hypa\" && g++ main.cpp -o main && "e:\Hypa\"main
reading the ./data/testdata-0/design.are file ....
gpNodes's size =22
gNodes's size = 31
reading the ./data/testdata-0/design.net file ....
graph's size (the number of nets)=40
3 0 3 29 21 0 0 0 0 0 0 
23 0 5 0 1 0 0 0 0 0 0 
24 0 5 0 1 0 0 0 0 0 0 
25 0 5 0 1 0 0 0 0 0 0 
```



