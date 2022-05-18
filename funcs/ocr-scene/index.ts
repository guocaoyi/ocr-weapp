import * as cloud from 'wx-server-sdk'

cloud.init({
  env: cloud.DYNAMIC_CURRENT_ENV.toString(),
})

/**
 *
 * @param event
 * @returns
 */
export const main = async (event: any) => {
  console.info(event?.key ?? '')
  try {
    const result = await cloud.openapi.ocr.bankcard({
      type: 'photo',
      imgUrl:
        'https://img1.baidu.com/it/u=1476707113,1964235182&fm=253&fmt=auto&app=138&f=JPEG',
    })
    return result
  } catch (err) {
    return err
  }
}

export default { main }
