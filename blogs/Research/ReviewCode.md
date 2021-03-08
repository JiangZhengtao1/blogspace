**Main方法**

命令行参数：三个，分别是：

InPutFilename:输入文件名

logFilename: 日志文件

OutPutFeaFilename:输出文件名

通过输入文件构建数据结构Circuit，Circuit类如下：

**Circuit类**

```c++
class Circuit{
    public:
    //data
    std::vector<Gate*> _PI_ptr_vec;
    std::vector<Gate*> _PO_ptr_vec;
    std::vector<Gate*> _ComGate_ptr_vec;
    std::vector<Gate*> _SeqGate_ptr_vec;

    std::vector<Pin*> _Pin_ptr_vec;
    //func
    Circuit(std::string filename){InitCircuit(filename);};
    void InitCircuit(std::string filename);
    void PrintCircuit(std::ostream &os) const;
    //Graph GeneratorGraph() const;
};
```



[c++中ifstream一次读取整个文件](https://www.cnblogs.com/kex1n/p/4028428.html)

1. 读取至char*的情况

```c++
std::ifstream t;  
int length;  
t.open("file.txt");      // open input file  
t.seekg(0, std::ios::end);    // go to the end  
length = t.tellg();           // report location (this is the length)  
t.seekg(0, std::ios::beg);    // go back to the beginning  
buffer = new char[length];    // allocate memory for a buffer of appropriate dimension  
t.read(buffer, length);       // read the whole file into the buffer  
t.close();                    // close file handle  
  
// ... do stuff with buffer here ..
```



文件

```c++
// Read the file to a local buffer.
  size_t fsize = ifs.tellg();///定位指针，因为它在文件结束处，所以也就是文件的大小
  ifs.seekg(0, std::ios::beg);//想把输入流定位到流的开始位置
  std::vector<char> buffer(fsize + 1);
  ifs.read(buffer.data(), fsize);
  buffer[fsize] = 0;
  //读取文件内容到char*
```



[C++ 17 std::string_view使用介绍](https://www.cnblogs.com/yangxunwu1992/p/14018837.html)

[std::string::npos的使用](https://blog.csdn.net/zpznba/article/details/89197632)

std::isspace：若判断字符ch为空空格、制表符或换行符，函数返回非零值，否则返回零值。

[c++11 std::move() 的使用](https://www.cnblogs.com/yoyo-sincerely/p/8658075.html)



![image-20210302220046827](https://i.loli.net/2021/03/02/dGPRWMFXwKJlYum.png)

```
alone U269 
FE_OCPC65_tx_conta_3 
FE_OCPC65_tx_conta_3/A 0.023831 0.003255 38500.000000 13050.000000 FE_OCPC65_tx_conta_3/Y,39200.000000 13250.000000,0.024861,
FE_OCPC64_tx_conta_3 
FE_OCPC64_tx_conta_3/A 0.023620 0.002173 26180.000000 14150.000000 FE_OCPC64_tx_conta_3/Y,26320.000000 13950.000000,0.021978,
FE_OCPC68_tx_conta_6 
FE_OCPC68_tx_conta_6/A 0.021769 0.000937 39480.000000 16450.000000 FE_OCPC68_tx_conta_6/Y,39760.000000 16350.000000,0.028356,
FE_OCPC63_tx_conta_2 
FE_OCPC63_tx_conta_2/A 0.024234 0.000968 29260.000000 20350.000000 FE_OCPC63_tx_conta_2/Y,29540.000000 20450.000000,0.039135,
FE_OCPC64_tx_conta_5 
FE_OCPC64_tx_conta_5/A 0.022507 0.000995 32340.000000 28450.000000 FE_OCPC64_tx_conta_5/Y,32620.000000 28350.000000,0.036106,
FE_OCPC59_tx_conta_4 
FE_OCPC59_tx_conta_4/A 0.029095 0.002872 32200.000000 22650.000000 FE_OCPC59_tx_conta_4/Y,32340.000000 22850.000000,0.021332,
FE_RC_194_0 
FE_RC_194_0/A 0.047736 0.002872 12600.000000 16550.000000 FE_RC_194_0/Y,12460.000000 16350.000000,0.022192,
FE_RC_192_0 
FE_RC_192_0/A 0.015371 0.000789 12460.000000 26050.000000 FE_RC_192_0/Y,12390.000000 25800.000000,0.023610,
FE_RC_191_0 
FE_RC_191_0/A 0.047730 0.002872 12600.000000 21350.000000 FE_RC_191_0/Y,12460.000000 21150.000000,0.022851,
FE_RC_186_0 
FE_RC_186_0/A 0.011675 0.000789 18340.000000 18850.000000 FE_RC_186_0/Y,18410.000000 18600.000000,0.019122,
FE_RC_185_0 
FE_RC_185_0/A 0.047886 0.002872 12180.000000 11750.000000 FE_RC_185_0/Y,12320.000000 11550.000000,0.023131,
FE_RC_181_0 
```



[C++ std::map用法简介](https://blog.csdn.net/wcc27857285/article/details/78289175)

