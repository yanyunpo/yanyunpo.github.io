---
title: hexo 搭建博客常用命令 003
top_img: /pic/3.jpg
cover: /pic/3.jpg
abbrlink: 5211
date: 2020-09-11 17:04:16
updated: 
tags:
---
#常用命令
经常更新
```
git config --global user.name "yourgithubname"
git config --global user.email "yourgithubemail"
ssh-keygen -t rsa -C "youremail"
#生成后填到github和coding上（有coding平台的话）
#验证是否成功
ssh -T git@github.com
ssh -T git@git.coding.net #(有coding平台的话)
sudo apt-get install nodejs
sudo apt-get install npm
sudo npm install hexo-cli -g
git clone git@………………
cd xxx.github.io
npm install
npm install hexo-deployer-git --save
hexo g
hexo d
hexo d -g #g 和d连用
hexo new newpage
git add .
git commit –m "add branch"
git push
#已经有编辑的只需pull即可
git pull
```