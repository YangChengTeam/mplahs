// pages/school/article_list.js
const app = getApp()
const ListPage = require('../../base/list_page.js')


ListPage({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    this.showList()
    wx.setNavigationBarTitle({
      title: app.item.name,
    })
  },
  showList() {
    this.loadData("/school/article/" + app.item.id + "/")
  }
})