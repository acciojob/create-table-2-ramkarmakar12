function insert_Row() {
    //Write your code here
	let table = document.getElementById("sampleTable");
			let newRow = table.insertRow(0); // Insert at the first position (top)

			let cell1 = newRow.insertCell(0);
			let cell2 = newRow.insertCell(1);

			cell1.textContent = "New Cell1"; 
			cell2.textContent = "New Cell2"; 
	
  
  
}