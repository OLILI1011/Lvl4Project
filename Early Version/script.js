function initialize() { // Initializes the grocery list array and the variables necessary for the script.
  groceryList = ["milk, fish, chicken"];
}
function addItem() { // Adds items that the user wants to the grocery list array and won't add if there is any duplicates.
  var aItem = document.getElementById("addit").value;
    groceryList.push(item);
}
function removeItem() { // Will remove items the user wants only if that item is in the grocery list.
  bItem = document.getElementById("removeitem").value;
  x = 0;
  for (var i = 0; i < groceryList.length; i++) {
    if (bItem = groceryList[i]) {
      groceryList.splice(i,1);
      x++;
    }
  }
  if (x = 0) {
    console.log("Item does not exist.");
  }
}
function ifDuplicate(item) // Checks if the item entered is a duplicate.
{
  for (var i = 0; i < groceryList.length; i++) {
    if (item == groceryList[i]) {
      return true;
    }
  }
  return false;
}
// Doesn't work
