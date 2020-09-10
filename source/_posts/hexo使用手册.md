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

---
layout: pages
title: 02 hexo+github+butterfl搭建博客
tags:
  - hexo
  - github
  - butterfly
abbrlink: 25978
date: 2020-09-10 13:47:15
top_img: /pic/22.jpg
cover: /pic/22.jpg
---
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

## 框架基本结构和打包文件概览

指定文件夹目录下有下列文件夹
node_modules: 依赖包
public：存放生成的页面
scaffolds：生成文章的一些模板
source：用来存放你的文章
themes：主题
** _config.yml: 博客的配置文件**

## butterfly主题安装和配置

根据官方文档配置，在此不赘述。
注：Hexo 在合并主题配置时，Hexo 配置文件中的 theme_config 的优先级最高，其次是 _config.[theme].yml 文件，最后是位于主题目录下的 _config.yml 文件。

### 基本配置

- 分类和标签

  分类下面的子类有顺序，标签没有eg：
  categories:

  - Diary
  - PP
    tags:
  - PS3
  - Games

  Diary、PP和PP、Diary是不同的
  PS3、Games和Games、PS3是相同的

- 布局

  当你每一次使用代码 hexo new paper
  它其实默认使用的是post这个布局，也就是在source文件夹下的_post里面。
  Hexo 有三种默认布局：post、page 和 draft，它们分别对应不同的路径，而您自定义的其他布局和 post 相同，都将储存到 source/_posts 文件夹。

  而new这个命令其实是：hexo new [layout] <title>
  只不过这个layout默认是post罢了。

- page

  如果你想另起一页，那么可以使用
  hexo new page board
  系统会自动给你在source文件夹下创建一个board文件夹，以及此文件夹下的index.md，这样你访问的board对应的链接就是http://xxx.xxx/board

- draft【草稿】

  draft是草稿的意思，也就是你如果想写文章，又不希望被看到，那么可以
  hexo new draft newpage
  这样会在source/_draft中新建一个newpage.md文件，如果你的草稿文件写的过程中，想要预览一下，那么可以使用
  hexo server --draft
  在本地端口中开启服务预览。
  如果你的草稿文件写完了，想要发表到post中，
  hexo publish draft newpage
  就会自动把newpage.md发送到post中。

### 主题

GitHub上下载喜欢的主题，放置到theme的文件夹下，_config.xml中的theme换成主题文件夹的名字。
根据主题的文档进行配置修改即可。

### 多终端工作

原理：
1.master没有源文件，只有.deploy_git中的内容，source和配置文件等都没有，因此只能在本地工作，换了电脑就无法操作了。

2.因此将源文件上传到GitHub的另一个分支，当需要工作时，从远端克隆到本地。

操作：
1.GitHub新建分支

### coding page 部署实现国内外分流

## 发布文章

### 写文章

创建一个文章 
source/_post中打开markdown文件，编辑文章
hexo new newpapername
hexo clean
hexo g
hexo d