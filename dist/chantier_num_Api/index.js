"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _package = require("../../package.json");

var _express = require("express");

var _facets = require("./facets");

var _facets2 = _interopRequireDefault(_facets);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var requests = require('./responses/requests.json');
var requestsToProcess = require('./responses/requestsToProcess.json');

var authorizations = require('./responses/authorizations.json');

var hashCode = function hashCode(s) {
  return s.split("").reduce(function (a, b) {
    a = (a << 5) - a + b.charCodeAt(0);return a & a;
  }, 0);
};

exports.default = function (_ref) {
  var config = _ref.config,
      db = _ref.db;

  var api = (0, _express.Router)();

  // mount the facets resource
  api.use("/facets", (0, _facets2.default)({ config: config, db: db }));

  //header
  api.get("/user/requests", function (req, res) {
    var mockResponse = {
      content: {
        results: requests
      }
    };

    res.json(mockResponse);
  });

  api.get("/requests/task-list", function (req, res) {
    var mockResponse = {
      content: {
        results: requestsToProcess
      }
    };
    console.log(requestsToProcess);

    res.json(mockResponse);
  });

  api.get("/authorizations", function (req, res) {
    var mockResponse = {
      content: {
        results: authorizations
      }
    };

    res.json(mockResponse);
  });

  api.post("/requests", function (req, res) {
    var mockResponse = { content: [], errors: [] };
    req.body.status = 'OPEN';
    req.body.lastActionDate = new Date();
    requests.push(req.body);

    res.json(mockResponse);
  });

  api.post("/requests/:id/action", function (req, res) {
    var comment = req.body.comment;
    console.log('comment : ' + comment);
    var action = req.query.action;
    var request = requestsToProcess.find(function (request) {
      return request.requestId === req.params.id;
    });
    console.log(req.query);
    var reqToProcessTmp = void 0;
    switch (action) {
      case 'approve':
        reqToProcessTmp = requestsToProcess.filter(function (request) {
          return request.requestId !== req.params.id;
        });
        requestsToProcess.length = 0;
        requestsToProcess.push.apply(requestsToProcess, _toConsumableArray(reqToProcessTmp));

        request.status = 'VERIFIED';
        request.comment = comment;
        requests.push(request);
        break;
      case 'reject':
        reqToProcessTmp = requestsToProcess.filter(function (request) {
          return request.requestId !== req.params.id;
        });
        requestsToProcess.length = 0;
        requestsToProcess.push.apply(requestsToProcess, _toConsumableArray(reqToProcessTmp));

        request.status = 'REJECTED';
        request.comment = comment;
        requests.push(request);
        break;
      case 'complementary-info':
        reqToProcessTmp = requestsToProcess.filter(function (request) {
          return request.requestId !== req.params.id;
        });
        requestsToProcess.length = 0;
        requestsToProcess.push.apply(requestsToProcess, _toConsumableArray(reqToProcessTmp));

        request.status = 'COMPLEMENTARY_INFO';
        request.comment = comment;
        requests.push(request);
        break;
      default:
        console.log('action non reconnue');
    }
    var mockResponse = { content: [], errors: [] };

    res.json(mockResponse);
  });

  api.get("/users/current/roles", function (req, res) {
    var mockResponse = {
      content: "ROLE_TECHNICAL_MANAGER"
    };

    res.json(mockResponse);
  });

  // //header
  // api.get("/notification-rules", (req, res) => {
  //   const mockResponse = notifRulesResp;

  //   res.status(200).json(mockResponse);
  // });


  // api.post("/notification-rules", (req,res) => {
  //   console.log(req.body)
  //   const index = notifRulesResp.content.findIndex(rule => rule.id == req.body.id);
  //   if(index > -1) {
  //     notifRulesResp.content[index] = req.body;
  //   } else {
  //     notifRulesResp.content.push(req.body);
  //   }
  //   console.log(JSON.stringify(notifRulesResp,null,4))
  //   res.status(200).json(notifRulesResp);
  // })

  // api.delete("/notification-rules/:id", (req,res) => {
  //   const idToDelete = req.params.id;
  //   notifRulesResp.content = notifRulesResp.content.filter(rule => rule.id != idToDelete);
  //   res.status(200).json(notifRulesResp);
  // })


  return api;
};
//# sourceMappingURL=index.js.map