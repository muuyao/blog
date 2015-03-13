##Dom-文档对象模型##

###节点层次###
1. 文档节点是每个文档的根节点，文档元素是文档的最外层元素，在html页面中，文档元素始终都是<html>元素。
2. Node类型
    - 每个节点都有一个nodeType属性，用于表明节点的类型。节点类型由Node类型中定义的下列12个数值常量来表示：
        - Node.ELEMENT-NODE(1) :元素节点;       
        - Node.ATTRIBUTE-NODE(2):属性节点;
        - Node.TEXT-NODE(3):文本节点
        - Node.CDATA-SECTION-NODE(4):
        - Node.ENTITY-REFERENCE-NODE(5)
        - Node.ENTITY-NODE(6)
        - Node.PROCESSING-INSTRUCTION-NODE(7)
        - Node.COMMENT-NODE(8):注释节点
        - Node.DOCUMENT-NODE(9):文档节点
        - Node.DOCUMENT-TYPE-NODE(10):文档类型节点
        - Node.DOCUMENT-FRAGMENT-NODE(11):
        - Node.NOTATION-NODE(12):
    - nodeName 和 nodeValue属性
    - NodeList对象
        - NodeList是一种类数组对象(非Array实例)，用于保存一组有序的节点，可以通过位置来访问这些节点。NodeList对象的独特之处在于，它实际上是基于DOM结构动态执行查询的结果，因此DOM结构的变化能够自动反映在NodeList对象中。**NodeList是有生命、有呼吸的对象**。
        - NodeList节点访问：可以通过方括号，也可以通过item()方法。
        - length属性表示的是访问NodeList那一刻包含的节点数量。
        - 通过Array.prototype.slice()方法可以将NodeList对象转换为数组。
    - 节点关系
        - childNodes属性，保存一个NodeList对象。
        - parentNode属性、firstChild属性、lastChild属性、nextSibling属性、previousSibling属性
        - ownerDocument属性，指向表示整个文档的文档节点。
        - hasChildNodes()方法。
    - 操作节点：以下方法都是针对某个节点的子节点，需要在父节点上调用方法。
        - appendChild()用于向childNodes列表末尾添加一个节点，返回新增的节点。**如果传入到appendChild()中节点已经是文档的一部分了，那结果就是将该节点从原来位置转移到新位置**。
        - insertBefore()方法接收两个参数：要插入的节点和作为参照的节点。插入节点后，被插入节点会变成参照节点的前一个同胞节点，同时被方法返回。如果参照节点为null，则相当于appendChild();
        - replaceChild()方法接收两个参数：要插入的节点和要替换的节点。要替换的节点将由这个方法返回并从文档树中移除，同时由要插入的节点占据其位置。
        - removeChild()方法接收一个参数，即要移除的节点，被移除的节点将成为方法的返回值。
    - 其他方法
        - cloneNode()用于创建调用这个方法的节点的一个完全相同的副本。该方法接收一个布尔值参数，表示是否执行深复制。深复制即复制节点及其整个子节点树。浅复制只复制节点本身。**方法不会复制添加到DOM节点中的JavaScript属性，在IE下存在bug-复制事件处理程序**
        - normalize()处理文档树中的文本节点-删除空文本节点和合并相邻文本节点。
3. Document类型：JavaScript通过Document类型表示文档，在浏览器中，document对象是HTMLDocument(继承自Document类型)的实例。
    - 文档子节点
        - document.documentElement 指向<html>元素。
        - document.body 指向<body>元素。
    - 文档信息
        - title 返回<title>元素的文本。
        - URL 返回页面完整的URL
        - domain 返回页面域名
        - referrer 返回来源页面的URL
    - 查找元素
        - getElementById()接收一个参数：要取得元素的id，区分大小写。
            - 如果页面中多个元素的ID值相同，只返回文档中第一次出现的元素。
            - IE7-不区分大小写
            - IE7-中，name属性与给定ID匹配的表单元素会被返回。
        - getElementByTagName()接收一个参数，即要取得元素的标签名，返回一个HTMLCollection对象。
            - 要取得文档中所有元素，可以传入参数" * ".
            - HTMLCollection对象与NodeList对象相似，可以方括号和item()方法来访问对象中的项。
            - HTMLCollection对象还有一个方法namedItem()，使用这个方法可以通过元素的name特性取得集合中的项。对命名的项，也可以通过方括号来访问，传入name字符串。
        - getElementsByName()返回带有给定name特性的元素，返回一个HTMLCollection对象。
    - 特殊集合
        - document.anchors,包含文档中所有带name特性的a元素。
        - document.links,包含文档中所有带href特性的a元素。
        - document.forms,包含文档中所有的form元素。
        - document.images,包含文档中所有的img元素。              
4. Element类型
    - HTML元素标准特性
        - id, title, className, lang, dir
    - 操作特性
        - getAttribute(),可以取得自定义特性的值
        - setAttribute()，接收两个参数：要设置的特性名和值。*IE7-中设置class和style特性没效果*
        - removeAttribute()，彻底删除元素的特性。
    - attributes属性
    - 创建元素
        - document.createElement(),接收一个参数：要创建元素的标签名。
5. Text类型
    - 访问节点
        - 可以通过nodeValue或者data属性访问Text节点中包含的文本。
    - 创建节点
        - 可以通过document.createTextNode()来创建文本节点。
        
###选择符API###
1. Selectors API是由W3C发起制定的一个标准，致力于让浏览器原生支持CSS查询
2. Selectors API Level 1的核心是两个方法：querySelector()和querySelectorAll()，在兼容的浏览器中，可以通过Document和Element类型的实例来调用它们。目前支持Selectors API Level 1的浏览器有IE8+。
3. querySelecor()接收一个css选择符，返回与该模式匹配的第一个元素。
4. querySelectorAll() 
    - 接收一个CSS选择符，返回所有匹配的元素
    - 返回一个静态的NodeList对象，类似于一组元素的快照，而非不断对文档进行搜索的动态查询。这样可以避免使用NodeList对象通常会引起的大多数性能问题。 
5. matchesSelector()
    - Selectors API Level 2为Element类型新增了方法
    - 接收一个CSS选择符，若调用元素与该选择符匹配，则返回true；否则，返回false。

###元素遍历###
1. 对于元素间的空格，在IE8-不会返回文本节点，而其他所有浏览器都返回文本节点。
2. Element Traversal规范新定义了一组属性
    - childElementCount 返回子元素的个数
    - firstElementChild 返回第一个子元素
    - lastElementChild 返回最后一个子元素
    - previousElementSibling 指向前一个同辈元素
    - nextElementSibling 指向后一个同辈元素
3. 支持Element Traversal规范的浏览器有IE9+、Firefox3.5+、Safari4+、Chrome、Opera10+。

###HTML5###
1. 与类相关的补充
    - getElementsByClassName()方法
        - 接收一个参数，即一个包含一个或多个类名的字符串，返回带有指定类的所有元素的NodeList。
        - 传入多个类名时，类名的先后顺序不重要。
        - 支持浏览器IE9+、Firefox3+、Safari3.1+、Chrome、Opera9.5+。
    - classList属性(仅chrome和firefox支持）
2. 焦点管理
    - document.activeElement始终会引用DOM中当前获得焦点的元素。
    - document.hasFocus()确定文档是否获得了焦点。
3. HTMLDocument的变化
    - readyState 属性
        - loading, 正在加载文档
        - complete, 已经加载完文档
    - 兼容模式：compatMode属性
        - CSS1Compat, 标准模式
        - BackCompat, 混杂模式
    - head属性
4. 字符集属性
    - charset属性
    - defaultCharset属性
5. 自定义数据属性
    - HTML5规定可以为元素添加非标准的属性，但要添加前缀data-,目的是为元素提供与渲染无关的信息，或者提供语义信息。
    - 添加自定义属性后，可以通过元素的dataset属性来访问自定义的属性的值。
    - dataset属性的值是DOMStringMap的一个实例，也就是一个名值对的映射，但属性名没有data-前缀。
6. 插入标记
    - innerHTML属性
        - 在读模式下，innerHTML属性返回与调用元素的所有子节点对应的HTML标记。在写模式下，innerHTML会根据指定的值创建新的DOM树，然后用这个DOM树完全替换调用元素的所有子节点。
    - outerHTML属性
        - 在读模式下，outerHTML返回调用它的元素及所有子节点的HTML标签。在写模式下，outerHTML会根据指定的html字符串创建新的DOM树，然后用这个DOM树完全替换调用元素。
    - insertAdjacentHTML()
        - 接收两个参数：插入位置和要插入的HTML文本，第一个参数是下列值之一
            - "beforebegin",在当前元素之前插入一个紧邻的同辈元素。
            - "afterbegin",在当前元素之下插入一个新的子元素或在第一个元素之前插入新的子元素
            - "beforeend", 在当前元素之下插入一个新的子元素或在最后一个子元素之后插入新的子元素
            - "afterend", 在当前元素之后插入一个紧邻的同辈元素
7. scrollIntoView()方法
    - 可以在所有HTML元素上调用，通过滚动浏览器窗口或某个容器元素，调用元素就出现在视口中。

###专有扩展###
1. 文档模式
    - IE8引入了一个新的概念"文档模式"(document mode),页面的文档模式决定了可以使用什么功能。
    - 要强制浏览器以某种模式渲染页面，可以使用HTTP头部信息X-UA-Compatible,或通过等价的meta标签来设置：`<meta http-equiv="X-UA-Compatible" content="IE=edge"> `
2. chiledren属性
    - children属性时HTMLCollection的实例，只包含元素中同样还是元素的子节点，除此之外，children属性与chileNodes没什么区别。
    - IE8-中children属性会包含注释节点。
3. contains()方法
    - 接收一个参数，即要检测的后代节点，如果被检测的节点是后代节点，该方法返回true。
4. 插入文本
    - innerText属性
        - 通过innerText属性可以操作元素中包含的所有文本内容，包括子文档树中的文本。
        - 在通过innerText读取值时，它会按照由浅入深的顺序，将子文档树中的所有文本拼接起来。在通过inneerText写入值时，结果会删除元素的所有子节点，插入包含相应文本值得文本节点。
        - 支持innerText属性浏览器包括IE4+、Safari3+、Opera8+和Chrome。Firefox不支持innerText,但支持作用类似的textContent属性。其他支持textContent的浏览器有IE9+、Safari3+、Opera10+、Chrome。

###样式###
1. 访问元素的样式
    - 任何支持style特性的HTML元素在Javascript中都有一个对应的style属性。这个style对象时CSSStyleDeclaration的实例，**包含着通过HTML的style特性指定的所有样式信息，但不包含与外部样式表或嵌入样式表经层叠而来的样式**。
    - 对于使用短划线的CSS属性必须将其转换成驼峰大小写形式，才能通过JavaScript来访问。
    - CSS属性float不能直接转换，"DOM2级样式"规范规定样式对象上相应的属性名是cssFloat;Firefox、Safari、Opera和Chrome都支持这个属性，而IE支持的则是styleFloat。
    - "DOM2级样式"规范为style对象定义了一些属性和方法。
        - cssText：访问到style特性中的代码。**在写入模式下，赋给cssText的值会重写整个style特性的值**（IE6+都支持）。
        - length：应用给元素的CSS属性的数量。
        - item(index)：返回给定位置的CSS属性的名称。
        - getPropertyValue(propertyName)：返回给定属性的字符创值
        - getPropertyPriority(propertyName)：如果给定属性使用了！important设置，则返回"important"；否则，返回空字符串。
        - getPropertyCSSValue(propertyName)：返回包含给定属性值得CSSValue对象，包含两个属性cssText和cssValueType。其中cssText的值和getPropertyValue(propertyName)返回的值相同。而cssValueType属性是一个数值常量，0表示继承的值，1表示基本的值，2表示值列表，3表示自定义的值。
        - removeProperty(propertyName)：从样式表中删除给定属性。
        - setProperty(propertyName,value,priority)：将给定属性设置为相应的值，并加上优先权标志("important"或空字符串)
2. 元素大小
    - 偏移量(offset dimension)：元素的可见大小由其高度、宽度决定，**包括所有内边距、滚动条和边框大小（不包括外边距）**
        - offsetHeight：元素在垂直方向上占用的空间大小，以像素计。
        - offsetWidth：元素在水平方向上占用的空间大小，以像素计。
        - offsetLeft：元素的左外边框至包含元素的左内边框之间的像素距离。
        - offsetTop：元素的上外边框至包含元素的上内边框之间的像素距离。
        - 其中，offsetLeft和offsetTop属性与包含元素有关，包含元素的引用保存在offsetParent属性中。offsetParent属性不一定与parentNode的值相等。
    - 客户区大小(client dimension)：指的是元素内容及其内边距所占据的空间大小。
        - clientWidth：元素内容区宽度加上左右内边距宽度。
        - clientHeight：元素内容区高度加上上下内边距高度。
        - 客户区大小就是元素的内部的空间大小，因此滚动条占用的空间不计算在内。
    - 滚动大小：指的是包含滚动内容的元素大小。
        - scrollHeight：在没有滚动条的情况下，元素内容的总高度。
        - scrollWidth：在没有滚动条的情况下，元素内容的总宽度。
        - scrollLeft：被隐藏在内容区域左侧的像素数。通过设置这个属性可以改变元素的滚动位置。
        - scrollTop：被隐藏在内容区域上方的像素数。通过设置这个属性可以改变元素的滚动位置。
        - 通过scrollLeft和scrollTop属性可以确定元素当前的滚动状态，也可以设置元素的滚动位置。在元素尚未被滚动时，这两个属性的值都等于0。这两个属性都是可以设置的，将元素的scrollTop和scrollLeft设置为0，就可以重置元素的滚动位置。
        - 
        - 

    