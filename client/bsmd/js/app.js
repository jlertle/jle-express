var m = require('mithril');

m.route.mode = 'pathname';

m.route(document.body, '/', {
  '/': require('./pages/showExamples.js'),
  '/dashboard': require('./components/DashboardWidget.js')
});
