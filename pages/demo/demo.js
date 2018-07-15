// pages/demo/demo.js
let RSA = require('../../utils/wxapp_rsa.js')
import { privateKey, publicKey } from '../../utils/base.js'
let Sig = ""
let encStr = ""

Page({

  /**
   * 页面的初始数据
   */
  data: {
    output: '上方输入框输入数据点击后下方对应按钮转换',
    input: ''
  },

  input_rsa: function (event) {
    console.log(event);
    this.setData({
      input: event.detail.value
    })
  },

  jiami: function () {
    let input_rsa = this.data.input;
    let encrypt_rsa = new RSA.RSAKey();
    encrypt_rsa = RSA.KEYUTIL.getKey(publicKey);
    console.log(encrypt_rsa)
    console.log('加密RSA:')
    encStr = encrypt_rsa.encrypt(input_rsa)
    encStr = RSA.hex2b64(encStr);
    console.log("加密结果：" + encStr)
    this.setData({
      output: encStr
    })
  },

  jiemi: function () {
    let decrypt_rsa = new RSA.RSAKey();
    decrypt_rsa = RSA.KEYUTIL.getKey(privateKey)
    console.log('解密RSA')
    console.log(decrypt_rsa)
    console.log(encStr)
    if (encStr.length <= 0) {
      wx.showToast({
        title: '请先进行加密...',
        icon: 'loading',
        duration: 1000
      })
    } else {
      encStr = RSA.b64tohex(encStr)
      console.log(encStr)
      let decStr = decrypt_rsa.decrypt(encStr)
      console.log(decStr)
      this.setData({
        output: decStr
      })
    }
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