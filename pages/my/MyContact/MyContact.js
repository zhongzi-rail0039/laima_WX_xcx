// pages/my/MyContact/MyContact.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
  
  },

  /**
   * 生命周期函数--监听页面加载
   */
  studioPhoneCall: function(event) {
    wx.makePhoneCall({
      phoneNumber: '0519-88198889',
      success: function () {
        console.log("拨打电话成功")
      },
      fail: function() {
        console.log("拨打电话失败！")
      }
    })
  },

  cellphone: function (event) {
    wx.makePhoneCall({
      phoneNumber: '158-6189-8889',
      success: function () {
        console.log("拨打电话成功")
      },
      fail: function() {
        console.log("拨打电话失败！")
      }
    })
  },

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