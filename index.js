function friendshipPercentage(){
var percentage=Math.random();
percentage=percentage*100;
percentage=Math.floor(percentage);
document.querySelector("h3").innerHTML= "Your Friendship is "+percentage+"%";
}

