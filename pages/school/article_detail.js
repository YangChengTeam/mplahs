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
  onLoad: function (options) {
    app.item.post_content = '<body style="background:#fff;position: relative;line-height:1.6;font-family:Microsoft YaHei,Helvetica,Tahoma,Arial,sans-serif">'+app.item.post_content+'/body>'
      this.setData({
         info: app.item
      })
    console.log(app.item.post_content)
   
  }

})