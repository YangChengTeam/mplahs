// pages/qinghua/qinghua.js
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
  },
  showList() {
    this.loadData("/qinghua/list/")
  },
  nav2qinghuaDetail(e) {
    var item = e.currentTarget.dataset.item
    app.item = item
    wx.navigateTo({
      url: '/pages/qinghua/qinghua_detail',
    })
  }
})