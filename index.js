const _ = require('lodash');
const express = require('express');

const app = express();

app.get('/health', (_req, res) => {
    res.json({ status: 'ok', deps: { lodash: _.VERSION, express: '4.17.1' } });
});

app.listen(3000, () => {
    console.log('sca-lifecycle-test running on port 3000');
});
