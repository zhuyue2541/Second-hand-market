// pages/home/home.ts
Page({

  /**
   * 页面的初始数据
   */
  data: {
    searchKeyword: '', // 搜索关键词
    searchResult: ' ' // 搜索结果
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