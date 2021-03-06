'use strict';

// API Version 1

var route = {};

/**
 * Description
 * @method allRetrieve
 * @param {} req
 * @param {} res
 * @return 
 */
route.allRetrieve = function(req, res) {
  req.model.db.list().then(function(result) {
    res.json(result);
  }).catch(function(err) {
    res.json(err);
  });
};

/**
 * Description
 * @method allDelete
 * @param {} req
 * @param {} res
 * @return 
 */
route.allDelete = function(req, res) {
  req.model.db.clear().then(function(result) {
    res.json(result);
  }).catch(function(err) {
    res.json(err);
  });
};

/**
 * Description
 * @method createList
 * @param {} req
 * @param {} res
 * @return 
 */
route.createList = function(req, res) {
  var vName = req.body.name || null;
  var vItems = req.body.items || null;

  if (!vName || !vItems) {
    return res.json({
      error: 'Unprocessable Entity'
    });
  }

  var query = {name: vName};
  var data = {items: vItems};

  req.model.db.upsert(query, data).then(function(result) {
    res.json(result);
  }).catch(function(err) {
    res.json(err);
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

  if (!vItems) {
    return res.json({
      error: 'Unprocessable Entity'
    });
  }

  var query = {name: vName};
  var data = {items: vItems};

  req.model.db.upsert(query, data).then(function(result) {
    res.json(result);
  }).catch(function(err) {
    res.json(err);
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
    res.json(result);
  }).catch(function(err) {
    res.json(err);
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
    res.json(result);
  }).catch(function(err) {
    res.json(err);
  });
};

module.exports = route;
