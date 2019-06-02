// 微信小程序Api Promise化

const wrap = function(fn, options) {
  if (options == undefined) options = {}
  var promise = new Promise((resolve, reject) => {
    fn({
      ...options,
      success(res) {
        resolve(res)
      },
      fail(err) {
        reject(err)
      }
    })
  })
  return promise
}

const login = function(options) {
  return wrap(wx.login, options)
}

const checkSession = function(options) {
  return wrap(wx.checkSession, options)
}

const request = function(options) {
  return wrap(wx.request, options)
}

const getUserInfo = function(options) {
  return wrap(wx.getUserInfo, options)
}

const getSetting = function(options) {
  return wrap(wx.getSetting, options)
}

const openSetting = function(options) {
  return wrap(wx.openSetting, options)
}

const authorize = function(options) {
  return wrap(wx.authorize, options)
}

const uploadFile = function(options) {
  return wrap(wx.uploadFile, options)
}

const chooseImage = function(options) {
  return wrap(wx.chooseImage, options)
}

const sleep = function(time) {
  var promise = new Promise((resolve, reject) => {
    setTimeout(resolve, time)
  })
  promise.catch(new Function)
  return promise
}

module.exports = {
  login: login,
  request: request,
  getUserInfo: getUserInfo,
  getSetting: getSetting,
  openSetting: openSetting,
  authorize: authorize,
  sleep: sleep,
  checkSession: checkSession,
  chooseImage: chooseImage,
  uploadFile: uploadFile
}