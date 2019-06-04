// pages/school/article_detail.js
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
  onLoad: function(options) {
    
    var systemInfo = app.systemInfo
    this.scrollTopPx = systemInfo.windowWidth / 750  *  80

    var imgReg = new RegExp("<img(.*)style=\"(.+)\"(.*)>$", "ig")


    app.item.post_content = app.dealwithHtml(app.item.post_content)
    this.setData({
      info: app.item
    })

  },
  onPageScroll(e) {
    let scrollTop = e.scrollTop
    var title
    if (scrollTop > this.scrollTopPx ){
        title = this.data.info.post_title
    } else {
        title = ""
    }
    wx.setNavigationBarTitle({
      title: title,
    })
  }

})