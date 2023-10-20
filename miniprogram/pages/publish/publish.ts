// pages/publish/publish.ts
Page({

  /**
   * 页面的初始数据
   */
  data: {
    neighborhoodArray: ['雅居乐-湖居笔记', '智慧城'],
    buyOrSells: ["赠送", "出售", "求购"],
    buyOrSellIndex: 0,
    neighborhoodIndex: 0,
    showDelete: false,
    productClassify: ["手机", "文具", "其他"],
    currentClass: "选择种类",
    avatar: "/images/tarBar/photo.png",
    pictureMode: "aspectFit",
    photos: [] as string[],
    myInformation: "",
    describe: "",
    productName: ""
  },
  bindPosition: function (e) {
    this.setData({
      neighborhoodIndex: e.detail.value
    })
  },
  bindScell(e) {
    this.setData({
      buyOrSellIndex: e.detail.value
    })
  },
  onInputDes(e) {
    this.setData({
      describe: e.detail.value
    })
  },
  onInput(e) {
    console.log(e.detail.value);
    console.log(this.data.productName);
    const productName = e.detail.value;
    this.setData({
      productName
    })
  },
  deleteOnePicture(e) {
    console.log("delete");
    console.log(e);
    var index = e.currentTarget.dataset.index;
    var photo = [] as string[];
    this.data.photos.forEach((item, i) => {
      if (i != index) {
        console.log(item)
        console.log(i)
        photo.push(item)
      }
    })
    this.setData({
      photos: photo
    })
  },
  deletePicture(e) {
    console.log(e);
    let that = this;
    wx.showModal({
      title: '删除图片',
      content: '',
      success: function (res) {
        if (res.confirm) {
          console.log('用户点击确定');
          that.deleteOnePicture(e);
        } else if (res.cancel) {
          console.log('用户点击取消');
          // 在这里执行取消操作
        }
      }
    })

  },
  submit2server() {
    let that = this;
    let serverPhoto = [] as string[];
    for (var i = 0; i < this.data.photos.length; i++) {
      wx.uploadFile({
        url: 'http://192.168.0.102:6874/weixin/neibor/publish',
        filePath: that.data.photos[i],
        name: 'image',
        formData: {
          'text': 'Hello World'
        },
        success: function (res) {
          var data = res.data;
          console.log(res)
          serverPhoto.push(data)
          // 处理上传成功后的逻辑
          // console.log(serverPhoto)
        },
        fail: function (res) {
          // 处理上传失败后的逻辑
        }
      })
    }    
  },
  checkInput() {
    let that = this;
    if (this.data.productName === "") {
      wx.showToast({
        title: "请填写名称",
        mask: true,
        icon: "error"
      });
    } else if (this.data.myInformation === "") {
      wx.showToast({
        title: "请选联系方式",
        mask: true,
        icon: "error"
      });
    }
    else if (this.data.currentClass === "选择种类") {
      wx.showToast({
        title: "请选择种类",
        mask: true,
        icon: "error"
      });
    }
    else {
      that.submit2server();
      wx.showToast({
        title: "提交成功",
        mask: true,
        icon: "success"
      });
      that.clear();
    }
  },

  submit() {
    let that = this;
    wx.showModal({
      title: '确认发布',
      content: '',
      success: function (res) {
        if (res.confirm) {
          console.log('用户点击确定');
          that.checkInput();
        } else if (res.cancel) {
          console.log('用户点击取消');
          // 在这里执行取消操作
        }
      }
    })
  },
  clear() {
    console.log(this.data.productName);
    this.setData({
      myInformation: "",
      photos: [],
      currentClass: "选择种类",
      describe: "",
      productName: ""
    })
  },

  mycontact(e) {
    this.setData({
      myInformation: e.detail.value
    })
  },
  choosePhoto: function () {
    var that = this;
    wx.chooseMedia({
      count: 3 - that.data.photos.length,
      mediaType: ['image'],
      sourceType: ['album', 'camera'],
      maxDuration: 30,
      camera: 'back',
      success: function (res) {
        let photo = that.data.photos;
        res.tempFiles.forEach((item, _) => {
          console.log(item.tempFilePath);
          photo.push(item.tempFilePath);
        });
        console.log(photo);
        that.setData({
          photos: photo
        })
      }
    })
  },
  bindPickerChange(e) {
    console.log(e);
    let index = e.detail.value;
    this.setData({
      currentClass: this.data.productClassify[index]
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