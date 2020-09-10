---
title: 03 hexo使用手册
abbrlink: 50194
date: 2020-08-09 17:09:20
top_img: /pic/23.jpg
cover: /pic/23.jpg
---
hexo简介
hexo是一个静态的博客网站
安装的前提条件
Node.js (Node.js 版本需不低于 10.13，建议使用 Node.js 12.0 及以上版本)
Git
对于windows用户来说
安装Node.js和Git很简单，只需要前往官网下载.msi格式即可，选择64位还是32位按照需要（一般都是64位）

# hexo+github+coding+butterfly搭建博客

参考：

https://blog.csdn.net/Lott0419/article/details/106688492

https://yunist.cn/

https://yangchaoyi.vip/

## hexo框架介绍

基于Node.js的静态博客框架，依赖少易于安装。可以托管在GitHub和coding上，对中文支持友好。

### hexo的初步搭建及部署

### 主题配置，双部署实现国内外分流

### 添加更多功能

## 框架的本地安装与运行

### 安装git

分布式版本控制系统，项目版本管理。
Git教程：https://www.liaoxuefeng.com/wiki/896043488029600
windows：https://gitforwindows.org/
Linux：sudo apt-get install git
			git --version

### 安装Node.js

windows:选择Windows Installer  默认安装即可
Linux：sudo apt-get install nodejs
sudo apt-get install npm

检查node安装成功与否
node -v
npm -v

### 安装Hexo

- 新建blog文件夹

- cd  blog

- 安装

  npm install -g hexo-cli       #安装脚手架
  hexo -v                #检查版本
  hexo init myblog   #初始化hexo
  cd myblog             #进入myblog
  npm install            #新建
  hexo g         #   
  hexo server  #  本地运行

### Github创建个人仓库

- 注册账户

  此处已经注册好可以省略

- 新建一个仓库，命名为用户名+github.io，eg: yanyunpo.github.io

### 生成SSH添加到GitHub

- 打开git bash

- 输入命令

  命令详解
  输入你的GitHub用户名和邮箱
  检查是否正确
  创建SSH，一路回车
  复制复制id_rsa.pub的信息到ssh keys
  查看是否成功

  GitHub的setting中，ssh keys的设置选项，点击New SSH key，复制id_rsa.pub的信息到里面。

  SSH简要：密钥，id_rsa：本机的私人密钥     id_rsa.pub：公共密钥，将公钥放到GitHub上，当连接GitHub账户时，根据公钥去匹配本机私钥，匹配上则说明正确，然后即可通过git上传文件到GitHub。

  git config --global user.name "yourname"
  git config --global user.email "youremail"
  git config user.name
  git config user.email
  ssh-keygen -t rsa -C "youremail"
  ssh -T git@github.com

### 部署到GitHub和coding

- GitHub

  打开站点配置文件_config.yml
  释义：类型，仓库链接，分支
  deploy:
  	 type: git
  	 repo:https://github.com/YourgithubName/
  	YourgithubName.github.io.git
   	branch: master

  部署
  释义：
  安装deploy-git【部署】
  清除
  生成静态文章 
  部署文章
  npm install hexo-deployer-git --save
  hexo clean
  hexo generate
  hexo deploy
  缩写命令
  hexo c && g && d

- coding

### 设置个人域名

因为没钱，暂时不考虑