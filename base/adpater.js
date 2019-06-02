function commonAdpater(map, list) {
  var dstList = []
  list.forEach(item => {
    var dstObj = {}
    Object.keys(map).forEach(key => {
      dstObj[key] = item[map[key]];
    })
    dstList.push(dstObj)
  })
  return dstList
}


module.exports = {
  
}