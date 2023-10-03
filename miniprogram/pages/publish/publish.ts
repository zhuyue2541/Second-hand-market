// pages/publish/publish.ts
Page({

  /**
   * 页面的初始数据
   */
  data: {
      productClassify:["手机","文具","其他"],
      currentClass:"选择种类",
      avatar:"/images/tarBar/photo.png",
      pictureMode:"aspectFill",
      photos: [] as string[]
  },  
  choosePhoto: function() {
    var that = this;
    wx.chooseMedia({
      count: 3-that.data.photos.length,
      mediaType: ['image'],
      sourceType: ['album', 'camera'],
      maxDuration: 30,
      camera: 'back',
      success:function(res)  {
        let photo = that.data.photos;
        res.tempFiles.forEach((item, _) => {
          console.log(item.tempFilePath);
          photo.push(item.tempFilePath);
        });
        console.log(photo);
        that.setData({
          photos : photo
        })
      }
    })
  },
  bindPickerChange(e){
    console.log(e);
    let index=e.detail.value;
    this.setData({
      currentClass:this.data.productClassify[index]
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