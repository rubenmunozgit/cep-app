// create a JavaScript object here with the following fields: firstName, lastName, jobTitle, homeOffice
let personalProfile = {
  "name": "Ruben Muñoz Palomino",
  "jobTitle": "GPS (Goblal Professional Service) API Integration Support",
  "homeOffice": "Paseo de la Castellana, 259, Madrid",
  "tellMeMore": "A dad of a wonderfull 2 twin girls, and a loved husband. <br>" +
    "At work, I'm part of the HomeAway integrated property management team.<br> Supervising integration with 3rd party softwares. <br> Every integration has to run successfully to provide a better traveler experience at booking time."
};

let weatherIcons = {
  "sn": "/static/img/weather/hc.svg",
  "sl": "/static/img/weather/hc.svg",
  "h": "/static/img/weather/hc.svg",
  "t": "/static/img/weather/hc.svg",
  "hr": "/static/img/weather/hc.svg",
  "lr": "/static/img/weather/hc.svg",
  "s": "/static/img/weather/hc.svg",
  "hc": "/static/img/weather/hc.svg",
  "lc": "/static/img/weather/hc.svg",
  "c": "/static/img/weather/hc.svg"
}
let metrics, speedUnit;
let htmlbody;

setSystMetrics();

function removeClasses() {
  $(".card-img-top").remove();
  $(".card-body").remove();
  $(".mapouter").remove();
}

//function to handle btn events
function showName(property) {
  $("#paragh-data").hide();
  removeClasses();
  htmlbody = '';
  htmlbody = '<div class="card-body"><h5 class="card-title">' + property + '</h5><p></p></div>' +
    '<img src="../src/img/Perfil.jpg" class="card-img-top" alt="Picture Profile" width="250" height="200" style="object-fit: contain;">'
  $("#paragh-data").append(htmlbody);
  $("#paragh-data").show();
}

function showJobTitle(property) {
  $("#paragh-data").hide();
  removeClasses();
  htmlbody = "";
  htmlbody = '<div class="card-body"> \n' +
    '<p>' + property + '</p>\n' +
    '</div>'
  $("#paragh-data").append(htmlbody);
  $("#paragh-data").show();
}

function showHomeOffice(property) {
  $("#paragh-data").hide();
  removeClasses();
  htmlbody = "";
  htmlbody = '<div class="mapouter"><div class="gmap_canvas"><iframe width="600" height="500" id="gmap_canvas" src="https://maps.google.com/maps?q=' + property + '&t=&z=15&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe></div><style>.mapouter{text-align:right;height:500px;width:600px;}.gmap_canvas {overflow:hidden;background:none!important;height:500px;width:600px;}</style></div>'
  $("#paragh-data").append(htmlbody);
  $("#paragh-data").show();
}

function showtellMeMore(property) {
  $("#paragh-data").hide();
  removeClasses();
  htmlbody = "";
  htmlbody = '<div class="card-body"> \n' +
    '<p>' + property + '</p>\n' +
    '</div>'
  $("#paragh-data").append(htmlbody);
  $("#paragh-data").show();
}


// using jQuery and the object above, display the information as the appropriate button is clicked
$("#name").click(function(event) {
  showName(personalProfile.name);
});

$("#jobTitle").click(function(event) {
  showJobTitle(personalProfile.jobTitle);
});

$("#homeOffice").click(function(event) {
  showHomeOffice(personalProfile.homeOffice);
});

$("#tellMeMore").click(function(event) {
  showtellMeMore(personalProfile.tellMeMore);
});

$("#CelsiusFah").click(function(event) {
  if ($(this).is(":checked")) {
    setUSmetrics();
  }
  else {
    setSystMetrics();
  }
  drawGraph();
})
