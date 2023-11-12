// pages/currentShow/currentShow.ts
Page({

  /**
   * 页面的初始数据
   */
  data: {
    searchinput: "",
    emptyPhoto: "/images/tarBar/empty.png",
    products: [],
    currentTab: '0',
    buyOrSellList: ["所有", "赠送", "出售", "求购"],
    currentCommunity: "雅居乐湖居笔记",
    communities: ["雅居乐湖居笔记", "智慧城", "万景荔枝湾"],
    currentClassify: "全部",
    calssifies: ["全部", "文具", "电器"],
    page: 1,
    refreshing:false,
    serverPictureUrl: "http://192.168.0.102:6874/weixin/neibor/picture?id="
  },
  searchinput(e) {
    this.setData({
      searchinput: e.detail.value
    })
  },
  reGetProducts() {
    this.initPage();
    this.getProducts();
  },
  initPage() {
    this.setData({
      page: 1,
      products: []
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
          currentCommunity: item
        })
      }
    })
    this.reGetProducts();
  },
  switchTab(e) {
    console.log(e);
    this.setData({
      currentTab: e.currentTarget.dataset.index
    })
    this.reGetProducts();
  },
  selectClassify(e) {
    this.data.calssifies.forEach((item, i) => {
      if (e.detail.value == i) {
        this.setData({
          currentClassify: item
        })
      }
    })
    this.reGetProducts();
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
  imagsAddUrl(images){
    var imge = [] as string;
    console.log("imagsAddUrl")
    console.log(images)
    if(images.length == 0 || images[0] == ""){
      console.log("no images")
      return imge;
    }
    var url = this.data.serverPictureUrl;
    images.forEach((item, _) => {
      if(item == ""){
        retrun;
      }
      imge.push(url+item)      
    });    
    return imge
  },
  showProducts(products) {
    console.log(products);
    var that = this;
    var currentProducts = this.data.products;
    products.forEach((item, i) => {
      item.images = that.imagsAddUrl(item.images.split(","));
      item.publish_time = item.publish_time.replace(/T/g, ' ');
      item.publish_time = item.publish_time.split(".")[0]
      currentProducts.push(item);
    })
    this.setData({
      products: currentProducts
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
        that.showProducts(res.data)
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
    this.initPage()
    this.getCommunity();
    wx.stopPullDownRefresh();
    // wx.pageScrollTo({  
    //   scrollTop: 0,  
    //   success: function() {  
    //     wx.startPullDownRefresh(); // 开始下拉刷新  
    //   }  
    // });  
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
  onPullDownRefresh:function() { 
    console.log("onPullDownRefresh");
    this.initPage();
    this.getCommunity();
    this.setData({  
      refreshing: true // 设置为正在刷新数据的状态  
    });  
    setTimeout(() => {  
      // 加载完毕后停止刷新动画并更新数据  
      this.setData({  
        refreshing: false  
      });  
      wx.stopPullDownRefresh(); // 停止下拉刷新  
    }, 2000);  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {
    var products = this.data.products
    var product = { id: 223, publish_time: "2023.10.01", name: "书桌", endTime: "", description: "宽1.6米，高55cm.要在微信小程序中设置图片的 aspectFit 模式，并使图片宽度为 700rpx，并水平居中，你可以使用 CSS 的 width 和 margin 属性来实现。      以下是一个示例代码，展示了如何设置图片的 aspectFit 模式，宽度为 700rpx，并水平居中：.并使图片宽度为 700rpx，并水平居中，你可以使用 CSS 的 width 和 margin 属性来实现。      以下是一个示例代码，展示了如何设置图片的 aspectFit 模式，宽度为 700rpx，并水平居中并使图片宽度为 700rpx，并水平居中，你可以使用 CSS 的 width 和 margin 属性来实现。      以下是一个示例代码，展示了如何设置图片的 aspectFit 模式，宽度为 700rpx，并水平居中", "classify": "其他", Buysell: "出售", photos: ["/images/product/OIP-C.jpg", "/images/product/OIP-C.jpg", "/images/product/OIP-C.jpg"], image: "/images/product/OIP-C.jpg", publisher: { wxName: "zhuyue1242", contact: "电话。。。微信：l2fa43e", telNo: "123465421fe654", position: "F区10号楼" } };
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