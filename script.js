
 function initMap() {
  const options = {
      zoom:12,
      center:{lat:53.013790,lng:18.598444}
  }

  const map = new google.maps.Map(document.getElementById("map"), options);

  var marker = new google.maps.Marker({
      position:{lat:53.010460,lng:18.663411},
      map:map
  });
}


AOS.init({
    delay: 400,
    duration: 1900,
    once: false,
  });

require("dotenv").config();
const api_key = process.env.API_KEY;

