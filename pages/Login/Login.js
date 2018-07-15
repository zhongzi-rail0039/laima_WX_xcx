// pages/Login/Login.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  CellPhone: function () {
    wx.navigateTo({
      url: './cellPhoen/cellPhoen'
    })
  },

  // getPhoneNumber: function (event) {
  //   console.log(event.detail.errMsg);
  //   console.log(event.detail.iv);
  //   console.log(event.detail.encryptedData);

  //   if (event.detail.errMsg == 'getPhoneNumber:fail user deny') {
  //     wx.showModal({
  //       title: '提示',
  //       showCancel: false,
  //       content: '未授权,请重新授权',
  //       success: function (res) {}
  //     })
  //   } else {
  //     wx.showModal({
  //       title: '提示',
  //       showCancel: false,
  //       content: '同意授权',
  //       success: function (res) {}
  //     })
  //   }
  // },

  getPhoneNumber: function() {
    
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})