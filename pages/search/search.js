// pages/search/search.js
const app = getApp();

const ListPage = require('../../base/list_page.js')

ListPage({

  /**
   * 页面的初始数据
   */
  data: {
    list: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    this.setData({
      mode: 0
    })
  },
  input(e) {
    this.setData({
      keyword: e.detail.value
    })
  },
  search(e) {
    this.page = 0
    this.data.list = []
    this.showList()
  },
  showList() {
    console.log(this.data.keyword)
    if (this.data.keyword && this.data.keyword.length > 0) {
      this.loadData("/search/" + this.data.mode + "/" + encodeURIComponent(this.data.keyword) + "/", list=>{
        list.forEach(v => {
          v.chat_content = [...[{
            content: v.chat_name,
            ans_sex: v.ans_type
          }], ...v.chat_content]
        })
      })
    }
  },
  switchMode(e) {
    this.page = 0
    this.data.list = []
    var mode = e.currentTarget.dataset.mode

    this.setData({
      mode: mode,
      list: []
    })
    this.showList();
  },
  copytext(e) {
    var item = e.currentTarget.dataset.item
    wx.setClipboardData({
      data: item.content,
      success: function () {
        wx.showToast({
          title: '复制成功',
        })
      }
    })
  }
})