##事件##

###事件流###
事件流描述的是从页面中接收事件的顺序。

1. 事件冒泡
    - 事件开始时由最具体的元素接收，然后逐级向上传播到较为不具体的节点（文档).
    - 所有现代浏览器都支持事件冒泡 
2. 事件捕获
    - 事件开始时由不太具体的节点接收，然后逐级向下传播到较为具体的节点。
    - IE9+都支持事件捕获
3. DOM事件流
    - "DOM2级事件"规定事件流包括三个阶段：事件捕获阶段、处于目标阶段和事件冒泡阶段。首先发生的是事件捕获，为截获事件提供机会。然后是实际的目标接收到事件。最后一个阶段是冒泡阶段，可以在这个阶段对事件做出响应。

###事件处理程序###
1. 事件处理程序方式
    - HTML事件处理程序
    - DOM0级事件处理程序
    - DOM2级事件处理程序
        - addEventListener()和removeEventListener(),都接受三个参数：要传入的事件类型，事件处理程序函数，一个布尔值（若为true表示在捕获阶段调用事件处理程序；否则，在事件冒泡阶段捕获）
    - IE事件处理程序
        - attachEvent()和detachEvent(),接收两个参数：事件类型(**要加on**)和事件处理程序函数.
        - IE8-只支持事件冒泡，所以通过此添加的事件都会被添加到冒泡阶段。
    - 区别差异
        - IE事件处理程序会在全局作用域中进行，因此this==window；而其他事件处理程序是在事件指定所属元素的作用域内进行。
        - IE事件处理程序为同一元素的同一事件添加多个事件处理程序时，这些事件处理程序不是已添加它们的顺序执行，而是以相反的顺序被触发。
        
###事件对象###
在触发DOM上的某个事件时，会产生一个事件对象event，这个对象中包含着所有与事件有关的信息。

1. DOM中的事件对象
    - 兼容DOM的浏览器会将一个event对象传入到事件处理程序中，无论指定事件处理程序时使用什么方法(DOM0级或DOM2级)，都会传入event对象。
    - event对象的属性和方法（全为只读）
        - bubbles属性， 表明事件是否冒泡。
        - cancelable属性， 表明是否可以取消事件的默认行为。
        - defaultPrevented属性， 为true表明已经调用了preventDefault()方法。
        - detail属性， 与事件相关的细节信息。
        - eventPhase属性， 调用事件处理程序的阶段：1表示捕获阶段，2表示处于目标，3表示冒泡阶段。
        - currentTarget属性， 事件处理程序当前正在处理事件的那个元素。
        - target属性， 事件的目标。
        - type属性， 事件类型。
        - preventDefault()方法， 取消事件的默认行为。
        - stopPropagation()方法， 取消事件的进一步捕获或冒泡
    - 在事件处理程序内部，this始终等于currentTarget的值，而target则只包含事件的实际目标。
    - event对象只存在事件处理程序执行期间。
2. IE中的事件对象
    - 与访问DOM中的event对象不同，要访问IE中的event对象有几种方式，取决于指定事件处理程序的方法。在使用DOM0级方法添加事件处理程序时，event对象作为window对像的一个属性存在；如果事件处理程序是通过attachEvent()来添加，那么就会有一个event对象作为参数被传入事件处理程序中。
    - IE中event对象的属性和方法
        - cancelBubble属性(可读写)， 默认值是false，将其设置为true就可以取消事件冒泡（与DOM中的stopPropagation()作用相同)
        - returnValue属性(可读写)， 默认值是true，将其设置为false就可以取消事件的默认行为(与DOM中的preventDefault()作用相同）
        - srcElement属性(只读)， 事件的目标（与DOM中target相同）
        - type属性（只读）， 事件类型。

###事件类型###
1. UI(User Interface,用户界面)事件,指的是那些不一定与用户操作有关的事件。
    - load：当页面完全加载后在window上面触发，当图像加载完成后再img元素上触发，当嵌入的内容加载完毕后在object上触发，当所有框架都加载完毕时在框架集上触发。
    - unload：当页面完全卸载后在window上面触发，当所有框架都卸载后在框架集上面触发，或者当嵌入的内容卸载后在object上触发。
    - abort：在用户停止下载，如果嵌入的内容没有加载完，则在object元素上触发。
    - error：当发生JavaScript错误时在window上面触发，当无法加载图像时在img元素上触发，当无法加载嵌入内容时在object上面触发，或者当有一个或多个框架无法加载时在框架集上触发。
    - select：当用户选择文本框中的一个或多个字符时触发。
    - resize：当窗口或框架大小变化时在window上触发。**IE、Safari、Chrome、Opera会在浏览器窗口变化了1像素时就触发resize事件，而Firefox只会在用户停止调整窗口大小时才触发**
    - scroll：在带滚动条的元素上触发。
2. 焦点事件
    - blur：在元素失去焦点时触发，**这个事件不会冒泡**。
    - focus：在元素获得焦点时触发，**这个事件不会冒泡**。
    - focusin：在元素获得焦点时触发，与focus等价，但冒泡。**支持浏览器IE5.5+、Safari5.1+、Chrome、Opera11.5+（之前版本支持DomFoucsIn），firefox不支持**
    - focusout：在元素失去焦点时触发，与blur等价，但冒泡。**支持浏览器IE5.5+、Safari5.1+、Chrome、Opera11.5+（之前版本支持DomFoucsOut），firefox不支持**
    - **即使focus和blur不冒泡，但可以在捕获阶段侦听到它们**
3. 鼠标与滚轮事件
    - 事件类型
        - click：鼠标左键或回车键触发
        - dbclick：双击左键触发
        - mousedown：在用户按下了任何鼠标按钮时触发。
        - mousemove：当鼠标指针在元素内部移动时重复触发。。
        - mouseout：在鼠标指针位于一个元素上方，然后用户将其移入另一个元素时触发。**又移入的另一个元素可能位于前一个元素外部，也可能是这个元素的子元素**。
        - mouseover：在鼠标指针位于一个元素外部，然后用户将其首次移入另一个元素边界之内时触发。
        - mouseup：释放鼠标按键时触发。
    - 客户区坐标位置
        - 保存在**事件对象event**中的clientX和clientY属性表示事件发生时**鼠标指针**在视口中的水平和垂直坐标。
    - 页面坐标位置
        - 保存在**事件对象event**中的pageX和pageY属性表示事件发生时**鼠标指针**在页面中的水平和垂直坐标
    - 屏幕坐标位置
        - 保存在**事件对象event**中的screenX和screenY属性表示事件发生时**鼠标指针**在屏幕中的水平和垂直坐标
    - 修改键
        - 事件对象event四个属性shiftKey、ctrlKey、altKey、metaKey(在win中是win键，在mac中是cmd键），如果相应的按键被按下，则值为true，否则为false；
        - IE8-不支持metaKey键
    - 相关元素
        - mouseover和mouseout事件都涉及把鼠标指针从一个元素的边界之内移动到另一个元素的边界之内。对mouseover而言，事件的主目标是获得光标的元素，而相关元素就是那个失去光标的元素。类似地，对mouseout事件而言，事件的主目标是失去光标的元素，相关元素是获得光标的元素。
        - DOM通过event对象的relatedTarget属性提供相关元素的信息。IE8-中不支持relatedTarget属性，在mouseover事件触发时，IE的fromElement属性中保存了相关元素；在mouseout事件触发时，IE的toElement属性中保存着相关对象。
    - 鼠标滚轮事件
        - mousewheel事件：在任何事件上触发，最终会冒泡到document(IE8)或window(IE9、Oper  a、Chrome、Safari).对应的event对象包含一个特殊的wheelDelta属性。当用户向前滚动滚轮时，wheelDelta是120的倍数；当用户向后滚动滚轮时，wheelDelta是-120的倍数。
        - DOMMouseScroll事件(Firefox 支持），有关滚轮信息保存在detail中，当用户向前滚动滚轮时，detail的值是-3的倍数；当用户向后滚动
4. 键盘与文本事件
    - 事件类型
        - keydown:当用户按下键盘上的任意键时触发，而且如果按住不放的话，会重复触发此事件。
        - keypress:当用户按下键盘上的的字符键时触发，而且如果按住不放的话，会重复触发此事件。按下Esc键也会触发。
        - keyup:当用户释放键盘上的按键时触发。
        - keydown和keypress都是在文本框发生变化之前被触发的，而keyup则是在文本框已经发生了变化之后被触发的。
    - 键码
        - 在**发生keydown和keyup事件**时，event对象的keycode属性会包含一个代码，与键盘上的一个特定键对应。对数字字母字符键，keyCode属性的值与ASCII码中对应小写字母或数字的编码相同。
    - 字符编码
        - 在**发生keypress事件，charCode属性存储按下的那个键所代表的字符的ASCII码。
5. HTML5 事件
    - contextmenu事件：显示上下文菜单。
    - beforeunload事件：window对象上的事件，会在浏览器卸载页面之前触发。为了显示弹出对话框，必须将event.returnValue的值设置为要显示给用户的字符串（对IE和Firefox而言），同时作为函数的值返回（对Safari和Chrome而言）。
6. 触摸事件
    - 事件类型
        - touchstart：当手指触摸屏幕时触发，即使已经有一个手指放在屏幕上了也会触发。
        - touchmove：当手指在屏幕上滑动时连续的触发。在这个事件发生期间，调用preventDefault()可以阻止滚动。
        - touchend：当手指从屏幕上移开时触发。
    - 事件属性
        - touches：表示当前跟踪的触摸操作的Touch对象的数组。
        - targetTouches：特定于时间目标的Touch对象的数组。
        - changeTouches：表示自上次触摸以来发生了什么改变的Touch对象的数组。
    - 每个Touch对象包含以下属性
        - clientX：触摸目标在视口中的X坐标
        - clientY：触摸目标在视口中Y坐标
        - identifier：标识触摸的唯一ID
        - pageX：触摸目标在页面中的X坐标
        - pageY：触摸目标在页面中的Y坐标
        - screenX：触摸目标在屏幕中的X坐标
        - screenY：触摸目标在屏幕中的Y坐标
        - target：触摸的DOM节点目标
7. 手势事件
    - 事件类型
        - gesturestart：当一个手指已经按在屏幕上而另一个手指又在触摸屏幕时触发。
        - gesturechange：当触摸屏幕的任何一个手指的位置发生变化时触发。
        - gestureend：当任何一个手指从屏幕上面移开时触发。
    - event事件属性
        - rotation：表示手指变化引起的旋转角度，负值表示逆时针旋转，正值表示顺时针旋转(该值从0开始)。
        - scale：表示两个手指间的距离变化情况，该值从1开始，随距离拉大而增长，随距离缩短而减小。
8. 内存和性能
    - 事件委托
        - 对“事件处理程序过多”问题的解决方案就是事件委托，事件委托利用事件冒泡，只指定一个事件处理程序，就可以管理某一类型的所有事件。
