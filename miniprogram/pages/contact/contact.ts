// pages/contact/contact.ts
Page({

  /**
   * 页面的初始数据
   */
  data: {
    myCommunity: ["雅居乐1", "智慧城2", "雅居乐3", "智慧城4", "雅居乐5", "智慧城6"],
    myContacts:["电话：12093，微信：239ae3,A区，3单元3号楼","F楼"]
  },
  deletOneContact(e) {    
    if(this.data.myContacts.length == 1){
      wx.showToast({
        title: "至少保留一条联系方式",
        icon: "error"
      });
      return;
    }
    let index = e.currentTarget.dataset.index;
    let community = [] as string[];
    this.data.myContacts.forEach((item, i) => {
      if (i != index) {
        console.log(item);
        community.push(item);
      }
    });
    this.setData({
      myContacts:community
    })
  },
  deletContact(e){
    let that = this;
    wx.showModal({
      title: '退出该联系方式吗',
      content: '',
      success: function (res) {
        if (res.confirm) {
          console.log('用户点击确定');
          that.deletOneContact(e);
        } else if (res.cancel) {
          console.log('用户点击取消');
          // 在这里执行取消操作
        }
      }
    })
  },
  deletOneCommunity(e) {  
    if(this.data.myCommunity.length == 1){
      wx.showToast({
        title: "至少在一个小区",
        icon: "error"
      });
      return;
    }  
    let index = e.currentTarget.dataset.index;
    let community = [] as string[];
    this.data.myCommunity.forEach((item, i) => {
      if (i != index) {
        console.log(item);
        community.push(item);
      }
    });
    this.setData({
      myCommunity:community
    })
  },
  deletCommunity(e){
    let that = this;
    wx.showModal({
      title: '退出该小区吗',
      content: '',
      success: function (res) {
        if (res.confirm) {
          console.log('用户点击确定');
          that.deletOneCommunity(e);
        } else if (res.cancel) {
          console.log('用户点击取消');
          // 在这里执行取消操作
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