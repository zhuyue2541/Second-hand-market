const app = getApp()
// pages/product/product.ts
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // productId: "0",
    lockerInputDisable: false,
    locker: "",
    showLockButton: true,
    isMyProduct: true,
    isReview: false,
    pictureMode: "aspectFit",
    currentProduct: null,
    avatar: "/images/tarBar/empty.png",
    lockUrl: "/weixin/neibor/lockoneproduct",
    serverPictureUrl: "http://192.168.0.102:6874/weixin/neibor/picture?id="
  },
  previewImage(e) {
    console.log(e);
    wx.previewImage({
      urls: [e.currentTarget.dataset.url],
      current: e.currentTarget.dataset.url
    })
  },
  deletePrePageData(id) {
    const pages = getCurrentPages();
    var prevPage = pages[pages.length - 2];
    var preProducts = [];
    prevPage.data.products.forEach((item, index) => {
      if (item.id != id) {
        preProducts.push(item)
      }
    });
    prevPage.setData({ products: preProducts });
  },
  showFailDetail(detail) {
    wx.showToast({
      title: detail,
      icon: "error",
      duration: 3000
    })
  },
  showuploadfail() {
    wx.showToast({
      title: "上传失败请重试",
      icon: "error",
      duration: 2000
    })
  },
  showuploadsucc() {
    wx.showToast({
      title: "上传成功",
      icon: "success",
      duration: 2000
    })
    this.setData({
      showLockButton: false,
      lockerInputDisable: true
    });
  },
  submit2server(currentProduct) {
    var that = this;
    var productId = currentProduct.id.toString();
    var productMsg = {
      'locker_contact': this.data.locker,
      'id': productId
    };
    wx.request({
      url: 'http://192.168.0.102:6874/weixin/neibor/lockoneproduct', // 替换为你的服务器端 URL
      method: 'POST',
      data: productMsg,
      header: {
        'content-type': 'application/json'
      },
      success: function (res) {
        console.log(res.data);
        if (res.statusCode != 200) {
          that.showuploadfail();
        } else if (res.data.message != "success") {
          that.showFailDetail(res.data.message);
          that.deletePrePageData(currentProduct.id);
        } else {
          that.showuploadsucc();
          that.deletePrePageData(currentProduct.id);
        }
      },
      fail: function (error) {
        // 请求失败的回调函数
        console.log("publish fail")
        console.log(error);
        that.showuploadfail();
      }
    });

  },
  addLocker(locker) {
    var currentProduct = this.data.currentProduct;
    currentProduct.locker_contact = locker;
    this.setData({
      currentProduct
    })
    console.log(this.data.currentProduct)
    this.submit2server(currentProduct)
  },
  lockProduct() {
    if (this.data.locker.length == 0) {
      wx.showToast({
        title: "请输入您的联系方式",
        icon: "error",
        mask: true
      });
      return;
    }
    var that = this;
    var locker = "锁定者：" + this.data.locker;
    console.log(this.data.locker);
    wx.showModal({
      title: '确认锁定',
      content: '确定该物品吗？锁定后其他用户无法锁定',
      success: function (res) {
        if (res.confirm) {
          console.log('用户点击确定');
          that.addLocker(locker);
          // 在这里执行取消操作
        } else if (res.cancel) {
          console.log('用户点击取消');
          // 在这里执行取消操作
        }
      }
    })
  },
  lockinput(e) {
    var locker = e.detail.value;
    this.setData({
      locker
    })
  },
  review(status){
    var that = this;
    var currentProduct =  this.data.currentProduct;
    var productId = currentProduct.id.toString();
    var productMsg = {      
      'id': productId,
      'status':status
    };
    wx.request({
      url: 'http://192.168.0.102:6874/weixin/neibor/review', // 替换为你的服务器端 URL
      method: 'POST',
      data: productMsg,
      header: {
        'content-type': 'application/json'
      },
      success: function (res) {
        console.log(res.data);
        if (res.statusCode != 200) {
          that.showuploadfail();
        } else {
          that.showuploadsucc();
          that.deletePrePageData(currentProduct.id);
          wx.navigateBack({  
            delta: 1
          })          
        }
      },
      fail: function (error) {
        // 请求失败的回调函数
        console.log("publish fail")
        console.log(error);
        that.showuploadfail();
      }
    });
  },
  reject(){
    this.review("reject")
  },
  pass(){
    this.review("publish")
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const isShowLock = options.isShowLock == 'true';
    const isMyProduct = options.isMyProduct == 'true';
    const isReview = options.review == 'true';
    console.log(app.globalData.currentProduct);
    // 使用参数进行后续操作
    this.setData({
      showLockButton: isShowLock,
      isMyProduct: isMyProduct,
      currentProduct: app.globalData.currentProduct,
      isReview: isReview
    })

  },
  // onLoad(): function(options) {
  //   console.log(options);
  //   const product-id=options.param1;
  //   this.setData({
  //     productId:product-id;
  //   })
  // },

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

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})