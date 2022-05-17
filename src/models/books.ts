import Taro from '@tarojs/taro'

// 1. 获取数据库引用
const db = Taro.cloud.database()
// 2. 构造查询语句
// collection 方法获取一个集合的引用
// where 方法传入一个对象，数据库返回集合中字段等于指定值的 JSON 文档。API 也支持高级的查询条件（比如大于、小于、in 等），具体见文档查看支持列表
// get 方法会触发网络请求，往数据库取数据
db.collection('books')
  .where({
    publishInfo: {
      country: 'United States',
    },
  })
  .get()

Taro.cloud
  .callFunction({
    // 要调用的云函数名称
    name: 'add',
    // 传递给云函数的event参数
    data: {
      x: 1,
      y: 2,
    },
  })
  .then((res) => {
    // output: res.result === 3
  })
  .catch((err) => {
    // handle error
  })
