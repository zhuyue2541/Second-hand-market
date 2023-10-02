// pages/messages/messages.ts
// const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // 我当前锁定的,别人发布的
    myLocking: [{ name: "书桌", buyOrSell: "出售", lockTime: "2023.10.01", endTime: "2023.10.10", publisher:{wxName:"zhuyue1242",telNo:"123465421fe654",position:"F区10号楼，发布"},locker: { wxName: "zhuyue1242", telNo: "123465421fe654", position: "F区10号楼锁定" }, id: 1, description: "阿飞发生阿飞阿飞阿飞阿飞阿飞阿飞", "classify": "其他", image: "/images/product/OIP-C.jpg" }, { name: "手机", publisher:{wxName:"zhuyue1242",telNo:"123465421fe654",position:"F区10号楼"},endTime: "2023.10.10", buyOrSell: "出售", locker: { wxName: "zhuyue1242", telNo: "123465421fe654", position: "F区10号楼" }, id: 2, description: "", "classify": "其他", image: "/images/product/OIP-C.jpg" }, { name: "手机", buyOrSell: "出售", locker: { wxName: "zhuyue1242", telNo: "123465421fe654", position: "F区10号楼" }, id: 3, description: "", "classify": "其他", image: "/images/product/OIP-C.jpg" }, { name: "手机", buyOrSell: "出售", locker: { wxName: "zhuyue1242", telNo: "123465421fe654", position: "F区10号楼" }, id: 4, description: "", "classify": "其他", image: "/images/product/OIP-C.jpg" }],
    // 我发布的，别人锁定的
    beLocking: [{ name: "书桌", buyOrSell: "出售",publisher:{wxName:"zhuyue1242",telNo:"123465421fe654",position:"F区10号楼，发布"}, lockTime: "2023.10.01", endTime: "2023.10.10", locker: { wxName: "zhuyue1242", telNo: "123465421fe654", position: "F区10号楼锁定" }, id: 5, description: "阿飞发生阿飞阿飞阿飞阿飞阿飞阿飞", "classify": "其他", image: "/images/product/OIP-C.jpg" }, { name: "书桌", buyOrSell: "出售", locker: { wxName: "zhuyue1242", telNo: "123465421fe654", position: "F区10号楼" }, id: 66, description: "阿飞发生阿飞阿飞阿飞阿飞阿飞阿飞", "classify": "其他", image: "/images/product/OIP-C.jpg" }, { name: "手机", buyOrSell: "出售", locker: { wxName: "zhuyue1242", telNo: "123465421fe654", position: "F区10号楼" }, id: 7, description: "", "classify": "其他", image: "/images/product/OIP-C.jpg" }, { name: "手机", buyOrSell: "出售", locker: { wxName: "zhuyue1242", telNo: "123465421fe654", position: "F区10号楼" }, id: 8, description: "", "classify": "其他", image: "/images/product/OIP-C.jpg" }, { name: "手机", buyOrSell: "出售", locker: { wxName: "zhuyue1242", telNo: "123465421fe654", position: "F区10号楼" }, id: 9, description: "", "classify": "其他", image: "/images/product/OIP-C.jpg" }],
    //我发布的，未被锁定
    myPublish: [{ name: "书桌", buyOrSell: "出售", lockTime: "2023.10.01", endTime: "2023.10.10", publisher:{wxName:"zhuyue1242",telNo:"123465421fe654",position:"F区10号楼，发布"},locker: { wxName: "zhuyue1242", telNo: "123465421fe654", position: "F区10号楼锁定" }, id: 1, description: "阿飞发生阿飞阿飞阿飞阿飞阿飞阿飞", "classify": "其他", image: "/images/product/OIP-C.jpg" }, { name: "手机", publisher:{wxName:"zhuyue1242",telNo:"123465421fe654",position:"F区10号楼"},endTime: "2023.10.10", buyOrSell: "出售", locker: { wxName: "zhuyue1242", telNo: "123465421fe654", position: "F区10号楼" }, id: 2, description: "", "classify": "其他", image: "/images/product/OIP-C.jpg" }, { name: "手机", buyOrSell: "出售", locker: { wxName: "zhuyue1242", telNo: "123465421fe654", position: "F区10号楼" }, id: 3, description: "", "classify": "其他", image: "/images/product/OIP-C.jpg" }, { name: "手机", buyOrSell: "出售", locker: { wxName: "zhuyue1242", telNo: "123465421fe654", position: "F区10号楼" }, id: 4, description: "", "classify": "其他", image: "/images/product/OIP-C.jpg" },{ name: "书桌", buyOrSell: "出售", lockTime: "2023.10.01", endTime: "2023.10.10", publisher:{wxName:"zhuyue1242",telNo:"123465421fe654",position:"F区10号楼，发布"},locker: { wxName: "zhuyue1242", telNo: "123465421fe654", position: "F区10号楼锁定" }, id: 1, description: "阿飞发生阿飞阿飞阿飞阿飞阿飞阿飞", "classify": "其他", image: "/images/product/OIP-C.jpg" }, { name: "手机", publisher:{wxName:"zhuyue1242",telNo:"123465421fe654",position:"F区10号楼"},endTime: "2023.10.10", buyOrSell: "出售", locker: { wxName: "zhuyue1242", telNo: "123465421fe654", position: "F区10号楼" }, id: 2, description: "", "classify": "其他", image: "/images/product/OIP-C.jpg" }, { name: "手机", buyOrSell: "出售", locker: { wxName: "zhuyue1242", telNo: "123465421fe654", position: "F区10号楼" }, id: 3, description: "", "classify": "其他", image: "/images/product/OIP-C.jpg" }, { name: "手机", buyOrSell: "出售", locker: { wxName: "zhuyue1242", telNo: "123465421fe654", position: "F区10号楼" }, id: 4, description: "", "classify": "其他", image: "/images/product/OIP-C.jpg" }]
  },
  showConfirm: function () {
    wx.showModal({
      title: '确认取消',
      content: '确定要取消锁定吗？',
      success: function (res) {
        if (res.confirm) {
          console.log('用户点击确定');
          // 在这里执行取消操作
        } else if (res.cancel) {
          console.log('用户点击取消');
          // 在这里执行取消操作
        }
      }
    })
  },

  showCancle: function (e) {
    var source = e.currentTarget.dataset.source;
    var content_tmp = "确定要删除发布吗？";
    if(source == "history")
    {
      content_tmp = "确定删除历史记录吗";
    }
    wx.showModal({
      title: '确认删除',
      content: content_tmp,
      // content: '确定要删除发布吗？',
      success: function (res) {
        if (res.confirm) {
          console.log('用户点击确定');
          // 在这里执行取消操作
        } else if (res.cancel) {
          console.log('用户点击取消');
          // 在这里执行取消操作
        }
      }
    })
  },

  showDetail: function (e) {
    var app = getApp()
    console.log(e.currentTarget.dataset);
    const nid = e.currentTarget.dataset.nid;
    const ismyproduct = e.currentTarget.dataset.ismyproduct;
    console.log("isMyProduct:",ismyproduct);
    this.data.myLocking.forEach((item, _) => {
      if (item.id == nid) {
        console.log(item);
        app.globalData.currentProduct = item;
      }
    });
    this.data.beLocking.forEach((item, _) => {
      if (item.id == nid) {
        console.log(item);
        app.globalData.currentProduct = item;
      }
    });
    wx.navigateTo({
      url: "/pages/product/product?isShowLock=false&isMyProduct="+ismyproduct
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