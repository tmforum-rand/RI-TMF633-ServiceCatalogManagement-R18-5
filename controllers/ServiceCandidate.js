'use strict';

var url = require('url');

var ServiceCandidate = require('../service/ServiceCandidateService');

module.exports.createServiceCandidate = function createServiceCandidate (req, res, next) {
  ServiceCandidate.createServiceCandidate(req, res, next);
};

module.exports.deleteServiceCandidate = function deleteServiceCandidate (req, res, next) {
  ServiceCandidate.deleteServiceCandidate(req, res, next);
};

module.exports.listServiceCandidate = function listServiceCandidate (req, res, next) {
  ServiceCandidate.listServiceCandidate(req, res, next);
};

module.exports.patchServiceCandidate = function patchServiceCandidate (req, res, next) {
  ServiceCandidate.patchServiceCandidate(req, res, next);
};

module.exports.retrieveServiceCandidate = function retrieveServiceCandidate (req, res, next) {
  ServiceCandidate.retrieveServiceCandidate(req, res, next);
};
