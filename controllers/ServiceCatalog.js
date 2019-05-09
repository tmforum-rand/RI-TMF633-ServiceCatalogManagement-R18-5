'use strict';

var url = require('url');

var ServiceCatalog = require('../service/ServiceCatalogService');

module.exports.createServiceCatalog = function createServiceCatalog (req, res, next) {
  ServiceCatalog.createServiceCatalog(req, res, next);
};

module.exports.deleteServiceCatalog = function deleteServiceCatalog (req, res, next) {
  ServiceCatalog.deleteServiceCatalog(req, res, next);
};

module.exports.listServiceCatalog = function listServiceCatalog (req, res, next) {
  ServiceCatalog.listServiceCatalog(req, res, next);
};

module.exports.patchServiceCatalog = function patchServiceCatalog (req, res, next) {
  ServiceCatalog.patchServiceCatalog(req, res, next);
};

module.exports.retrieveServiceCatalog = function retrieveServiceCatalog (req, res, next) {
  ServiceCatalog.retrieveServiceCatalog(req, res, next);
};
