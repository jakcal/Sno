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

var maxItems = "";
var animedata = "";
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
  infos.onclick = function() {clears()};
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
   image.setAttribute("data-src",img);
   image.setAttribute("src",img);
   image.onerror = function() {this.src = img; console.log('This Image Is Reloader :> '+this.src)};
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
function createitemslmr(img,name,title,id,state,starts) {
  var content = document.getElementById("snoanimesmlr");
  //info
  var lid = document.createElement("li");
  
  lid.style.display = "inherit";
  
  var infos = document.createElement("a");
  
  infos.className = "popup-open";
  infos.onclick = function() {clears()};
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
   image.setAttribute("data-src",img);
   image.setAttribute("src",img);
   image.onerror = function() {this.src = img; console.log('This Image Is Reloader :> '+this.src)};
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
  var content = document.getElementById("datg");
  //info
  var lid = document.createElement("li");
  
  lid.style.display = "inherit";
  
  var infos = document.createElement("a");
  
  infos.className = "popup-open";
  infos.onclick = function() {clears()};
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
   image.setAttribute("data-src",img);
   image.setAttribute("src",img);
   image.onerror = function() {this.src = img; console.log('This Image Is Reloader :> '+this.src)};
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
function infosmlrs(img,name,title,id,state,starts) {
  var content = document.getElementById("infosmlr");
  //info
  var lid = document.createElement("li");
  
  lid.style.display = "inherit";
  
  var infos = document.createElement("a");
  
  infos.className = "popup-open";
  infos.onclick = function() {clears()};
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
   image.setAttribute("data-src",img);
   image.setAttribute("src",img);
   image.onerror = function() {this.src = img; console.log('This Image Is Reloader :> '+this.src)};
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
function searchlist(img,name,title,id,state,starts) {
  var content = document.getElementById("showonsearch");
  //info
  var lid = document.createElement("li");
  
  lid.style.display = "inherit";
  
  var infos = document.createElement("a");
  
  infos.className = "popup-open";
  infos.onclick = function() {clears()};
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
   image.setAttribute("data-src",img);
   image.setAttribute("src",img);
   image.onerror = function() {this.src = img; console.log('This Image Is Reloader :> '+this.src)};
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
function newsopen() {
  document.getElementById("newsdialog").style.display = "block";
  document.getElementById("newsdialog1").style.display = "block";
}
function newsclose() {
  document.getElementById("newsmsg").innerText = "";
  document.getElementById("newsdialog").style.display = "none";
  document.getElementById("newsdialog1").style.display = "none";
}
function addmsg(msg) {
    newsopen();
    document.getElementById("newsmsg").innerText = msg;
}
function newslist(img,name,title) {
  var content = document.getElementById("newslist");
  //info
  var lid = document.createElement("li");
  
  lid.style.display = "inherit";
  
  var infos = document.createElement("a");
    //Div
  var div1 = document.createElement("div");
  div1.style.height = '160px';
  div1.className = "card";
  div1.onclick = function() {addmsg(title)};
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
  div8.className = "item-subtitle b";
  div8.style.height = "17px";
  div8.style.width = "100%";
  div8.innerText = title;
  //Div
  //UL And Li
  var ul = document.createElement("ul");
  var li = document.createElement("li");
  li.className = "item-content"
  //UL And Li
  //Image
   var image = document.createElement("img");
   image.setAttribute("data-src",img);
   image.setAttribute("src",img);
   image.onerror = function() {this.src = img; console.log('This Image Is Reloader :> '+this.src)};
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
  console.log("Loaded News To SnoAnime By ibrahim khaled");
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
app.request.setup({
  url:id,
  success:function(data){
    data = JSON.parse(data);
      //epName
      document.getElementById("km").innerText = ""+data["ep"].length;
      for (i = 0; i < data["ep"].length; i++) {
         var btn = document.createElement("button");
         btn.innerText = data["ep"][i].name;
         btn.setAttribute("class","col button button-large button-raised");
         btn.setAttribute("style","width: 100%;margin: 5px; color: black;");
         var datag = data["ep"][i].id;
         btn.setAttribute("onclick","shows('"+datag+"')");
         document.getElementById("list-ep").appendChild(btn);
      }
      showallcom(usl);
  //epName
  var idgs = localStorage.getItem("id");
  idgs = idgs.replace("https://snoanime.com/api/new/info.php/?url=", "");
  document.getElementById("titles").innerHTML = localStorage.getItem("name");
  var story = document.getElementById("story");
  document.getElementById("images").src = localStorage.getItem("img");
  //Two
  var genre = document.getElementById("genres");
  var age = document.getElementById("studios");
  document.getElementById("statics").innerHTML = localStorage.getItem("state");
  var ratings = document.getElementById("rating");
  document.getElementById("start").innerHTML = localStorage.getItem("start");
  story.innerHTML = data["main"].story;
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
  },
  error:function(data){
    app.preloader.hide();
    app.request({method:'GET'});
    errornet.open();
  },
})
app.request({method:'GET'});
}
function shows(id) {
	  var n = navigator.userAgent.includes("99990000");
      if (n == true) {
	   sendDataToAndroid(id,id,"ca-app-pub-9372585201524216/1486370747","ca-app-pub-9372585201524216/3420175615","ca-app-pub-9372585201524216~1132923622");
      } else {
            var n = navigator.userAgent.includes("SevenZero");
            if (n == true) {
                var idg = localStorage.getItem("id");
                idg = idg.replace("https://snoanime.com/api/new/info.php/?url=", "");
                window.location.href = "https://snoanime.com/ios.php/?id="+idg+"&epid="+id+"&api=https://khkhkhkh.com/api2/";
            } else {
            opensS();
            }
      }
}

function sendDataToAndroid(toast,id,ads,bnads,appid) {
        MyFunction.onButtonClick(toast,id,ads,bnads,appid);
    }
function sendFav(title,msg,url) {
			Fav.onButtonClick(title,msg,url);
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
      app.request.setup({
      url:url,
      success:function(data){
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
      document.getElementById("comm").value = "";
        },
        error:function(data){
          var toastCenterr = app.toast.create({
            text: 'توجد مشكلة في الشبكة حاول مرى أخرى',
            position: 'center',
            closeTimeout: 2000,
          });
          toastCenterr.open();
        },
      })

      app.request({method:'GET'});
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
  useropen();
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
              app.request.setup({
                url:url,
                success:function(data){
                  app.preloader.hide();
                  var toastCenter = app.toast.create({
                   text: data,
                   position: 'center',
                   closeTimeout: 2000,
                 });
                 toastCenter.open();
                },
                error:function(data){
                  var toastCenterr = app.toast.create({
                    text: 'توجد مشكلة في الشبكة حاول مرى أخرى',
                    position: 'center',
                    closeTimeout: 2000,
                  });
                  toastCenterr.open();
                },
              })
              app.request({method:'GET'});
            } else {
				app.preloader.hide();
  var toastCenter = app.toast.create({
    text: "يجب عليك أدخال كلمة المرور",
    position: 'center',
    closeTimeout: 2000,
  });
  toastCenter.open();
        }
        } else {
			app.preloader.hide();
  var toastCenter = app.toast.create({
    text: "يجب عليك كتابة البريد الاكتروني",
    position: 'center',
    closeTimeout: 2000,
  });
  toastCenter.open();
    }
    } else {
    app.preloader.hide();
    var toastCenter = app.toast.create({
      text: "يجب عليك كتابة اسمك",
      position: 'center',
      closeTimeout: 2000,
    });
    toastCenter.open();
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
              app.request.setup({
                url:url,
                success:function(data){
                  app.preloader.hide();
                  var toastCenter = app.toast.create({
                    text: data,
                    position: 'center',
                    closeTimeout: 2000,
                  });
                  toastCenter.open();
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
                },
                error:function(data){
                  app.preloader.hide();
                  var toastCenterr = app.toast.create({
                    text: 'توجد مشكلة في الشبكة حاول مرى أخرى',
                    position: 'center',
                    closeTimeout: 2000,
                  });
                  toastCenterr.open();
                },
              })
              app.request({method:'GET'});

            } else {
				app.preloader.hide();
  var toastCenter = app.toast.create({
    text: 'يجب عليك أدخال كلمة المرور',
    position: 'center',
    closeTimeout: 2000,
  });
  toastCenter.open();
        }
        } else {
			app.preloader.hide();
  var toastCenter = app.toast.create({
    text: 'يجب عليك كتابة البريد الاكتروني',
    position: 'center',
    closeTimeout: 2000,
  });
  toastCenter.open();
    }
    } else {
    app.preloader.hide();
    var toastCenter = app.toast.create({
      text: 'يجب عليك كتابة اسمك',
      position: 'center',
      closeTimeout: 2000,
    });
    toastCenter.open();
		}
	
}
var toastBottom = app.toast.create({
  text: ' مرحبا بعودتك '+ localStorage.getItem("username"),
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
var errornet = app.toast.create({
  text: 'توجد مشكلة في الشبكة سيتم أعادة ألمحاولة خلال 5 ثوان',
  closeTimeout: 2000,
});
var empity = app.toast.create({
  text: 'لا توجد أنميات في قائمة المفضلة',
  closeTimeout: 2000,
});
var nosmlr = app.toast.create({
  text: 'لا توجد انميات مرتبطة',
  closeTimeout: 2000,
});
function favorite() {
	               var idg = localStorage.getItem("id");
                 idg = idg.replace("https://snoanime.com/api/new/info.php/?url=", "");
                 if (localStorage.getItem(idg) === null) {
                 var name = localStorage.getItem("name");
                 var image = localStorage.getItem("img");
                 var start = localStorage.getItem("start");
                 var state = localStorage.getItem("state");
                 var data = '{"id":"'+idg+'","name":"'+name+'","image":"'+image+'","year":"'+start+'","status":"'+state+'" }';
                 var obj = JSON.parse(data);
                 localStorage.setItem(idg, JSON.stringify(obj));
                 document.getElementById("ssff").style.display = "inline-flex";
                 } else {
	                   openfav();
                 }
}
function androidcode() {
	localStorage.removeItem('id');
	localStorage.removeItem("name");	
  localStorage.removeItem("img");	
  localStorage.removeItem("state");	
  localStorage.removeItem("start");
}
//listanime
function golist() {
  showSearch();
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    document.getElementById("datg").innerHTML = "";
    var obj = JSON.parse(xhttp.responseText);
    maxItems = obj.length;
    animedata = JSON.stringify(obj);
    for (i = 0; i < 40; i++) {
      var oimg = "https://snoanime.com/image.php/?name="+obj[i].image;
      var id = 'https://snoanime.com/api/new/info.php/?url='+obj[i].id;
      createitemlist(oimg,obj[i].name,obj[i].status,id,obj[i].status,obj[i].year);
    }
    animedata = obj;
    createLoader();
  }
};
xhttp.open("GET", "https://snoanime.com/api/new/list.php", true);
xhttp.send();

}
function clears() {
  document.getElementById("ssff").style.display = "none";
  document.getElementById("km").innerText = "0"
  document.getElementById("km2").innerText = "0"
  document.getElementById("images").removeAttribute("src");
  document.getElementById("story").innerHTML = "";
  document.getElementById("genres").innerText = "";
  document.getElementById("start").innerText = "";
  document.getElementById("statics").innerText = "";
  document.getElementById("studios").innerText = "";
  document.getElementById("rating").innerText = "";
  document.getElementById("list-ep").innerHTML = "";
  document.getElementById("titles").innerText = "";
  document.getElementById("list-commant").innerHTML = "";
  document.getElementById("infosmlr").innerHTML = "";
  localStorage.removeItem('id');
	localStorage.removeItem("name");	
  localStorage.removeItem("img");	
  localStorage.removeItem("state");	
  localStorage.removeItem("start");
}
function opencustom() {
  document.getElementById("dialgodrop").style.display = "block";
  document.getElementById("dialogs").style.display = "block";
}
function closecustom() {
  document.getElementById("dialgodrop").style.display = "none";
  document.getElementById("dialogs").style.display = "none";
}
function search() {
var name = document.getElementById('dialogvalue').value;
document.getElementById("showonsearch").innerHTML = "";
closecustom();
app.preloader.show();
var url = "https://snoanime.com/api/new/search.php/?name="+name;
app.request.setup({
  url:url,
  success:function(data){
    obj = JSON.parse(data);
    document.getElementById("hideonsearch").style.display = "none";
  document.getElementById("showonsearch").style.display = "block";
  document.getElementById("newsearch").style.display = "block";
  for (i = 0; i < obj.length; i++) {
    var oimg = "https://snoanime.com/image.php/?name="+obj[i].image;
    var id = 'https://snoanime.com/api/new/info.php/?url='+obj[i].id;
    searchlist(oimg,obj[i].name,obj[i].status,id,obj[i].status,obj[i].year);
  }
  app.preloader.hide();
  document.getElementById('dialogvalue').value = "";
  },
  error:function(data){
    app.preloader.hide();
    app.request({method:'GET'});
    errornet.open();
  },
})
app.request({method:'GET'});
}
function backtomain() {
  document.getElementById("hideonsearch").style.display = "block";
  document.getElementById("newsearch").style.display = "none";
  document.getElementById("showonsearch").style.display = "none";
  document.getElementById("showonsearch").innerHTML = "";
}
function createLoader() {
  var allowInfinite = true;

  // Last loaded index
  var lastItemIndex = document.querySelector("#datg").childElementCount;
    
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
        isd = i - 1;
        var oimg = "https://snoanime.com/image.php/?name="+animedata[isd].image;
        var id = 'https://snoanime.com/api/new/info.php/?url='+animedata[isd].id;
        html += loadmor(oimg,animedata[isd].name,animedata[isd].status,id,animedata[isd].status,animedata[isd].year);
      }
  
      // Append new items
      $$('#datg').append(html);
  
      // Update last loaded index
      lastItemIndex = document.querySelector("#datg").childElementCount;
    }, 1000);
  });
}
// Loading flag
function loadmor(img,name,title,id,state,starts) {
  var content = document.getElementById("showonsearch");
  //info
  var lid = document.createElement("li");
  
  lid.style.display = "inherit";
  
  var infos = document.createElement("a");
  
  infos.className = "popup-open";
  infos.onclick = function() {clears()};
  infos.href = "#";
  infos.setAttribute("data-popup",".popup-about")
  //Div
  var div1 = document.createElement("div");
  div1.style = 'style="height: 160;"';
  div1.className = "card";
  div1.setAttribute("onclick","load('"+id+"','"+name+"','"+img+"','"+state+"','"+starts+"')");
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
   image.setAttribute("data-src",img);
   image.setAttribute("src",img);
   image.onerror = function() {this.src = img; console.log('This Image Is Reloader :> '+this.src)};
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
function getFavorite() {
  var person = {};
  var a=[];
  for (i=0; i<=localStorage.length-1; i++)  
  {  
  if(isNaN(localStorage.key(i))) {

  } else {
  key = localStorage.key(i);  
  var jsons = JSON.parse(localStorage.getItem(key))
  person["id"] = jsons["id"];
  person["name"] = jsons["name"];
  person["image"] = jsons["image"];
  person["year"] = jsons["year"];
  person["status"] = jsons["status"];
  person["keywords"] = jsons["keywords"];
  a.push(person); 
  person = {};
  }
  }
  var myJSON = JSON.stringify(a);
  return myJSON;
}
function openf() {
    obj = JSON.parse(getFavorite());
    var n = getFavorite().includes("[]");
    if (n == true) {
    empity.open();
    } else {
      for (i = 0; i < obj.length; i++) {
        var oimg = "https://snoanime.com/image.php/?name="+obj[i].image;
        var id = 'https://snoanime.com/api/new/info.php/?url='+obj[i].id;
        fcreateitem(oimg,obj[i].name,obj[i].status,id,obj[i].status,obj[i].year);
    }
    }
    console.log("يتم تحميل المفضلة")
}
function opengenere() {
  obj = JSON.parse('[{"data":"genre0","name":"أكشن"},{"data":"genre1","name":"مغامرات"},{"data":"genre2","name":"رسوم متحركة"},{"data":"genre3","name":"سيارات"},{"data":"genre4","name":"كوميدي"},{"data":"genre5","name":"عته"},{"data":"genre6","name":"شياطين"},{"data":"genre7","name":"دراما"},{"data":"genre8","name":"أتشي"},{"data":"genre9","name":"عائلة"},{"data":"genre10","name":"خيال"},{"data":"genre11","name":"لعبة"},{"data":"genre12","name":"حريم"},{"data":"genre13","name":"تاريخي"},{"data":"genre14","name":"رعب"},{"data":"genre15","name":"فتيات"},{"data":"genre16","name":"اطفال"},{"data":"genre17","name":"سحر"},{"data":"genre18","name":"فنون قتال"},{"data":"genre19","name":"آلي"},{"data":"genre20","name":"عسكري"},{"data":"genre21","name":"موسيقى"},{"data":"genre22","name":"الغموض"},{"data":"genre23","name":"باروديا"},{"data":"genre24","name":"شرطة"},{"data":"genre25","name":"نفسي"},{"data":"genre26","name":"رومانسية"},{"data":"genre27","name":"الساموراي"},{"data":"genre28","name":"مدرسي"},{"data":"genre29","name":"الخيال العلمي"},{"data":"genre30","name":"روايات الخيال العلمي"},{"data":"genre31","name":"أولاد"},{"data":"genre32","name":"شوجو"},{"data":"genre33","name":"شوجو آي"},{"data":"genre34","name":"شونين"},{"data":"genre35","name":"شونين آي"},{"data":"genre36","name":"شريحة من الحياة"},{"data":"genre37","name":"الفضاء"},{"data":"genre38","name":"الرياضة"},{"data":"genre39","name":"قوة خارقة"},{"data":"genre40","name":"خارق"},{"data":"genre41","name":"الاثارة"},{"data":"genre42","name":"مأساة"},{"data":"genre43","name":"مصاص دماء"},{"data":"genre44","name":"يوي"},{"data":"genre45","name":"يوري"}]');
    for (i = 0; i < obj.length; i++) {
        var btn = document.createElement("button");
        btn.innerText = obj[i].name;
        btn.setAttribute("class","col button button-large button-raised");
        btn.setAttribute("style","width: 100%;margin: 5px; color: black;");
        var datag = obj[i].data;
        btn.setAttribute("onclick","loadgenre('"+datag+"','"+obj[i].name+"')");
        document.getElementById("generelist").appendChild(btn);
  }
  console.log("يتم تحميل التصنيفات")
}
function loadgenre(id,name) {
url = "https://snoanime.com/api/new/genre.php/?name="+id;
app.preloader.show();
app.request.setup({
  url:url,
  success:function(data){
  document.getElementById("gnreid").innerText = name;
  var content = document.getElementById("generelist");
  content.innerHTML = "";
  obj = JSON.parse(data);
  for (i = 0; i < obj.length; i++) {
    var oimg = "https://snoanime.com/image.php/?name="+obj[i].image;
    var id = 'https://snoanime.com/api/new/info.php/?url='+obj[i].id;
    genr(oimg,obj[i].name,obj[i].status,id,obj[i].status,obj[i].year);
  }
  app.preloader.hide();
  },
  error:function(data){
    app.preloader.hide();
    app.request({method:'GET'});
    errornet.open();
  },
})
app.request({method:'GET'});
}
function fcreateitem(img,name,title,id,state,starts) {
  var content = document.getElementById("favoritelist");
  //info
  var lid = document.createElement("li");
  
  lid.style.display = "inherit";
  
  var infos = document.createElement("a");
  
  infos.className = "popup-open";
  infos.onclick = function() {clears()};
  infos.href = "#";
  infos.setAttribute("data-popup",".popup-about")
  //Div
  var div1 = document.createElement("div");
  div1.style = 'style="height: 160;"';
  div1.className = "card popup-close";
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
   image.setAttribute("data-src",img);
   image.setAttribute("src",img);
   image.onerror = function() {this.src = img; console.log('This Image Is Reloader :> '+this.src)};
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

function genr(img,name,title,id,state,starts) {
  var content = document.getElementById("generelist");
  //info
  var lid = document.createElement("li");
  
  lid.style.display = "inherit";
  
  var infos = document.createElement("a");
  
  infos.className = "popup-open";
  infos.onclick = function() {clears()};
  infos.href = "#";
  infos.setAttribute("data-popup",".popup-about")
  //Div
  var div1 = document.createElement("div");
  div1.style = 'style="height: 160;"';
  div1.className = "card popup-close";
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
   image.setAttribute("data-src",img);
   image.setAttribute("src",img);
   image.onerror = function() {this.src = img; console.log('This Image Is Reloader :> '+this.src)};
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

function closefav() {
  document.getElementById("dialogfav").style.display = "none";
  document.getElementById("dialogmain").style.display = "none";
}
function openfav() {
  document.getElementById("dialogfav").style.display = "block";
  document.getElementById("dialogmain").style.display = "block";
}
function deletefav() {
  var idg = localStorage.getItem("id");
  idg = idg.replace("https://snoanime.com/api/new/info.php/?url=", "");
  localStorage.removeItem(idg);
  document.getElementById("ssff").style.display = "none";
  closefav();
}

function userclose() {
  document.getElementById("dialogfav3").style.display = "none";
  document.getElementById("dialogmain3").style.display = "none";
}
function useropen() {
  document.getElementById("dialogfav3").style.display = "block";
  document.getElementById("dialogmain3").style.display = "block";
}
function logout() {
    localStorage.removeItem("SaveLogin");
    localStorage.removeItem("username");
    localStorage.removeItem("email");
    document.getElementById("btns").innerText = "";
    document.getElementById("btns").innerText = "تسجيل دخول أو أنشاء حساب";
    userclose();
}
function showallcom(usl) {
  app.request.setup({
    url:usl,
    success:function(data){
      data = JSON.parse(data);
      document.getElementById("km2").innerText = ""+data.length;
      for (i = 0; i < data.length; i++) {
      var name = data[i].name;
      var time = data[i].time;
      var commant = data[i].commants;
        showCom(time,name,commant);
        }
    },
    error:function(data){
      app.request({method:'GET'});
      errornet.open();
    },
  })
  app.request({method:'GET'});
}
function closesS() {
  document.getElementById("showss").style.display = "none";
  document.getElementById("showsm").style.display = "none";
}
function opensS() {
  document.getElementById("showss").style.display = "block";
  document.getElementById("showsm").style.display = "block";
}
function outing() {
  document.getElementById("outing").click()
  hideLoading();
}
function opennews() {
  app.request.setup({
    url:"https://snoanime.com/api/new/newlist.php",
    success:function(data){
      document.getElementById("newslist").innerText = "";
      obj = JSON.parse(data);
      for (i = 0; i < obj.length; i++) {
        var oimg = "https://snoanime.com/image.php/?name="+obj[i].img;
        newslist(oimg,obj[i].title,obj[i].text);
    }
    },
    error:function(data){
      app.request({method:'GET'});
      errornet.open();
    },
  })
  app.request({method:'GET'});
}
function hideSearch() {
  document.getElementById("btnsearch").style.display = "none";
}
function showSearch() {
  document.getElementById("btnsearch").style.display = "block";
}
