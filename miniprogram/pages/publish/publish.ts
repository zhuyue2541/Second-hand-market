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
  showuploadfail() {
    wx.showToast({
      title: "上传失败请重试",
      icon: "error",
      duration: 2000
    })
  },
  showuploadsucc() {
    wx.showToast({
      title: "上传成功",
      icon: "success",
      duration: 2000
    })
    // this.clear();  最后取消TODO
  },
  submitMsg2server(pictures: string[]) {
    var that = this;
    var productMsg = {
      'pictrues': pictures,
      'productName': that.data.productName,
      'myInformation': that.data.myInformation,
      'currentClass': that.data.currentClass,
      'describe': that.data.describe,
      'neighborhood': that.data.neighborhoodArray[that.data.neighborhoodIndex],
      'buyOrSells': that.data.buyOrSells[that.data.buyOrSellIndex]
    };
    wx.request({
      url: 'http://192.168.0.102:6874/weixin/neibor/publish/msg', // 替换为你的服务器端 URL
      method: 'POST',
      data: productMsg,
      header: {
        'content-type': 'application/json' // 设置请求头的 Content-Type
      },
      success: function (res) {
        // 请求成功的回调函数
        console.log(res.data); // 输出服务器返回的数据
        that.showuploadsucc();
      },
      fail: function (error) {
        // 请求失败的回调函数
        console.log(error);
      }
    });
  },
  submitPicture2server() {
    let that = this;
    let serverPhoto = [] as string[];

    for (var i = 0; i < this.data.photos.length; i++) {

      wx.uploadFile({
        url: 'http://192.168.0.102:6874/weixin/neibor/publish/picture',
        filePath: that.data.photos[i],
        name: 'image',
        formData: {
          'current': i
        },
        success: function (res) {
          var data = res.data.split(",");
          serverPhoto.push(data[0])
          if (parseInt(data[1]) + 1 == that.data.photos.length) {
            that.submitMsg2server(serverPhoto);
          }
        },
        fail: function (res) {
          // 处理上传失败后的逻辑
          that.showuploadfail();
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
      that.submitPicture2server();
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