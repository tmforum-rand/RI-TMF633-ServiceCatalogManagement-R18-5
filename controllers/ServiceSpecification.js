'use strict';

var url = require('url');

var ServiceSpecification = require('../service/ServiceSpecificationService');

module.exports.createServiceSpecification = function createServiceSpecification (req, res, next) {
  ServiceSpecification.createServiceSpecification(req, res, next);
};

module.exports.deleteServiceSpecification = function deleteServiceSpecification (req, res, next) {
  ServiceSpecification.deleteServiceSpecification(req, res, next);
};

module.exports.listServiceSpecification = function listServiceSpecification (req, res, next) {
  ServiceSpecification.listServiceSpecification(req, res, next);
};

module.exports.patchServiceSpecification = function patchServiceSpecification (req, res, next) {
  ServiceSpecification.patchServiceSpecification(req, res, next);
};

module.exports.retrieveServiceSpecification = function retrieveServiceSpecification (req, res, next) {
  ServiceSpecification.retrieveServiceSpecification(req, res, next);
};
