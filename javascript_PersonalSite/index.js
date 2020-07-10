var name1=prompt("Enter Your Name");
var name2=prompt("Enter Opponent's Name");

if(name1!=""||name2!="")
{
document.querySelector(".player1").innerHTML=name1;
document.querySelector(".player2").innerHTML=name2;
}

else
{
  name1="Player1";
  name2="Player2";
}

var win1=name1+" has thrashed "+ name2+"! "+name2+" must not show his/her face again.";
var win2=name2+" has thrashed "+ name1+"! "+name1+" must not show his/her face again."
var draw="DRAW. THE REAL WINNER IS ME!!";

document.querySelector(".btn").addEventListener("click",dicer);
function dicer()
{
var rand1=Math.floor(Math.random()*6+1);
var rand2=Math.floor(Math.random()*6+1);
var dice1="dice"+rand1+".png";
var dice2="dice"+rand2+".png";
document.querySelector(".dice1").setAttribute("src",dice1);
document.querySelector(".dice2").setAttribute("src",dice2);

if(rand1>rand2)
{
  document.querySelector("h2").innerHTML=win1;
}
else if(rand2>rand1)
{
  document.querySelector("h2").innerHTML=win2;
}
else
{
  document.querySelector("h2").innerHTML=draw;
}

}
