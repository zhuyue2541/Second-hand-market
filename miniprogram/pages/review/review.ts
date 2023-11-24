// pages/review/review.ts
Page({

  /**
   * 页面的初始数据
   */
  data: {
    emptyPhoto: "/images/tarBar/empty.png",
    products: [],
    serverPictureUrl: "https://wuqiongji.com.cn:6874/weixin/neibor/picture?id=",
    page: 1,
    pageSize: 10
  },
  imagsAddUrl(images) {
    var imge = [] as string;
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
  },
  getProducts(position) {
    var that = this;
    var page = this.data.page;
    this.setData({
      page: page + 1
    })
    var urlPara = "?page=" + page.toString() + "&position="+position+"&status=audit&classify=%2A&buysell=%2A&search=%2A";
    urlPara = 'https://wuqiongji.com.cn:6874/weixin/neibor/products' + urlPara;
    console.log(urlPara)
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
  initPage() {
    this.setData({
      page: 1,
      products: []
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
      url: "/pages/product/product?isShowLock=false&isMyProduct=false&review=true"
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    var position = options.position;
    if(position == "all"){
      position="%2A"
    }
    console.log(position)
    this.initPage();
    this.getProducts(position);
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
  onPullDownRefresh() {
    this.initPage();
    this.getProducts();
    setTimeout(() => {
      wx.stopPullDownRefresh(); // 停止下拉刷新  
    }, 2000);
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {
    this.getProducts();
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})