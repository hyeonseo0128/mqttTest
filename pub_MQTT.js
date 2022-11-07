const mqtt = require('mqtt');

const client = mqtt.connect('mqtt://gcs.iotocean.org:1883');

count = 0

console.log("=== Send via MQTT ===");

setInterval(
    ()=>{
        client.publish('/Mobius/mqtest/203.253.128.161:8888', count.toString());
        count++
        if (count > 10000) {
            count = 0
        }
    }, 500
)

