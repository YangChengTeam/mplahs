// pages/qinghua/qinghua_detail.js
const app = getApp()
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
      list: app.item.chat_content
    })
    wx.setNavigationBarTitle({
      title: "对方正在输入...",
    })
  }
})