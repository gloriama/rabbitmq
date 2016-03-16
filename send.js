#!/usr/local/bin/node

// This file can be run via terminal with: sudo ./send.js
// You may need to first set permissions: chmod +x ./send.js

// RabbitMQ can use multiple messaging protocol, we'll use amqp here
var amqp = require('amqplib/callback_api');

// Connect to the running RabbitMQ server
// (To start, run rabbitmq-server in terminal, which will run by default on port 5672)
amqp.connect('amqp://localhost', function(err, conn) {

  // Create a channel
  conn.createChannel(function(err, ch) {

    // Define a queue name
    var q = 'hello';

    // Create queue if it doesn't already exist
    ch.assertQueue(q, { durable: false });

    //Send a message to the queue
    for (var i = 0; i < 1000; i ++) {
      ch.sendToQueue(q, new Buffer('Hello World!' + ' ' + i));
      console.log(" [x] Sent 'Hello World!'");
    }
  });

  // Close the connection after a timeout
  setTimeout(function() { conn.close(); process.exit(0) }, 500);
});
