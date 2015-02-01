document.addEventListener("DOMContentLoaded", function(){
  
  if( navigator.geolocation ){
      
//finding the position
      
    var params = {enableHighAccuracy: false, timeout:36000, maximumAge:60000};
    navigator.geolocation.getCurrentPosition( reportPosition, gpsError, params ); 
      
//watching the position
     //navigator.geolocation.watchPosition(reportPosition, gpsError, params);
  }
    else{
        alert("Sorry, but your browser does not support geolocation.")
        }
});

function reportPosition( position ){ 
//creating canvas element
    var canvas = document.createElement("canvas");
    canvas.id = "myCanvas";
    canvas.width = 400;
    canvas.height = 400;
    document.body.appendChild(canvas);
    var context = canvas.getContext('2d');
    
//creating and drawing image to Canvas element
      var imageObj = document.createElement("img");
      imageObj.onload = function() {
      context.drawImage(imageObj, 0, 0);       
};        
    //referencing to google static maps and setting the lattitude and longitude 
    imageObj.src = "http://maps.google.com/maps/api/staticmap?sensor=false&center=" + position.coords.latitude + ',' + position.coords.longitude + "&zoom=14&size=400x400&markers=color:red|label:T|" + position.coords.latitude + ',' + position.coords.longitude; 
    
    //creating an output div and adding parameters to it
    var output = document.createElement("div");
    output.id = "output";
    document.body.appendChild(output);
  output.innerHTML += "</br>" + "Latitude: " + position.coords.latitude + "&deg;<br/>"
  + "Longitude: " + position.coords.longitude + "&deg;<br/>"
  + "Accuracy: " + position.coords.accuracy + "m<br/>"
  + "Altitude: " + position.coords.altitude + " m<br/>"
  + "Heading: " + position.coords.heading + " &deg;<br/>"
  + "Speed: " + position.coords.speed + " m/s<br/>"
  + "Timestamp: " + position.timestamp;
    
}

function gpsError( error ){
  var errors = {
    1: 'Permission denied',
    2: 'Position unavailable',
    3: 'Request timeout'
  };
  alert("Error: " + errors[error.code]);
}