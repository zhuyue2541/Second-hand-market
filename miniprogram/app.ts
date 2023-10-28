// app.ts
App<IAppOption>({
  globalData: {
    currentProduct: null,
    productClassify: [],
    communities: []
  },
  getProductClassify() {
    var that = this;
    wx.request({
      url: 'http://192.168.0.102:6874/weixin/neibor/productclassify', // 替换为你的服务端URL  
      method: 'GET', // 根据需要选择请求方法，这里使用GET请求  
      success: function (res) {
        // 请求成功后的回调函数  
        console.log(res.data) // 打印获取到的物品种类数据 
        that.globalData.productClassify = res.data.split(",");
        console.log(that.globalData.productClassify)
      },
      fail: function (res) {
        // 请求失败后的回调函数  
        console.log('Failed to fetch product classifies')
      }
    })
  },
  getCommunity(){
    var that = this;
    wx.request({
      url: 'http://192.168.0.102:6874/weixin/neibor/community', // 替换为你的服务端URL  
      method: 'GET', // 根据需要选择请求方法，这里使用GET请求  
      success: function (res) {
        // 请求成功后的回调函数  
        console.log(res.data) // 打印获取到的物品种类数据 
        that.globalData.communities = res.data.split(",");
        console.log(that.globalData.communities)
      },
      fail: function (res) {
        // 请求失败后的回调函数  
        console.log('Failed to fetch product classifies')
      }
    })
  },
  onLaunch() {
    this.getProductClassify();
    this.getCommunity();
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


  },
})