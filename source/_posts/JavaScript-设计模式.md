---
title: JavaScript 设计模式
date: 2015-03-08 13:30:17
tags: JavaScript
---
### 单体模式（singleton）###

单体模式的思想在于保证一个特定类仅有一个实例。这意味着当你第二次使用同一个类创建对象的时候，应该得到与第一次所创建的完全相同的对象。

当使用对象字面量创建对象时，已经是一个单体了。

当使用构造函数来创建对象时，这种思想在于使用同一个构造函数以new操作符来创建多个对象时，应该仅获得指向完全相同的对象的新指针。

<!-- more -->

#### 在构造函数的静态属性中缓存该实例 ####

    function Universe(){
        //是否存在一个实例
        if(typeof Universe.instance === 'object'){
            return Universe.instance;
        }

        this.start_time = 0;
        
        //缓存
        Universe.instance = this;
    }

唯一缺点在于其instance属性是公开的。

#### 将实例包装在闭包中 ####

    var universe = (function(){
        var instance;

        return function(){
            if(instance){
                return instance;
            }
            
            instance = this;
            
            this.start_time = 0;
        }
    }());


### 工厂模式 ###

设计工厂模式的目的是为了创建对象，它通常在类或者类的静态方法中实现，具有下面目标：

1. 当创建相似对象时执行重复操作。
2. 在编译时不知道具体类型的情况下，为工厂客户提供一种创建对象的接口。

通过工厂方法创建的对象在设计上都继承了相同的父对象思想。

### 迭代器模式 ###