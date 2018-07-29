# 原生js实现的tab组件

## 组件功能
    使用了原生js实现的简单的tab组件。
## 组件实现方式
    1. 使用js原型对象实现组件，可以创建多个组件，相互间互不影响。
    2. 组件实现过程面对对象，代码整齐，可读性强。
    3. 组件提供了唯一的接口就是new Tab对象。
## 如何使用
1. 首先，DOM结构如下，以及预先定义好` active `类
```html
<style>
    .tab-container .active {
        display: block;
        background-color: #fff;
    }
</style>
……
 <div class="tab-container">
        <ul class="ct clearfix">
            <li class="active">1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
        </ul>
        <div class="box">
            <div class="panel active">box1</div>
            <div class="panel">box2</div>
            <div class="panel">box3</div>
            <div class="panel">box4</div>
        </div>
    </div>
```
2. 在HTML文档底部引入组件,并初始化对应的tab,大功告成
```html
<script src="./tab.js"></script>
 <script>
    var tab1 = new Tab(document.querySelectorAll(".tab-container")[0]);
    var tab2 = new Tab(document.querySelectorAll(".tab-container")[1]);
</script>
```