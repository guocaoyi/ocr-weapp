import cloud from 'wx-server-sdk'
import { createWorker } from 'tesseract.js'
import path from 'path'

cloud.init()
const worker = createWorker({
  langPath: path.join(__dirname, '.', 'lang-data'),
  logger: (m) => console.log(m),
})

;(async () => {
  await worker.load()

  await worker.loadLanguage('eng')
  await worker.loadLanguage('chi_sim')

  await worker.initialize('eng')
  await worker.initialize('chi_sim')
})()

/**
 * 通用型 OCR 识别（基于 tesseract.js）
 * @param {*} event
 * @param {*} context
 */
export const main = async (event: unknown) => {
  console.time('get wx context')
  const wxContext = cloud.getWXContext()
  console.timeEnd('get wx context')

  console.time('recognize')
  const {
    data: { text },
  } = await worker.recognize(
    'https://tesseract.projectnaptha.com/img/eng_bw.png',
  )
  console.timeEnd('recognize')

  console.log('xxxx', text)
  await worker.terminate()

  return {
    event,
    openid: wxContext.OPENID,
    appid: wxContext.APPID,
    unionid: wxContext.UNIONID,
    text,
  }
}

export default { main }
