

//linking routes to series od data sources
var friends = require("../data/friends");

module.exports = function(app) {
//API GET request to set cases for each link

//friends entries
app.get("/api/friends", function(req, res) {
    res.json(friends);
});

//API POST request: user submitting form -- submitting data to server
app.post("/api/friends", function(req, res) {

    //capture user input and parse it
    var userInput = req.body;
    var userResponses = userInput.scores;
        
    //object to hold best match -- updated as we loop through 
    var newFriend = {
        friendName = '',
        friendImage = '',
        totalDif = 1000,
    };
   

    //used to calculate diff. b/w newuser's scores and scores of users in database
    var scoreDif = 0;

    //run through existing friends
    for (var i = 0; i < friends.length; i++) {
    scoreDif = 0;

    //run through scores to compare friends
    for (var j=0; j<userResponses.length; j++) {
            scoreDif += Math.abs(friends[i].scores[j] - userResponses[j]);
        }
        if (scoreDif < newFriend.totalDiff) {
            newFriend.totalDif = scoreDif;
            newFriend.friendName = friendsData[i].name;
            newFriend.friendImage = friendsData[i].photo;
        }
        }
        //add user
        friendsData.push(userInput);

        res.json(newFriend);
        // res.json({status: "Friend Found: ", friendName: friendName, friendImage: friendImage});
    })
}