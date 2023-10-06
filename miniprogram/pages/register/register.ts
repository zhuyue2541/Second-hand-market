// pages/register/register.ts
Page({

  /**
   * 页面的初始数据
   */
  data: {
    nickName: "",
    contact: "",
    community: "",
    myCommunity: "",
    communitys: [],
    describe: ""
  },
  nickName(e) {
    this.setData({
      nickName: e.detail.value
    })
  },
  contact(e) {
    this.setData({
      contact: e.detail.value
    })
  },
  describe(e) {
    this.setData({
      describe: e.detail.value
    })
  },
  community(e) {
    this.setData({
      community: e.detail.value
    })
  },
  searchCommunity(e) {
    if (this.data.community.length < 1) {
      wx.showToast({
        title: '请输入小区名称',
        icon: 'error',
      })
      return;
    }
    let community = [{ id: "123", name: "雅居湖居笔记jiediao9fa", position: { province: "陕西", city: "西安市", countyDistrict: "长安区", town: "" } }, { id: "124", name: "雅居勃朗峰", position: { province: "陕西", city: "西安", countyDistrict: "长安区", town: "guodujediaoban" } }];
    this.setData({
      communitys: community
    })
  },
  addCommunity(e) {
    let myCommunity = ""
    this.data.communitys.forEach((item, _) => {
      if (item.id == e.currentTarget.dataset.id) {
        myCommunity = item.name + " " + item.position.province + item.position.city + item.position.countyDistrict + item.position.town;
      }
    })
    this.setData({
      myCommunity
    })
  },
  clearCommunity(e){
    this.setData({
      myCommunity:""
    })
  },
  submit(e) {
    if (this.data.contact == "" || this.data.nickName == "" || this.data.myCommunity == "") {
      wx.showToast({
        title: "输入不完整",
        icon: 'error',
        mask: true
      })
      return;
    }
    wx.showModal({
      title: '确认提交',
      content: '请确认信息无误',
      success(res) {
        if (res.confirm) {
          // TODO 提交申请
          console.log('用户点击确定')
          wx.showToast({
            title:"提交成功",
            icon:'success'
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
    wx.hideHomeButton();
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