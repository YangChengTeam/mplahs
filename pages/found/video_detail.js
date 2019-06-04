// pages/found/video_detail.js
const app = getApp();


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
    this.setData({
      statusBarHeight: app.statusBarHeight,
      totalTopHeight: app.totalTopHeight
    })

    this.setData({
      info: app.item
    })

    wx.setNavigationBarTitle({
      title: app.item.title,
    })

  }
})