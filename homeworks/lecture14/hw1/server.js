const express = require('express');
const app = express();
const path = require('path');

// 设置静态文件路径
app.use(express.static(path.join(__dirname, '.')));

// 定义根路由
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// 设置服务器端口
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

