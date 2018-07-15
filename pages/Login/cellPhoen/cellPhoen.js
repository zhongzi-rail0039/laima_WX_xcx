// pages/Login/cellPhoen/cellPhoen.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    phone: '', // 手机号
    code: '',
    iscode: null,
    codename: '获取验证码'
  },

  getPhoneValue: function (event) {
    this.setData({
      phone: event.detail.value
    })
  },
  getCodeValue: function (event) {
    console.log(event)
    this.setData({
      code: event.detail.value
    })
  },
  getCode: function() {
    let acode = this.data.phone
    let _this = this
    let myreg = /^(14[0-9]|13[0-9]|15[0-9]|17[0-9]|18[0-9])\d{8}$$/
    if (this.data.phone == "") {
      wx.showToast({
        title: '手机号不能为空',
        icon: 'none',
        duration: 1500
      })
      return false
    } else {
      wx.request({
        url: '',
        data: {},
        header: {  
          'content-type': 'application/json'  
        }, 
        success: res => {
          console.log(res.data.data);
          _this.setData({
            iscode: res.data.data
          })
          let num = 61;
          let timer = setInterval(function () {
            num--;
            if (num <= 0) {
              clearInterval(timer)
              _this.setData({
                codename: '重新发送',
                disabled: false
              })
            } else {
              _this.setData({
                codename: num + '秒'
              })
            }
          }, 1000)
        }
      }) 
    }
  },

  // 获取验证码
  getVerificationCode: function() {
    let _this = this
    _this.setData({
      disabled: true
    })
  },
  // 提交表单信息
  save: function() {
    let myreg = /^(14[0-9]|13[0-9]|15[0-9]|17[0-9]|18[0-9])\d{8}$$/;
    if (this.data.phone == '') {
      wx.showToast({
        title: '手机不能为空',
        icon: 'none',
        duration: 1000
      })
      return false
    } else if (!myreg.test(this.data.phone)) {
      wx.showToast({
        title: '请输入正确的手机号',
        icon: 'none',
        duration: 1000
      })
      return false
    }
    if (this.data.code == '') {
      wx.showToast({
        title: '验证码不能为空',
        icon: 'none',
        duration: 1000
      })
      return false
    }else if (this.data.code != this.data.iscode) {
      wx.showToast({
        title: '验证码错误',
        icon: 'none',
        duration: 1000
      })
      return false
    } else {
      wx.setStorageSync('phone', this.data.phone)
      wx.redirectTo({
        url: '../../home/home'
      })
    }
  },

  // 提交信息

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