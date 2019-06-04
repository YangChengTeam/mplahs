// pages/my/my.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  nav2help(e){
    wx.navigateTo({
      url: '/pages/my/help',
    })
  }
})