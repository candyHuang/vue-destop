# 开发规范

描述项目各种规范

## 技术选型

* 构建工具: [webpack](https://webpack.github.io/)
* 模块化规范: [ECMAScript 2015](https://en.wikipedia.org/wiki/ECMAScript#6th_Edition_-_ECMAScript_2015)
* 模块化框架: [webpack](https://webpack.github.io/)
* 组件化框架: [vue.js(2.x)](http://vuejs.org/)
* 资源管理方案: 抽取公共库,以页面为单位简单打包

## 目录结构

```bash
src
  ├─ api            # 数据通讯模块
  ├─ assets         # 非模块化资源
  │  ├─ iconfonts     # 字体图标资源
  │  ├─ images        # 图片资源
  │  └─ styles        # 通用样式资源
  ├─ components     # 组件资源
  ├─ views          # 页面
  ├─ const.js       # 常量模块
  ├─ index.html     # 首页（开发）
  ├─ page.js        # 页面启动帮助模块
  └─ pages.conf.js  # 页面模块注册文件

```

目录说明:

* 可看目录后面的注释
* ``api`` 目录用于存放数据通讯模块（各种ajax）
* ``components`` 目录用于存放组件资源, 每个组件一个vue单文件（命名AxxBxx.vue）
* ``views`` 目录存放页面, 每个模块一个目录并且每个页面一个目录, 其中维护模块所需的 js, css, vue 以及 图片 等资源
* ``pages.conf.js`` 页面模块注册文件，新增的页面需要在文件中注册

 ```js
    /*
     * 比如 需要在模块A中增加一个a-1页面
     * 
     * 首先 views 目录下建立 A/a-1.js
     *
     */
    
    module.exports = {
      pages: [
        {
          title: '例子',
          block: [
            {
              entry: 'home/index',
              title: '首页'
            },
            {
              entry: 'form/index',
              title: "表单"
            },
          ]
        },
        // ..... 
        {
          title: 'A',
          block: [
            {
              entry: 'a/a-1',// views 目录下的路径（后缀js省略）
              title: 'a-1'
            },
          ]
        },
      ]
    }
    ```


## 规范描述 TODO

* 所有 ``md`` 后缀的文件(比如README.md), 不发布

## 模块化开发 TODO


## 模块路径

在模块化开发中, 通过js中的 ``import(path)`` 函数可以标记对资源的引用, 其参数为资源路径.

资源路径支持相对路径或绝对路径定位资源, 相对路径是相对当前文件, 绝对路径是相对项目根目录, 在本项目中, 根目录为 ``src`` 目录

模块路径可以通过如下示例来了解其规则:

|文件路径|模块路径绝对定位|
|-------|-----|
|src/foo.js|/src/foo.js|
|src/components/foo.js|/components/foo.js|
|src/assets/foo/foo.js|/assets/foo/foo.js|

总之, ``src``,``components``,``assets``可以用绝对路径标示，方便应对页面层级路径过深的情况

## 组件化开发 TODO


## 组件化拆分与CSS选择器命名 TODO

