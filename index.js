$(document).ready(function(){
    $("submitWeather").click(function(){
        var city = $("#city").val();
        if(city != ""){
            $.ajax({

                url: "api.openweathermap.org/data/2.5/forecast?q=" + city +"&units=metric" + "&appid=7bfd7cc45149e784e7df3a513d2af645",
                type: "GET",
                dataType: "jsonp",
                success: function(data){
                    var widget = show(data);
                    $("#show").html(widget);
                    $("#city").val("");
                }
            });
        } else{
            $("#error").html("Field can't be empty");
        }
    });
});
function show(data){
    return  "<h3> style = 'font-size: 40px; font-weight: bold;' class = 'text-center'>Weather forcast for" + data.name + "," + data.sys.country +"</h3>" +       
            "<h3><strong>Weather</strong>: "+ data.weather[0].main + "</h3>" +
            "<h3><strong>Description</strong>: "+ data.weather[0].description + "</h3>" +
            "<h3><strong>Temperature</strong>: "+ data.main.temp + "</h3>" +
            "<h3><strong>Pressure</strong>: "+ data.main.pressure + "</h3>" +
            "<h3><strong>Humidity</strong>: "+ data.main.humidity + "</h3>" +
            "<h3><strong>Min Tempterature</strong>: "+ data.main.temp_min + "</h3>" +
            "<h3><strong>Max Temperature</strong>: "+ data.main.temp_max + "</h3>" +
            "<h3><strong>Wind Speed</strong>: "+ data.wind.speed + "</h3>" +
            "<h3><strong>Wind Direction</strong>: "+ data.wind.deg + "</h3>";
}
