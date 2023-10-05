// pages/addContact/addContact.ts
Page({

  /**
   * 页面的初始数据
   */
  data: {
    contact: ""
  },
  clear() {
    this.setData({
      contact: ""
    })
  },
  onInputDes(e) {
    this.setData({
      contact: e.detail.value
    })
  },
  submit() {
    if (this.data.contact.length < 3) {
      wx.showToast({
        title: "联系方式过短",
        icon: "error"
      });
      return;
    }
    const pages = getCurrentPages();
    var prevPage = pages[pages.length - 2];
    let currentContact = prevPage.data.myContacts;    
    currentContact.push(this.data.contact);
    prevPage.setData({ myContacts: currentContact });
    this.clear();
    wx.navigateBack();
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