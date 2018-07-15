// pages/my/my.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userInfo: {}
  },

  // 登录 / 注册
  // MyLogin: function() {
  //   wx.navigateTo({
  //     url: '../Login/Login'
  //   })
  // },

  // 我的二维码
  TwoDimensionCode: function() {
    wx.navigateTo({
      url: './MyTwoDimensionCode/MyTwoDimensionCode'
    })
  },

  // 我的收获地址
  HarvestAddress: function() {
    wx.navigateTo({
      url: './HarvestAddress/HarvestAddress'
    })
  },

  // 联系我们
  ContactUs: function() {
    wx.navigateTo({
      url: './MyContact/MyContact'
    })
  },

  // 绑定手机
  CellPhone: function() {
    wx.navigateTo({
      url: './MyCellPhone/MyCellPhone'
    })
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