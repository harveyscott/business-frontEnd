function retrieveBookings () {
    date = document.getElementById("dateSelector2").innerHTML;

    var settings = {
        "async": true,
        "crossDomain": true,
        "url": "http://localhost:8080/getBookingsByDate?date=" + date,
        "method": "GET"
      }
      
      $.ajax(settings).done(function (response) {
          console.log(response);
        for (let index = 0; index < response.length; index++) {
            var tableRef = document.getElementById('bookings-table').getElementsByTagName('tbody')[0];
            var newRow = tableRef.insertRow(tableRef.rows.length);

            var cell0 = newRow.insertCell(0);
            var cell0Text = document.createTextNode(response[index].bookingInfo.bookingID);
            cell0.appendChild(cell0Text);

            var cell1 = newRow.insertCell(1);
            var cell1Text = document.createTextNode(response[index].booking.name + "(" + response[index].booking.phoneNumber + ")");
            cell1.appendChild(cell1Text);

            var cell2 = newRow.insertCell(2);
            var cell2Text = document.createTextNode(response[index].bookingInfo.hours);
            cell2.appendChild(cell2Text);

            var cell3 = newRow.insertCell(3);
            var cell3Text = document.createTextNode(response[index].booking.numOfGuests);
            cell3.appendChild(cell3Text);

            var cell4 = newRow.insertCell(4);
            var cell4Text = document.createTextNode(response[index].bookingInfo.tableID);
            cell4.appendChild(cell4Text);

            var cell5 = newRow.insertCell(5);
            var cell5Text = document.createTextNode(response[index].bookingInfo.canceled);
            cell5.appendChild(cell5Text);
        }
      });
}