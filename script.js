


var total = 0;

var item1 = {
  name: "cereal",
  price: 2.99,
};

var item2 = {
  name: "milk",
  price: 2.39,
};

var item3 = {
  name: "apples",
  price: 3.99,
};

var groceries = [item1, item2, item3];

for(var i=0; i<groceries.length; i++){
  var printedList = document.createElement("div");
  printedList.innerHTML = groceries[i].name + " " + groceries[i].price;
  total = total + groceries[i].price;
  document.body.appendChild(printedList);

  };

printedTotal = document.createElement("p");
printedTotal.innerHTML = total;
document.body.appendChild(printedTotal);


function myFunction(){
 var name = document.getElementById("Item Name").value;
 var price = document.getElementById("Price").value * 1;
 var object = {name:name, price:price}
 groceries.push(object);
 }
