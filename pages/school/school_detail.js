// pages/school/school_detail.js

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
    app.item.post_content = app.dealwithHtml2(app.item.post_content)
    console.log(app.item.post_content)
     this.setData({
       info: app.item
     })
  },
  onPageScroll(e) {
    var title
    let scrollTop = e.scrollTop
    if (scrollTop > app.totalTopHeight) {
      title = this.data.info.post_title
    } else {
      title = ""
    }
    wx.setNavigationBarTitle({
      title: title,
    })
  }
})