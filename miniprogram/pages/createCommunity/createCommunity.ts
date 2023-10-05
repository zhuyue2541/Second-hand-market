// pages/createCommunity/createCommunity.ts
Page({

  /**
   * 页面的初始数据
   */
  data: {
    message: [{ des: "小区/村名称：", holder: "请输入小区名称", input: "" },
    { des: "所在省份：", holder: "请输入小区所在省", input: "" },
    { des: "所在市：", holder: "请输入小区所在市", input: "" },
    { des: "所在区/县：", holder: "请输入小区所在区/县", input: "" },
    { des: "所在街道/镇：", holder: "请输入小区所在街道/镇", input: "" }
    ]
  },
  onInput(e) {
    let index = e.currentTarget.dataset.index;
    let message = []
    this.data.message.forEach((item, i) => {
      if (index == i) {
        item.input = e.detail.value;
      }
      message.push(item)
    });
    this.setData({
      message
    });
  },
  submit(e) {
    let isLegal = true;
    this.data.message.forEach((item, i) => {
      if (i < 4 && item.input.length < 1) {
        wx.showToast({
          title: "前4个必须非空",
          icon: 'error',
          mask: true
        });
        isLegal =false;
        return;
      }
    });
    if(!isLegal){
      return;
    }
    wx.showModal({
      title: '确认提交',
      content: '',
      success(res) {
        if (res.confirm) {
          // TODD 提交后台
          wx.showToast({
            title: "提交成功",
            icon: 'success',
            mask: true
          });
        } else if (res.cancel) {
          console.log('用户点击取消')
        }
      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad() {

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