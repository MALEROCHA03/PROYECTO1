//Variable que almacena las coordenadas
var direccion_lima=new google.maps.LatLng(-12.046374,-77.0427934);

// Función para inicializar el mapa
function initialize()
{
var mapProp = {
  //Muestra las coordenadas al centro del mapa
  center:direccion_lima,
  //Zoom del mapa 
  zoom:10,
 // Tipo de mapa: ROADMAP, SATELLITE, HYBRID, TERRAIN 
  mapTypeId:google.maps.MapTypeId.ROADMAP
  };

// Creamos un mapa en el contenedor con id map_lima,  usando los parámetros de la variable mapProp
var map = new google.maps.Map(document.getElementById("map_lima"),mapProp);

var myCity = new google.maps.Circle({
  //Muestra las coordenadas al centro del mapa
  center:direccion_lima,
  //Especifica el radio del círculo, en metros
  radius:2000,
  //Especifica un color hexadecimal para la línea alrededor del círculo (formato: "#FFFFFF")
  strokeColor:"#0080FF",
  //Especifica la opacidad del color del trazo (un valor entre 0,0 y 1,0)
  strokeOpacity:0.8,
  //Especifica el grosor del trazo de la línea en píxeles
  strokeWeight:2,
  //Especifica un color hexadecimal para el área dentro del círculo (formato: "#FFFFFF")
  fillColor:"#0080FF",
  //Especifica la opacidad del color de relleno (un valor entre 0,0 y 1,0)
  fillOpacity:0.4,
  //Define si el círculo es editable por los usuarios (verdadero / falso)
  editable: false
  });

//Mostramos el circulo en el mapa utilizando el método setMap()
myCity.setMap(map);

//Mostramos el marcador en las coordenadas almacenada en la variable direccion_lima
var marker=new google.maps.Marker({
  position:direccion_lima,
});

//Añadimos el marcador para el mapa utilizando el método setMap()
marker.setMap(map);

// Mostramos nuestro texto
var infowindow = new google.maps.InfoWindow({
  content:"Lima - Perú!"
  });

//infowindow muestra el contenido (generalmente texto o imágenes) en una ventana emergente por encima del mapa
infowindow.open(map,marker);
}

//Mostramos el mapa una vez que cargue el navegador, con el evento addDomListener de Google Maps API
google.maps.event.addDomListener(window, 'load', initialize);