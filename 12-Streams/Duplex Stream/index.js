//Ek stream jo Readable aur Writable dono ho — data andar bhi le sakta hai, bahar bhi bhej sakta hai (do alag connections nahi, ek hi object dono kaam karta hai).

const net = require('net');

const socket = net.connect(8000); 
// socket ek Duplex stream hai — 
// isse data bhej bhi sakte ho (write), padh bhi sakte ho (read)

//Analogy: Ek phone call — tum bol bhi rahe ho (write), sun bhi rahe ho (read), same connection pe, ek saath. Ye Duplex hai — do alag pipes nahi, ek hi pipe jo dono direction mein kaam karta hai.

//Common example: TCP sockets, WebSockets — dono Duplex streams hain.