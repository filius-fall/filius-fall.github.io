---
layout: post
title:  "Data Transmission Demystified: Understanding HTTP, TCP, and Video Streaming Protocols"
date:   2023-02-12 22:17:20 +0700
categories: Internet Protocols, HTTP, UDP, Live Streaming	
---



For a long  time, I thought that HTTP was an extended version of TCP. Later, I  learned about the differences between different protocols and their  different use cases.

HTTP 1.1 and HTTP 2 use TCP, so my initial thinking was that HTTP was a modified version of TCP that fundamentally uses TCP but has extended  features for message encoding. However, TCP is a transport protocol,  while HTTP is a message protocol.

Imagine you want to send a letter to a friend who lives far away. The message protocol can be thought of as the format and structure of the  letter, such as the font, paper size, and layout. In the same way, a  message protocol defines the structure and format of data being  transmitted between applications.

The transport protocol, on the other hand, can be thought of as the  delivery method for your letter, such as sending it by mail or by a  courier service that guarantees delivery. In the same way, a transport  protocol is responsible for the reliable and efficient delivery of data  between applications.

So, in this scenario, the message protocol is the letter you write,  and the transport protocol is the way the letter is delivered to your  friend. Both are important components in ensuring that your message is  delivered accurately and efficiently.

The use of HTTP does not necessarily mean that TCP must be used. This is the case with HTTP/3, which uses QUIC (Quick UDP Internet  Connections). This is also the case with the video streaming protocol.  When you hear that a website like YouTube uses the ABR (Adaptive  Bitrate) protocol, it doesn't mean it is using TCP and HTTP.

Message protocols, like TCP, set a standard way for browsers to  request and receive data, but video streaming protocols decide on the  techniques for how it can be done. Transfer protocols are the underlying protocol that provides reliable, ordered delivery of data over the  Internet. TCP is used in combination with IP (Internet Protocol) to form the Internet's primary means of delivering data from one place to  another. TCP provides flow control, error detection, and retransmission  of lost or corrupted data, ensuring that video content is delivered  reliably and without errors.

Let's wrap this up with a real-life example using YouTube. Suppose  you are at a restaurant. The menu (content) you see represents the  content you are looking for. The chef (YouTube servers) represents the  provider of the information. The chef prepares different types of foods  (information with different bit rates), and you communicate with the  chef through the waiter (HTTP), which represents the server creating  different bitrates of video and waiting for HTTP requests to serve you  the bitrate you want. The waiter (now acting as ABR) will help you  select the correct food based on demand and your preferences,  communicate with the chef (YouTube server), and finally serve the food  in a way (TCP) that ensures you are being served what you want and that  all the ingredients in the food are cooked and presented properly.

In this example, HTTP, ABR, and TCP work together to make sure you  receive the video content you want, in the best quality possible, with  minimal delays and interruptions.