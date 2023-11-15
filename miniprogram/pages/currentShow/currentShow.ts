// pages/currentShow/currentShow.ts
Page({

  /**
   * 页面的初始数据
   */
  data: {
    searchinput: "",
    emptyPhoto: "/images/tarBar/empty.png",
    products: [],
    isSearch: false,
    currentTab: '0',
    buyOrSellList: ["所有", "赠送", "出售", "求购"],
    currentCommunity: "雅居乐湖居笔记",
    communities: ["雅居乐湖居笔记", "智慧城", "万景荔枝湾"],
    currentClassify: "全部",
    calssifies: ["全部", "文具", "电器"],
    page: 1,
    pageSize: 10,
    serverPictureUrl: "http://192.168.0.102:6874/weixin/neibor/picture?id="
  },
  searchinput(e) {
    this.setData({
      searchinput: e.detail.value
    });
    this.onSearch();
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
    if (this.data.searchinput.length > 0) {
      this.setData({
        isSearch: true
      })
    }
    this.getProducts();
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
      url: "/pages/product/product?isShowLock=true&isMyProduct=false&review=false"
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
  imagsAddUrl(images) {
    var imge = [] as string;
    console.log("imagsAddUrl")
    console.log(images)
    if (images.length == 0 || images[0] == "") {
      console.log("no images")
      return imge;
    }
    var url = this.data.serverPictureUrl;
    images.forEach((item, _) => {
      if (item == "") {
        return;
      }
      imge.push(url + item)
    });
    return imge
  },
  isRepeatProduct(currentProduct, products) {
    var isRpeat = false;
    products.forEach((item, i) => {
      if (item.id == currentProduct.id) {
        isRpeat = true;
        return;
      }
    })
    return isRpeat;
  },
  showProducts(products) {
    var currentPage = this.data.page;
    if (products.length < this.data.pageSize) {
      this.setData({
        page: currentPage - 1
      })
      if (products.length == 0) {
        return;
      }
    }
    var that = this;
    var currentProducts = this.data.products;
    if (this.data.isSearch) {
      console.log("search..")
      this.initPage();
      var myProduct = [];
      products.forEach((item, i) => {
        item.images = that.imagsAddUrl(item.images.split(","));
        item.publish_time = item.publish_time.replace(/T/g, ' ');
        item.publish_time = item.publish_time.split(".")[0]
        myProduct.push(item);
      })
      this.setData({
        products: myProduct,
        isSearch: false
      })
    } else {
      products.forEach((item, i) => {
        item.images = that.imagsAddUrl(item.images.split(","));
        item.publish_time = item.publish_time.replace(/T/g, ' ');
        item.publish_time = item.publish_time.split(".")[0];
        if (!that.isRepeatProduct(item, currentProducts)) {
          currentProducts.push(item);
        }
      })
      this.setData({
        products: currentProducts
      })
    }
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
  onPullDownRefresh: function () {
    this.initPage();
    this.getCommunity();
    setTimeout(() => {
      wx.stopPullDownRefresh(); // 停止下拉刷新  
    }, 2000);
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {
    console.log("onReachBottom")
    this.getProducts();
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {
  }
})