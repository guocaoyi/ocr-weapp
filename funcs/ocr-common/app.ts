import { DB } from 'qm-lowcode-sdk'

DB.init()

const getData = async () => {
  return new Promise((resolve, reject) => {
    var db = DB.database()
    var $ = db.command.aggregate
    db.collection('orders')
      .aggregate()
      .lookup({
        from: 'books',
        localField: 'book',
        foreignField: 'title',
        as: 'bookList',
      })
      .replaceRoot({
        newRoot: $.mergeObjects([$.arrayElemAt(['$bookList', 0]), '$$ROOT']),
      })
      .project({
        bookList: 0,
      })
      .end()
      .then((res) => {
        resolve(res)
      })
      .catch((err) => {
        reject(err)
      })
  })
}

// 云函数入口方法
export const mian = async (cxt: Content) => {
  const result = await getData()
  return {
    errCode: 0,
    errMsg: '',
    data: result,
  }
}
