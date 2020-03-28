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
var t1={
  type:"testimony",
  name:"Alice G.",
  text:'"This is the best camp that I sent my kids to ever! They had a blast with their instructor!"',
  picture1:"images/mom.png",
};
var t2={
  type:"testimony",
  name:"Connor T.",
  text:'"They were so professional, and connected with the kids almost intantly!"',
  picture1:"images/dad.png",
};
var t3={
  type:"testimony",
  name:"Alex E.",
  text:'"They were clean and very organized, and I have no problem leaving my kid here all day."',
  picture1:"images/mom2.png",
};
var t4={
  type:"testimony",
  name:"Greg J.",
  text:'"It was easy to contact the administration, and they answered all of my questions with out fail!"',
  picture1:"images/dad2.png",
};
var list = [
  j1,j2,j3,p1,p2,p3,t1,t2,t4,t3
];

var active = false;

var out = "";

for(var i = 0; i < list.length;i++)
{
  if(list[i].type == "course")//checks to see if the item is a course then adds it
  {
    out = out+"<div style='background-image: url("+list[i].picture1+");' class='course' ><a href='"+ list[i].link +"'><img onmouseleave='imgReturn(this)' onmouseover='imgChange(this)' src='images/image_thats_not_an_image.png' alt='"+list[i].name+"'><br><p>"+list[i].name+" $"+list[i].price+"</p></a></div>";
  }
  if(list[i].type == "testimony" && list[i-1].type == "course")//checks to see if the previos item was a course and the current item is a testimonial then adds it
  {
    out += "<div class='divider'><h1>Testimonials</h1></div>";
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
      out = out+"<div class='testimony'><a><img onmouseleave='imgReturn(this)' onmouseover='imgChange(this)' src='"+list[i].picture1+"' alt='"+list[i].name+"'><br><p>"+list[i].name+"<br>"+list[i].text+"</p></a></div>";
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
    if(list[i].name==document.getElementById("search").value && list[i].type != "testimony")//prints the specific item
    {
      toPrint = "<div style='background-image: url("+list[i].picture1+");' class='course' ><a href='"+ list[i].link +"'><img onmouseleave='imgReturn(this)' onmouseover='imgChange(this)' src='images/image_thats_not_an_image.png' alt='"+list[i].name+"'><br><p>"+list[i].name+" $"+list[i].price+"</p></a></div>";
      document.getElementById("torso").innerHTML = toPrint;
    }
    else if(document.getElementById("search").value=="")
    {
      var out = "";
      for(var i = 0; i<list.length;i++)
      {
        if(list[i].type == "course")//checks to see if the item is a course then adds it
        {
          out = out+"<div style='background-image: url("+list[i].picture1+");' class='course' ><a href='"+ list[i].link +"'><img onmouseleave='imgReturn(this)' onmouseover='imgChange(this)' src='images/image_thats_not_an_image.png' alt='"+list[i].name+"'><br><p>"+list[i].name+" $"+list[i].price+"</p></a></div>";
        }
        if(list[i].type == "testimony" && list[i-1].type == "course")//checks to see if the previos item was a course and the current item is a testimonial then adds it
        {
          out += "<div class='divider'><h1>Testimonials</h1></div>";
          out = out+"<div class='testimony'><a><img onmouseleave='imgReturn(this)' onmouseover='imgChange(this)' src='"+list[i].picture1+"' alt='"+list[i].name+"'><br><p>"+list[i].name+"<br>"+list[i].text+"</p></a></div>";
        }
        else if(list[i].type=="testimony")//checks to see if the previos item was a course and the current item is a testimonial then adds it
        {
          out = out+"<div class='testimony'><a><img onmouseleave='imgReturn(this)' onmouseover='imgChange(this)' src='"+list[i].picture1+"' alt='"+list[i].name+"'><br><p>"+list[i].name+"<br>"+list[i].text+"</p></a></div>";
        }
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
      //input.src=list[i].picture1;
    }
  }
}

function specificKey(event) // Checks if key is pressed
{
    var keyPressed = event.key;
    return keyPressed;
}

function keyDownEvents(theKey) {
  if (theKey == "" && active == false)
  {
    document.body.style.filter= "invert()";
    active = true;
  }
  else if(theKey == ""){
    document.body.style.filter= "invert()";
    active = false;
  }
}