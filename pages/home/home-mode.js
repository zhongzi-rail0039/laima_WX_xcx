import {Base} from '../../utils/base.js'
class Home extends Base {
  constructor() {
    super();
  }
  getBannerData(callBack) {
    let params = {
      url: '/laima/user/getActivityList?version=2&pageNum=2&accountId=2&category=',
      sCallBack: res => {
        callBack && callBack(res)
      }
    }
    this.request(params)
  }
}

export {Home}
