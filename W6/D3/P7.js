// Introduction to buffers in NodeJS
// A buffer stores raw bytes 

// here we create buffer directly from string
const textBuffer = Buffer.from("Soorya");

// The value in the buffer is the encoded form of the text 
console.log("Buffer object: ",textBuffer);
console.log("Buffer length in bytes: ",textBuffer.length);
console.log("Byte at index 0: ",textBuffer[0]);
console.log("Byte at index 0: ",textBuffer[1]);

// Each character is strode internally as byte data 
// For standard ASCII letters there will be a equivalents code 
// Buffer Stores Numeric value between 0 to 255