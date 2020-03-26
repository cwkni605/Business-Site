var f1={
    type:"food",
    name:"Cake",
    price:15,
    picture1:"images/cake1.png",
    picture2:"images/cake2.png"
};
var f2={
    type:"food",
    name:"Pie",
    price:10,
    picture1:"images/pie1.png",
    picture2:"images/pie2.png"
};
var f3={
  type:"food",
  name:"Candy",
  price:5,
  picture1:"images/candy1.png",
  picture2:"images/candy2.png"
};
var f4={
  type:"food",
  name:"Ice Cream",
  price:20,
  picture1:"images/iceCream1.png",
  picture2:"images/iceCream2.png"
};
var f5={
  type:"food",
  name:"HamBurger",
  price:10,
  picture1:"images/HamBurger1.png",
  picture2:"images/HamBurger2.png"
};
var f6={
  type:"food",
  name:"Bread",
  price:10,
  picture1:"images/bread1.png",
  picture2:"images/bread2.png"
};
var f7={
  type:"food",
  name:"Chicken Pot Pie",
  price:10,
  picture1:"images/chickenpotpie1.png",
  picture2:"images/chickenpotpie2.png"
};
var f8={
  type:"food",
  name:"Cookie",
  price:2.50,
  picture1:"images/cookie1.png",
  picture2:"images/cookie2.png"
};
var f9={
  type:"food",
  name:"Jello",
  price:2,
  picture1:"images/jello1.png",
  picture2:"images/jello2.png"
};
var f10={
  type:"food",
  name:"water",
  price:0.50,
  picture1:"images/water1.png",
  picture2:"images/water2.png"
};
var f11={
  type:"food",
  name:"Orange Juice",
  price:3,
  picture1:"images/orangejuice1.png",
  picture2:"images/orangejuice2.png"
};
var f12={
  type:"food",
  name:"bait",
  price:5,
  picture1:"images/bait1.png",
  picture2:"images/bait2.png"
};
var c1={
  type:"cloth",
  name:"work shirt",
  price:2,
  picture1:"images/shirt1.png",
  picture2:"images/shirt2.png"
};
var c2={
  type:"cloth",
  name:"work pants",
  price:2,
  picture1:"images/pant1.png",
  picture2:"images/pant2.png"
};
var c3={
  type:"cloth",
  name:"Steel Helmet",
  price:20,
  picture1:"images/helmet1.png",
  picture2:"images/helmet2.png"
};
var c4={
  type:"cloth",
  name:"Steel Plate Torso",
  price:50,
  picture1:"images/chest1.png",
  picture2:"images/chest2.png"
};
var c5={
  type:"cloth",
  name:"Steel Paldrins",
  price:10,
  picture1:"images/shoulder1.png",
  picture2:"images/shoulder2.png"
};
var c6={
  type:"cloth",
  name:"Steel Boots",
  price:15,
  picture1:"images/boots1.png",
  picture2:"images/boots2.png"
};
var c7={
  type:"cloth",
  name:"Steel Gauntlets",
  price:20,
  picture1:"images/Gauntlet1.png",
  picture2:"images/gauntlet2.png"
};
var c8={
  type:"cloth",
  name:"work Gloves",
  price:3,
  picture1:"images/glove1.png",
  picture2:"images/glove2.png"
};
var c9={
  type:"cloth",
  name:"Leather Chest Piece",
  price:35,
  picture1:"images/LChest1.png",
  picture2:"images/LChest2.png"
};
var c10={
  type:"cloth",
  name:"Leather Helmet",
  price:25,
  picture1:"images/LHelm1.png",
  picture2:"images/LHelm2.png"
};
var c11={
  type:"cloth",
  name:"Leather Bracers",
  price:10,
  picture1:"images/bracer1.png",
  picture2:"images/bracer2.png"
};
var c12={
  type:"cloth",
  name:"Leather Boots",
  price:15,
  picture1:"images/LBoots1.png",
  picture2:"images/LBoots2.png"
};
var w1={
  type:"weapon",
  name:"Arming Sword",
  price:30,
  picture1:"images/arm1.png",
  picture2:"images/arm2.png"
};
var w2={
  type:"weapon",
  name:"Short Sword",
  price:35,
  picture1:"images/short1.png",
  picture2:"images/short2.png"
};
var w3={
  type:"weapon",
  name:"Flail",
  price:45,
  picture1:"images/flail1.png",
  picture2:"images/flail2.png"
};
var w4={
  type:"weapon",
  name:"Mace",
  price:40,
  picture1:"images/mace1.png",
  picture2:"images/mace2.png"
};
var w5={
  type:"weapon",
  name:"Long Sword",
  price:45,
  picture1:"images/long1.png",
  picture2:"images/long2.png"
};
var w6={
  type:"weapon",
  name:"Scimitar",
  price:40,
  picture1:"images/scimitar1.png",
  picture2:"images/scimitar2.png"
};
var w7={
  type:"weapon",
  name:"War Hammer",
  price:50,
  picture1:"images/hammer1.png",
  picture2:"images/hammer2.png"
};
var w8={
  type:"weapon",
  name:"Bow",
  price:50,
  picture1:"images/bow1.png",
  picture2:"images/bow2.png"
};
var w9={
  type:"weapon",
  name:"Arrow",
  price:5,
  picture1:"images/arrow1.png",
  picture2:"images/arrow2.png"
};
var w10={
  type:"weapon",
  name:"Morning Star",
  price:45,
  picture1:"images/star1.png",
  picture2:"images/star2.png"
};
var w11={
  type:"weapon",
  name:"Rapier",
  price:40,
  picture1:"images/rapier1.png",
  picture2:"images/rapier2.png"
};
var w12={
  type:"weapon",
  name:"Shield",
  price:50,
  picture1:"images/shield1.png",
  picture2:"images/shield2.png"
};

var list = [
    f1,f2,f3,f4,f5,f6,f7,f8,f9,f10,f11,f12,c1,c2,c3,c4,c5,c6,c7,c8,c9,c10,c11,c12,w1,w2,w3,w4,w5,w6,w7,w8,w9,w10,w11,w12
];

var out = "";

for(var i = 0; i<list.length;i++)
{
    out = out+"<div><a href='Store page.html'><img onmouseleave='imgReturn(this)' onmouseover='imgChange(this)' src='"+list[i].picture1+"' alt='"+list[i].name+"'><br><p>"+list[i].name+" $"+list[i].price+"</p></a></div>";
}
document.getElementById("torso").innerHTML = out;

function sortFood()
{
  out = "";
  for(var i = 0; i<list.length;i++)
  {
    if(list[i].type=="food")
    {
      out = out+"<div><a href='Store page.html'><img onmouseleave='imgReturn(this)' onmouseover='imgChange(this)' src='"+list[i].picture1+"' alt='"+list[i].name+"'><br><p>"+list[i].name+" $"+list[i].price+"</p></a></div>";
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
      out = out+"<div><a href='Store page.html'><img onmouseleave='imgReturn(this)' onmouseover='imgChange(this)' src='"+list[i].picture1+"' alt='"+list[i].name+"'><br><p>"+list[i].name+" $"+list[i].price+"</p></a></div>";
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
      out = out+"<div><a href='Store page.html'><img onmouseleave='imgReturn(this)' onmouseover='imgChange(this)' src='"+list[i].picture1+"' alt='"+list[i].name+"'><br><p>"+list[i].name+" $"+list[i].price+"</p></a></div>";
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
      toPrint = "<div><a href='nope.html'><img src='"+list[i].picture1+"' alt='"+list[i].name+"'><br><p>"+list[i].name+" $"+list[i].price+"</p></a></div>";
      document.getElementById("torso").innerHTML = toPrint;
    }
    else if(document.getElementById("search").value=="")
    {
      var out = "";
      for(var i = 0; i<list.length;i++)
      {
        out = out+"<div><a href='Store page.html'><img onmouseleave='imgReturn(this)' onmouseover='imgChange(this)' src='"+list[i].picture1+"' alt='"+list[i].name+"'><br><p>"+list[i].name+" $"+list[i].price+"</p></a></div>";
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
      input.src=list[i].picture2;
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