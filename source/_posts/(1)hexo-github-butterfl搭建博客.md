---
layout: pages
title: 02 (1)hexo+github+butterfl搭建博客
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

## 框架基本结构和打包文件概览

指定文件夹目录下有下列文件夹
```
node_modules: 依赖包
public：存放生成的页面
scaffolds：生成文章的一些模板
source：用来存放你的文章
themes：主题
** _config.yml: 博客的配置文件**
```

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
```  
hexo new draft newpage
```
这样会在source/_draft中新建一个newpage.md文件，如果你的草稿文件写的过程中，想要预览一下，那么可以使用
```  
hexo server --draft
```
在本地端口中开启服务预览。
如果你的草稿文件写完了，想要发表到post中，
```  
hexo publish draft newpage
```
就会自动把newpage.md发送到post中。

### 主题

GitHub上下载喜欢的主题，放置到theme的文件夹下，_config.xml中的theme换成主题文件夹的名字。
根据主题的文档进行配置修改即可。

### 多终端工作
参考：[Hexo博客在多台终端同步管理][https://www.jianshu.com/p/937bda9123da]
原理：
1.master没有源文件，只有.deploy_git中的内容，source和配置文件等都没有，因此只能在本地工作，换了电脑就无法操作了。

2.因此将源文件上传到GitHub的另一个分支，当需要工作时，从远端克隆到本地。

操作：
1.GitHub新建分支