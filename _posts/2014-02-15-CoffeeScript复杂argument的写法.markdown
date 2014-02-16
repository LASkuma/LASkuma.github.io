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
    }
)
{% endhighlight %}
用CoffeScript就应该写成
{% highlight coffeescript %}
X.helper
    name: 'myName'
  ,
    ->
      this.name
{% endhighlight %}
需要注意的是，每一个argument都需要缩进两个单位。而用来分割argument的逗号只需缩进一个单位。
特别应该注意的是，如果某个function的第一个argument是一个function，以前面为例，应该写成
{% highlight coffeescript %}
X.helper ->
      this.name
  ,
    name: 'myName'
{% endhighlight %}
注意箭头需要紧跟function call之后一个空格。

如果你有更好的方法或者发现了我的纰漏，欢迎email我，虽然可能并没有别人能看到。
