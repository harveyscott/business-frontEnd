function retrieveBookings (Date, CancelledBooking) {
    var date;
    var time;

    var settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://api.myjson.com/bins/1h23w2",
        "method": "GET"
      }
      
      $.ajax(settings).done(function (response) {
        for (let index = 0; index < 50; index++) {
            var tableRef = document.getElementById('bookings-table').getElementsByTagName('tbody')[0];
            var newRow = tableRef.insertRow(tableRef.rows.length);

            var cell0 = newRow.insertCell(0);
            var cell0Text = document.createTextNode(response[index].id);
            cell0.appendChild(cell0Text);

            var cell1 = newRow.insertCell(1);
            var cell1Text = document.createTextNode(response[index].Name);
            cell1.appendChild(cell1Text);

            var cell2 = newRow.insertCell(2);
            var cell2Text = document.createTextNode(response[index].Time);
            cell2.appendChild(cell2Text);

            var cell3 = newRow.insertCell(3);
            var cell3Text = document.createTextNode(response[index].Guests);
            cell3.appendChild(cell3Text);

            var cell4 = newRow.insertCell(4);
            var cell4Text = document.createTextNode(response[index].Table);
            cell4.appendChild(cell4Text);

            var cell5 = newRow.insertCell(5);
            var cell5Text = document.createTextNode(response[index].Cancelled);
            cell5.appendChild(cell5Text);
        }
      });
}