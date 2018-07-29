function Tab(node) {
    this.node = node;
    this.tabs = "";
    this.panels = "";
    this.init();
    this.bind();
}
Tab.prototype = {
    constructor: Tab,
    init: function () {
        this.tabs = this.node.querySelectorAll("li");
        this.panels = this.node.querySelectorAll(".panel");
    },
    bind: function () {
        var _this = this;
        _this.tabs.forEach(function(tab){
            tab.onclick = function (e) {
                //获得当前元素的索引值
                var index  = [].indexOf.call(_this.tabs,e.target);
                //点击元素增加active类
                _this.tabs.forEach(function(li){
                    li.classList.remove("active");
                });
                e.target.classList.add("active");
                //对应的panel增加active类
                _this.panels.forEach(function(panel){
                    panel.classList.remove("active");
                });
                _this.panels[index].classList.add("active");
            }
        });
    }
}