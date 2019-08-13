const express = require('express');
const router = express.Router();
const mongoose = require('mongoose')
mongoose.Promise = require('bluebird');

const server = express();

// mongoose.connect('mongodb://127.0.0.1:27024/mymall', {useMongoClient: true}, function(error, db) {
//     if(error){
//         console.log('连接数据库失败');
//         console.log(error);
//     } else {
//         console.log('连接数据库成功');
//         server.listen(3333,'127.0.0.1',(error)=>{
//             if(error){
//                 console.log('开启服务器失败');
//                 console.log(error);
//             }
//             else {
//                 console.log('开启服务器成功');
//                 console.log('http://127.0.0.1:3333');
//             }
//         })
//     }
// })
mongoose.connect('mongodb://127.0.0.1:27024/mymall', {useMongoClient: true})
const db = mongoose.connection
db.once("open", function () {
    console.log("数据库连接成功");
})
db.on("error", function (error) {
    console.log("数据库连接失败：" + error);
});

db.on('disconnected', function () {
    console.log('数据库连接断开');
})

// mongoose.connect('mongodb://127.0.0.1:27024/mymall',(error)=>{
//     if(error){
//         console.log('连接数据库失败');
//         console.log(error);
//     }
//     else {
//         console.log('连接数据库成功');
//         server.listen(3333,'127.0.0.1',(error)=>{
//             if(error){
//                 console.log('开启服务器失败');
//                 console.log(error);
//             }
//             else {
//                 console.log('开启服务器成功');
//                 console.log('http://127.0.0.1:3333');

//             }
//         })
//     }
// })





/* GET Home page. */
router.all('/', function (req, res, next) {
    res.render('index', {title: 'Express'});
});

module.exports = router;
