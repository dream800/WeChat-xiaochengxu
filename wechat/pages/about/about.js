//about.js
//获取应用实例
var app = getApp()
Page({
  data: {
    img:"../../images/1.png",
    title: '你好，欢迎进入我的小程序',
    intro:'备案号',
    phone:'13849089472',
    userInfo: {}
  },
  //事件处理函数
  bindViewTap: function () {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    console.log('onLoad')
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function (userInfo) {
      //更新数据
      that.setData({
        userInfo: userInfo
      })
    })
  }
})
