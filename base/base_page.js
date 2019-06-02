const app = getApp();



/**
 *  页面基类
 */
var BasePage = function(obj) {

  /**
   * 选择Tab 
   */
  obj.selectedTab = function() {
    var thiz = this
    var index = -1;

    var hasTabBar = typeof this.getTabBar === 'function' &&
      this.getTabBar()

    for (let i = 0; i < app.tabList.length; i++) {
      let item = app.tabList[i]
      if (item.pagePath.indexOf(thiz.route) != -1) {
        index = i
        break
      }
    }

    if(hasTabBar){
      this.getTabBar().setData({
         selected: index
      })
    } else {
      this.setData({
        selected: index
        })
    }
  }

  /**
   * 刷新Tab 
   */
  obj.refreshTabs = function(list) {
    var thiz = this
    
    if(list){
      app.tabList = list
    }

    if(!app.tabList || app.tabList.length == 0) return

    var hasTabBar = typeof this.getTabBar === 'function' &&
      this.getTabBar()

    var isRefreshTabs = false
    for (let i = 0; i < app.tabList.length; i++) {
      let item = app.tabList[i]
      if (item.pagePath.indexOf(thiz.route) != -1) {
        isRefreshTabs = true
        break
      }
    }

    if (isRefreshTabs) {
      if(hasTabBar){
        thiz.getTabBar().setData({
          list: app.tabList
        })
      }else{
        thiz.setData({
          tabList: app.tabList
        })
      }
    }
  }

  /**
   * 重载Page onLoad
   */
  obj.mirror_onLoad = obj.onLoad || function() {};
  obj.onLoad = function() {
    obj = { ...obj, ...this }  // 合并到子Page
    obj.mirror_onLoad()
    this.setData({
      basicConfig: app.templateConfig.theme
    })
    this.refreshTabs()
  }

  /**
   * 重载Page onShow
   */
  obj.mirror_onShow = obj.onShow || function() {};
  obj.onShow = function() {
    obj.mirror_onShow()
    this.selectedTab()
  }

  Page(obj)
}


module.exports = BasePage