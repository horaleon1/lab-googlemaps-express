window.onload = () => {
  let center = {
    lat: undefined,
    lng: undefined
  };
};

const ironHackBCN = {
  lat: 19.4213,
  lng: -99.163
};

const markers = [];
const map = new google.maps.Map(document.getElementById("map"), {
  zoom: 13,
  center: ironHackBCN
});
const myMarker = new google.maps.Marker({
  position: {
    lat: 19.4213,
    lng: -99.163
  },
  map: map,
  title: "IronHack Mexico"
});

const getRestaurants = () => {
  fetch("/restaurants/api")
  //vip*****
    .then( response => (response.json()))
    .then(res => {
      placeRestaurants(res.formData.restaurants);
    })
    .catch(err => {
      console.log(err);
    });
};

const placeRestaurants = restaurants => {
  restaurants.forEach(element => {
    const center = {
      lat: element.location.coordinates[1],
      lng: element.location.coordinates[0]
    };
    const pin = new google.maps.Maker({
      position: center,
      map: map,
      title: element.name
    });
    markers.push(pin);
  });
};

getRestaurants();
