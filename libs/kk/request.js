// 网络请求

const wxpromise = require('wx-promise')

const get = function(url, data, headers) {
  return wxpromise.request({
    url: url,
    header: headers,
    data: data,
    method: 'GET'
  })
}

function uploadFile(url, filePath, data, headers) {
  return wxpromise.uploadFile({
    url: url,
    name: 'file',
    header: headers,
    filePath: filePath,
    formData: data,
    method: 'POST'
  })
}

function post(url, data, headers) {
  return wxpromise.request({
    url: url,
    header: headers,
    data: data,
    method: 'POST'
  })
}

module.exports = {
  get: get,
  post: post,
  uploadFile: uploadFile
}