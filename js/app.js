// Dom7
var $$ = Dom7;

// Framework7 App main instance
var app  = new Framework7({
  root: '#app', // App root element
  id: 'com.snoanimex.iq', // App bundle ID
  name: 'SnoAnimeX', // App name
  theme: 'auto',
  lazy: {
    threshold: 50,
    sequential: false,
  },
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

app.sheet.create({
  el: '.my-sheet-swipe-to-close',
  swipeToClose: true,
  backdrop: true,
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
app.preloader.show();

var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      var obj = JSON.parse(xhttp.responseText);
      for (i = 0; i < obj.length; i++) {
        var oimg = "https://snoanime.com/image.php/?name="+obj[i].image;
        var id = 'https://snoanime.com/api/new/info.php/?url='+obj[i].id;
        createitem(oimg,obj[i].name,obj[i].epName,id,obj[i].status,obj[i].year);
      }
      app.preloader.hide();
    }
  };
  xhttp.open("GET", "https://snoanime.com/api/new/", true);
  xhttp.send();
function createitem(img,name,title,id,state,starts) {
  var content = document.getElementById("snoanime");
  //info
  var lid = document.createElement("li");
  
  lid.style.display = "inherit";
  
  var infos = document.createElement("a");
  
  infos.className = "";
  
  infos.href = id;
  //Div
  var div1 = document.createElement("div");
  div1.style = 'style="height: 160;"';
  div1.className = "card";
  div1.onclick = function() {load(id,name,img,state,starts)};
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
   image.setAttribute("src",img);
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
  infos.appendChild(div2)
  lid.appendChild(infos);
  div1.appendChild(lid);
  content.appendChild(div1);
  console.log("Loaded Anime To SnoAnime By ibrahim khaled");
}
function load(id,name,img,state,starts) {
localStorage.setItem("name", name);	
localStorage.setItem("img", img);	
localStorage.setItem("state", state);	
localStorage.setItem("start", starts);
localStorage.setItem("id", id);	

app.preloader.show();
app.tab.show(document.getElementById("taps"), true); 
app.request.json(id, function (data) {
	//epName
	document.getElementById("texts").style.display = "none";
    document.getElementById("km").innerText = data["ep"].length;
      for (i = 0; i < data["ep"].length; i++) {
         var btn = document.createElement("button");
         btn.innerText = data["ep"][i].name;
         btn.setAttribute("class","col button button-large button-raised");
         btn.setAttribute("style","width: 100%;margin: 5px; color: black;");
   
		 var datag = data["ep"][i].id;
         btn.setAttribute("onclick","shows("+datag+")");
		 document.getElementById("list-ep").appendChild(btn);
      }
	//epName
  document.getElementById("titles").innerHTML = localStorage.getItem("name");
  var story = document.getElementById("story");
  document.getElementById("images").src = localStorage.getItem("img");
  //Two
  var genre = document.getElementById("genres");
  var age = document.getElementById("studios");
  document.getElementById("statics").innerHTML = localStorage.getItem("state");
  var ratings = document.getElementById("rating");
  document.getElementById("start").innerHTML = localStorage.getItem("start");
  story.innerText = data["main"].story;
  genre.innerText = data["main"].genres;
  var n = data["main"].age.includes("+");
  if (n == true) {
  age.innerText = data["main"].age;
  } else {
  age.innerText = "+13";
  }
  ratings.innerText = data["main"].rank;
  app.preloader.hide();
});
}
function shows(id) {
	  var n = navigator.userAgent.includes("99990000");
      if (n == true) {
	   sendDataToAndroid(localStorage.getItem("id"));
      } else {
       app.sheet.open('.my-sheet-swipe-to-close', true);
      }
}

function sendDataToAndroid(toast) {
        MyFunction.onButtonClick(toast);
    }
	
	function showLoading() {
       app.preloader.show();
    }
	function hideLoading() {
       app.preloader.hide();
    }
