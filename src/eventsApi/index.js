import { version } from "../../package.json";
import { Router } from "express";
import facets from "./facets";

const notifRulesResp = require('./responses/GET_notification-rules.json')
const actionsHistory = require('./responses/GET_actions-history.json')

const hashCode = function(s){
  return s.split("").reduce(function(a,b){a=((a<<5)-a)+b.charCodeAt(0);return a&a},0);              
}

export default ({ config, db }) => {
  let api = Router();

  // mount the facets resource
  api.use("/facets", facets({ config, db }));

  //header
  api.get("/events", (req, res) => {
    const mockResponse = {
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


  api.get("/actions-history", (req, res) => {
    const mockResponse = actionsHistory;

    res.json(mockResponse);
  });

  //header
  api.get("/notification-rules", (req, res) => {
    const mockResponse = notifRulesResp;

    res.status(200).json(mockResponse);
  });


  api.post("/notification-rules", (req,res) => {
    console.log(req.body)
    const index = notifRulesResp.content.findIndex(rule => rule.id == req.body.id);
    if(index > -1) {
      notifRulesResp.content[index] = req.body;
    } else {
      notifRulesResp.content.push(req.body);
    }
    console.log(JSON.stringify(notifRulesResp,null,4))
    res.status(200).json(notifRulesResp);
  })

  api.delete("/notification-rules/:id", (req,res) => {
    const idToDelete = req.params.id;
    notifRulesResp.content = notifRulesResp.content.filter(rule => rule.id != idToDelete);
    res.status(200).json(notifRulesResp);
  })

  

  return api;
};
