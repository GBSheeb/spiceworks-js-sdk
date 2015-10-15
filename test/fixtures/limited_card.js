var card = new SW.Card();

var assertionsService = card.services('assertions');
var pongService = card.services('pong');

pongService.request('ping').then(function (response) {
  assertionsService.trigger('fail');
}, function (response) {
  assertionsService.trigger('ok', {
    bool: response.errors[0].title === "Connection Error",
    message: 'it should throw an exception when trying to use a capability that is unprovided'
  });
});
