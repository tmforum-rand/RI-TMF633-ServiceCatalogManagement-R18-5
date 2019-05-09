'use strict';

var url = require('url');

var ServiceCategory = require('../service/ServiceCategoryService');

module.exports.createServiceCategory = function createServiceCategory (req, res, next) {
  ServiceCategory.createServiceCategory(req, res, next);
};

module.exports.deleteServiceCategory = function deleteServiceCategory (req, res, next) {
  ServiceCategory.deleteServiceCategory(req, res, next);
};

module.exports.listServiceCategory = function listServiceCategory (req, res, next) {
  ServiceCategory.listServiceCategory(req, res, next);
};

module.exports.patchServiceCategory = function patchServiceCategory (req, res, next) {
  ServiceCategory.patchServiceCategory(req, res, next);
};

module.exports.retrieveServiceCategory = function retrieveServiceCategory (req, res, next) {
  ServiceCategory.retrieveServiceCategory(req, res, next);
};
