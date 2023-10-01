const app = getApp()
// pages/product/product.ts
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // productId: "0",
    showLockButton:true,
    isMyProduct:true,
    currentProduct: null
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const isShowLock = options.isShowLock == 'true';  
    const isMyProduct = options.isMyProduct == 'true'; 
    console.log("=======isMyProduct:",isMyProduct) 
    console.log(app.globalData.currentProduct);
    // 使用参数进行后续操作
    this.setData({   
      showLockButton: isShowLock,
      isMyProduct:isMyProduct,
      currentProduct: app.globalData.currentProduct
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