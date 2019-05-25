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
    var reg = new RegExp("<p(.+)</p>$")
    app.item.post_content = app.item.post_content.replace(reg, '<p style="line - height: 1.6; font - family: Microsoft YaHei, Helvetica, Tahoma, Arial, sans - serif $1</p>')
      this.setData({
         info: app.item
      })
    console.log(app.item.post_content)
   
  }

})