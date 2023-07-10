// Initialize the application

window.EcwidApp.init({
  app_id: "easy-upsell-dev", // use your application namespace
  autoloadedflag: true,
  autoheight: true,
});

var storeData = window.EcwidApp.getPayload();

var storeId = storeData.store_id;
var accessToken = storeData.access_token;
var language = storeData.lang;
var viewMode = storeData.view_mode;

console.log("access token", accessToken);

if (storeData.public_token !== undefined) {
  var publicToken = storeData.public_token;
}

if (storeData.app_state !== undefined) {
  var appState = storeData.app_state;
}
