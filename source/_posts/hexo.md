---
title: hexo常见问题集合
abbrlink: 62124
date: 2020-08-09 16:41:30
tags:
 - hexo
 - error
layout: pages
updated: 2020-08-09 16:41:30
categories: hexo
keywords:
top_img: /pic/23.jpg
cover: /pic/23.jpg
---
##参考
[hexo故障说明文档]: https://hexo.io/docs/troubleshooting.html
[hexo中文官方文档]: https://hexo.io/zh-cn/docs/
##空格导致的YAML解析错误
``
FATAL {
  err: YAMLException: can not read a block mapping entry; a multiline key may not be an implicit key at line 10, column 6:
reason: 'can not read a block mapping entry; a multiline key may not be an implicit key'
``
eg:
/scaffolds/post.md文件中有以下2个元素，但是tags:后没有加上空格就出现了以上错误。
``
tags:
updated:
``
**解决**：在配置文件中(.yml和/scaffolds/post.md、page.md)等出现了缺少空格等问题。检查相关文件是否出现了空格。




