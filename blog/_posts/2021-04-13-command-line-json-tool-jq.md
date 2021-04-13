---
title: 命令行 JSON 处理工具 jq
date: 2021-04-13
author: ding
location: Shanghai
---


jq 是一款非常轻量的 JSON 处理工具。不需要任何依赖，只需一个 binary 文件即可。

> [jq Homepage](https://stedolan.github.io/jq)


命令示例：

```shell
echo '{ "title": "西游记" }' | jq '.title'
```


