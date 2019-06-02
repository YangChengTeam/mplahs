// components/nav/nav.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    isback: {
      type: Number,
      value: 0
    },
    issearch: {
      type: Number,
      value: 0
    },
    back_icon_path: {
      type: String,
      value: 'back.png'
    },
    title: {
      type: String,
      value: ''
    },
    color: {
      type: String,
      value: '#000'
    },
    background: {
      type: String,
      value: '#fff'
    },
    path: {
      type: String,
      value: ''
    },
    isnop: {
      type: Number,
      value: 0
    },
    opacity: {
      type: Float32Array,
      value: 1
    }
  },
  attached() {
    let thiz = this
    thiz.setData({
      ...thiz.properties
    })
  },
  /**
   * 组件的方法列表
   */
  methods: {
    navigateBack(e) {
      if (this.properties.path) {
        wx.redirectTo({
            url: this.properties.path,
        })
      } else {
        wx.navigateBack({

        })
      }
    }
  }
})
