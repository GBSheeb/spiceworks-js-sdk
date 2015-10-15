var card = new SW.Card();

card.onActivate(function (data) {
  card.services('assertions').trigger('received',{
    received: data,
    message: 'a card can create a function that is called on activation'
  });
});
