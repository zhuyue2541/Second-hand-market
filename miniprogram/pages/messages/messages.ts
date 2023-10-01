// pages/messages/messages.ts
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // 我当前锁定的
    myLocking:[{name:"书桌",buyOrSell: "出售",lockTime:"2023.10.01", endTime:"2023.10.10",locker:{wxName:"zhuyue1242",telNo:"123465421fe654",position:"F区10号楼"},id:123,description:"","classify": "其他",image: "/images/product/OIP-C.jpg"},{name:"手机",endTime:"2023.10.10",buyOrSell: "出售",locker:{wxName:"zhuyue1242",telNo:"123465421fe654",position:"F区10号楼"},id:126,description:"","classify": "其他",image: "/images/product/OIP-C.jpg"}, {name:"手机",buyOrSell: "出售",locker:{wxName:"zhuyue1242",telNo:"123465421fe654",position:"F区10号楼"},id:26,description:"","classify": "其他",image: "/images/product/OIP-C.jpg"}, {name:"手机",buyOrSell: "出售",locker:{wxName:"zhuyue1242",telNo:"123465421fe654",position:"F区10号楼"},id:6,description:"","classify": "其他",image: "/images/product/OIP-C.jpg"}],
    // 我出售被锁定的
    beLocking:[{name:"书桌",buyOrSell: "出售",lockTime:"2023.10.01", endTime:"2023.10.10",locker:{wxName:"zhuyue1242",telNo:"123465421fe654",position:"F区10号楼"},id:123,description:"","classify": "其他",image: "/images/product/OIP-C.jpg"},{name:"书桌",buyOrSell: "出售",locker:{wxName:"zhuyue1242",telNo:"123465421fe654",position:"F区10号楼"},id:128,description:"","classify": "其他",image: "/images/product/OIP-C.jpg"},{name:"手机",buyOrSell: "出售",locker:{wxName:"zhuyue1242",telNo:"123465421fe654",position:"F区10号楼"},id:3,description:"","classify": "其他",image: "/images/product/OIP-C.jpg"},{name:"手机",buyOrSell: "出售",locker:{wxName:"zhuyue1242",telNo:"123465421fe654",position:"F区10号楼"},id:1,description:"","classify": "其他",image: "/images/product/OIP-C.jpg"},{name:"手机",buyOrSell: "出售",locker:{wxName:"zhuyue1242",telNo:"123465421fe654",position:"F区10号楼"},id:2,description:"","classify": "其他",image: "/images/product/OIP-C.jpg"}]
  },
  showConfirm: function() {
    wx.showModal({
      title: '确认取消',
      content: '确定要取消锁定吗？',
      success: function(res) {
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