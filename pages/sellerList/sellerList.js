
//获取应用实例
var app = getApp()
Page({
  data: {
    urls: [],
    // 当前访问的url索引
    currentUrlIndex: 0,
    // 获取到的文章
    articles: [],
    // 控制上拉到底部时是否出现 “数据加载中...”
    hidden: true,
    loadingData: false
  },

  ShopDetails: function(event) {
    console.log(event);
    wx.navigateTo({
      url: '../ShopDetails/ShopDetails'
    })
  },
  onLoad: function(options) {
    this.loadData(false)
  },
  // loadData: function(tail, callback) {
  //   let that = this
  //   let urlIndex = that.data.currentUrlIndex
  //   wx.request({
  //     url: that.data.urls[urlIndex],
  //     success: function(r) {
  //       let oldArticles = that.data.articles,
  //       newArticles = tail ? oldArticles.concat(r.data.articles) : r.data.articles;
  //       that.setData({
  //         articles: newArticles,
  //         currentUrlIndex: (urlIndex + 1) >= that.data.urls.length ? 0 : urlIndex + 1
  //       });
  //       if (callback) {
  //         callback();
  //       }
  //     },
  //     error: function(r) {
  //       console.log('error', r);
  //     },
  //     complete: function() {}
  //   })
  // },
  // onPullDownRefresh: function() {
  //   console.info('onPullDownRefresh');  
  //   var loadingData = this.data.loadingData,  
  //     that = this;
  //     if (loadingData) {
  //       return
  //     }
  //     wx.showNavigationBarLoading()
  //     setTimeout(function() {
  //       that.loadData(false, ()=>{
  //         that.setData({
  //           loadData: false
  //         });
  //         wx.stopPullDownRefresh();
  //         wx.hideNavigationBarLoading();
  //         console.log('下拉数据加载完成.')
  //       })
  //     }, 1000);
  // },
  // onReachBottom: function() {
  //   console.log('onReachBottom')
  //   let hidden = this.data.hidden,
  //   loadData = this.data.loadData,
  //   that = this;
  //   if (hidden) {
  //     this.setData({
  //       hidden: false
  //     });
  //     console.log(this.data.hidden);
  //   }
  //   this.setData({
  //     loadData: true
  //   })

  //   wx.showLoading({
  //     title: '数据加载中...'
  //   })

  //   setTimeout(function() {
  //     that.loadData(true, ()=> {
  //       that.setData({
  //         hidden: true,
  //         loadingData: false
  //       });
  //       wx.hideLoading();
  //     });
  //     console.log('上拉数据加载完成...');
  //   }, 1000)
  // }
})
