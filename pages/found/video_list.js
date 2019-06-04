// pages/found/video_list.js

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
    var type = options.type
    this.showList(type)
    var title = "视频壁纸"
    if(type == 2){
      title="来电视频"
    }
    wx.setNavigationBarTitle({
      title: title,
    })
  },
  showList(type) {
    this.loadData("/video/list/" + type+"/")
  },
})