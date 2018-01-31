/*
* create By ZhangHeng on 2018/1/31
*/
var app = getApp();
Page({
    onReady:function(){
        console.log('首页已经加载');
    },
    createWish:function(){
        console.log("生成属于我的汪汪");
        wx.showToast({
            title: '正在生成新年汪汪',
            icon: 'loading',
            duration: 10000
        });

        setTimeout(function(){
            wx.hideToast();
            wx.navigateTo({
                url: "../../pages/result/index",
                //接口调用成功的回调方法
                fuccess: function () {
                },
                //接口调用失败的回调方法
                fail: function () {
                },
                //接口调用无论成功或者失败的回调方法
                complete: function () {
                }
            })
        },2000)
    }
});