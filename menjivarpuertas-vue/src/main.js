const express = require('express');
const cors = require('cors');
const app = express();
const puerto = 3000;
app.use(cors());

createApp(App).use(router).mount('#app')
