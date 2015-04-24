## CSS 转换(Transform) ##

CSS转换是对元素进行移动、缩放、转动、拉长或拉伸，使元素改变形状、尺寸和位置的一种方法。

- transform-origin：x y 。提供两个参数值，第一个是横坐标，第二个竖坐标。设置对象基于哪个原点进行转换，默认基点为中心位置，即center center 或者 50% 50%。

- transform： none | <transform-function> [ <transform-function> ]*。转换分为2D转换和3D转换, 转换主要包括旋转rotate、扭曲skew、缩放scale和移动translate以及矩阵变形matrix几种。

## 2D转换 ##

### 平移translate ###

translate(<number>, <number>) 平移正方向为向右，向下。

- translate(x,y)水平和垂直方向同时移动。若y值未提供，默认为0。
- translateX(x) 水平方向移动。
- translateY(y) 垂直方向移动。

### 旋转rotate ###

rotate(<angle>) 元素顺时针旋转


### 缩放scale ###

scale(<number>) 缩放基数为1。当为负值的时候，先旋转180度，在缩放。

- scale(x,y)使元素水平方向和垂直方向同时缩放（也就是X轴和Y轴同时缩放）,如果y值未提供，取x的值；
- scaleX(x)元素仅水平方向缩放（X轴缩放）；
- scaleY(y)元素仅垂直方向缩放（Y轴缩放）；


### 扭曲skew ###

skew(<angle>,<angle>)

- skew(x,y)使元素在水平和垂直方向同时扭曲（X轴和Y轴同时按一定的角度值进行扭曲变形），如果第二个参数未提供，则默认值为0。
- skewX(x)仅使元素在水平方向扭曲变形（X轴扭曲变形）；
- skewY(y)仅使元素在垂直方向扭曲变形（Y轴扭曲变形）；

### 矩阵变形matrix ###

