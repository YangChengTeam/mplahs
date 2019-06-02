// components/nav/nav.js
const app = getApp()

Component({
  /**
   * 组件的属性列表
   */
  properties: { 
    color: {
      type: String,
      value: '#000'
    },
    background: {
      type: String,
      value: '#fff'
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
  ready(){

    if (app.totalTopHeight && app.statusBarHeight && app.titleBarHeight){
      this.setData({
        totalTopHeight: app.totalTopHeight,
        statusBarHeight: app.statusBarHeight,
        titleBarHeight: app.titleBarHeight,
        ...this.properties
      })
      return
    }    
  },
  
})
