// pages/duihua/duihua_detail.js
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
  onLoad: function (options) {
    this.showList()
    wx.setNavigationBarTitle({
      title: app.item.name,
    })
  },
  showList() {
    this.loadData("/duihua/list/" + app.item.id + "/")
  },
  copytext(e){
    var item = e.currentTarget.dataset.item
    wx.setClipboardData({
      data: item.content,
      success:function(){
        wx.showToast({
          title: '复制成功',
        })
      }
    })
  }


})