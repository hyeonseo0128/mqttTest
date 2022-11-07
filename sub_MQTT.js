const mqtt = require('mqtt');

const client = mqtt.connect('mqtt://gcs.iotocean.org:1883');

client.subscribe('/Mobius/mqtest/203.253.128.161:8888');

client.on('message', function (topic, message) {
	console.log("message is "+ message);
	console.log("topic is "+ topic);
});