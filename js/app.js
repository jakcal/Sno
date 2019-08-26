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
    if (localStorage.getItem("SaveLogin")) {
	toastBottom.open();
	document.getElementById("btns").innerText = "تسجيل خروج";
    } else {

    }
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
  
  infos.className = "popup-open";
  
  infos.href = "#";
  infos.setAttribute("data-popup",".popup-about")
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
function createitemlist(img,name,title,id,state,starts) {
  var content = document.getElementById("snoanime-list");
  //info
  var lid = document.createElement("li");
  
  lid.style.display = "inherit";
  
  var infos = document.createElement("a");
  
  infos.className = "";
  
  infos.href = "/info/";
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
var idg = localStorage.getItem("id");
idg = idg.replace("https://snoanime.com/api/new/info.php/?url=", "");
var usl = "https://snoanime.com/api/new/read.php/?id="+idg;
app.request.json(usl, function (data) {
	  document.getElementById("km2").innerText = data.length;
      for (i = 0; i < data.length; i++) {
	  var name = data[i].name;
	  var time = data[i].time;
	  var commant = data[i].commants;
      showCom(time,name,commant);
      }
});
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
                var idg = localStorage.getItem("id");
                idg = idg.replace("https://snoanime.com/api/new/info.php/?url=", "");
                 if (localStorage.getItem(idg) === null) {
					 document.getElementById("ssff").style.display = "none";
                 } else {
                  document.getElementById("ssff").style.display = "inline-flex";
                 }
  app.preloader.hide();
});
}
function shows(id) {
	  var n = navigator.userAgent.includes("99990000");
      if (n == true) {
	   sendDataToAndroid(localStorage.getItem("id"),id);
      } else {
       app.sheet.open('.my-sheet-swipe-to-close', true);
      }
}

function sendDataToAndroid(toast,id) {
        MyFunction.onButtonClick(toast,id);
    }
function sendFav(id) {
			Fav.onButtonClick(id);
    }
function createCom() {
		 if (localStorage.getItem("SaveLogin")) {
			app.preloader.show();
			var commant = document.getElementById("comm").value;
			var name = localStorage.getItem("username");
		    var email = localStorage.getItem("email");
			var idg = localStorage.getItem("id");
            idg = idg.replace("https://snoanime.com/api/new/info.php/?url=", "");
		    var time = iso8601(new Date());
            var url = "https://snoanime.com/api/new/send-commants.php/?id="+idg+"&name="+name+"&commants="+commant+"&time="+time+"&email="+email;
			app.request.get(url, function (data) {
			app.preloader.hide();
            toas.open();
			var div = document.createElement("div");
			div.setAttribute("class","card post-card");
			div.setAttribute("style","background-color: #673ab7;");
			//card post-card
			
			var div2 = document.createElement("div");
			div2.setAttribute("class","card-header");
			div2.setAttribute("style","padding-top: 4px; align-items: baseline;");
			//card header
			var div3 = document.createElement("div");
			div3.setAttribute("class","user flex-column");
			div3.setAttribute("style","height: 100%;");
			//userflix
			
			var div4 = document.createElement("div");
			div4.setAttribute("class","snoanime-command");
			//sno
			var div5 = document.createElement("div");
			div5.setAttribute("class","name");
			div5.innerText = name;
	
			var div6 = document.createElement("div");
			div6.setAttribute("class","user flex-column");
			div6.setAttribute("style","padding-right: 10px;");
			var div7 = document.createElement("div");
			div7.setAttribute("class","time");
			div7.setAttribute("style","color: white;font-size: 19px;text-align: right;");
			div7.innerText = commant;
			div6.appendChild(div7);
			var div8 = document.createElement("div");
			div8.setAttribute("class","card-content");
			div8.setAttribute("style","padding: 4px;");
			var div9 = document.createElement("div");
			div9.setAttribute("class","text");
			div9.setAttribute("style","color: white;");
			div9.setAttribute("datetime",time);
			div9.setAttribute("id","times");
			div9.innerText = time;
			div8.appendChild(div9);
			div4.appendChild(div5);
			div3.appendChild(div4);
			div2.appendChild(div3);
			div.appendChild(div2);
			div.appendChild(div6);
			div.appendChild(div8);
			document.getElementById("list-commant").appendChild(div);
			timeago.render(div9, 'ar');
            });
         } else {
			 toass.open();
         }
	}
	
	function showCom(times,name,commant) {
			var div = document.createElement("div");
			div.setAttribute("class","card post-card");
			div.setAttribute("style","background-color: #673ab7;");
			//card post-card
			
			var div2 = document.createElement("div");
			div2.setAttribute("class","card-header");
			div2.setAttribute("style","padding-top: 4px; align-items: baseline;");
			//card header
			var div3 = document.createElement("div");
			div3.setAttribute("class","user flex-column");
			div3.setAttribute("style","height: 100%;");
			//userflix
			
			var div4 = document.createElement("div");
			div4.setAttribute("class","snoanime-command");
			//sno
			var div5 = document.createElement("div");
			div5.setAttribute("class","name");
			div5.innerText = name;
	
			var div6 = document.createElement("div");
			div6.setAttribute("class","user flex-column");
			div6.setAttribute("style","padding-right: 10px;");
			var div7 = document.createElement("div");
			div7.setAttribute("class","time");
			div7.setAttribute("style","color: white;font-size: 19px;text-align: right;");
			div7.innerText = commant;
			div6.appendChild(div7);
			var div8 = document.createElement("div");
			div8.setAttribute("class","card-content");
			div8.setAttribute("style","padding: 4px;");
			var div9 = document.createElement("div");
			div9.setAttribute("class","text");
			div9.setAttribute("style","color: white;");
			div9.setAttribute("datetime",times);
			div9.setAttribute("id","times");
			div9.innerText = times;
			div8.appendChild(div9);
			div4.appendChild(div5);
			div3.appendChild(div4);
			div2.appendChild(div3);
			div.appendChild(div2);
			div.appendChild(div6);
			div.appendChild(div8);
			document.getElementById("list-commant").appendChild(div);
			timeago.render(div9, 'ar');
	}
	
	function iso8601(date) {
  return date.getUTCFullYear()
    + "-" + (date.getUTCMonth()+1)
    + "-" + date.getUTCDate()
    + "T" + date.getUTCHours()
    + ":" + date.getUTCMinutes()
    + ":" + date.getUTCSeconds() + "Z";
}
function starttest() {
	if (localStorage.getItem("SaveLogin")) {
	toastBottom.open();
	document.getElementById("btns").innerText = "تسجيل خروج";
    } else {

    }
}
function ifre() {
	if (localStorage.getItem("SaveLogin")) {
	app.dialog.confirm('هل تود تسجيل الخروج ؟', function (username, password) {
	localStorage.removeItem("SaveLogin");
    localStorage.removeItem("username");
    localStorage.removeItem("email");
    document.getElementById("btns").innerText = "";
	document.getElementById("btns").innerText = "تسجيل دخول أو أنشاء حساب";
    });
    } else {
	app.loginScreen.open(document.getElementsByClassName('login-screen'),true)
    }
}

function register() {
	var s1 = document.getElementById("username").value;
	var s2 = document.getElementById("email").value;
	var s3 = document.getElementById("password").value;
	app.preloader.show();
	if(s1.trim())
    {
        if(s2.trim())
        {
            if(s3.trim())
            {
             var email = document.getElementById("email").value;
             var password = document.getElementById("password").value;
             var url = "https://snoanime.com/api/new/reg.php/?email="+email+"&password="+password;
	         app.request.get(url, function (data) {
				 app.preloader.hide();
	             app.dialog.alert(data);

              });
            } else {
				app.preloader.hide();
  app.dialog.alert('يجب عليك أدخال كلمة المرور');
        }
        } else {
			app.preloader.hide();
  app.dialog.alert('يجب عليك كتابة البريد الاكتروني');
    }
    } else {
		app.preloader.hide();
  app.dialog.alert('يجب عليك كتابة اسمك');
		}
	
}
function logins() {
	var s1 = document.getElementById("username").value;
	var s2 = document.getElementById("email").value;
	var s3 = document.getElementById("password").value;
	app.preloader.show();
	if(s1.trim())
    {
        if(s2.trim())
        {
            if(s3.trim())
            {
             var email = document.getElementById("email").value;
             var password = document.getElementById("password").value;
             var url = "https://snoanime.com/api/new/login.php/?email="+email+"&password="+password;
	         app.request.get(url, function (data) {
				 app.preloader.hide();
	             app.dialog.alert(data);
				 var n = data.includes("أسم المستخدم أو الرقم السري غير صحيح");
                 if (n == true) {

                 } else {
                 localStorage.setItem("SaveLogin", true);
				 localStorage.setItem("username", s1);
				 localStorage.setItem("email", s2);
				 document.getElementById("btns").innerText = "";
	             document.getElementById("btns").innerText = "تسجيل خروج";
				 app.loginScreen.close(document.getElementsByClassName('login-screen'),true); 
				 }
              });
            } else {
				app.preloader.hide();
  app.dialog.alert('يجب عليك أدخال كلمة المرور');
        }
        } else {
			app.preloader.hide();
  app.dialog.alert('يجب عليك كتابة البريد الاكتروني');
    }
    } else {
		app.preloader.hide();
  app.dialog.alert('يجب عليك كتابة اسمك');
		}
	
}
var toastBottom = app.toast.create({
  text: 'أهلا بك مرى أخرى أستاذ '+ localStorage.getItem("username"),
  closeTimeout: 2000,
});
var toass = app.toast.create({
  text: 'يجب عليك تسجيل الدخول',
  closeTimeout: 2000,
});
var toas = app.toast.create({
  text: 'تم أرسال تعليقك',
  closeTimeout: 2000,
});
function favorite() {
	             var idg = localStorage.getItem("id");
                 idg = idg.replace("https://snoanime.com/api/new/info.php/?url=", "");
                 if (localStorage.getItem(idg) === null) {
                 var name = localStorage.getItem("name");
                 var image = localStorage.getItem("img");
                 var data = '{"id":"'+idg+'","name":"'+name+'","image":"'+image+'" }';
                 var obj = JSON.parse(data);
                 localStorage.setItem(idg, JSON.stringify(obj));
                 document.getElementById("ssff").style.display = "inline-flex";
                 } else {
					   app.dialog.confirm('حذف ألانمي من المفضلة ؟', function (username, password) {
	                   localStorage.removeItem(idg);
					   document.getElementById("ssff").style.display = "none";
                       });
                 }
}
function androidcode() {
	localStorage.removeItem('id');
	localStorage.removeItem("name");	
  localStorage.removeItem("img");	
  localStorage.removeItem("state");	
  localStorage.removeItem("start");
}
function golist() {
	app.preloader.show();
	var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      var obj = JSON.parse(xhttp.responseText);
      for (i = 0; i < obj.length; i++) {
        var oimg = "https://snoanime.com/image.php/?name="+obj[i].image;
        var id = 'https://snoanime.com/api/new/info.php/?url='+obj[i].id;
        createitemlist(oimg,obj[i].name,obj[i].status,id,obj[i].status,obj[i].year);
      }
      app.preloader.hide();
    }
  };
  xhttp.open("GET", "https://snoanime.com/api/new/list.php", true);
  xhttp.send();
}
function clears() {
  document.getElementById("km").innerText = "0"
  document.getElementById("km2").innerText = "0"
  document.getElementById("images").removeAttribute("src")
  document.getElementById("story").innerText = "";
  document.getElementById("story").innerText = "";
  document.getElementById("genres").innerText = "";
  document.getElementById("start").innerText = "";
  document.getElementById("statics").innerText = "";
  document.getElementById("studios").innerText = "";
  document.getElementById("rating").innerText = "";
  document.getElementById("list-ep").innerHTML = "";
  document.getElementById("list-commant").innerHTML = "";
  localStorage.removeItem('id');
	localStorage.removeItem("name");	
  localStorage.removeItem("img");	
  localStorage.removeItem("state");	
  localStorage.removeItem("start");
}
// Loading flag
var allowInfinite = true;

// Last loaded index
var lastItemIndex = $$('.list li').length;

// Max items to load
var maxItems = 200;

// Append items per load
var itemsPerLoad = 20;

// Attach 'infinite' event handler
$$('.infinite-scroll-content').on('infinite', function () {
  // Exit, if loading in progress
  if (!allowInfinite) return;

  // Set loading flag
  allowInfinite = false;

  // Emulate 1s loading
  setTimeout(function () {
    // Reset loading flag
    allowInfinite = true;

    if (lastItemIndex >= maxItems) {
      // Nothing more to load, detach infinite scroll events to prevent unnecessary loadings
      app.infiniteScroll.destroy('.infinite-scroll-content');
      // Remove preloader
      $$('.infinite-scroll-preloader').remove();
      return;
    }

    // Generate new items HTML
    var html = '';
    for (var i = lastItemIndex + 1; i <= lastItemIndex + itemsPerLoad; i++) {
      html += loadmor("",i,"","","","");
    }

    // Append new items
    $$('.list ul').append(html);

    // Update last loaded index
    lastItemIndex = $$('.list li').length;
  }, 1000);
});
function loadmor(img,name,title,id,state,starts) {
  var content = document.getElementById("animeing");
  //info
  var lid = document.createElement("li");
  
  lid.style.display = "inherit";
  
  var infos = document.createElement("a");
  
  infos.className = "popup-open";
  
  infos.href = "#";
  infos.setAttribute("data-popup",".popup-about")
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
  return div1.outerHTML;
}

