// 请求接口地址封装

import { Config } from 'config.js';
class Base {
  constructor() {
    this.baseRequestUrl = Config.restUrl;
  }
  request(params, sCallBack) {
    let url = this.baseRequestUrl + params.url
    // 如果没有type, 则为get
    if (!params.type) {
      params.type = 'GET'
    }
    wx.request({
      url: url,
      data: params.data,
      method: params.type,
      header: {
        'content-type': 'application/json'
      },
      success: res => {   // 成功回调方法
        params.sCallBack && params.sCallBack(res)
      },
      fail: error => {   // 失败回调方法
        console.log(error + '失败...')
      }
    })
  }
  // 获取元素上的绑定的值
  getDataSet(event, key) {
    return event.currentTarget.dataset[key]
  }
}

// 公钥
let privateKey = `-----BEGIN PRIVATE KEY-----
MIICeAIBADANBgkqhkiG9w0BAQEFAASCAmIwggJeAgEAAoGBALDdfq5psreK2+BD3cJTeTC/6vvR18IO/bhRkFsYd+E4/DYvwWo/5uJUuh7UgzUdjY1jeZ1z/ojD0mbCX4yNQHz56u0KBqcB30LhBpUqGeeWydSSxKEH1SJ/drlEUBC2/ej3yXGkugnumyxKqfqQlUSzfncI8huSGTUSBni2W8FxAgMBAAECgYEArcv6AEm9ZL7+8ZG/CIYeQNlWf73k1r0EdWsw/1M7+gWVUWn8FfxVVXMMsd8CT9+KibWGfELPjHVg+7llSyhChOncZfyI2UWRSV9aoO+IPuXSt+OLd/QnG/lpdf4za7tYUQES+UQ3F7nncwfpgFhtMFvBin3irlUffixBAoQlVwECQQDiBnDbi0tiOXqe4fLrJVe0QoJC2KB+Aj3KFfP7XIE8fa5A4STvwXtMjnPczIEs8LfrVreVj18CHjWlKsIAiIylAkEAyFISoSlqMeQuNepfbERz+Jec5Jx0Cr/weQ+uCiNp5PSSo68EK+f5GX+ZRDgjdGFJhLqlDtdmCDKjBxj3wU5L3QJBAI0Hb8vM8lBrhPM2EJhgSIUVKqoC+MEnLN63K/EfGxRfZybcVGu00fZGvEx83ezolhmllg8f0ixEJTzVnQ8wJHECQG1qBqroSAzAKU1hmoU0TnO1vAhSPD+y3tIA8nqvJSPdQksNSSYCKlj3DOvqDdN/X/yTRZx5ok1P+yPhS1HWRjECQQDdRg1FRmnYYUXMTL3kcUq8HA3IMEwHWW6QmcnRnqAxa0x5iwAZtw/iIjLL+dstJzUT43nPQlO9HWQ3fAQXteWB
-----END PRIVATE KEY-----`

// 私钥
let publicKey = `-----BEGIN PUBLIC KEY-----
MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCw3X6uabK3itvgQ93CU3kwv+r70dfCDv24UZBbGHfhOPw2L8FqP+biVLoe1IM1HY2NY3mdc/6Iw9Jmwl+MjUB8+ertCganAd9C4QaVKhnnlsnUksShB9Uif3a5RFAQtv3o98lxpLoJ7pssSqn6kJVEs353CPIbkhk1EgZ4tlvBcQIDAQAB
-----END PUBLIC KEY-----`
export {
  Base,
  privateKey,
  publicKey
}