// app.ts
App<IAppOption>({
  globalData: {
    currentProduct: null,
  },
  onLaunch() {
    // 展示本地存储能力
    const logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        console.log(res.code)
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      },
    })
    // wx.login({
    //   success: function(res) {
    //     if (res.code) {
    //       // 发起网络请求，将 code 发送到后台服务器
    //       wx.request({
    //         url: 'https://api.weixin.qq.com/sns/jscode2session',
    //         data: {
    //           appid: '你的小程序的AppID',
    //           secret: '你的小程序的AppSecret',
    //           js_code: res.code,
    //           grant_type: 'authorization_code'
    //         },
    //         success: function(res) {
    //           // 获取到用户的 OpenID
    //           var openid = res.data.openid;
    //           console.log('用户的OpenID为：', openid);
    //         }
    //       });
    //     } else {
    //       console.log('登录失败！' + res.errMsg);
    //     }
    //   }
    // });
    
  },
})