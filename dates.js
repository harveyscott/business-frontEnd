function getDates(date2) {
    $.ajax({
        type: "GET",
        url: "http://localhost:8080/getDates",
        data: "data",
        dataType: "JSON",
        success: function (response) {
            for (let index = 0; index < response.length; index++) {
                $('#dateDropDown').append('<li class="dateClass">' + response[index] + '</li>');
            }

            $('.dateClass').click(function (e) { 
                e.preventDefault();
                $('#dateSelector').text($(this).text());
                date2 = $(this).text();
                console.log(date2);
            });
        }
    });
}