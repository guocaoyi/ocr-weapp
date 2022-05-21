# CHANGELOG

```txt
规则：
  1、版本管理遵循 SemVer2.0 规范；
  2、以上线版本号（x.y.z）为基石版本，beta\alpha\rc 将自动挂靠到基石版本下；
  3、条目（一级）请使用面向用户的产品相关术语叙述，技术明细可放在子条目（二级）；叙述尽量简洁明了；
  4、标识符：feat（新增）、fix（修复）、update（更新）、perf（优化）、remove（去除）、other（其他）；
  5、版本时间戳遵守 yyyy.MM.dd 格式，且标识版本 Release 时间；且按时间倒序编写；
```

## 0.1.2 [2022.05.19]

- perf: use css-in-js lib linaria replace less

## 0.1.1 [2022.05.18]

- feat: common components\layout\nav
- feat: format & lint
- remove: cloudfunctions folders(use tsc build ./funcs to replace)

## 0.1.0 [2022.05.17]

- feat: taro init
- feat: add pages(archive\common\detail\help\index)
- feat: create wx cloud functions
