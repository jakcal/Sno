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

$$('.open-preloader-indicator').on('click', function () {
  app.preloader.show();
  setTimeout(function () {
    app.preloader.hide();
  }, 3000);
});

var i;
for (i = 0; i < 1; i++) {
  createitem("https://cdn.framework7.io/placeholder/fashion-88x88-4.jpg","name","subtitle");
}
function createitem(img,name,title) {
  var content = document.getElementById("snoanime");
  //Div
  var div1 = document.createElement("div");
  div1.style = 'style="height: 160;"';
  div1.className = "card";
  var div2 = document.createElement("div");
  div2.className = "card-content"
  var div3 = document.createElement("div");
  div3.className = "list media-list no-ios-edges"
  var div4 = document.createElement("div");
  div4.className = "item-media"
  var div5 = document.createElement("div");
  div5.className = "item-inner";
  var div7 = document.createElement("div");
  div7.className = "item-subtitle";
  div7.innerText = name;
  var div8 = document.createElement("div");
  div8.className = "item-subtitle";
  div8.innerText = title;

  //Div
  //UL And Li
  var ul = document.createElement("ul");
  var li = document.createElement("li");
  li.className = "item-content"
  //UL And Li
  //Image
   var image = document.createElement("img"); 
   image.className = "";
   image.src = img;
   image.width = "125";
   image.height = "160";
  //Image
  //Append
  div4.appendChild(image);
  div5.appendChild(div7);
  div5.appendChild(div8);
  li.appendChild(div4);
  li.appendChild(div5);
  ul.appendChild(li);
  div3.appendChild(ul);
  div2.appendChild(div3);
  div1.appendChild(div2);
  content.appendChild(div1);
  console.log("created item");
}
