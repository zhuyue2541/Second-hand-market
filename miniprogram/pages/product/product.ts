// pages/product/product.ts
Page({

  /**
   * 页面的初始数据
   */
  data: {
    productId:"0"
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    const param1 = options.param1;
    // const param2 = options.param2;
    console.log(options);
    // 使用参数进行后续操作
    this.setData({
      productId:param1
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