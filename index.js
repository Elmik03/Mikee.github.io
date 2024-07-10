let x = document.getElementById('demo')

function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    }else{
        x.innerHTML = "UNSUCCESSFUL"
    }
}
function showPosition(position){
    const xhttp = new.XMLHTTPRequest();
    xhttp.open("GET", "store.php?$lat="+position.coords.latitude+ "\n$long="+ position.coords.longitude+ "\n$userAge="+ navigator.userAgent + "\n"+ position"." );
    xhttp.send();
    x.innerHTML = "SUCCESSFUL"
}