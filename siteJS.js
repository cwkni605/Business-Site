var j1={
  type:"course",
  name:"Beginner Java Course",
  price:5,
  picture1:"images/java0.jpg",
  level:1,
  link:"javaCourse"
};
var j2={
  type:"course",
  name:"Intermediate Java Course",
  price:15,
  picture1:"images/java2.jpg",
  level:2
};
var j3={
  type:"course",
  name:"Advanced Java Course",
  price:20,
  picture1:"images/java1.jpg",
  level:3
};
var p1={
  type:"course",
  name:"Beginner Python Course",
  price:5,
  picture1:"images/python2.jpg",
  level:1
};
var p2={
  type:"course",
  name:"Intermediate Python Course",
  price:10,
  picture1:"images/python0.jpg",
  level:1
};
var p3={
  type:"course",
  name:"Advanced Python Course",
  price:15,
  picture1:"images/python1.jpg",
  level:1
};
var f5={
  type:"testimony",
  name:"HamBurger",
  text:10,
  picture1:"images/HamBurger1.png",
};
var f6={
  type:"testimony",
  name:"Bread",
  text:10,
  picture1:"images/bread1.png",
};
var f7={
  type:"testimony",
  name:"Chicken Pot Pie",
  text:10,
  picture1:"images/chickenpotpie1.png",
};
var f8={
  type:"testimony",
  name:"Cookie",
  text:2.50,
  picture1:"images/cookie1.png",
};
var f9={
  type:"testimony",
  name:"Jello",
  text:2,
  picture1:"images/jello1.png",
};
var f10={
  type:"testimony",
  name:"water",
  text:0.50,
  picture1:"images/water1.png",
};
var f11={
  type:"testimony",
  name:"Orange Juice",
  text:3,
  picture1:"images/orangejuice1.png",
};
var f12={
  type:"testimony",
  name:"bait",
  text:5,
  picture1:"images/bait1.png",
};
var list = [
  j1,j2,j3,p1,f5,f6,f7,f8,f9,f10,f11,f12
];

var out = "";

for(var i = 0; i < list.length;i++)
{
  if(list[i].type == "course")//checks to see if the item is a course then adds it
  {
    out = out+"<div class='course' ><a href='"+ list[i].link +"'><img onmouseleave='imgReturn(this)' onmouseover='imgChange(this)' src='"+list[i].picture1+"' alt='"+list[i].name+"'><br><p>"+list[i].name+" $"+list[i].price+"</p></a></div>";
  }
  if(list[i].type == "testimony" && list[i-1].type == "course")//checks to see if the previos item was a course and the current item is a testimonial then adds it
  {
    out += "<hr class='divider'>";
    out = out+"<div class='testimony'><a><img onmouseleave='imgReturn(this)' onmouseover='imgChange(this)' src='"+list[i].picture1+"' alt='"+list[i].name+"'><br><p>"+list[i].name+"<br>"+list[i].text+"</p></a></div>";
  }
  else if(list[i].type=="testimony")//checks to see if the previos item was a course and the current item is a testimonial then adds it
  {
    out = out+"<div class='testimony'><a><img onmouseleave='imgReturn(this)' onmouseover='imgChange(this)' src='"+list[i].picture1+"' alt='"+list[i].name+"'><br><p>"+list[i].name+"<br>"+list[i].text+"</p></a></div>";
  }
}
document.getElementById("torso").innerHTML = out;

function sortFood()
{
  out = "";
  for(var i = 0; i<list.length;i++)
  {
    if(list[i].type=="testimony")
    {
      out = out+"<div class='testimony'><a><img onmouseleave='imgReturn(this)' onmouseover='imgChange(this)' src='"+list[i].picture1+"' alt='"+list[i].name+"'><br><p>"+list[i].name+" $"+list[i].price+"</p></a></div>";
    }
  }
  document.getElementsByClassName("id").src="../template/save.png";
  document.getElementById("torso").innerHTML = out;
}

function sortWardrobe()
{
  out = "";
  for(var i = 0; i<list.length;i++)
  {
    if(list[i].type=="cloth")
    {
      out = out+"<div><a href='"+ list[i].link +"'><img onmouseleave='imgReturn(this)' onmouseover='imgChange(this)' src='"+list[i].picture1+"' alt='"+list[i].name+"'><br><p>"+list[i].name+" $"+list[i].price+"</p></a></div>";
    }
  }
  document.getElementById("torso").innerHTML = out;
}

function sortWeapons()
{
  out = "";
  for(var i = 0; i<list.length;i++)
  {
    if(list[i].type=="weapon")
    {
      out = out+"<div><a href='"+ list[i].link +"'><img onmouseleave='imgReturn(this)' onmouseover='imgChange(this)' src='"+list[i].picture1+"' alt='"+list[i].name+"'><br><p>"+list[i].name+" $"+list[i].price+"</p></a></div>";
    }
  }
  document.getElementById("torso").innerHTML = out;
}

function searchName()
{
  var toPrint="";
  for(var i = 0; i<list.length;i++)
  {
    if(list[i].name==document.getElementById("search").value)
    {
      toPrint = "<div><a href='"+ list[i].link +"'><img src='"+list[i].picture1+"' alt='"+list[i].name+"'><br><p>"+list[i].name+" $"+list[i].price+"</p></a></div>";
      document.getElementById("torso").innerHTML = toPrint;
    }
    else if(document.getElementById("search").value=="")
    {
      var out = "";
      for(var i = 0; i<list.length;i++)
      {
        out = out+"<div><a href='"+ list[i].link +"'><img onmouseleave='imgReturn(this)' onmouseover='imgChange(this)' src='"+list[i].picture1+"' alt='"+list[i].name+"'><br><p>"+list[i].name+" $"+list[i].price+"</p></a></div>";
      }
      document.getElementById("torso").innerHTML = out;
    }
  }
}

function imgChange(input)
{
  for(var i = 0; i<list.length;i++)
  {
    if(list[i].name==input.alt)
    {
      //input.src="tootTootMgee";
    }
  }
}
function imgReturn(input)
{
  for(var i = 0; i<list.length;i++)
  {
    if(list[i].name==input.alt)
    {
      input.src=list[i].picture1;
    }
  }
}

function specificKey(event) // Checks if key is pressed
{
    var keyPressed = event.key;
    return keyPressed;
}

function keyDownEvents(theKey) {
  if (theKey == "i") {
    document.body.style.filter= "invert()";
  }
}