window.onload = function()
{
	var aleatorio = Math.floor((Math.random() * 200) + 50);
	var intentos =0;
	console.log("numero "+ aleatorio);
	nom_div("intentos").innerHTML = "intento "+intentos+" de 20";
	nom_div("lol").innerHTML = "el numero esta entre: "+(aleatorio-Math.floor((Math.random()*20)+5))+" y 	"+(aleatorio+Math.floor((Math.random()*20)+5));
	nom_div("comprobar").addEventListener('click', function(event)
	{
		if(intentos <= 20)
		{
			intentos++;
			nom_div("intentos").innerHTML = "intento "+intentos+" de 20";
			if(nom_div("numero").value > aleatorio + 20)
			{
				nom_div("pista").innerHTML = "frio";	
			}
			else if(nom_div("numero").value > aleatorio + 10)
			{
				nom_div("pista").innerHTML = "tibio";		
			}
			else if(nom_div("numero").value > aleatorio + 2)
			{
				nom_div("pista").innerHTML = "caliente";		
			}			
			else if(nom_div("numero").value < aleatorio + 20)
			{
				nom_div("pista").innerHTML = "frio";		
			}
			else if(nom_div("numero").value < aleatorio + 10)
			{
				nom_div("pista").innerHTML = "tibio";		
			}
			else if(nom_div("numero").value < aleatorio + 2)
			{
				nom_div("pista").innerHTML = "caliente";		
			}			
			//console.log(nom_div("numero").value);
			//console.log("Aleatorio = "+aleatorio);
			if(nom_div("numero").value == aleatorio)
			{
				nom_div("A").innerHtml = "Has ganado";
				alert("Has Ganado");
				location.reload();	
				//console.log("Correcto"+nom_div("numero").value);
			}	

		}
		else
		{
			alert("perdiste");
			location.reload();
		}
	});	
	
	function nom_div(div)
	{
		return document.getElementById(div);
	}	
}