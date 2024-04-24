let button = document.getElementById("button")// adds button to ducment
button.addEventListener("click", (event) => {//add event listener to button
  event.preventDefault();//prevents page from refreshing after click
 
  

  
  let tbody = document.getElementById("tbody");//add elements needed to table
  let tr = document.createElement("tr");
  let cell1 = document.createElement("td");
  
  cell1.innerHTML = document.getElementById("cereal").value;//creates new line of text entered into table

  tr.appendChild(cell1);
  tbody.appendChild(tr)
reset();

})

function reset() {//resets text input after cereal is added
  document.getElementById("cereal").value="";

}