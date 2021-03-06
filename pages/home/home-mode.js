import {Base} from '../../utils/base.js'
class Home extends Base {
  constructor() {
    super();
  }
  getBannerData(callBack) {
    let params = {
      url: '',
      sCallBack: res => {
        callBack && callBack(res)
      }
    }
    this.request(params)
  }
}

export {Home}
