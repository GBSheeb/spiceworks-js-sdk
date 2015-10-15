var card = new SW.Card();

var assertionsService = card.services('assertions');

assertionsService.request('count', 'one', 'two', 'three').then(function (response) {
  assertionsService.trigger('okCount', { 
    bool: response === 3,
    message: "count with multiple arguments"
  });
});

assertionsService.request('join', 'one', 'two').then(function (response) {
  assertionsService.trigger('okJoin', {
    bool: response === "one and two",
    message: "join with multiple arguments"
  });
});

assertionsService.request('add', 1, 2).then(function (response) {
  assertionsService.trigger('okAdd', {
    bool: response === 3,
    message: "add two args"
  });
});
