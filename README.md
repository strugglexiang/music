# music
基于react构建web版音乐app

## 前沿
在我技术成长的道路上，离不开广大IT工作者的无私开源，我非常感谢各位大佬的教学资源。
我目前处在用别人的工具初级前端阶段，只能以自己的理解模仿别人的项目。
本项目特别感谢'code_mcx'的详细教程，链接地址：
<https://juejin.im/post/5a367e996fb9a0450f22050f>

## 不足
1. 目前有关webpack方面我实在是零基础，没办法做到在脚手架的基础之上添加自己的配置项，
就算别人手把手教学配置看起来也非常吃力，本项目就弃用吧。
2. 本项目弃用其他css预处理语言，写纯css(因为不会配,等有机会学完webpack3基础吧)

## 目录
- [1-使用create-react-app脚手架搭建项目](#1-使用create-react-app脚手架搭建项目)
- [2-使用路由react-router](#2-使用路由react-router)
- [3-使用状态管理redux](#3-使用状态管理redux)
- [4-使用字体图标](#4-使用字体图标)
- [5-css经验](#5-css经验)
- [6-打包问题解决](#6-打包问题解决)

## 1-使用create-react-app脚手架搭建项目
```
1. npm i -g create-react-app
2. create-react-app app
3. cd app
4. npm run start 开发环境
5. npm run build 打包
```

## 2-使用路由react-router
BrowserRouter 和 HashRouter 的区别
https://blog.csdn.net/aaa333qwe/article/details/79557044
https://www.cnblogs.com/liuna/p/6137970.html
https://github.com/ReactTraining/react-router/blob/v3/docs/guides/Histories.md 
```
1. yarn add react-router-dom (后面的依赖必需用yarn,segmentdefault)
2. 引入
import { BrowserRouter as Router, Route, Switch, Redirect, Navlink} from 
HashRouter
'react-router-dom'
3. 使用
<Router>
    <Switch>
    <Route path='/' component= {}/>
    <Redirect from='/' to='/'></Redirect>
    <Route  component= {404}/>
    </Switch>
</Router>
4. 链接
<Navlink to='/'  ></Navlink>
.active 
```

## 3-使用状态管理redux

## 4-使用字体图标

## 5-css经验
```
1.文字不可复制
-webkit-user-select: none;
user-select: none;

2.进度条消失
::-webkit-scrollbar{
  width:0;
  height:0;
}

3.图片后文字居中
vartical-align: center;
```


