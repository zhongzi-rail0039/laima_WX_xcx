
//获取应用实例
import {SellerList} from './sellerList-mode.js'
let sellerlist = new SellerList()
var app = getApp()
Page({
  data: {
    
  },
  ShopDetails: function(event) {
    console.log(event);
    wx.navigateTo({
      url: '../ShopDetails/ShopDetails'
    })
  },
  onLoad: function(options) {
    // this.loadData(false)
    this._loadData()
  },
  _loadData: function() {
    sellerlist.getSellerList(res => {
      console.log(res.data.data)
      let sellArr = res.data.data
      this.setData({
        sellerArr: sellArr
      })
    })
  }
})
