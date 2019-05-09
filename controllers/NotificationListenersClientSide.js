'use strict';

var url = require('url');

var NotificationListenersClientSide = require('../service/NotificationListenersClientSideService');

module.exports.listenToServiceCandidateChangeNotification = function listenToServiceCandidateChangeNotification (req, res, next) {
  NotificationListenersClientSide.listenToServiceCandidateChangeNotification(req, res, next);
};

module.exports.listenToServiceCandidateCreateNotification = function listenToServiceCandidateCreateNotification (req, res, next) {
  NotificationListenersClientSide.listenToServiceCandidateCreateNotification(req, res, next);
};

module.exports.listenToServiceCandidateDeleteNotification = function listenToServiceCandidateDeleteNotification (req, res, next) {
  NotificationListenersClientSide.listenToServiceCandidateDeleteNotification(req, res, next);
};

module.exports.listenToServiceCatalogBatchNotification = function listenToServiceCatalogBatchNotification (req, res, next) {
  NotificationListenersClientSide.listenToServiceCatalogBatchNotification(req, res, next);
};

module.exports.listenToServiceCatalogChangeNotification = function listenToServiceCatalogChangeNotification (req, res, next) {
  NotificationListenersClientSide.listenToServiceCatalogChangeNotification(req, res, next);
};

module.exports.listenToServiceCatalogCreateNotification = function listenToServiceCatalogCreateNotification (req, res, next) {
  NotificationListenersClientSide.listenToServiceCatalogCreateNotification(req, res, next);
};

module.exports.listenToServiceCatalogDeleteNotification = function listenToServiceCatalogDeleteNotification (req, res, next) {
  NotificationListenersClientSide.listenToServiceCatalogDeleteNotification(req, res, next);
};

module.exports.listenToServiceCategoryChangeNotification = function listenToServiceCategoryChangeNotification (req, res, next) {
  NotificationListenersClientSide.listenToServiceCategoryChangeNotification(req, res, next);
};

module.exports.listenToServiceCategoryCreateNotification = function listenToServiceCategoryCreateNotification (req, res, next) {
  NotificationListenersClientSide.listenToServiceCategoryCreateNotification(req, res, next);
};

module.exports.listenToServiceCategoryDeleteNotification = function listenToServiceCategoryDeleteNotification (req, res, next) {
  NotificationListenersClientSide.listenToServiceCategoryDeleteNotification(req, res, next);
};

module.exports.listenToServiceSpecificationChangeNotification = function listenToServiceSpecificationChangeNotification (req, res, next) {
  NotificationListenersClientSide.listenToServiceSpecificationChangeNotification(req, res, next);
};

module.exports.listenToServiceSpecificationCreateNotification = function listenToServiceSpecificationCreateNotification (req, res, next) {
  NotificationListenersClientSide.listenToServiceSpecificationCreateNotification(req, res, next);
};

module.exports.listenToServiceSpecificationDeleteNotification = function listenToServiceSpecificationDeleteNotification (req, res, next) {
  NotificationListenersClientSide.listenToServiceSpecificationDeleteNotification(req, res, next);
};
