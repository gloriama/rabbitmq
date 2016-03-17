# RabbitMQ

This repo is a walkthrough of [RabbitMQ's tutorial](https://www.rabbitmq.com/tutorials/tutorial-one-javascript.html) in JavaScript.

RabbitMQ is an open-source message queueing system. It can be run on any operating system and used in many different programming languages.

## Why message queueing?

Whenever there are a lot of tasks that need to be completed, there is the possibility that the service in charge of completing those tasks cannot handle the volume directly. Queueing allows requests to be temporarily held in a "waiting line," and dealt with one at a time as the receiver becomes ready to handle the next task.

In addition, there are some more fancy things that can be done with message queues, which we will go over below. For example, there can be multiple receivers listening to the same queue. This allows for an efficient division of work between them. This concept is central to service-oriented architecture, where there may be many instances of the same service running, all ready to be able to handle some kind of task.

## How it works

We'll walk through the concepts of RabbitMQ's tutorials in turn, emphasizing overall understanding of what queues can do for us.

To learn the exact syntax, you should go through RabbitMQ's tutorials directly.

To learn how this is all working under the hood, you should try implementing your own queueing system!

### A simple queue

#### Queueing concepts

* **producer**: something that sends (produces) messages
* **consumer**: something that receives (consumes) messages
* **queue**: the "waiting line" that holds messages that are yet to be consumed

We'll starting with one producer, one consumer, and one queue. The **producer** creates messages and adds them to a **queue**. The **consumer** receives the messages one at a time, handling them in the order they were added to the queue.

#### RabbitMQ terminology

* **connection**: a connection to the RabbitMQ server
* **channel**: each connection can have many channels that producers and consumers create and use
* **queue**: eaach channel can have many queues that producers and consumers create and use