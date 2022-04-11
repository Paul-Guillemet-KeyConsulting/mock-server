"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _package = require("../../package.json");

var _express = require("express");

var _facets = require("./facets");

var _facets2 = _interopRequireDefault(_facets);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var notifRulesResp = require('./responses/GET_notification-rules.json');
var actionsHistory = require('./responses/GET_actions-history.json');

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
  api.get("/events", function (req, res) {
    var mockResponse = {
      content: {
        results: [{
          name: "TEST",
          severity: "FATAL",
          message: "message de l'event"

        }]
      }
    };

    res.json(mockResponse);
  });

  api.get("/actions-history", function (req, res) {
    var mockResponse = actionsHistory;

    res.json(mockResponse);
  });

  //header
  api.get("/notification-rules", function (req, res) {
    var mockResponse = notifRulesResp;

    res.status(200).json(mockResponse);
  });

  api.post("/notification-rules", function (req, res) {
    console.log(req.body);
    var index = notifRulesResp.content.findIndex(function (rule) {
      return rule.id == req.body.id;
    });
    if (index > -1) {
      notifRulesResp.content[index] = req.body;
    } else {
      notifRulesResp.content.push(req.body);
    }
    console.log(JSON.stringify(notifRulesResp, null, 4));
    res.status(200).json(notifRulesResp);
  });

  api.delete("/notification-rules/:id", function (req, res) {
    var idToDelete = req.params.id;
    notifRulesResp.content = notifRulesResp.content.filter(function (rule) {
      return rule.id != idToDelete;
    });
    res.status(200).json(notifRulesResp);
  });

  return api;
};
//# sourceMappingURL=index.js.map