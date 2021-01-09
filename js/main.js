let map;
let marker;

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 23.8103, lng: 90.4125 },
    zoom: 14,
  });

  marker = new google.maps.Marker({
      position: { lat: 23.8103, lng: 90.4125 },
      map: map
  });
}