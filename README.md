
<p align="center">
  <h1 align="center">CSI.JS 重建犯罪现场</h1>
  <p align="left">
 CSI.JS是一个前端日志系统，它将错误信息记录于本地IndexedDB/localStorage中。<strong>无任何依赖</strong>、无入侵性。使用<strong>非常简单</strong>，很容易引入你的系统中，而且不会造成任何影响。
它可以帮你快速重建犯罪现场。
    <br />
    <br />
  </p>
</p>


## 一、快速开始

### 1、npm安装
```shell script
npm i cyanery-error-monitor --save
or
yarn add cyanery-error-monitor
```

### 2、使用
```javascript
import CSI from 'cyanery-error-monitor';

// 示例：自定义上报
const csi = new CSI({
    feID: '', // 项目id，日志区分项目使用
    key: 6, // 日志查看快捷键
    showClear: true, // 展示清空数据按钮（true/false）
    report: (lines) => {
        // todo 自定义你的上报逻辑
        console.log('error lins', lines);
    },
    onUpdate: (line, lines) => {
      // 新增错误信息时的回调函数
      // line(当前新增的错误信息)
      // lines(当前所有错误列表)
    },
});

// 如果你想主动上报
csi.report();
```

## 二、日志查看

<p>查看日志快捷键: Ctrl+6 / Ctrl+自定义key</p>
<p>查看日志实例方法 csi.toggleShow()</p>
