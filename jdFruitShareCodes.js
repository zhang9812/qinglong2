/*
东东农场互助码
此文件为Node.js专用。其他用户请忽略
支持京东N个账号
 */
//云服务器腾讯云函数等NOde.js用户在此处填写京东东农场的好友码。
// 同一个京东账号的好友互助码用@符号隔开,不同京东账号之间用&符号或者换行隔开,下面给一个示例
// 如: 京东账号1的shareCode1@京东账号1的shareCode2&京东账号2的shareCode1@京东账号2的shareCode2
let FruitShareCodes = [
    '4df6bee3fb5b42279621a849f93a4e43@88b924611b234cfbb441effb8acc5c4b@fa551b81de58405fb23d85503d9142ed',
    '977d4e086b66462f8c1afc0da5c9cc03@4df6bee3fb5b42279621a849f93a4e43@88b924611b234cfbb441effb8acc5c4b',
    'fa551b81de58405fb23d85503d9142ed@977d4e086b66462f8c1afc0da5c9cc03@4df6bee3fb5b42279621a849f93a4e43',
    '88b924611b234cfbb441effb8acc5c4b@fa551b81de58405fb23d85503d9142ed',
    '977d4e086b66462f8c1afc0da5c9cc03@4df6bee3fb5b42279621a849f93a4e43@604a07be6a7a46539915bfc400c21dd8',
   '4df6bee3fb5b42279621a849f93a4e43@88b924611b234cfbb441effb8acc5c4b@fa551b81de58405fb23d85503d9142ed',
]

// 从日志获取互助码
// const logShareCodes = require('./utils/jdShareCodes');
// if (logShareCodes.FRUITSHARECODES.length > 0 && !process.env.FRUITSHARECODES) {
//   process.env.FRUITSHARECODES = logShareCodes.FRUITSHARECODES.join('&');
// }

// 判断github action里面是否有东东农场互助码
if (process.env.FRUITSHARECODES) {
  if (process.env.FRUITSHARECODES.indexOf('&') > -1) {
    console.log(`您的东东农场互助码选择的是用&隔开\n`)
    FruitShareCodes = process.env.FRUITSHARECODES.split('&');
  } else if (process.env.FRUITSHARECODES.indexOf('\n') > -1) {
    console.log(`您的东东农场互助码选择的是用换行隔开\n`)
    FruitShareCodes = process.env.FRUITSHARECODES.split('\n');
  } else {
    FruitShareCodes = process.env.FRUITSHARECODES.split();
  }
} else {
  console.log(`由于您环境变量(FRUITSHARECODES)里面未提供助力码，故此处运行将会给脚本内置的码进行助力，请知晓！`)
}
for (let i = 0; i < FruitShareCodes.length; i++) {
  const index = (i + 1 === 1) ? '' : (i + 1);
  exports['FruitShareCode' + index] = FruitShareCodes[i];
}
