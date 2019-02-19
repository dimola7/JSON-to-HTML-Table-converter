const table = document.querySelector("table");
var convertBtn = document.getElementById("convert");
var revertBtn = document.getElementById("revert");

let myClients = [
        {
            "firstName": "Ben",
            "lastName": "Ofili",
            "occupation": "Software Developer",
            "phoneNumber": "08089999999",
          },
          {
            "firstName": "Ruth",
            "lastName": "Ofili",
            "occupation": "Accountant",
            "phoneNumber": "08019090999",
          },
          {
            "firstName": "Chuka",
            "lastName": "Okrika",
            "occupation": "Data Scientist",
            "phoneNumber": "08099098888",
          }
    ]

convertBtn.addEventListener("click", function() {
	// EXTRACT VALUE FOR HTML HEADER. 
    // ('Client ID', 'Client Name', 'Category' and 'Price')
    let col = [];
    myClients.forEach(client=>{
        for (let key in client) {
          if (col.indexOf(key) === -1) {
             col.push(key);
          }
        }
      })

    // CREATE DYNAMIC TABLE.
    let table = document.createElement("table");

    // CREATE HTML TABLE HEADER ROW USING THE EXTRACTED HEADERS ABOVE.

    let tr = table.insertRow(-1);                   // TABLE ROW.

    for (let i = 0; i < col.length; i++) {
        let th = document.createElement("th");      // TABLE HEADER.
        th.innerHTML = col[i];
        tr.appendChild(th);
    }


    // ADD JSON DATA TO THE TABLE AS ROWS.
    myClients.forEach(client => {
        tr = table.insertRow(-1);
      
        for (let j = 0; j < col.length; j++) {
            let tabCell = tr.insertCell(-1);
            tabCell.innerHTML = client[col[j]];
        }
      
      });

    // ADD THE NEWLY CREATED TABLE WITH JSON DATA TO A CONTAINER.
    let divContainer = document.getElementById("showData");
    var divContent = divContainer.innerHTML;
    var createdTable = document.getElementsByTagName("table")

    if(divContent == ""){
	    divContainer.appendChild(table);
    }else{
    	for (var i = 0; i < createdTable.length ; i++) {
		    divContainer.removeChild(createdTable[i]);
    	}
    }
    // Change the innerHtml of the button
    if(convertBtn.value == "Convert"){
      convertBtn.value = "Revert";
    } else {
      convertBtn.value = "Convert";
    }

    // convertBtn.value == "Convert" ? convertBtn.value = "Revert" : convertBtn.value = "Convert";
})
