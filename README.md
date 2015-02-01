# MAD9022 - GEOLOCATION
-----------------------------
###Author###

Nune Vardanyan (E-mail: vard0020@algonquinlive.com)
###Version###
1.0.0 (last modified: January 31, 2015)
###License###
_MAD&D NuneVardanyan Inc._
###Description###
This webpage is designed to return a device's location and show it based on actual GPS data, ISP, IP address, or wi-fi network. The user will always be prompted by the browser for permission to access their location. If they hit **YES** the webpage will load a google STATIC map that includes a marker at the center of the map. 
Below the map the user will see all he GPS info including: 

  - *Latitude*
  - *Longitude*
  - *Occuracy*
  - *Altitude*
  - *Heading*
  - *Speed*
  - *Timestamp* 
  

If the device/browser does not support geolocation or the user refuses to accept the browser prompt message, then the page will display a corresponding feedback message back to the user.

###Instructions###

The process of fetching GPS data and displaying it to the user involves the following steps:

**Step 1:**
_Determine if the device / browser supports geolocation._

```sh
if( navigator.geolocation ){ 
  //code goes here to find position
}
```
**Step 2:**
_Write the corresponding code to find the position._

```sh
var params = {enableHighAccuracy: true, timeout:360000, maximumAge:0};
navigator.geolocation.getCurrentPosition( watchPosition, gpsError, params ); 
```
**Step 3:**
_Create an HTML Canvas element, an image and draw the IMG to Canvas_
```sh
function reportPosition( position ){ 
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
```
**Step 4:**
_Refer to Google Static Maps and set the lattitude and longitude_
```sh
imageObj.src = "http://maps.google.com/maps/api/staticmap?sensor=false&center=" + position.coords.latitude + ',' + position.coords.longitude + "&zoom=14&size=400x400&markers=color:red|label:T|" + position.coords.latitude + ',' + position.coords.longitude; 
```
**Step 5:**
_Create an HTML output div element and add content and GPS parameters to it_
```sh
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
```
**Step 6:**
_Finally, add error callback function to handle the errors_
```sh
function gpsError( error ){
  var errors = {
    1: 'Permission denied',
    2: 'Position unavailable',
    3: 'Request timeout'
  };
  alert("Error: " + errors[error.code]);
}
```
###Useful links on Geolocation###

 [www.html5doctor.com/finding-your-position-with-geolocation/](http://html5doctor.com/finding-your-position-with-geolocation/)
 
 [www.developer.mozilla.org/en/docs/WebAPI/Using_geolocation/](https://developer.mozilla.org/en/docs/WebAPI/Using_geolocation/) 
 
 [www.sitepoint.com/html5-geolocation/](http://www.sitepoint.com/html5-geolocation/) 
 
 [www.diveintohtml5.info/geolocation.html/](http://www.diveintohtml5.info/geolocation.html/) 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
