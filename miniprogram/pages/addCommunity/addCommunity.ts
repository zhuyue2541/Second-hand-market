// pages/addCommunity/addCommunity.ts
Page({

  /**
   * 页面的初始数据
   */
  data: {
    OpenId: "kfaekfke",
    community: [],
    searchInput: "",
    describe: ""
  },
  onInput(e) {
    this.setData({
      describe: e.detail.value
    })
  },
  addCommunity(e) {
    console.log(e);
    if (this.data.describe.length < 2) {
      wx.showToast({
        title: '请填写申请说明',
        mask: true,
        icon: 'error'
      })
      return;
    }
    this.data.community.forEach((item, _) => {
      if (item.id == e.currentTarget.dataset.id) {
        // TODO 发送请求
        console.log(item);
        wx.showModal({
          title: '加入:'+item.name,
          content: item.position.province+item.position.city+item.position.countyDistrict+item.position.town,
          success(res) {
            if (res.confirm) {
              console.log('用户点击确定')
              wx.showToast({
                title: '已提交申请',
                mask: true,
                icon: 'success'
              })
            } else if (res.cancel) {
              console.log('用户点击取消')
            }
          }
        });

      }
    });
  },
  getInput(e) {
    console.log(e);
    this.setData({
      searchInput: e.detail.value
    })
  },
  clear() {
    this.setData({
      community: []
    })
  },
  onSearch(e) {
    console.log(this.data.searchInput);
    if (this.data.searchInput.length < 2) {
      wx.showToast({
        title: '请输入小区名称',
        mask: true,
        icon: 'error'
      })
      this.clear();
      return;
    }
    // TODO 请求小区
    let community = [{ id: "123", name: "雅居湖居笔记jiediao9fa", position: { province: "陕西", city: "西安市", countyDistrict: "长安区", town: "" } }, { id: "124", name: "雅居勃朗峰", position: { province: "陕西", city: "西安", countyDistrict: "长安区", town: "guodujediaoban" } }];
    this.setData({
      community
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