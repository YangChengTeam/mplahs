// pages/school/school_list.js
const app = getApp()
const ListPage = require('../../base/list_page.js')


ListPage({

  /**
   * 页面的初始数据
   */
  data: {
    currentIndex: 0
    
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
      this.setData({
        menuList:app.item.children,
        currentIndex: app.item.children[0].id
      })
      this.showList()
      wx.setNavigationBarTitle({
        title: app.item.name,
      })
  },
  showList(){
    this.loadData("/school/list/" + this.data.currentIndex + "/")
  },
  switchList(e){
    var item = e.currentTarget.dataset.item
    this.page = 0
    this.data.loadstatus = 0
    this.data.list = []
    this.loadData("/school/list/" + item.id + "/")
    this.setData({
      currentIndex: item.id,
      list: []
    })
  },
  nav2schoolDetail(e){
    var item = e.currentTarget.dataset.item
    app.item = item
    wx.navigateTo({
      url: '/pages/school/school_detail',
    })
  }
})