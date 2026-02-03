
# Encryption Activity Reflection


## Part 1: Key Exchange

My Key:7
My Partner's Key:8

Our initial shared key:15

## Part 2: Messaging

Complete this table with each of your messages. This should 
include the entire conversation - the messages that you sent
and the messages that you received.

(If you used something other than the caesar cipher here, describe what you did)

| Encoded Message | Decoded Message | Key |
| --------------- | --------------- | --- |
|      st         |       hi        |  15 |
|    surron       |       surron    |  0  |
|      axeeh      |      hello      |  7  |
|       fkj       |      dih        |  2  |


## Part 3: Connection to TCP/IP Model

### Application Layer: Turn your message into binary

Everything we've done in this activity takes place in the application layer. By the time the message leaves the application
layer, it is encoded in binary. We've been working with text for this activity for convenience, but let's see what the binary
looks like.

Go back to the first encrypted message that you sent (it should be in `rsa_encryption_activity/send/encrypted_message.b64`).

This message is represented as a string of letters, numbers, and symbols. But we know that the real message is in binary.

Select the first six characters from this message and copy them here: NFAVt7

Using the ASCII table, convert these five characters to binary (if necessary,
include leading zeroes so that each character is 8 bits): 01001110 01000110 01000001 01010110 01110100 00110111 

### Transport Layer: Break your message into packets

Assume that each packet can hold two bytes. Fill in the packet information below with the binary values you computed above.

    =========
    Packet 1:

    Source: [Patrick]
    Destination: [Danny]  
    Sequence: 1/3
    Data: [01001110] [01000110]
    =========
    Packet 2:

    Source: [Patrick]
    Destination: [Danny]
    Sequence: 2/3 
    Data: [01000001] [01010110]
    =========
    Packet 3:

    Source: [Patrick]
    Destination: [Danny]
    Sequence: 3/3
    Data: [01110100] [00110111]
    =========

## Part 4: Reflection Questions

- What is the difference between symmetric and asymmetric encryption? What purpose did each serve in this simulation? Symmetric encryption uses the same key for encryption and decryption, while asymmetric encryption uses different keys (like public for encryption and private for decryption). Asymmetric encryption was used to securely transmit the message between computers, and symmetric encryption was used to encrypt the actual message. 
- Why is it important that this protocol uses a new key for each message? It prevents adversaries in the middle from reusing old encryption data to decrypt each message. 
- Why is it important that you never share your secret key? If you share your secret/private key, anyone could decrypt your messages or impersonate you to find personal information.
- In the transport layer, do these messages use TCP or UDP? Why? TCP because we like the whole message sent, even if it includes waiting a little.
- Now that you've created packets in the transport layer, give a short explanation of what happens to these packets in the internet layer and in the link layer. The internet layer would be like the navigator, handling the routing of the message, and the link layer would handle all physical transmissions. 
- This protocol successfully encrypts the **content** of the message. Even though and adversary in the middle can't read the content of the message, what other information can they still see? They could see the ASCII code of the message that it is encrypted with. They could see where the message is going, who sent it, the size and when the messages are sent. 
