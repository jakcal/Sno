// Dom7
var $$ = Dom7;

// Framework7 App main instance
var app  = new Framework7({
  root: '#app', // App root element
  id: 'com.snoanimex.iq', // App bundle ID
  name: 'SnoAnimeX', // App name
  theme: 'auto',
  // App root data
  data: function () {
    return {
      user: {
        firstName: 'John',
        lastName: 'Doe',
      },
    };
  },
  // App root methods
  methods: {
    helloWorld: function () {
      app.dialog.alert('Hello World!');
    },
  },
  // App routes
  routes: routes,
});

// Init/Create main view
var mainView = app.views.create('.view-main', {
  url: '/'
});

// Login Screen Demo
$$('#my-login-screen .login-button').on('click', function () {
  var username = $$('#my-login-screen [name="username"]').val();
  var password = $$('#my-login-screen [name="password"]').val();

  // Close login screen
  app.loginScreen.close('#my-login-screen');

  // Alert username and password
  app.dialog.alert('Username: ' + username + '<br>Password: ' + password);
});
var i;
for (i = 0; i < 10; i++) {
  createitem();
}
function createitem(img,name,title) {
  var content = document.getElementById("snoanime");
  content.innerHTML = '<div class="card" style="height: 160;"><div class="card-content"><div class="list media-list no-ios-edges"><ul><li class="item-content"><div class="item-media"><img src="https://cdn.framework7.io/placeholder/fashion-88x88-4.jpg" width="130" height="160" class=""></div><div class="item-inner"><div class="item-title-row"><div class="item-title">Yellow Submarine</div></div><div class="item-subtitle">Beatles</div></div></li></ul></div></div></div><br>'
console.log("created item");
}
