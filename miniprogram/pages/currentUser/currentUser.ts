// pages/currentUser/currentUser.ts
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userid: "",
    neighbors: [{
      nickName: "akf32el",
      OpenId: "fkaefl",
      community: "智慧城",
      communityId: "flakefj"
    }, {
      nickName: "34",
      OpenId: "fkaefl1",
      community: "雅居乐-湖居笔记",
      communityId: "flakefj"
    } ,{
      nickName: "12",
      OpenId: "fkaefl1",
      community: "雅居乐-湖居笔记",
      communityId: "flakefj"
    },{
      nickName: "123",
      OpenId: "fkaefl1",
      community: "雅居乐-湖居笔记",
      communityId: "flakefj"
    }]
  },
  deleteOneNei(e){
    let index = e.currentTarget.dataset.index;    
    let neighbor = [];
    this.data.neighbors.forEach((item, i) => {
      if (i != index) {
        console.log(item);
        neighbor.push(item);
      }
    });
    this.setData({
      neighbors: neighbor
    })    
  },
  deleteNeibor(e) {
    let index = e.currentTarget.dataset.index;
    let that=this;
    let neighbors = [];
    this.data.neighbors.forEach((item, i) => {
      if (i == index) {
        console.log(item);
        wx.showModal({
          title: '剔除该用户吗？',
          content: item.nickName,
          success: function (res) {
            if(res.confirm){
              // TODO 后台发送数据，携带管理员ID
              that.deleteOneNei(e);
            }
            else if (res.cancel) {
              console.log('用户点击取消');              
              return;
            }
          }
        })
      } 
    });    
    console.log(index);
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options);
    const userid = options.userid;
    this.setData({
      userid
    })
    // TODO 获取管理的小区
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