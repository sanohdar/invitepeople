# How to install ?

  npm install invitepeople

# API details

# Require the invitepeople module into your own module. 

 const Invite = require(‘invitepeople’);

# Create a new Instance of Invite.
  It takes three argument
   1. List of users (Array list)
   2. Range (Distance in KM within which API need to shortlist the users)
   3. Destination Address (latitude & Longitude of destination dublin) 

 var users = new Invite(customerList,100,{latitude:53.34232,longitude:-6.98765})
 
# Filter the output using filter API ,
  Return type is Array list with sorted list of customer according to their user_id.

  users.filter()


# Example : 

var invite = require('invitepeople');
result = new invite(value, range, destination);
result.filter().forEach( val => {   
    console.log(val)
    })

