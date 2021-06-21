var redis = require('redis');
var client = redis.createClient();

client.on('connect', function () {
    console.log('Redis Connected');
});

exports.getItem = (req, res, next) => {
    client.get(req.body.key, function (err, reply) {
        res.json({ success: 'True', value: reply });
    });
};

exports.setItem = (req, res, next) => {
    client.set(req.body.key, req.body.value, function (err, reply) {
        res.json({ success: 'True', value: reply });
    });
};

exports.deleteItem = (req, res, next) => {
    client.del(req.body.key, function (err, reply) {
        res.json({ success: 'True', value: reply });
    });
};