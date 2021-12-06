function init()
{
  //code to link scrollbox and create the list and set the curname variable for the up and down methods
  vary= document.getElementById("acky1")
   vary.innerHTML = spaceThing()
  theList=[ ]
scrolly = document.querySelector('#acky1');
curName = ""

}
function update()
{
  //updates the scrollbox with the new list and places each item on a different line
   vary.innerHTML = spaceThing()
   for (let i = 0; i < theList.length; i++)
  {
    
    vary.innerHTML += (i+1) +")." + theList[i]
    vary.innerHTML += "\n"
  }
  scrolly.scrollTop = scrolly.scrollHeight - scrolly.clientHeight
  core = document.getElementById("cur")
  core.innerHTML = "Current: " + curName
}
function altUpdate()
{
  //same things as update but doesn't scroll to to bottom everytime. This is for the user, so they don't lose their place everytime they move an item
 vary.innerHTML = spaceThing()
 if (!((curItem> theList.length) || (curItem < 0))){
   vary.innerHTML = spaceThing()
   for (let i = 0; i < theList.length; i++)
  {
    
    vary.innerHTML += (i+1) +")." + theList[i]
    vary.innerHTML += "\n"
  }
  core = document.getElementById("cur")
  core.innerHTML = "Current: " + curName
 }
}
function addy()
{
  //adds item
  var toAdd = document.getElementById("item").value;
  if (noDupe(toAdd))
  {
  theList.push(toAdd)
  update();
  }
}
function remy()
{
  //removes item
  
var toRem = document.getElementById("rem").value;
if(!(isNaN(toRem))){
if (!((toRem-1)<0))
{
theList.splice((toRem-1),1)
update();
}
}
}
function uppy()
{
  //moves item up by setting the item above to a variable, replacing that index with the current item, and replacing the previous index with that variable
if (!((curItem> theList.length) || (curItem < 0))){
if(!((curItem -1) < 0))
{
var toMove = curItem
var toSwap = theList[toMove-1]
theList[toMove-1]=theList[toMove]
theList[toMove] = toSwap
newCurry(toMove-1)
altUpdate()
}
}
}
function downy()
{
  //the same as uppy but downwards
  if (!((curItem> theList.length) || (curItem < 0))){
  if(!((curItem +2) > theList.length))
  {
var toMove = curItem
var toSwap = theList[toMove+1]
theList[toMove+1]=theList[toMove]
theList[toMove] = toSwap
newCurry(toMove+1)
altUpdate()
  }
  }
}
function curry()
{
//sets item only upon button use, sort of a reset function
curItem = (document.getElementById("move").value)-1
curName = theList[curItem]
if (!(curItem<0 || curItem == undefined))
{
  altUpdate();
}
}
function newCurry(too)
{
  //sets item every other time, updates item's index so that the user can keep moving it up and down
  curItem = too
  curName = theList[curItem]
}
function noDupe(item)
{
  //no duplicate method, checks through entire list to find a match
  for (let i = 0; i < theList.length; i++)
  {
    if(item == theList[i])
    {
      return false
    }
  }
  return true
}
function spaceThing()
{
  var space = "<u>"
  for (let i = 0; i < 124; i++)
  {
    space += "\xa0"
  }
  space += "<u>\n"
  return space

}