/**
 * �¼�
 * */
var eventUtil = {
    /**
     * ����¼�
     * @param element �¼�����
     * @param type �¼�����
     * @param handler �¼�����
     * @param data ��һ���¼�������ʱҪ����event.data���¼�������
     * ��ʽ {element:"",type:"",handler:function,data:{}}
     * */
    addHandler: function (obj) {
        var element = obj.element;
        var type = obj.type;
        var handler = obj.handler;
        var data = obj.data;
        $(element).on(type, data, handler);
    },

    /**
     * ��ȡ�¼�
     * */
    getEvent: function (event) {
        return event ? event : window.event;
    },

    /**
     * ��ȡĿ��Դ
     * */
    getTarget: function (event) {
        return event.target || event.srcElement;
    },

    /**
     *  �Ƴ��¼�
     * @param element �¼�����
     * @param type �¼�����
     * @param handler �¼�����
     * ��ʽ {element:"",type:"",handler:function}
     * */
    removeHandler: function (obj) {
        var element = obj.element;
        var type = obj.type;
        var handler = obj.handler;
        $(element).off(type, handler);
    },

    /**
     * ��ֹĬ���¼�
     * */
    preventDefault: function (event) {
        if (event.preventDefault) {
            event.preventDefault();
        } else {
            event.returnValue = false;
        }
    },

    /**
     * ��ֹ�¼�ð��
     * */
    stopPropagation: function (event) {
        if (event.stopPropagation) {
            event.stopPropagation();
        } else {
            event.cancelBubble = true;
        }
    }
};
