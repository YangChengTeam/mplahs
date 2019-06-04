const app = getApp();

const config = require('./config.js')
const BasePage = require("./base_page.js")
const regeneratorRuntime = global.regeneratorRuntime = require('../libs/runtime')

const request = require('../libs/kk/request.js')

var ListPage = function(obj) {
  obj.page = 0
  obj.pagesize = 10
  obj.data = {}
  obj.data.list = []
  
  obj.loadData = async function(path, process) {
    if (this.nopage) return
    if (this.data.loadstatus == 2) {
      return
    }

    this.setData({
      loadstatus: 0
    })

    var data = await request.get(config.BASE_URL + path + (++this.page))
    if (data && data.data && data.data.data) {
      if (process) {
        process(data.data.data)
      }
      var loadstatus = 1
      if (data.data.data && data.data.data.length < this.pagesize) {
        loadstatus = 2
      }
      this.setData({
        list: [...this.data.list, ...data.data.data],
        loadstatus: loadstatus
      })
    } else {
      this.page--
      this.setData({
          loadstatus: 3
        })
    }
  }
  obj.nav2detail = function(e) {
    var item = e.currentTarget.dataset.item
    app.item = item
    wx.navigateTo({
      url: '/pages/school/article_detail',
    })
  }
  obj.nav2video = function(e) {
    var item = e.currentTarget.dataset.item
    app.item = item
    wx.navigateTo({
      url: '/pages/found/video_detail',
    })
  }
  obj.onReachBottom = function() {
    if (this.showList) {
      this.showList()
    }
  }
  BasePage(obj)
}

module.exports = ListPage