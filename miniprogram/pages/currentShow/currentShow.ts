// pages/currentShow/currentShow.ts
Page({

  /**
   * 页面的初始数据
   */
  data: {
    searchinput: "",
    emptyPhoto: "/images/tarBar/empty.png",
    products: [
      { id: 123, publishTime: "2023.10.01", name: "书桌", endTime: "", description: "宽1.6米，高55cm.要在微信小程序中设置图片的 aspectFit 模式，并使图片宽度为 700rpx，并水平居中，你可以使用 CSS 的 width 和 margin 属性来实现。      以下是一个示例代码，展示了如何设置图片的 aspectFit 模式，宽度为 700rpx，并水平居中：.并使图片宽度为 700rpx，并水平居中，你可以使用 CSS 的 width 和 margin 属性来实现。      以下是一个示例代码，展示了如何设置图片的 aspectFit 模式，宽度为 700rpx，并水平居中并使图片宽度为 700rpx，并水平居中，你可以使用 CSS 的 width 和 margin 属性来实现。      以下是一个示例代码，展示了如何设置图片的 aspectFit 模式，宽度为 700rpx，并水平居中", "classify": "其他", buyOrSell: "出售", photos: ["/images/product/OIP-C.jpg", "/images/product/OIP-C.jpg"], image: "/images/product/OIP-C.jpg", publisher: { wxName: "zhuyue1242", contact: "电话。。。微信：l2fa43e", telNo: "123465421fe654", position: "F区10号楼" } },
      { id: 124, publishTime: "2023.10.01", image: "/images/product/OIP-C.jpg", name: "手机1f3a5ef13a5ef1a31", description: "iphone6s,功能正常1234354354a35ef4a35f4a34fa35e4f3a5ef13ase5f4e3aw5f4 fse3f5a1se3f5a1ef3a5ef13se5f1a3ef13f1e3f1", buyOrSell: "出售", classify: "手机" },
      { id: 125, name: "手机", publishTime: "2023.10.01", image: "/images/product/OIP-C.jpg", description: "iphone6s,功能正常iphone6s,功能正常iphone6s,功能正常iphone6s,功能正常iphone6s,功能正常iphone6s,功能正常", buyOrSell: "出售", classify: "手机" },
      { id: 126, name: "手机", description: "iphone6s,功能正常", buyOrSell: "赠送", classify: "手机" },
      { id: 127, name: "手机", description: "iphone6s,功能正常", buyOrSell: "赠送", classify: "手机" },
      { id: 128, name: "手机", description: "iphone6s,功能正常", buyOrSell: "赠送", classify: "手机" },
      { id: 129, name: "手机", description: "iphone6s,功能正常", buyOrSell: "求购", classify: "手机" },
      { id: 130, name: "手机", description: "iphone6s,功能正常", buyOrSell: "求购", classify: "手机" },
      { id: 131, name: "手机", description: "iphone6s,功能正常", buyOrSell: "求购", classify: "手机" },
      { id: 133, name: "手机", description: "iphone6s,功能正常", buyOrSell: "求购", classify: "手机" },
      { id: 154, name: "手机", description: "iphone6s,功能正常", buyOrSell: "求购", classify: "手机" }, { id: 156, name: "手机", description: "iphone6s,功能正常", buyOrSell: "卖", classify: "手机" }, { id: 157, name: "手机", description: "iphone6s,功能正常", buyOrSell: "卖", classify: "手机" }, { id: 158, name: "手机", description: "iphone6s,功能正常", buyOrSell: "卖", classify: "手机" }
    ],
    currentTab: '0',
    buyOrSellList: ["所有", "赠送", "出售", "求购"],
    currentCommunity: "雅居乐湖居笔记",
    communities: ["雅居乐湖居笔记", "智慧城", "万景荔枝湾"],
    currentClassify: "全部",
    calssifies: ["全部", "文具", "电器"],
    page: 1
  },
  searchinput(e) {
    this.setData({
      searchinput: e.detail.value
    })
  },
  onSearch(e) {
    console.log(e); //TODO
  },
  selectCommunity(e) {
    console.log(e);
    this.data.communities.forEach((item, i) => {
      if (e.detail.value == i) {
        this.setData({
          currentCommunity: item,
          page: 1
        })
      }
    })
    this.getProducts();
  },
  switchTab(e) {
    console.log(e);
    this.setData({
      currentTab: e.currentTarget.dataset.index
    })
  },
  selectClassify(e) {
    this.data.calssifies.forEach((item, i) => {
      if (e.detail.value == i) {
        this.setData({
          currentClassify: item
        })
      }
    })
  },
  showDetail(e) {
    var app = getApp()
    let nid = e.currentTarget.dataset.nid;
    this.data.products.forEach((item, _) => {
      if (item.id == nid) {
        console.log(item);
        app.globalData.currentProduct = item;
      }
    });
    wx.navigateTo({
      url: "/pages/product/product?isShowLock=true&isMyProduct=false"
    })
  },
  setClassify() {
    var app = getApp();
    let calssifies = ["全部"]
    console.log(app.globalData.productClassify)
    let calssify = calssifies.concat(app.globalData.productClassify);
    this.setData({
      calssifies: calssify
    })
    console.log(calssify)
  },
  setCommunity() {
    var app = getApp();
    let community = app.globalData.communities;
    this.setData({
      communities: community,
      currentCommunity: community[0]
    })
    console.log(community)
  },
  getProductClassify() {
    var that = this;
    wx.request({
      url: 'http://192.168.0.102:6874/weixin/neibor/productclassify', // 替换为你的服务端URL  
      method: 'GET', // 根据需要选择请求方法，这里使用GET请求  
      success: function (res) {
        // 请求成功后的回调函数  
        console.log(res.data) // 打印获取到的物品种类数据 
        // var calssify = res.data.split(",");
        let calssifies = ["全部"]        
        let calssify = calssifies.concat(res.data.split(","));
        that.setData({
          calssifies: calssify
        })
        that.getProducts();
      },
      fail: function (res) {
        // 请求失败后的回调函数  
        console.log('Failed to fetch product classifies')
      }
    })
  },
  getCommunity() {
    var that = this;
    wx.request({
      url: 'http://192.168.0.102:6874/weixin/neibor/community',
      method: 'GET',
      success: function (res) {
        // 请求成功后的回调函数  
        console.log(res.data) // 打印获取到的物品种类数据 
        var community = res.data.split(",");
        that.setData({
          communities: community,
          currentCommunity: community[0]
        })
        that.getProductClassify();
      },
      fail: function (res) {
        // 请求失败后的回调函数  
        console.log('Failed to fetch product classifies')
      }
    })
  },
  getProducts() {
    var that = this;
    var page = this.data.page;
    this.setData({
      page: page + 1
    })
    var urlPara = "?page=" + page.toString() + "&position=" + this.data.currentCommunity + "&status=publish&classify=";
    if (this.data.currentClassify != "全部") {
      urlPara = urlPara + this.data.currentClassify + "&"
    } else {
      urlPara = urlPara + "%2A&"
    }
    if (this.data.buyOrSellList[this.data.currentTab] != "所有") {
      urlPara = urlPara + "buysell=" + this.data.buyOrSellList[this.data.currentTab] + "&"
    } else {
      urlPara = urlPara + "buysell=%2A&"
    }
    if (this.data.searchinput != "") {
      urlPara = urlPara + "search=" + this.data.searchinput
    } else {
      urlPara = urlPara + "search=%2A"
    }
    urlPara = 'http://192.168.0.102:6874/weixin/neibor/products' + urlPara;
    wx.request({
      url: urlPara,
      method: 'GET',
      success: function (res) {
        console.log(res.data)
      },
      fail: function (res) {
        // 请求失败后的回调函数  
        console.log('Failed to fetch product classifies')
      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad() {    
    this.getCommunity();    
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {    
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {
    // this.setClassify();
    // this.setCommunity()
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {
    var products = this.data.products
    var product = { id: 223, publishTime: "2023.10.01", name: "书桌", endTime: "", description: "宽1.6米，高55cm.要在微信小程序中设置图片的 aspectFit 模式，并使图片宽度为 700rpx，并水平居中，你可以使用 CSS 的 width 和 margin 属性来实现。      以下是一个示例代码，展示了如何设置图片的 aspectFit 模式，宽度为 700rpx，并水平居中：.并使图片宽度为 700rpx，并水平居中，你可以使用 CSS 的 width 和 margin 属性来实现。      以下是一个示例代码，展示了如何设置图片的 aspectFit 模式，宽度为 700rpx，并水平居中并使图片宽度为 700rpx，并水平居中，你可以使用 CSS 的 width 和 margin 属性来实现。      以下是一个示例代码，展示了如何设置图片的 aspectFit 模式，宽度为 700rpx，并水平居中", "classify": "其他", buyOrSell: "出售", photos: ["/images/product/OIP-C.jpg", "/images/product/OIP-C.jpg", "/images/product/OIP-C.jpg"], image: "/images/product/OIP-C.jpg", publisher: { wxName: "zhuyue1242", contact: "电话。。。微信：l2fa43e", telNo: "123465421fe654", position: "F区10号楼" } };
    products.push(product);
    this.setData({
      products
    })
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})