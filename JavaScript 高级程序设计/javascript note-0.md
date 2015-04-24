## JavaScript 简介 ##

### src 与 href 区别 ###

src 是将外部文件添加到当前页面。
        
href 是将当前页面链接到新的页面。

### 文档模式 ###

文档模式有两种：混杂模式 (quirks mode) 和 标准模式 (standards mode) , 不同模式通过使用文档类型 (doctype) 来切换。

### noscript 元素 ###

用以在不支持javascript的浏览器中显示替代元素，常用方式是:

    <noscript>
        <meta http-equiv="refresh" content="0; url=/error.html"/>
    </noscript>
