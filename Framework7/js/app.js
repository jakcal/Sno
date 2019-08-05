// Dom7
var $ = Dom7;

// Theme
var theme = 'auto';
if (document.location.search.indexOf('theme=') >= 0) {
  theme = document.location.search.split('theme=')[1].split('&')[0];
}

// Init App
var app = new Framework7({
  id: 'io.framework7.testapp',
  root: '#app',
  theme: theme,
  on: {
    pageMounted: function (page) {
      if (window.dmx && dmx.app) {
        dmx.app.$parse(page.el);
        dmx.app.$update();
      }
    }
  },
  routes: window.routes ? window.routes : [],
  popup: {
    closeOnEscape: true,
  },
  sheet: {
    closeOnEscape: true,
  },
  popover: {
    closeOnEscape: true,
  },
  actions: {
    closeOnEscape: true,
  }
});

if (document.querySelector('.view-main')) {
  var mainView = app.views.create('.view-main');
}