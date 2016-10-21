/**
 * 事件
 * */
var eventUtil = {
    /**
     * 添加事件
     * @param element 事件对象
     * @param type 事件类型
     * @param handler 事件方法
     * @param data 当一个事件被触发时要传递event.data给事件处理函数
     * 格式 {element:"",type:"",handler:function,data:{}}
     * */
    addHandler: function (obj) {
        var element = obj.element;
        var type = obj.type;
        var handler = obj.handler;
        var data = obj.data;
        $(element).on(type, data, handler);
    },

    /**
     * 获取事件
     * */
    getEvent: function (event) {
        return event ? event : window.event;
    },

    /**
     * 获取目标源
     * */
    getTarget: function (event) {
        return event.target || event.srcElement;
    },

    /**
     *  移除事件
     * @param element 事件对象
     * @param type 事件类型
     * @param handler 事件方法
     * 格式 {element:"",type:"",handler:function}
     * */
    removeHandler: function (obj) {
        var element = obj.element;
        var type = obj.type;
        var handler = obj.handler;
        $(element).off(type, handler);
    },

    /**
     * 阻止默认事件
     * */
    preventDefault: function (event) {
        if (event.preventDefault) {
            event.preventDefault();
        } else {
            event.returnValue = false;
        }
    },

    /**
     * 阻止事件冒泡
     * */
    stopPropagation: function (event) {
        if (event.stopPropagation) {
            event.stopPropagation();
        } else {
            event.cancelBubble = true;
        }
    }
};
