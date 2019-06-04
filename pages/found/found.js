// pages/found/found.js
const app = getApp();
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
  onLoad: function (options) {
    this.pagesize = 6

    this.setData({
      statusBarHeight: app.statusBarHeight,
      totalTopHeight: app.totalTopHeight
    })

    this.showList()
  },
  showList(){
    this.loadData("/video/list/")
  },
  nav2list(e){
    var type = e.currentTarget.dataset.type
    wx.navigateTo({
      url: '/pages/found/video_list?type=' + type,
    })
  },
  nav2emoji(e) {
    var type = e.currentTarget.dataset.type
    wx.navigateTo({
      url: '/pages/found/emoji?type=' + type,
    })
  },
  nav2topic(e) {
    var type = e.currentTarget.dataset.type
    wx.navigateTo({
      url: '/pages/found/video_topic?type=' + type,
    })
  }
})