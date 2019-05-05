const host = '';

function request(url, method, data, header = {}) {
  wx.showLoading({
    title: "加载中" // 数据请求前loading
  });
  return new Promise((resolve, reject) => {
    wx.request({
      url: host + url, // 仅为示例，并非真实的接口地址
      method: method,
      data: data,
      headers: {
        "content-type": "application/json" // 默认值
      },
      success: function(res) {
        wx.hideLoading();
        //与后端约定状态码
        if (res.data.code != 1) {
          wx.showToast({
            title: res.data.msg, //提示的内容,
            icon: "none", //图标,
            duration: 1000, //延迟时间,
            mask: true //显示透明蒙层，防止触摸穿透,
          });
        }
        resolve(res.data);
      },
      fail: function(res) {
        wx.hideLoading();
        reject(res.data);
      },
      complete: function() {
        wx.hideLoading();
      }
    });
  });
}

export function get(obj) {
  return request(obj.url, "GET", obj.data);
}

export function post(obj) {
  return request(obj.url, "POST", obj.data);
}
