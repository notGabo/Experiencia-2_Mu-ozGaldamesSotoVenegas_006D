$(document).ready(function(){
          
    $.ajax({
            url:"http://api.weatherapi.com/v1/forecast.json?key=7623d859c2064971934171222222704&q=auto:ip&days=1&aqi=no&alerts=no", 
                type: "GET",
                success: function(resultado){
                    let temperaturaValor = document.getElementById('temperatura-valor');
                    let iconoAnimado = document.getElementById('iconoA');
                    let temp;
                    let intento=temperaturaValor;
                    let temperaturaPlant= document.getElementById('temperaturav')

                    console.log(resultado);
                    temperaturaValor.textContent =(resultado.current.temp_c+'°C');
                    temp=resultado.current.temp_c;
                    parseInt(temp);
                    if (temp>=30) {
                        iconoAnimado.src ='animated/day.svg';
                        $("#temperaturav").html("<p style='color:#ff0000ea;'> Demasiado Calor Para La Planta </p>");
                        $("#temperaturav2").html("<p style='color:#ff0000ea;'> Demasiado Calor Para La Planta </p>");
                        $("#temperaturav4").html("<p style='color:#ff0000ea;'> Demasiado Calor Para La Planta </p>");
                        $("#temperaturav6").html("<p style='color:#1a8623;'> Temperatura Normal</p>");
                        $("#temperaturav7").html("<p style='color:#1a8623;'> Temperatura Normal</p>");
                        $("#temperaturav9").html("<p style='color:#1a8623;'> Temperatura Normal</p>");
                        return false;
                    }
                    else if (19<=temp && temp<=29) {
                        iconoAnimado.src ='animated/cloudy-day-1.svg';
                        $("#temperaturav").html("<p style='color:#2b9c48;'>Clima Normal Para La Planta </p>");
                        $("#temperaturav2").html("<p style='color:#2b9c48;'>Clima Normal Para La Planta </p>");
                        $("#temperaturav4").html("<p style='color:#2b9c48;'>Clima Normal Para La Planta </p>");
                        $("#temperaturav6").html("<p style='color:#1a8623;'> Temperatura Normal</p>");
                        $("#temperaturav7").html("<p style='color:#1a8623;'> Temperatura Normal</p>");
                        $("#temperaturav9").html("<p style='color:#1a8623;'> Temperatura Normal</p>");
                        
                        return false;
                    }
                    else if (temp<=18) {
                        iconoAnimado.src ='animated/snowy-4.svg';
                        $("#temperaturav").html("<p style='color: #1714b9;'>Demasiado Frio Para La Planta </p>");
                        $("#temperaturav2").html("<p style='color: #1714b9;'>Demasiado Frio Para La Planta </p>");
                        $("#temperaturav4").html("<p style='color: #1714b9;'>Demasiado Frio Para La Planta </p>");
                        $("#temperaturav6").html("<p style='color:#1a8623;'> Temperatura Normal</p>");
                        $("#temperaturav7").html("<p style='color:#1a8623;'> Temperatura Normal</p>");
                        $("#temperaturav9").html("<p style='color:#1a8623;'> Temperatura Normal</p>");
                        return false;
                    }
                },
                error: function(error){
                    console.log(error);
                },
    })
})
