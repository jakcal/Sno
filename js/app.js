var $$ = Dom7;

// Import F7 Styles
import 'https://abrahem.github.io/Sno/framework7/css/framework7.bundle.css';

// Import Icons and App Custom Styles
import 'https://abrahem.github.io/Sno/css/icons.css';
import 'https://abrahem.github.io/Sno/css/app.less';

// Import Routes
import routes from './routes.js';


// Framework7 App main instance
  var app = new Framework7({
    root: '#app', // App root element
    id: "com.snoanimex.iq",
    name: 'SnoAnime X', // App name
    theme: 'auto', // Automatic theme detection
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