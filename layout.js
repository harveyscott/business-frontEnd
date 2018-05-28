function getLayout() {
    $('#currentLayout').empty();
    $('#currentLayout').append("<h3>Current Layout.</h3>");
    var settings = {
        "async": true,
        "url": "http://localhost:8080/getTableLayout",
        "method": "GET"
      }
      
      $.ajax(settings).done(function (response) {
        console.log(response);
        var inputArray = response;
        var arrayPoint = 0;
        var table = document.createElement("table");

        // create rows and cells
        for (let i = 0; i < 5; i++) {
            var row = table.insertRow(i);
            for (let j = 0; j < 4; j++) {
                var cell = row.insertCell(j);
                cell.innerHTML = inputArray[arrayPoint];
                arrayPoint++;

                // Set Backgroud Color
                selectedColor = "white";
                switch (cell.innerHTML) {
                    case "1":
                        selectedColor = "blue";
                        break;
                        case "2":
                        selectedColor = "red"
                        break;
                        case "3":
                        selectedColor = "green"
                        break;
                        case "4":
                        selectedColor = "orange"
                        break;
                        case "5":
                        selectedColor = "brown"
                        break;
                        case "6":
                        selectedColor = "black"
                        break;
                        case "7":
                        selectedColor = "purple"
                        break;
                
                    default:
                    selectedColor = "white"
                        break;
                }


                cell.setAttribute("style", "background-color: " + selectedColor)
            }
            
        }
        inputArea = document.getElementById("currentLayout");
        inputArea.appendChild(table);
      });
}