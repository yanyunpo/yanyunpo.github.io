---
layout: pages
title: 测试样例文章
date: 2020-08-07 13:15:41
tags:
- hexo
- butterfly
- _config.yml
top_img: /pic/22.jpg
cover: /pic/22.jpg
---
本文内容仅为测试所用，相关知识点请不要进行参考。
主要记录butterfly.yml和_config.yml的修改内容
butterfly.yml是butterfly主题的配置文件，原名为_config.yml，为了后面的主题升级导致的覆写原已写好的配置文件，
所以另外拷贝到source/_data目录下并重名为butterfly.yml。当升级时就不会覆盖原配置文件，有更新的地方，在butterfly.yml中修改即可。
###### 菜单
```yaml
menu:
  首页: / || fa fa-home
  吐槽池: /messageboard/ || fa fa-paper-plane
  找文章 || fa-fw fa fa-book:
    - 标签 || /tags/ || fa fa-tags
    - 分类 || /categories/ || fa fa-folder-open
    - 时间轴 || /archives/ || fa fa-archive
  链接 || fa fa-link:
    - 友情链接 || /link/ || fa fa-users
    - Lete乐特导航网 || https://nav.lete114.top || fa fa-star
  菜单 || fa fa-list:
    - 关于 || /about/ || fa fa-heart
    - Yilia主题 || https://yilia.lete114.top/ || fa fa-archive
    - Lete乐特个人主页 || https://home.lete114.top/ || fa fa-user
```

**暂时先不添加的功能**
文章置顶：
要為文章置頂，你需要安裝插件 (hexo-generator-index-pin-top 或者 hexo-generator-indexed)
如果使用 hexo-generator-index-pin-top, 需要先卸載掉 hexo-generator-index，
然後在文章的 front-matter 區域裏添加 top: true 屬性來把這篇文章置頂
如果使用 hexo-generator-indexed, 需要先卸載掉 hexo-generator-index，
然後在文章的 front-matter 區域裏添加 sticky: 1 屬性來把這篇文章置頂。數值越大，置頂的優先級越大

hexo-generator-indexed
```bash
npm uninstall hexo-generator-index
npm install hexo-generator-indexed
```
```md
top: true
```

hexo-generator-index-pin-top
```bash
npm uninstall hexo-generator-index
npm install hexo-generator-index-pin-top
```
```md
sticky: 1
```
{% note default %}
default 提示块标签
{% endnote %}

{% note primary no-icon %}
primary 提示块标签
{% endnote %}

{% note success %}
success 提示块标签
{% endnote %}

{% note info %}
info 提示块标签
{% endnote %}

{% note warning %}
warning 提示块标签
{% endnote %}

{% note danger %}
danger 提示块标签
{% endnote %}

<div class="gallery-group-main">
{% galleryGroup '壁纸' '收藏的一些壁纸' '/Gallery/wallpaper' https://i.loli.net/2019/11/10/T7Mu8Aod3egmC4Q.png %}
{% galleryGroup '漫威' '关于漫威的图片' '/Gallery/marvel' https://i.loli.net/2019/12/25/8t97aVlp4hgyBGu.jpg %}
{% galleryGroup 'OH MY GIRL' '关于OH MY GIRL的图片' '/Gallery/ohmygirl' https://i.loli.net/2019/12/25/hOqbQ3BIwa6KWpo.jpg %}
</div>

{% gallery %}
![](https://i.loli.net/2019/12/25/Fze9jchtnyJXMHN.jpg)
![](https://i.loli.net/2019/12/25/ryLVePaqkYm4TEK.jpg)
![](https://i.loli.net/2019/12/25/gEy5Zc1Ai6VuO4N.jpg)
![](https://i.loli.net/2019/12/25/d6QHbytlSYO4FBG.jpg)
![](https://i.loli.net/2019/12/25/6nepIJ1xTgufatZ.jpg)
![](https://i.loli.net/2019/12/25/E7Jvr4eIPwUNmzq.jpg)
![](https://i.loli.net/2019/12/25/mh19anwBSWIkGlH.jpg)
![](https://i.loli.net/2019/12/25/2tu9JC8ewpBFagv.jpg)
{% endgallery %}

{% mermaid %}
pie
    title Key elements in Product X
    "Calcium" : 42.96
    "Potassium" : 50.05
    "Magnesium" : 10.01
    "Iron" :  5
{% endmermaid %}
