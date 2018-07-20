import {Base} from '../../utils/base.js'

class SellerList extends Base {
  constructor() {
    super()
  }
  getSellerList(callBack) {
    let params = {
      url: '/laima/user/findShopsByType?version=3&pageNum=2&accountId=125&type=4',
      sCallBack: res => {
        callBack && callBack(res)
      }
    }
    this.request(params)
  }
}

export {SellerList}