# How to install ?
```sh
  npm install invitepeople
```
# API details

Require the invitepeople module into your own module. 
===

```sh
 const Invite = require(‘invitepeople’);
```

Create a new Instance of Invite.
=== 

  It takes three argument
   1. List of users (Array list)
   2. Range (Distance in KM within which API need to shortlist the users)
   3. Destination Address (latitude & Longitude of destination dublin) 

```sh
 var users = new Invite(customerList,100,{latitude:53.34232,longitude:-6.98765})
 ```
Filter the output using filter API ,
===
Return type is Array list with sorted list of customer according to their user_id.
```sh
  users.filter()
```

Example : 
===
```sh
var invite = require('invitepeople');
result = new invite(value, range, destination);
result.filter().forEach( val => {   
    console.log(val)
    })
```
