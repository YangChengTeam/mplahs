//app.js
App({
  onLaunch: function () {
    let res = wx.getSystemInfoSync()
    this.titleBarHeight = 44
    this.systemInfo = res
    this.statusBarHeight = res.statusBarHeight
    this.totalTopHeight = this.statusBarHeight + this.titleBarHeight
  },
  dealwithHtml(str){
    console.log(str)
    if(str.match(/<img(.+?)style=\"(.+?)\"/g)){
       str = str.replace(/<img(.+?)style=\"(.+?)\"/g, "<img$1style=\"width:100%;height:auto;\"")
    }else {
      str = str.replace(/<img(.+?)title=\"(.+?)\"/g, "<img$1style=\"width:100%;height:auto;\"")
    }

    if (str.match(/<p(.+?)style=\"(.+?)\"/g)) {
      str = str.replace(/<p(.+?)style=\"(.+?)\"/g, "<p$1style=\"$2;line-height:1.6;margin-bottom:20px;\"")
    } 
    str = str.replace(/<p>/g, "<p style=\"line-height:1.6;margin-bottom:20px; display:block;>")

   
    return str
  },
  dealwithHtml2(str) {
   
    str = str.replace(/<p>/g, "<p style=\"line-height:1.6;margin-bottom:20px; display:block;\">")
   
    return str
  }
})