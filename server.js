const express = require("express");
const app = express();

const cors = require("cors");
app.use(cors());

const bodyParse = require("body-parser");
app.use(bodyParse.urlencoded({ extended: false }));
app.use(bodyParse.json());

const mysql = require("mysql");
const connection = mysql.createConnection({});
// console.log(connection);
// 查询;
app.get("/api/find", (req, res, next) => {
    const sql =
        "select * from weibo.weibo  where retweet_pictures!='无' order by RAND() limit 1;"; //user为表名
    connection.query(sql, (err, results) => {
        console.log(results);
        if (err) {
            return res.json({
                code: 1,
                message: "连接错误",
            });
        }
        res.json({
            code: 200,
            data: results,
        });
    });
});
app.get("/find", function(req, res) {});
//启动服务，端口3001
app.listen(3001, () => {
    console.log("服务启动成功:" + `http://localhost:3001/`);
});
