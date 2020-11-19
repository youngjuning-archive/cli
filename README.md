# @youngjuning/cli

一个让最佳实践触手可及的粗糙的cli工具

## 安装

```sh
$ npm i @youngjuning/cli -g
```

## 功能

### 一键配置 conventional commit

> 关于 conventional commit 的教程请参考：[一文搞定规范化Git Commit](https://juejin.im/post/6877462747631026190)

```sh
$ youngjuning init-commitlint
```

### 让 React 项目接入 Jest 最佳实践

```sh
$ youngjuning init-react-jest
```

### 让 React Native 项目接入 Jest 最佳实践

> 最佳实践介绍请移步[使用Jest和Enzyme进行React Native单元测试](https://youngjuning.js.org/2020/10/使用Jest和Enzyme进行React%20Native单元测试/)

```sh
$ youngjuning init-rn-jest
```

### 让项目接入 Lerna 最佳实践

> 最佳实践介绍请移步 [基于 lerna 的多包 JavaScript 项目搭建维护笔记](https://youngjuning.js.org/2020/11/%E5%9F%BA%E4%BA%8E-lerna-%E7%9A%84%E5%A4%9A%E5%8C%85-JavaScript-%E9%A1%B9%E7%9B%AE%E6%90%AD%E5%BB%BA%E7%BB%B4%E6%8A%A4%E7%AC%94%E8%AE%B0/)

```sh
$ youngjuning init-lerna <name>
```

## TODOS

- [ ] init-eslint
- [ ] init-rollup
- [x] init-lerna
- [ ] init-rn-redux
- [ ] init-rn-mobx
- [ ] react-native 拆包命令
