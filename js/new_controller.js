app.router.route('appts/new', function () {

  // Render the view
  app.show('new-appt', { user: new app.User(), title: 'New User' });

  // Bind our events

  $('.user-form').on('submit', function (e) {
    e.preventDefault();

    app.users.add(new app.User(app.serializeForm(this)));

    app.goto('users');
  });

});
