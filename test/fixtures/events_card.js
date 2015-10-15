var card = new SW.Card();

card.services('assertions')
  .trigger('ok', {
    bool: true,
    message: "trigger can be used to send messages to named services"
  })
  .on('ping', function (message) {
    this.trigger('pong', {
      bool: true,
      message: "'on' can be used to respond to events"
    });
  });
