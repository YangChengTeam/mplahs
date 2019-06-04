//index.js
//获取应用实例
const app = getApp()
const ListPage = require('../../base/list_page.js')

ListPage({
  onLoad() {
    this.showList()
  },
  showList() {
    this.loadData("/school/articleNews/")
  },
  nav2duihua() {
    wx.navigateTo({
      url: '/pages/duihua/duihua',
    })
  },
  re2tab1() {
    wx.switchTab({
      url: "/pages/actualcombat/actualcombat",
    })
  },
  nav2qinghua() {
    wx.navigateTo({
      url: '/pages/qinghua/qinghua',
    })
  },
  nav2search() {
    wx.navigateTo({
      url: '/pages/search/search',
    })
  }

})