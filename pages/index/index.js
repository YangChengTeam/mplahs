//index.js
//获取应用实例
const app = getApp()

const regeneratorRuntime = global.regeneratorRuntime = require('../../libs/runtime')

const config = require('../../base/config.js')
const BasePage = require('../../base/base_page.js')
const request = require('../../libs/kk/request.js')

var page = 0
var loadstatus = false

Page({
  data: {
    list: []
  },

  async onLoad() {
    var reg = new RegExp("<p(.+)</p>$")
    var a = "<p></p>".replace(reg, "<p$1</p>")
    console.log(a)
    this.loadData()
  },

  async loadData() {
    if (this.data.loadstatus == 2) {
      return
    }
    this.setData({
      loadstatus: 0
    })
    var data = await request.get(config.BASE_URL + "/school/articleNews/" + (++page))
    if (data && data.data && data.data.data) {
      if (data.data.data && data.data.data.length < 10) {
        this.setData({
          loadstatus: 2
        })
        return
      }
      this.setData({
        list: [...this.data.list, ...data.data.data],
        loadstatus: 1
      })
    } else {
      page--
      this.setData({
        loadstatus: 2
      })
    }
  },

  nav2detail(e){
      var item = e.currentTarget.dataset.item
      app.item = item
      wx.navigateTo({
        url: '/pages/school/article_detail',
      })
  }

})