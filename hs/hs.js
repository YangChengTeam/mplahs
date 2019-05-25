//cnpm i md5 request cheerio

const fs = require("fs");
const util = require('util');
const exec = util.promisify(require('child_process').exec);

const md5 = require("md5");

const request = require("request")

const cheerio = require("cheerio");


var default_params = {
  userua: "Mozilla/5.0 (Linux; Android 4.4.2; HUAWEI MLA-AL10 Build/HUAWEIMLA-AL10) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/30.0.0.0 Mobile Safari/537.36",
  package: "com.pieceapp.chatskills",
  appid: "fiev73r9gk",
  params: '{}',
  from: "3",
  agentname: "default",
  mac_address: "08:00:27:9d:d6:7c",
  timestamp: "1555320086",
  token: "599b1b40b81c634552a90ce126688c0819224abbeb74b007695b81ef52603195",
  device: "HUAWEI MLA-AL10",
  uuid: "00000000-3db8-68ca-ffff-ffffc287e4e81",
  verid: "12",
  system_version: "Android 4.4.2"
}

// url sign
function md5Params(params) {
  params.timestamp = new Date().getTime();
  var query = "";
  Object.keys(params).sort().forEach((key, i) => {
    query += key + "=" + params[key] + "&";
  });
  query += "key=56lj6e24xwv6w2hjlr3q";
  query += "&sign=" + md5(query).toUpperCase();
  return query;
}

// data decode
async function decode(data) {
  const { stdout, stderr } = await exec(`java -jar decode.jar ${data}`);
  return stdout;
}

function common(path, params) {
  if (params) {
    default_params.params = encodeURIComponent(params);
  }
  default_params.timestamp = new Date().getTime();
  var url = base_url + path + md5Params(default_params);
  console.log(url);
  var promise = new Promise((r, j) => {
    request.get(url, (e, resp) => {
      if (e) {
        j();
      } {
        try {
          console.log(resp.body)
          r(JSON.parse(resp.body));
        } catch (e) {
          console.log(e);
          j();
        } finally {

        }
      }
    });
  });
  promise.catch(new Function);
  return promise;
}


var base_url = "https://apic.btspreat.com/index.php/v3/new/";


function duihua_category() {
  return common("duihua/category?");
}

function duihua_list(page, id) {
  return common("duihua/list?", `{"page": "${page}", "cid": "${id}"}`);
}

function qinghua(page) {
  return common("qinghua/list?", `{"page": "${page}"}`);
}

function school(page) {
  return common("school/shizhan?", `{"page": "${page}"}`);
}

function school_articleCategory(recommended, page) {
  return common("school/articleCategory?", `{"page": "${page}"}`);
}

function school_topArticleNews(recommended, page) {
  return common("school/articleNews?", `{"recommended":"${recommended}", "page":"${page}"}`);
}


function school_articleNews(page, cid) {
  return common("school/articleNews?", `{"cid":"${cid}", "page":"${page}"}`);
}

function school_listNews(page, cid) {
  return common("school/list?", `{"cid":"${cid}", "page":"${page}"}`);
}

function video(page, is_index, is_wallpaper, cid) {
  var params = `{"img_size":"400", "is_index":"${is_index}", "page": "${page}"}`;
  if (is_wallpaper) {
    params = `{"img_size":"400", "is_wallpaper": "${is_wallpaper}", "page": "${page}"}`;
  } else if (cid) {
    params = `{"img_size":"400", "is_index": "2", "cid": "${cid}", "page": "${page}"}`;
  }
  return common("video/list?", `{"img_size":"400", "is_index": "${is_index}", "page": "${page}"}`);
}

function topicList(page) {
  return common("video/topicList?", `{"page": "${page}"}`);
}

function video_msg(vid) {
  return common("video/view?", `{"vid": "${vid}"}`);
}

function emoji(page) {
  return common("emoji/bagList?", `{"page": "${page}"}`);
}


function emoji_list(bag_id) {
  return common("emoji/list?", `{"row":200, "bag_id": "${bag_id}"}`);
}

function search(type, page, keyword) {
  return common("search/search?", `{"search_type":"${type}", "page": "${page}", "keyword": "${keyword}"}`);
}


module.exports = {
  school_topArticleNews
}
