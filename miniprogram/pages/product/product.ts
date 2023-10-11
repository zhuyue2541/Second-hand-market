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
    pictureMode: "aspectFit",
    currentProduct: { id: 223, publishTime: "2023.10.01", name: "书桌", endTime: "", description: "宽1.6米，高55cm.要在微信小程序中设置图片的 aspectFit 模式，并使图片宽度为 700rpx，并水平居中，你可以使用 CSS 的 width 和 margin 属性来实现。      以下是一个示例代码，展示了如何设置图片的 aspectFit 模式，宽度为 700rpx，并水平居中：.并使图片宽度为 700rpx，并水平居中，你可以使用 CSS 的 width 和 margin 属性来实现。      以下是一个示例代码，展示了如何设置图片的 aspectFit 模式，宽度为 700rpx，并水平居中并使图片宽度为 700rpx，并水平居中，你可以使用 CSS 的 width 和 margin 属性来实现。      以下是一个示例代码，展示了如何设置图片的 aspectFit 模式，宽度为 700rpx，并水平居中", "classify": "其他", buyOrSell: "出售", photos: ["/images/product/OIP-C.jpg", "/images/product/OIP-C.jpg", "/images/product/OIP-C.jpg"], image: "/images/product/OIP-C.jpg", publisher: { wxName: "zhuyue1242", contact: "电话。。。微信：l2fa43e", telNo: "123465421fe654", position: "F区10号楼" } },
    avatar: "/images/tarBar/empty.png"
  },
  previewImage(e) {
    console.log(e);
    wx.previewImage({
      urls: [e.currentTarget.dataset.url],
      current: e.currentTarget.dataset.url
    })
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
          that.setData({
            showLockButton: false,
            locker: locker,
            lockerInputDisable: true            
          });
          // 在这里执行取消操作
        } else if (res.cancel) {
          console.log('用户点击取消');
          // 在这里执行取消操作
        }
      }
    })
  },
  lockinput(e) {
    console.log(e);
    var locker = e.detail.value;
    this.setData({
      locker
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const isShowLock = options.isShowLock == 'true';
    const isMyProduct = options.isMyProduct == 'true';
    console.log("=======isMyProduct:", isMyProduct)
    console.log(app.globalData.currentProduct);
    // 使用参数进行后续操作
    this.setData({
      showLockButton: isShowLock,
      isMyProduct: isMyProduct,
      // currentProduct: app.globalData.currentProduct  TODO
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