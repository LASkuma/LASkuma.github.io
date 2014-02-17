---
layout: post
title: CoffeeScript复杂argument的写法
date: 2014-02-15 19:43:00
---

先说有下面这一段js代码
{% highlight javascript %}
X.helper(
    { name: 'myName'},
    function() {
        return this.name;
    },
    [1, 2]
);
{% endhighlight %}
用CoffeScript就应该写成
{% highlight coffeescript %}
X.helper
  name: 'myName'
  , 
  ->
    @name
  , [1, 2]
{% endhighlight %}
需要注意的是，用来分割argument的逗号只需缩进一个单位，每个argument可以缩进一个单位也可以紧跟逗号。
特别应该注意的是，如果某个function的第一个argument仍然是一个function，以前面为例把第二个argument提前，则应该写成
{% highlight coffeescript %}
X.helper ->
    @name
  , name: 'myName'
  , [1, 2]
{% endhighlight %}
注意箭头需要紧跟function call之后一个空格。

但事实上，如上所述的方法并不保险，比如会遇到某个function需要传入2个object literal的情况。此时上面的方法就不适用了。
{% highlight coffeescript %}
X.helper
  name: 'user1'
  age: 1
  , name: 'user2'
  age:2
{% endhighlight %}
此时则会被编译成
{% highlight javascript %}
X.helper({
    name: 'user1',
    age: 1,
    name:'user2',
    age: 2
});
{% endhighlight %}

所以保险起见的办法是，将逗号缩进为比原function多一个单位，每个argument比逗号再多缩进一个单位。那么上例就可以写成
{% highlight coffeescript %}
X.helper
    name: 'user1'
    age: 1
  ,
    name: 'user2'
    age:2
{% endhighlight %}
就可以被编译成理想的js
{% hightlight javascript %}
X.helper({
  name: 'user1',
  age: 1
}, {
  name: 'user2',
  age: 2
});
{% endhighlight %}

如果你有更好的方法或者发现了我的纰漏，欢迎email我，虽然可能并没有别人能看到。
