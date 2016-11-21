# 项目开发及工具使用说明

## 第一步：领取任务

在 [issues](https://github.com/candyHuang/vue-destop/issues) 中查看并领取任务

## 第二步：安装运行环境

安装 [nodejs](https://nodejs.org/) 运行环境

> 注意，安装node 6.x 以上版本

## 第三步：克隆仓库

首先你需要 [fork](https://help.github.com/articles/fork-a-repo/) 本项目，然后将fork的仓库clone到本地：

```bash
git clone git@github.com:[你的用户名]/vue-destop.git
cd vue-destop
```

## 第四步：安装依赖包


```bash
npm install --registry=https://registry.npm.taobao.org
```
> 注意，以上使用的淘宝源安装

## 第五步：构建并启动调试服务器

nodejs 提供了一个express服务器，方便本地预览项目

```bash
npm start
```
> 注意，页面会在浏览器自动打开

## 第六步：开发

修改代码并保存，浏览器会自动刷新页面，不断完善你的代码，直至完成任务所要求的内容。

## 第七步：提交

功能开发完成后，即可提交代码，并发起 pull request 合并至当前项目中，一旦代码被合并，就会触发 travis-ci 自动构建，届时可以访问 https://candyhuang.github.io/vue-destop/ 查看测试环境运行效果。