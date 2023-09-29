// pages/home/home.ts
Page({

  /**
   * 页面的初始数据
   */
  // data: {
  //   searchKeyword: '', // 搜索关键词
  //   searchResult: ' ' ,// 搜索结果

  // },
  data: {
    //商品
    products: [
      {id:123,name:"书桌",description:"宽1.6米，高55cm" ,"classify":"其他",buyOrSell:"出售",image:"/images/product/OIP-C.jpg" },
      {id:124,name:"手机1f3a5ef13a5ef1a31",description:"iphone6s,功能正常1234354354a35ef4a35f4a34fa35e4f3a5ef13ase5f4e3aw5f4 fse3f5a1se3f5a1ef3a5ef13se5f1a3ef13f1e3f1" ,buyOrSell:"出售" ,classify:"手机"},
      {id:125,name:"手机",description:"iphone6s,功能正常iphone6s,功能正常iphone6s,功能正常iphone6s,功能正常iphone6s,功能正常iphone6s,功能正常" ,buyOrSell:"出售" ,classify:"手机"},
      {id:126,name:"手机",description:"iphone6s,功能正常" ,buyOrSell:"赠送" ,classify:"手机"},
      {id:127,name:"手机",description:"iphone6s,功能正常" ,buyOrSell:"赠送" ,classify:"手机"},
      {id:128,name:"手机",description:"iphone6s,功能正常" ,buyOrSell:"赠送" ,classify:"手机"},
      {id:129,name:"手机",description:"iphone6s,功能正常" ,buyOrSell:"求购" ,classify:"手机"},
      {id:130,name:"手机",description:"iphone6s,功能正常" ,buyOrSell:"求购" ,classify:"手机"},
      {id:131,name:"手机",description:"iphone6s,功能正常" ,buyOrSell:"求购" ,classify:"手机"},
      {id:133,name:"手机",description:"iphone6s,功能正常" ,buyOrSell:"求购" ,classify:"手机"},
      {id:154,name:"手机",description:"iphone6s,功能正常" ,buyOrSell:"求购" ,classify:"手机"},{id:156,name:"手机",description:"iphone6s,功能正常" ,buyOrSell:"卖" ,classify:"手机"},{id:157,name:"手机",description:"iphone6s,功能正常" ,buyOrSell:"卖" ,classify:"手机"},{id:158,name:"手机",description:"iphone6s,功能正常" ,buyOrSell:"卖" ,classify:"手机"}
    ]      ,
    page: 1,
    pageSize: 10,

    // 小区
    neighborhoodArray: ['雅居乐-湖居笔记', '智慧城'],
    neighborhoodIndex: 0,

    currentTab: '0',
    categories: [{ name: "所有", selected: true },
    { name: "文具", selected: false },
    { name: "电子产品1546fe", selected: false },
    { name: "电子产品1546fe", selected: false },
    { name: "电子产品1546fe", selected: false },
    { name: "电子产品1546fe", selected: false },
    { name: "电子产品1546fe", selected: false },
    { name: "电子产品1546fe", selected: false },
    { name: "电子产品1546fe", selected: false },
    { name: "电子产品1546fe", selected: false },
    { name: "电子产品1546fe", selected: false },
    { name: "电子产品1546fe", selected: false },
    { name: "电子产品1546fe", selected: false },
    { name: "电子产品1546fe", selected: false },
    { name: "电子产品1546fe", selected: false },
    { name: "电子产品1546fe", selected: false },
    { name: "电子产品1546fe", selected: false },]
  },
  selectCategory: function (e) {
    const index = e.currentTarget.dataset.index;
    console.log(index);
    const categories = this.data.categories;
    categories.forEach((item, i) => {
      item.selected = i === index;
    });
    this.setData({
      categories: categories
    });
  },
  bindPickerChange: function (e) {
    this.setData({
      neighborhoodIndex: e.detail.value
    })
  },
  loadMoreData:function(e){

  },
  switchTab: function (e) {
    const index = e.currentTarget.dataset.index;
    this.setData({
      currentTab: index
    });
  },

  onInput(e: { detail: { value: any; }; }) {
    console.log(e),
      this.setData({
        searchKeyword: e.detail.value
      });
  },
  onSearch(e: any) {
    console.log(e),
      console.log(this.data.searchKeyword)
    // 这里可以根据搜索关键词进行搜索操作，然后更新搜索结果
    // 示例中直接将搜索关键词展示在搜索结果区域
    this.setData({
      searchResult: this.data.searchKeyword
    });
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad() {
    // this.getGridList()
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