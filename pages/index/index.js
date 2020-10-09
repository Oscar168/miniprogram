//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    array: ["待付款","待收货","待评价","退换/售后","我的订单"],
    ind:0,
    info:"你好"
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  tapname:function(e){
    // this.ind=event.currentTarget.dataset.index    
    // console.log(this.ind);
    var that =this;
    if( this.ind == e.currentTarget.dataset.index ) {
      return false;
    } else {
      that.setData( {
        // 设置ind的值
        ind: e.currentTarget.dataset.index
      })      
    }
  }
})
