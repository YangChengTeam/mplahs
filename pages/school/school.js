// pages/school/school.js
const app = getApp()
const regeneratorRuntime = global.regeneratorRuntime = require('../../libs/runtime')

const config = require('../../base/config.js')
const request = require('../../libs/kk/request.js')

Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  async onLoad(options) {
    var data = await request.get(config.BASE_URL + "/school/category")
    if (data && data.data && data.data.data) {
      this.setData({
        category: data.data.data
      })
    }

    data = await request.get(config.BASE_URL + "/school/articleCategory")
    if (data && data.data && data.data.data) {
      this.setData({
        articleCategory: data.data.data
      })
    }
  },
  nav2list(e) {
    var item = e.currentTarget.dataset.item
    app.item = item
    wx.navigateTo({
      url: '/pages/school/school_list',
    })
  },
  nav2article(e) {
    var item = e.currentTarget.dataset.item
    app.item = item
    console.log(item)
    wx.navigateTo({
      url: '/pages/school/article_list',
    })
  }
})