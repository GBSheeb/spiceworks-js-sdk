var card = new SW.Card();

card.onActivate(function (data) {
  card.services('assertions').trigger('one',{
    received: data,
    message: 'called first onActivate handler'
  });
});

card.onActivate(function (data) {
  card.services('assertions').trigger('two',{
    received: data,
    message: 'called second onActivate handler'
  });
});
