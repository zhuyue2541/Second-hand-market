// pages/changeNickname/changeNickname.ts
Page({

  /**
   * 页面的初始数据
   */
  data: {
    my: { nickName: "kfael" },
    input: ""
  },
  input(e) {
    this.setData({
      input: e.detail.value
    })
  },
  submit(e) {
    var input = this.data.input;
    var my = this.data.my;
    console.log(input);
    const that = this;
    if (input == "") {
      wx.showToast({
        title: '输入新昵称',
        icon: 'error',
      })
      return;
    }
    wx.showModal({
      title: '确认修改昵称',
      content: input,
      success(res) {
        my.nickName = input;
        if (res.confirm) {
          that.setData({
            my:my,
            input:""
          })
          // TODO 提交
          wx.showToast({
            title: '成功',
            icon: 'success',
          })

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