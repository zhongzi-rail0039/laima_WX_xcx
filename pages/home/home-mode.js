import {Base} from '../../utils/base.js'
class Home extends Base {
  constructor() {
    super();
  }
  getBannerData(callBack) {
    let params = {
      url: '/laima/user/getActivityList?version=1&pageNum=1&accountId=1&category=',
      sCallBack: res => {
        callBack && callBack(res)
      }
    }
    this.request(params)
  }
}

export {Home}
