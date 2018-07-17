/*
openid:"oRW9V44_akZitHlT1N-5Cj2JWvYw"   28
session_key:"J3bhFsvdx+kkqYjE0suh5w=="  24
unionid:"osXWExAzYJIfiTZ1cfacSWHL7ewE"
*/
// pages/demo/demo.js
let RSA = require('../../utils/wxapp_rsa.js')
import { privateKey, publicKey } from '../../utils/base.js'
let Sig = ""
let encStr = ""

const APP_ID ='wx74c5fe138292bbda';
const APP_SECRET ='5b39bd8bc6fbff9d1ef3ef479e9e554c';
var OPEN_ID=''
var SESSION_KEY=''
Page({

  bingGetUserInfo: function(event) {
    console.log(event.detail);
    let that = this;
    wx.login({
      success: function(res) {
        // console.log('获取登录Code:' + data.res)
        // let postData = {
        //   code: data.code
        // };
        wx.request({
          url: 'https://api.weixin.qq.com/sns/jscode2session?appid=APPID&secret=SECRET&js_code=JSCODE&grant_type=authorization_code',
          data: {
            appid:APP_ID,
            secret:APP_SECRET,
            js_code:res.code,
            grant_type:'authorization_code'
          },
          method: 'GET',
          // header: {
          //   'content-type': 'application/json',
          // },
          success: function(res) {
            console.log(res.data);
            OPEN_ID = res.data.openid;
            SESSION_KEY = res.data.session_key;
            console.log(OPEN_ID.length)
            console.log(SESSION_KEY.length)
          },
          fail: function(error) {
            console.log(error);
          }
        })
      },
      fail: function() {
        console('登录获取Code失败！');
      }
    })
  },
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