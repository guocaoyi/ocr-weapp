import * as cloud from 'wx-server-sdk'

cloud.init()

/**
 * 查询 OCR 执行次数（总计）
 * @param {*} event
 * @param {*} context
 */
export const main = async (event: unknown) => {
  const wxContext = cloud.getWXContext()

  return {
    event,
    openid: wxContext.OPENID,
    appid: wxContext.APPID,
    unionid: wxContext.UNIONID,
  }
}

export default { main }
