Watch-httpd , 简单的监听httpd.conf文件改动并重启的工具。
====

特性
---
1. 后台运行。
2. 日志记录输出。


使用方法
---
1. 文件复制到httpd.conf目录下，运行npm install。
2. 确认装好forever， 安装方式为： npm instll forever -g
3. 使用forever start index.js 
4. 如有错误将输出到error.log 
