import * as cloud from 'wx-server-sdk'

cloud.init()

const db = cloud.database()
const _ = db.command

/**
 *
 * @param event
 * @returns
 */
export const main = async () => {
  console.info('_.inc(10)', _.inc(10))
  console.info("_.push('mini-program')", _.push('mini-program'))
  console.info("_.eq('xxxxx')", _.eq('xxxxx'))
  console.info(
    `
  _.eq({
    publishYear: 2018,
    language: 'zh-CN'
  })`,
    _.eq({
      publishYear: 2018,
      language: 'zh-CN',
    }),
  )

  console.info(
    'xxxx',
    _.all([
      _.elemMatch({
        area: _.gt(100),
        age: _.lt(2),
      }),
      _.elemMatch({
        type: 'mall',
        age: _.gt(5),
      }),
    ]),
  )

  return {}
}

export default { main }
