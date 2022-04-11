import { version } from "../../package.json";
import { Router } from "express";
import facets from "./facets";

const requests = require('./responses/requests.json')
const requestsToProcess = require('./responses/requestsToProcess.json')

const authorizations = require('./responses/authorizations.json')

const hashCode = function(s){
  return s.split("").reduce(function(a,b){a=((a<<5)-a)+b.charCodeAt(0);return a&a},0);              
}

export default ({ config, db }) => {
  let api = Router();

  // mount the facets resource
  api.use("/facets", facets({ config, db }));

  //header
  api.get("/user/requests", (req, res) => {
    const mockResponse = {
      content: {
            results: requests
         }
      };

    res.json(mockResponse);
  });

    api.get("/requests/task-list", (req, res) => {
    const mockResponse = {
      content: {
            results: requestsToProcess
         }
      };
      console.log(requestsToProcess)

    res.json(mockResponse);
  });

  api.get("/authorizations", (req, res) => {
    const mockResponse = {
      content: {
            results: authorizations
         }
      };

    res.json(mockResponse);
  });


  api.post("/requests", (req, res) => {
    const mockResponse = {content:[], errors:[]};
      req.body.status = 'OPEN'
      req.body.lastActionDate = new Date();
      requests.push(req.body)

    res.json(mockResponse);
  });

  api.post("/requests/:id/action", (req, res) => {
    const comment = req.body.comment;
    console.log('comment : ' + comment)
    const action = req.query.action
    const request = requestsToProcess.find(request => request.requestId === req.params.id) ;
    console.log(req.query)
    let reqToProcessTmp;
    switch(action){
      case 'approve':
        reqToProcessTmp = requestsToProcess.filter(request => request.requestId !== req.params.id)
        requestsToProcess.length = 0;
        requestsToProcess.push(...reqToProcessTmp)
      
        
        request.status = 'VERIFIED';
        request.comment = comment;
        requests.push(request);
        break;
      case 'reject':
        reqToProcessTmp = requestsToProcess.filter(request => request.requestId !== req.params.id)
        requestsToProcess.length = 0;
        requestsToProcess.push(...reqToProcessTmp)
      
        
        request.status = 'REJECTED';
        request.comment = comment;
        requests.push(request);
        break;
      case 'complementary-info':
        reqToProcessTmp = requestsToProcess.filter(request => request.requestId !== req.params.id)
        requestsToProcess.length = 0;
        requestsToProcess.push(...reqToProcessTmp)
      
        
        request.status = 'COMPLEMENTARY_INFO';
        request.comment = comment;
        requests.push(request);
        break;
      default:
        console.log('action non reconnue')
    }
    const mockResponse = {content:[], errors:[]};
    
    res.json(mockResponse);
  });

  api.get("/users/current/roles", (req, res) => {
    const mockResponse = {
        content:  "ROLE_TECHNICAL_MANAGER"
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
