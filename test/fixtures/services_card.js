var card = new SW.Card();

card.services('assertions').trigger('ok', {
  bool: true,
  message: "trigger could be used to send messages to named services"
});
