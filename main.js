$( document ).ready(function() {

    var settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://covid-19-coronavirus-statistics.p.rapidapi.com/v1/stats?country=Argentina",
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "covid-19-coronavirus-statistics.p.rapidapi.com",
            "x-rapidapi-key": "56a97e464fmsh7d9a63a0f10e1eap125abejsnb30b0e557dda"
        }
    }
    
    $.ajax(settings).done(function (response) {
        console.log(response.data.covid19Stats[0])

        var infectadosHTML = document.getElementById("infectados");
        var fatalidadesHTML = document.getElementById("fatalidades");
        var recuperadosHTML = document.getElementById("recuperados");
        var ultimaHTML = document.getElementById("ultima");
    
        function update() {
           infectadosHTML.innerText = response.data.covid19Stats[0].confirmed;
           fatalidadesHTML.innerText = response.data.covid19Stats[0].deaths;
           recuperadosHTML.innerText = response.data.covid19Stats[0].recovered;
           ultimaHTML.innerText = "Ultima actualización: " + response.data.covid19Stats[0].lastUpdate;
        }

        update();
    });

});

