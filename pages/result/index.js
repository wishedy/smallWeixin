/*
* create By ZhangHeng on 2018/1/31
*/
Page({
    onReady:function(){
        console.log("结果页已加载");
    },
    onShareAppMessage: function () {
        return {
            title: '新年祝福小程序',
            desc: '新年祝福',
            path: '/page/user?id=123'
        }
    }
});