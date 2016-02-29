'use strict';

import m from 'mithril';

m.route.mode = 'pathname';

m.route(document.body, '/', {
  '/': require('./pages/showLists.js'),
  '/circles': require('./pages/showCircles.js')
});
