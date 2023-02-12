---
layout: post
title:  "Data Transmission Demystified: Understanding HTTP, TCP, and Video Streaming Protocols"
date:   2023-02-12 22:17:20 +0700
categories: Internet Protocols, HTTP, UDP, Live Streaming	
---



For long time i thought HTTP is a extented version of TCP but later i came to know about the differnce in different protocols and their different use cases

In HTTP 1.1 and HTTP 2 uses TCP so my natural thinking was HTTP was modified version of TCP which fundementally uses TCP but has extended features for message encoding

But TCP is a Transport Protocol and HTTP is message protocol.

Let's imagine that you want to send a letter to a friend who lives far away.

The message protocol can be thought of as the format and structure of the letter itself - for example, the font, the size of the paper, and the layout. In the same way, a message protocol defines the structure and format of data being transmitted between applications.

The transport protocol, on the other hand, can be thought of as the delivery method for your letter. For example, you might choose to send your letter by mail, or by a courier service that guarantees delivery. In the same way, a transport protocol is responsible for the reliable and efficient delivery of data between applications.

So, in this scenario, the message protocol is the letter you write, and the transport protocol is the way in which the letter is delivered to your friend. Both are important components in ensuring that your message is delivered accurately and efficiently.

So usage of HTTP doenst mean we have to use TCP thats the case with HTTP/3 which uses the QUIC (Quick UDP Internet Connections).

This is the case with video streaming protocol. When you hear website like youtube uses ABR(Adaptive Bitrate) Protocol it doesnt mean it is using TCP and HTTP.

Message protocols like TCP set standard way for browser to request and recieve data, but video streaming protocol decide the techiques for how it can be done and then Transfer protocols is the underlying protocol that provides reliable, ordered delivery of data over the Internet. TCP is used in combination with IP (Internet Protocol) to form the Internet's primary means of delivering data from one place to another. TCP provides flow control, error detection, and retransmission of lost or corrupted data, ensuring that video content is delivered reliably and without errors.

Lets wrap this up with a nice real life example taking youtube as example.Suppose you are at a restaurant. The menu(content) you see represents the content you are looking for. The chef who provides food(Youtube Servers) represents the provider of the information. The chef prepares different types of foods(Information with different bit rates) and you communicate with the chef what you want via waiter(HTTP)  which repersents the server creating different bit rate of video and waiting for HTTP request to serve you the bitrate you want. Waiter(now acts as ABR) will help you select correct food based on the demand and your preferences and communicate with the chef(Youtube server) and finally the food is served you in a way(TCP) that it ensures that you are being served what you want and all the ingredients in the food are cooked and presented properly.

In this example, HTTP, ABR, and TCP work together to make sure you receive the video content you want, in the best quality possible, with minimal delays and interruptions. 