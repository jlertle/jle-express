'use strict';

// API Version 2

var httpStatus = require('http-status');

var route = {};

/**
 * Description
 * @method allLists
 * @param {} req
 * @param {} res
 * @return 
 */
route.allLists = function(req, res) {
  req.model.db.list().then(function(result) {
    res.json(result);
  }).catch(function(err) {
    res.status(httpStatus.INTERNAL_SERVER_ERROR)
    .json(err);
  });
};

/**
 * Description
 * @method createListOLD
 * @param {} req
 * @param {} res
 * @return 
 */
route.createListOLD = function(req, res) {
  var vName = req.body.name || null;
  var vItems = req.body.items || null;

  if (!vName || !vItems) {
    return res.status(httpStatus.UNPROCESSABLE_ENTITY)
    .json({
      error: 'Unprocessable Entity'
    });
  }

  var query = {name: vName};
  var data = {items: vItems};

  req.model.db.upsert(query, data).then(function(result) {
    res.json(result);
  }).catch(function(err) {
    res.status(httpStatus.INTERNAL_SERVER_ERROR)
    .json(err);
  });
};

/**
 * Description
 * @method listCreator
 * @param {} list
 * @param {} req
 * @return promise
 */
var listCreator = function(list, req) {
  var promise = new Promise(function(resolve, reject) {
    var vName = list.name || null;
    var vItems = list.items || null;

    if (vItems != null && vItems.length > 0 && !Array.isArray(vItems)) {
      vItems = [vItems];
    }

    if (!vName || !vItems || !Array.isArray(vItems)) {
      //console.log('UNPROCESSABLE_ENTITY');
      //console.log('list', JSON.stringify(list));
      reject(httpStatus.UNPROCESSABLE_ENTITY);
      return;
    }

    var query = {name: vName};
    var data = {items: vItems};

    req.model.db.upsert(query, data).then(function(result) {
      resolve(result);
    }).catch(function(err) {
      console.log('listBuilder err:', err);
      reject(httpStatus.INTERNAL_SERVER_ERROR);
    });
  });
  return promise;
};

/**
 * Description
 * @method createList
 * @param {} req
 * @param {} res
 * @return 
 */
route.createList = function(req, res) {
  var lists = [];
  if (!Array.isArray(req.body)) {
    lists.push(req.body);
  } else {
    lists = req.body;
  }

  Promise.all(lists.map(function(list) {
    return listCreator(list, req).then(function(result) {
      return result;
    });
  })).then(function(results) {
    res.json(results);
  }).catch(function(err) {
    //console.log('createList err', err);
    res.status(err)
    .json(httpStatus[err]);
  });
};

/**
 * Description
 * @method updateList
 * @param {} req
 * @param {} res
 * @return 
 */
route.updateList = function(req, res) {
  var vName = req.params.name;
  var vItems = req.body.items || null;

  if (!vItems || !Array.isArray(vItems)) {
    return res.status(httpStatus.UNPROCESSABLE_ENTITY)
    .json({
      error: 'Unprocessable Entity'
    });
  }

  var query = {name: vName};
  var data = {items: vItems};

  req.model.db.upsert(query, data).then(function(result) {
    res.json(result);
  }).catch(function(err) {
    res.status(httpStatus.INTERNAL_SERVER_ERROR)
    .json(err);
  });
};

/**
 * Description
 * @method deleteList
 * @param {} req
 * @param {} res
 * @return 
 */
route.deleteList = function(req, res) {
  var query = {name: req.params.name};

  req.model.db.delete(query).then(function(result) {
    //console.log('deleteList result:', result);
    res.json(result);
  }).catch(function(err) {
    res.status(httpStatus.INTERNAL_SERVER_ERROR)
    .json(err);
  });
};

/**
 * Description
 * @method retrieveList
 * @param {} req
 * @param {} res
 * @return 
 */
route.retrieveList = function(req, res) {
  var query = {name: req.params.name};

  req.model.db.fetch(query).then(function(result) {
    if (!result) {
      return res.status(httpStatus.NO_CONTENT)
      .json({
        error: 'No Content'
      });
    }
    res.json(result);
  }).catch(function(err) {
    res.status(httpStatus.INTERNAL_SERVER_ERROR)
    .json(err);
  });
};

module.exports = route;
