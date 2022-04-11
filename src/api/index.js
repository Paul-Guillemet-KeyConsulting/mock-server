import { version } from "../../package.json";
import { Router } from "express";
import facets from "./facets";

const hashCode = function(s){
  return s.split("").reduce(function(a,b){a=((a<<5)-a)+b.charCodeAt(0);return a&a},0);              
}

export default ({ config, db }) => {
  let api = Router();

  // mount the facets resource
  api.use("/facets", facets({ config, db }));

  //header
  api.get("/user", (req, res) => {
    const mockResponse = {
      firstName: "Chloé",
      lastName: "Dupont",
      id: "USR1",
      organizationUnit: {
        id: "OU-NATIONAL",
        label: "National organizational unit",
      },
      localOrganizationUnits: [
        {
          id: "OU-NORTH",
          label: "North region organizational unit",
        },
        {
          id: "OU-SOUTH",
          label: "South region organizational unit",
        },
      ],
    };

    res.json(mockResponse);
  });

  //header
  api.get("/preferences", (req, res) => {
    const mockResponse = {
      hello: "hello",
    };

    res.status(200).json(mockResponse);
  });

  api.get("/survey-units/state/FIN", (req, res) => {
    const mockResponse = {
      hello: "hello",
    };

    res.status(404).json(mockResponse);
  });

  // TODO: API à dev sur pearlJam pour le select d'interviewers de la Dem
    api.get("/interviewers", (req, res) => {
    const mockResponse = [
      {
        id: "INTW5",
        interviewerFirstName: "Chloé",
        interviewerLastName: "Dupont",
      },
      {
        id: "INTW6",
        interviewerFirstName: "Jacques",
        interviewerLastName: "Boulanger",
      },
      {
        id: "INTW7",
        interviewerFirstName: "Thierry",
        interviewerLastName: "Fabres",
      },
      {
        id: "INTW8",
        interviewerFirstName: "Bertrand",
        interviewerLastName: "Renard",
      },
      {
        id: "INTW9",
        interviewerFirstName: "Emilie",
        interviewerLastName: "Boulanger",
      },
      {
        id: "INTW10",
        interviewerFirstName: "Renée",
        interviewerLastName: "Dupont",
      },
      {
        id: "INTW11",
        interviewerFirstName: "Alphonse",
        interviewerLastName: "Delmarre",
      },
    ];

    res.json(mockResponse);
  });

  // TODO: API à dev sur pearlJam pour la monitoring table BY_SURVEY_ONE_INTERVIEWER  (date en query param)
  api.get("/interviewer/:id/campaigns", (req, res) => {
    const mockStudyLine1 = [
      {
        id: "simpsons2020x00",
        label: "Survey on the Simpsons tv show 2020",
        managementStartDate: 1576801000000,
        endDate: 1641514600000,
      },
      {
        id: "vqs2021x00",
        label: "Everyday life and health survey 2021",
        managementStartDate: 1576801000000,
        endDate: 1641514600000,
      },
      {
        id: "simpsosfqns2020x00",
        label: "Survey on something 2020",
        managementStartDate: 1576801000000,
        endDate: 1641514600000,
      },
    ]

      res.json(mockStudyLine1);
  });

  api.put("/survey-unit/:id/state/:state", (req, res) => {
    const mockResponse = {
      hello: "hello",
    };
    res.status(200).json(mockResponse);
  })

  api.put("/survey-unit/:id/viewed", (req, res) => {
    const mockResponse = {
      hello: "hello",
    };
    res.status(200).json(mockResponse);
  })

  //TODO Review/Finalized updateComment
  api.put("/survey-unit/:id/comment/:comment", (req, res) => {
    const mockResponse = {
      hello: "hello",
    };
    res.status(200).json(mockResponse);
  })

  // main screen
  api.get("/campaigns/", (req, res) => {
    const mockStudyLine1 = [
      {
        id: "simpsons2020x00",
        label: "Survey on the Simpsons tv show 2020",
        managementStartDate: 1576801000000,
        interviewerStartDate: 1575937000000,
        identificationPhaseStartDate: 1577233000000,
        collectionStartDate: 1577837800000,
        collectionEndDate: 1640996200000,
        endDate: 1641514600000,
        allocated: 4,
        toProcessInterviewer: 0,
        toAffect: 0,
        toFollowUp: 0,
        toReview: 0,
        finalized: 0,
        preference: true,
      },
      {
        id: "vqs2021x00",
        label: "Everyday life and health survey 2021",
        managementStartDate: 1576801000000,
        interviewerStartDate: 1575937000000,
        identificationPhaseStartDate: 1577233000000,
        collectionStartDate: 1577837800000,
        collectionEndDate: 1640996200000,
        endDate: 1641514600000,
        allocated: 4,
        toProcessInterviewer: 0,
        toAffect: 0,
        toFollowUp: 0,
        toReview: 0,
        finalized: 0,
        preference: true,
      },
      {
        id: "simpsosfqns2020x00",
        label: "Survey on something 2020",
        managementStartDate: 1576801000000,
        interviewerStartDate: 1575937000000,
        identificationPhaseStartDate: 1577233000000,
        collectionStartDate: 1577837800000,
        collectionEndDate: 1640996200000,
        endDate: 1641514600000,
        allocated: 4,
        toProcessInterviewer: 0,
        toAffect: 0,
        toFollowUp: 0,
        toReview: 0,
        finalized: 0,
        preference: true,
      },
      {
        id: "vqs2fsqe021x00",
        label: "Everyday life and health survey 2022",
        managementStartDate: 1576801000000,
        interviewerStartDate: 1575937000000,
        identificationPhaseStartDate: 1577233000000,
        collectionStartDate: 1577837800000,
        collectionEndDate: 1640996200000,
        endDate: 1641514600000,
        allocated: 4,
        toProcessInterviewer: 0,
        toAffect: 0,
        toFollowUp: 0,
        toReview: 0,
        finalized: 0,
        preference: false,
      },
      {
        id: "simpsonqsdfsqes2020x00",
        label: "Survey on something else 2020",
        managementStartDate: 1576801000000,
        interviewerStartDate: 1575937000000,
        identificationPhaseStartDate: 1577233000000,
        collectionStartDate: 1577837800000,
        collectionEndDate: 1640996200000,
        endDate: 1641514600000,
        allocated: 4,
        toProcessInterviewer: 0,
        toAffect: 0,
        toFollowUp: 0,
        toReview: 0,
        finalized: 0,
        preference: true,
      },
      {
        id: "vqs2qfsdfsqe021x00",
        label: "Everyday life and health survey 2026",
        managementStartDate: 1576801000000,
        interviewerStartDate: 1575937000000,
        identificationPhaseStartDate: 1577233000000,
        collectionStartDate: 1577837800000,
        collectionEndDate: 1640996200000,
        endDate: 1641514600000,
        allocated: 4,
        toProcessInterviewer: 0,
        toAffect: 0,
        toFollowUp: 0,
        toReview: 0,
        finalized: 0,
        preference: true,
      },
      {
        id: "simpsonkgs2020x00",
        label: "Survey on the Simpsons tv show 2021",
        managementStartDate: 1576801000000,
        interviewerStartDate: 1575937000000,
        identificationPhaseStartDate: 1577233000000,
        collectionStartDate: 1577837800000,
        collectionEndDate: 1640996200000,
        endDate: 1641514600000,
        allocated: 4,
        toProcessInterviewer: 0,
        toAffect: 0,
        toFollowUp: 0,
        toReview: 0,
        finalized: 0,
        preference: false,
      },
      {
        id: "vqs202fgd1x00",
        label: "Everyday life and health survey 2018",
        managementStartDate: 1576801000000,
        interviewerStartDate: 1575937000000,
        identificationPhaseStartDate: 1577233000000,
        collectionStartDate: 1577837800000,
        collectionEndDate: 1640996200000,
        endDate: 1641514600000,
        allocated: 4,
        toProcessInterviewer: 0,
        toAffect: 0,
        toFollowUp: 0,
        toReview: 0,
        finalized: 0,
        preference: true,
      },
    ];

    res.json(mockStudyLine1);
  });

  api.get("/campaign/:id/interviewers", (req, res) => {
    const mockResponse = [
      {
        id: "INTW5",
        interviewerFirstName: "Chloé",
        interviewerLastName: "Dupont",
        surveyUnitCount: 84,
      },
      {
        id: "INTW6",
        interviewerFirstName: "Jacques",
        interviewerLastName: "Boulanger",
        surveyUnitCount: 55,
      },
      {
        id: "INTW7",
        interviewerFirstName: "Thierry",
        interviewerLastName: "Fabres",
        surveyUnitCount: 76,
      },
      {
        id: "INTW8",
        interviewerFirstName: "Bertrand",
        interviewerLastName: "Renard",
        surveyUnitCount: 84,
      },
      {
        id: "INTW9",
        interviewerFirstName: "Emilie",
        interviewerLastName: "Boulanger",
        surveyUnitCount: 55,
      },
      {
        id: "INTW10",
        interviewerFirstName: "Renée",
        interviewerLastName: "Dupont",
        surveyUnitCount: 84,
      },
      {
        id: "INTW11",
        interviewerFirstName: "Alphonse",
        interviewerLastName: "Delmarre",
        surveyUnitCount: 55,
      },
    ];

    res.json(mockResponse);
  });

  api.get("/campaign/:id/survey-units", (req, res) => {
    let unicityString = req.params.id;
    if(req.query.state){
      unicityString += req.query.state;
    }
    const unicityCode = Math.abs(hashCode(unicityString));
    const mockResponse = [
      {
        id: "1023" + unicityCode,
        ssech: "hgSkR29",
        location: "95160",
        city: "MONTMORENCY",
        finalizationDate: 1561932000000,
        reading: true,
        state: 'CLO',
        viewed: false,
        interviewer: {
          id: "INTW5",
          interviewerFirstName: "Chloé",
          interviewerLastName: "Dupont",
        },
        comments: [
          {
              "type": "managementComment",
              "value": "Test"
          },
          {
              "type": "interviewerComment",
              "value": "Test"
          }
        ]
      },
      {
        id: "4811" + unicityCode,
        ssech: "dlcB55jdf",
        location: "90000",
        city: "BELFORT",
        finalizationDate: 1561932000000,
        reading: true,
        viewed: false,
        state: 'TBR',
        interviewer: {
          id: "INTW6",
          interviewerFirstName: "Jacques",
          interviewerLastName: "Boulanger",
        },
        comments: [
          {
              "type": "managementComment",
              "value": "Test"
          },
          {
              "type": "interviewerComment",
              "value": "Test"
          }
        ]
      },
      {
        id: "1024" + unicityCode,
        ssech: "hgSkR29",
        location: "95160",
        city: "MONTMORENCY",
        finalizationDate: 1603304314268,
        reading: true,
        viewed: false,
        state: 'FIN',
        interviewer: {
          id: "INTW5",
          interviewerFirstName: "Chloé",
          interviewerLastName: "Dupont",
        },
        comments: [
          {
              "type": "managementComment",
              "value": "Test"
          },
          {
              "type": "interviewerComment",
              "value": "Test"
          }
        ]
      },
      {
        id: "4812" + unicityCode,
        ssech: "dlcB55jdf",
        location: "90000",
        city: "BRIVE-LA-GAILLARDE",
        finalizationDate: 1603304314268,
        reading: true,
        viewed: false,
        state: 'VIN',
        interviewer: {
          id: "INTW6",
          interviewerFirstName: "Jacques",
          interviewerLastName: "Boulanger",
        },
        comments: [
          {
              "type": "managementComment",
              "value": "Test"
          },
          {
              "type": "interviewerComment",
              "value": "Test"
          }
        ]
      },
      {
        id: "1025" + unicityCode,
        ssech: "hgSkR29",
        location: "95160",
        city: "MONTMORENCY",
        finalizationDate: 1603304314268,
        reading: true,
        viewed: true,
        state: 'VIN',
        interviewer: {
          id: "INTW5",
          interviewerFirstName: "Chloé",
          interviewerLastName: "Dupont",
        },
        comments: [
          {
              "type": "managementComment",
              "value": "Test"
          },
          {
              "type": "interviewerComment",
              "value": "Test"
          }
        ]
      },
      {
        id: "4813" + unicityCode,
        ssech: "dlcB55jdf",
        location: "90000",
        city: "BELFORT",
        finalizationDate: 1603304314268,
        reading: true,
        viewed: true,
        state: 'VIN',
        interviewer: {
          id: "INTW6",
          interviewerFirstName: "Jacques",
          interviewerLastName: "Boulanger",
        },
        comments: [
          {
              "type": "managementComment",
              "value": "Test"
          },
          {
              "type": "interviewerComment",
              "value": "Test"
          }
        ]
      },
      {
        id: "1027" + unicityCode,
        ssech: "hgSkR29",
        location: "95160",
        city: "MONTMORENCY",
        finalizationDate: 1603304314268,
        reading: true,
        viewed: true,
        state: 'VIN',
        interviewer: {
          id: "INTW5",
          interviewerFirstName: "Chloé",
          interviewerLastName: "Dupont",
        },
        comments: [
          {
              "type": "managementComment",
              "value": "Test"
          },
          {
              "type": "interviewerComment",
              "value": "Test"
          }
        ]
      },
      {
        id: "4815" + unicityCode,
        ssech: "dlcB55jdf",
        location: "90000",
        city: "BELFORT",
        finalizationDate: 1603304314268,
        reading: false,
        viewed: true,
        state: 'VIN',
        interviewer: {
          id: "INTW7",
          interviewerFirstName: "Thierry",
          interviewerLastName: "Fabres",
        },
        comments: [
          {
              "type": "managementComment",
              "value": "Test"
          },
          {
              "type": "interviewerComment",
              "value": "Test"
          }
        ]
      },
      {
        id: "1028" + unicityCode,
        ssech: "hgSkR29",
        location: "95160",
        city: "MONTMORENCY",
        finalizationDate: 1603304314268,
        reading: false,
        viewed: true,
        state: 'VIN',
        interviewer: {
          id: "INTW5",
          interviewerFirstName: "Chloé",
          interviewerLastName: "Dupont",
        },
        comments: [
          {
              "type": "managementComment",
              "value": "Test"
          },
          {
              "type": "interviewerComment",
              "value": "Test"
          }
        ]
      },
      {
        id: "4816" + unicityCode,
        ssech: "dlcB55jdf",
        location: "90000",
        city: "BELFORT",
        finalizationDate: 1603304314268,
        reading: false,
        viewed: true,
        state: 'VIN',
        interviewer: {
          id: "INTW6",
          interviewerFirstName: "Jacques",
          interviewerLastName: "Boulanger",
        },
        comments: [
          {
              "type": "managementComment",
              "value": "Test"
          },
          {
              "type": "interviewerComment",
              "value": "Test"
          }
        ]
      },
      {
        id: "1029" + unicityCode,
        ssech: "hgSkR29",
        location: "95160",
        city: "MONTMORENCY",
        finalizationDate: 1603304314268,
        reading: false,
        viewed: true,
        state: 'VIN',
        interviewer: {
          id: "INTW7",
          interviewerFirstName: "Thierry",
          interviewerLastName: "Fabres",
        },
      },
      {
        id: "4817" + unicityCode,
        ssech: "dlcB55jdf",
        location: "90000",
        city: "BELFORT",
        finalizationDate: 1603304314268,
        reading: false,
        viewed: true,
        state: 'VIN',
        interviewer: {
          id: "INTW6",
          interviewerFirstName: "Jacques",
          interviewerLastName: "Boulanger",
        },
      },
      {
        id: "1030" + unicityCode,
        ssech: "hgSkR29",
        location: "95160",
        city: "MONTMORENCY",
        finalizationDate: 1561932000000,
        reading: false,
        viewed: true,
        state: 'VIN',
        interviewer: {
          id: "INTW5",
          interviewerFirstName: "Chloé",
          interviewerLastName: "Dupont",
        },
      },
      {
        id: "4818" + unicityCode,
        ssech: "dlcB55jdf",
        location: "90000",
        city: "BELFORT",
        finalizationDate: 1561932000000,
        reading: false,
        viewed: true,
        state: 'VIN',
        interviewer: {
          id: "INTW6",
          interviewerFirstName: "Jacques",
          interviewerLastName: "Boulanger",
        },
      },
      {
        id: "1032" + unicityCode,
        ssech: "hgSkR29",
        location: "95160",
        city: "MONTMORENCY",
        finalizationDate: 1603304314268,
        reading: false,
        viewed: true,
        state: 'VIN',
        closingCause: 'NPA',
        interviewer: {
          id: "INTW5",
          interviewerFirstName: "Chloé",
          interviewerLastName: "Dupont",
        },
      },
      {
        id: "4819" + unicityCode,
        ssech: "dlcB55jdf",
        location: "90000",
        city: "BELFORT",
        finalizationDate: 1603304314268,
        reading: false,
        viewed: true,
        state: 'VIN',
        closingCause: 'NPI',
        interviewer: {
          id: "INTW6",
          interviewerFirstName: "Jacques",
          interviewerLastName: "Boulanger",
        },
      },
    ];

    setTimeout(() => {
        res.json([
            ...mockResponse,
          ]);
      }, 5000);
    
  });

  api.get("/survey-units/closable", (req, res) => {
    const mockResponse = [
      {
        id: "1023",
        ssech: "hgSkR29",
        location: "95160",
        city: "MONTMORENCY",
        finalizationDate: 1561932000000,
        interviewer: {
          id: "INTW5",
          interviewerFirstName: "Chloé",
          interviewerLastName: "Dupont",
        },
        campaign:"Simpsons",
        state: "VIC",
        questionnaireState: 'INIT',
        contactOutcome: 'INA',
        closingCause: "NPI",
      },
      {
        id: "4811",
        ssech: "dlcB55jdf",
        location: "90000",
        city: "BELFORT",
        finalizationDate: 1561932000000,
        interviewer: {
          id: "INTW6",
          interviewerFirstName: "Jacques",
          interviewerLastName: "Boulanger",
        },
        campaign:"Simpsons",
        state: "VIC",
        questionnaireState: 'INIT',
        contactOutcome: 'INA',
        closingCause: "NPA",
      },
      {
        id: "1024",
        ssech: "hgSkR29",
        location: "95160",
        city: "MONTMORENCY",
        finalizationDate: 1603304314268,
        interviewer: {
          id: "INTW5",
          interviewerFirstName: "Chloé",
          interviewerLastName: "Dupont",
        },
        campaign:"Simpsons",
        questionnaireState: 'TO_EXTRACT',
        contactOutcome: 'INA',
        state: "VIC"
      },
      {
        id: "4812",
        ssech: "dlcB55jdf",
        location: "90000",
        city: "BELFORT",
        finalizationDate: 1603304314268,
        interviewer: {
          id: "INTW6",
          interviewerFirstName: "Jacques",
          interviewerLastName: "Boulanger",
        },
        campaign:"VQS",
        questionnaireState: 'NULL',
        state: "VIC"
      },
      {
        id: "1025",
        ssech: "hgSkR29",
        location: "95160",
        city: "MONTMORENCY",
        finalizationDate: 1603304314268,
        interviewer: {
          id: "INTW5",
          interviewerFirstName: "Chloé",
          interviewerLastName: "Dupont",
        },
        campaign:"VQS",
        questionnaireState: 'NULL',
        state: "VIC"
      },
      {
        id: "4813",
        ssech: "dlcB55jdf",
        location: "90000",
        city: "BELFORT",
        finalizationDate: 1603304314268,
        interviewer: {
          id: "INTW6",
          interviewerFirstName: "Jacques",
          interviewerLastName: "Boulanger",
        },
        campaign:"VQS",
        questionnaireState: 'NULL',
        state: "VIC"
      },
      {
        id: "1027",
        ssech: "hgSkR29",
        location: "95160",
        city: "MONTMORENCY",
        finalizationDate: 1603304314268,
        interviewer: {
          id: "INTW5",
          interviewerFirstName: "Chloé",
          interviewerLastName: "Dupont",
        },
        campaign:"VQS",
        questionnaireState: 'NULL',
        state: "VIC",
     
      },
      {
        id: "4815",
        ssech: "dlcB55jdf",
        location: "90000",
        city: "BELFORT",
        finalizationDate: 1603304314268,
        interviewer: {
          id: "INTW7",
          interviewerFirstName: "Thierry",
          interviewerLastName: "Fabres",
        },
        campaign:"VQS",
        questionnaireState: 'NULL',
        state: "VIC"
      },
      {
        id: "1028",
        ssech: "hgSkR29",
        location: "95160",
        city: "MONTMORENCY",
        finalizationDate: 1603304314268,
        interviewer: {
          id: "INTW5",
          interviewerFirstName: "Chloé",
          interviewerLastName: "Dupont",
        },
        campaign:"VQS",
        questionnaireState: 'NULL',
        state: "VIC"
      },
      {
        id: "4816",
        ssech: "dlcB55jdf",
        location: "90000",
        city: "BELFORT",
        finalizationDate: 1603304314268,
        interviewer: {
          id: "INTW6",
          interviewerFirstName: "Jacques",
          interviewerLastName: "Boulanger",
        },
        campaign:"VQS",
        state: "VIC",
        questionnaireState: 'NULL',
        comments: [
          {
              "type": "managementComment",
              "value": "Test"
          },
          {
              "type": "interviewerComment",
              "value": "Test"
          }
        ]
      },
      {
        id: "1029",
        ssech: "hgSkR29",
        location: "95160",
        city: "MONTMORENCY",
        finalizationDate: 1603304314268,
        campaign:"VQS",
        questionnaireState: 'NULL',
        state: "VIC",
        interviewer: {
          id: "INTW7",
          interviewerFirstName: "Thierry",
          interviewerLastName: "Fabres",
        },
      },
      {
        id: "4817",
        ssech: "dlcB55jdf",
        location: "90000",
        city: "BELFORT",
        finalizationDate: 1603304314268,
        campaign:"VQS",
        questionnaireState: 'NULL',
        state: "VIC",
        interviewer: {
          id: "INTW6",
          interviewerFirstName: "Jacques",
          interviewerLastName: "Boulanger",
        },
      },
      {
        id: "1030",
        ssech: "hgSkR29",
        location: "95160",
        city: "MONTMORENCY",
        finalizationDate: 1561932000000,
        campaign:"VQS",
        questionnaireState: 'NULL',
        state: "VIC",
        interviewer: {
          id: "INTW5",
          interviewerFirstName: "Chloé",
          interviewerLastName: "Dupont",
        },
      },
      {
        id: "4818",
        ssech: "dlcB55jdf",
        location: "90000",
        city: "BELFORT",
        finalizationDate: 1561932000000,
        campaign:"LC 2020",
        questionnaireState: 'NULL',
        state: "VIC",
        interviewer: {
          id: "INTW6",
          interviewerFirstName: "Jacques",
          interviewerLastName: "Boulanger",
        },
      },
      {
        id: "1032",
        ssech: "hgSkR29",
        location: "95160",
        city: "MONTMORENCY",
        finalizationDate: 1603304314268,
        campaign:"LC 2020",
        state: "VIC",
        questionnaireState: 'NULL',
        interviewer: {
          id: "INTW5",
          interviewerFirstName: "Chloé",
          interviewerLastName: "Dupont",
        },
      },
      {
        id: "4819",
        ssech: "dlcB55jdf",
        location: "90000",
        city: "BELFORT",
        finalizationDate: 1603304314268,
        campaign:"LC 2020",
        state: "VIC",
        questionnaireState: 'NULL',
        interviewer: {
          id: "INTW6",
          interviewerFirstName: "Jacques",
          interviewerLastName: "Boulanger",
        },
      },
    ];

    res.json([
      ...mockResponse,

    ]);
  });

  api.get("/survey-unit/:id/states", (req, res) => {
    const mockResponse = {
      id: "ue432",
      states: [
        {
          id: 1,
          date: 1596188129587,
          type: "ANV",
        },
        {
          id: 2,
          date: 1596120310000,
          type: "ANV",
        },
        {
          id: 3,
          date: 1595657530000,
          type: "AOC",
        },
      ],
    };

    res.json(mockResponse);
  });

  api.get("/campaign/:id/survey-units/not-attributed", (req, res) => {
    const mockResponse = {
      count: 0,
    };

    res.json(mockResponse);
  });

  api.get("/campaign/:id/questionnaire-id", (req, res) => {
    const mockResponse = {
      questionnaireId: "QXT55",
    };

    res.json(mockResponse);
  });

  api.get("/campaign/:id/survey-units/abandoned", (req, res) => {
    const mockResponse = {
      count: 0,
    };
    res.json(mockResponse);
  });

  api.get( "/campaign/:id/survey-units/interviewer/:idep/state-count", (req, res) => {
      const date = new Date(req.query.date);
      const day = date.getDay();
      const month = date.getMonth();

      let mockResponse;

      mockResponse = {
        nvmCount: 22,
        nnsCount: 22,
        anvCount: 22,
        vinCount: 22,
        vicCount: 22,
        prcCount: 29,
        aocCount: 30,
        apsCount: 12,
        insCount: 5,
        wftCount: 0,
        wfsCount: 0,
        tbrCount: 2,
        finCount: 1,
        qnaCount: 3,
        qnaFinCount: 3,
        nvaCount: 0,
        npaCount: 2,
        npiCount: 2,
        rowCount: 2,
        total: 104,
      };

      res.json(mockResponse);
    }
  );

  api.get( "/campaign/:id/survey-units/interviewer/:idep/closing-causes", (req, res) => {
    const date = new Date(req.query.date);
    const day = date.getDay();
    const month = date.getMonth();
    let mockResponse;
    mockResponse = {
      npiCount: 22,
      npaCount: 22,
      rowCount: 22,
      total: 66,
    };
    res.json(mockResponse);
  }
);

  api.get(
    "/campaign/:id/survey-units/interviewer/:idep/contact-outcomes",
    (req, res) => {
      const date = new Date(req.query.date);
      const day = date.getDay();
      const month = date.getMonth();

      let mockResponse;

      mockResponse = {
        inaCount: 33,
        refCount: 2,
        impCount: 5,
        iniCount:11,
        alaCount: 9,
        wamCount: 7,
        oosCount: 8,
      };

      res.json(mockResponse);
    }
  );

  // TODO: ajouter les nouveaux états et revoir les nominations des états clôturés 
  api.get("/campaign/:id/survey-units/state-count", (req, res) => {
    const date = new Date(Number(req.query.date));
    const day = date.getDay();
    const month = date.getMonth();

    const mockResponse = {
      organizationUnits: [
        {
          idDem: "OU-SOUTH",
          labelDem: "South region organizational unit",
          isLocal: true,
          nvmCount: 22,
          nnsCount: 22,
          anvCount: 22,
          vinCount: 22,
          vicCount: 22,
          prcCount: 29,
          aocCount: 30,
          apsCount: 12,
          insCount: 5,
          wftCount: 0,
          wfsCount: 0,
          tbrCount: 2,
          finCount: 1,
          qnaCount: 3,
          qnaFinCount: 3,
          nvaCount: 0,
          npaCount: 2,
          npiCount: 2,
          rowCount: 2,
          total: 104,
        },
        {
          idDem: "OU-NORTH",
          labelDem: "North region organizational unit",
          isLocal: true,
          nvmCount: 22,
          nnsCount: 22,
          anvCount: 22,
          vinCount: 22,
          vicCount: 22,
          prcCount: 29,
          aocCount: 30,
          apsCount: 12,
          insCount: 5,
          wftCount: 0,
          wfsCount: 0,
          tbrCount: 2,
          finCount: 1,
          qnaCount: 3,
          qnaFinCount: 3,
          nvaCount: 0,
          npaCount: 2,
        npiCount: 2,
        rowCount: 2,
          total: 104,
        },
        {
          idDem: "OU-NATIONAL",
          labelDem: "National organizational unit",
          isLocal: false,
          nvmCount: 22,
          nnsCount: 22,
          anvCount: 22,
          vinCount: 22,
          vicCount: 22,
          prcCount: 29,
          aocCount: 30,
          apsCount: 12,
          insCount: 5,
          wftCount: 0,
          wfsCount: 0,
          tbrCount: 2,
          finCount: 1,
          qnaCount: 3,
          qnaFinCount: 3,
          nvaCount: 0,
          npaCount: 2,
          npiCount: 2,
          rowCount: 2,
          total: 104,
        },
      ],
      france: {
        nvmCount: 22,
        nnsCount: 22,
        anvCount: 22,
        vinCount: 22,
        vicCount: 22,
        prcCount: 29,
        aocCount: 30,
        apsCount: 12,
        insCount: 5,
        wftCount: 0,
        wfsCount: 0,
        tbrCount: 2,
        finCount: 1,
        qnaCount: 3,
        qnaFinCount: 3,
        nvaCount: 0,
        npaCount: 2,
        npiCount: 2,
        rowCount: 2,
        total: 104,
      },
    };

    res.json(mockResponse);
  });

  // TODO: à dev sur pearlJam pour les tables de collecte par enquete (date en query param)
  api.get("/campaign/:id/survey-units/contact-outcomes", (req, res) => {
    const date = new Date(Number(req.query.date));
    const day = date.getDay();
    const month = date.getMonth();

    const mockResponse = {
      organizationUnits: [
        {
          idDem: "OU-SOUTH",
          labelDem: "South region organizational unit",
          isLocal: true,
          inaCount: 33,
          refCount: 2,
          impCount: 5,
          iniCount:11,
          alaCount: 9,
          wamCount: 7,
          oosCount: 8,
          total: 104,
        },
        {
          idDem: "OU-NORTH",
          labelDem: "North region organizational unit",
          isLocal: true,
          inaCount: 33,
          refCount: 2,
          impCount: 5,
          iniCount:11,
          alaCount: 9,
          wamCount: 7,
          oosCount: 8,
          total: 104,
        },
        {
          idDem: "OU-NATIONAL",
          labelDem: "National organizational unit",
          isLocal: false,
          inaCount: 33,
          refCount: 2,
          impCount: 5,
          iniCount:11,
          alaCount: 9,
          wamCount: 7,
          oosCount: 8,
          total: 104,
        },
      ],
      france: {
        inaCount: 33,
        refCount: 2,
        impCount: 5,
        iniCount:11,
        alaCount: 9,
        wamCount: 7,
        oosCount: 8,
        total: 104,
      },
    };

    res.json(mockResponse);
  });

    // TODO: API à dev sur pearlJam pour le tableau de collecte par campagne du site (date en query param)
    api.get("/campaigns/survey-units/contact-outcomes", (req, res) => {
    const date = new Date(Number(req.query.date));
    const day = date.getDay();
    const month = date.getMonth();

    const mockResponse = [
      {
        campaign: {
          id: "simpsons2020x00",
          label: "Survey on the Simpsons tv show 2020",
        },
        inaCount: 33,
        refCount: 2,
        impCount: 5,
        iniCount:11,
        alaCount: 9,
        wamCount: 7,
        oosCount: 8,
      },
      {
        campaign: {
          id: "simpsosfqns2020x00",
          label: "Survey on something 2020",
        },
        inaCount: 33,
        refCount: 2,
        impCount: 5,
        iniCount:11,
        alaCount: 9,
        wamCount: 7,
        oosCount: 8,
      },
      {
        campaign: {
          id: "vqs2fsqe021x00",
          label: "Everyday life and health survey 2022",
        },
        inaCount: 33,
        refCount: 2,
        impCount: 5,
        iniCount:11,
        alaCount: 9,
        wamCount: 7,
        oosCount: 8,
      },
      {
        campaign: {
          id: "simpsonqsdfsqes2020x00",
          label: "Survey on something else 2020",
        },
        inaCount: 33,
        refCount: 2,
        impCount: 5,
        iniCount:11,
        alaCount: 9,
        wamCount: 7,
        oosCount: 8,
      },
      {
        campaign: {
          id: "vqs2qfsdfsqe021x00",
          label: "Everyday life and health survey 2026",
        },
        inaCount: 33,
        refCount: 2,
        impCount: 5,
        iniCount:11,
        alaCount: 9,
        wamCount: 7,
        oosCount: 8,
      },
      {
        campaign: {
          id: "simpsonkgs2020x00",
          label: "Survey on the Simpsons tv show 2021",
        },
        inaCount: 33,
        refCount: 2,
        impCount: 5,
        iniCount:11,
        alaCount: 9,
        wamCount: 7,
        oosCount: 8,
      },
      {
        campaign: {
          id: "vqs202fgd1x00",
          label: "Everyday life and health survey 2018",
        },
        inaCount: 33,
        refCount: 2,
        impCount: 5,
        iniCount:11,
        alaCount: 9,
        wamCount: 7,
        oosCount: 8,
      },
    ];
    res.json(mockResponse);
  });
   // TODO state des clotures à ajouter (npaCount, npiCount et rowCount)
  api.get("/campaigns/survey-units/state-count", (req, res) => {
    const date = new Date(Number(req.query.date));
    const day = date.getDay();
    const month = date.getMonth();

    const mockResponse = [
      {
        campaign: {
          id: "simpsons2020x00",
          label: "Survey on the Simpsons tv show 2020",
        },
        nvmCount: 22,
        nnsCount: 22,
        anvCount: 22,
        vinCount: 22,
        vicCount: 22,
        prcCount: 29,
        aocCount: 30,
        apsCount: 12,
        insCount: 5,
        wftCount: 0,
        wfsCount: 0,
        tbrCount: 2,
        finCount: 1,
        qnaCount: 3,
        qnaFinCount: 3,
        nvaCount: 0,
        npaCount: 2,
        npiCount: 2,
        rowCount: 2,
        total: 104,
      },
      {
        campaign: {
          id: "simpsosfqns2020x00",
          label: "Survey on something 2020",
        },
        nvmCount: 22,
        nnsCount: 22,
        anvCount: 22,
        vinCount: 22,
        vicCount: 22,
        prcCount: 29,
        aocCount: 30,
        apsCount: 12,
        insCount: 5,
        wftCount: 0,
        wfsCount: 0,
        tbrCount: 2,
        finCount: 1,
        qnaCount: 3,
        qnaFinCount: 3,
        nvaCount: 0,
        npaCount: 2,
        npiCount: 2,
        rowCount: 2,
        total: 104,
      },
      {
        campaign: {
          id: "vqs2fsqe021x00",
          label: "Everyday life and health survey 2022",
        },
        nvmCount: 22,
        nnsCount: 22,
        anvCount: 22,
        vinCount: 22,
        vicCount: 22,
        prcCount: 29,
        aocCount: 30,
        apsCount: 12,
        insCount: 5,
        wftCount: 0,
        wfsCount: 0,
        tbrCount: 2,
        finCount: 1,
        qnaCount: 3,
        qnaFinCount: 3,
        nvaCount: 0,
        npaCount: 2,
        npiCount: 2,
        rowCount: 2,
        total: 104,
      },
      {
        campaign: {
          id: "simpsonqsdfsqes2020x00",
          label: "Survey on something else 2020",
        },
        nvmCount: 22,
        nnsCount: 22,
        anvCount: 22,
        vinCount: 22,
        vicCount: 22,
        prcCount: 29,
        aocCount: 30,
        apsCount: 12,
        insCount: 5,
        wftCount: 0,
        wfsCount: 0,
        tbrCount: 2,
        finCount: 1,
        qnaCount: 3,
        qnaFinCount: 3,
        nvaCount: 0,
        npaCount: 2,
        npiCount: 2,
        rowCount: 2,
        total: 104,
      },
      {
        campaign: {
          id: "vqs2qfsdfsqe021x00",
          label: "Everyday life and health survey 2026",
        },
        nvmCount: 22,
        nnsCount: 22,
        anvCount: 22,
        vinCount: 22,
        vicCount: 22,
        prcCount: 29,
        aocCount: 30,
        apsCount: 12,
        insCount: 5,
        wftCount: 0,
        wfsCount: 0,
        tbrCount: 2,
        finCount: 1,
        qnaCount: 3,
        qnaFinCount: 3,
        nvaCount: 0,
        npaCount: 2,
        npiCount: 2,
        rowCount: 2,
        total: 104,
      },
      {
        campaign: {
          id: "simpsonkgs2020x00",
          label: "Survey on the Simpsons tv show 2021",
        },
        nvmCount: 22,
        nnsCount: 22,
        anvCount: 22,
        vinCount: 22,
        vicCount: 22,
        prcCount: 29,
        aocCount: 30,
        apsCount: 12,
        insCount: 5,
        wftCount: 0,
        wfsCount: 0,
        tbrCount: 2,
        finCount: 1,
        qnaCount: 3,
        qnaFinCount: 3,
        nvaCount: 0,
        npaCount: 2,
        npiCount: 2,
        rowCount: 2,
        total: 104,
      },
      {
        campaign: {
          id: "vqs202fgd1x00",
          label: "Everyday life and health survey 2018",
        },
        nvmCount: 22,
        nnsCount: 22,
        anvCount: 22,
        vinCount: 22,
        vicCount: 22,
        prcCount: 29,
        aocCount: 30,
        apsCount: 12,
        insCount: 5,
        wftCount: 0,
        wfsCount: 0,
        tbrCount: 2,
        finCount: 1,
        qnaCount: 3,
        qnaFinCount: 3,
        nvaCount: 0,
        npaCount: 2,
        npiCount: 2,
        rowCount: 2,
        total: 104,
      },
    ];

    setTimeout(()=>{
      res.json(mockResponse);
    }, 5000)
  });

  // TODO state des clotures à ajouter (npaCount, npiCount et rowCount)
  api.get("/interviewers/survey-units/state-count", (req, res) => {
    const date = new Date(Number(req.query.date));
    const day = date.getDay();
    const month = date.getMonth();

    const mockResponse = [
      {
        interviewer: {
          id: "INTW5",
          interviewerFirstName: "Chloé",
          interviewerLastName: "Dupont",
        },
        nvmCount: 22,
        nnsCount: 22,
        anvCount: 22,
        vinCount: 22,
        vicCount: 22,
        prcCount: 29,
        aocCount: 30,
        apsCount: 12,
        insCount: 5,
        wftCount: 0,
        wfsCount: 0,
        tbrCount: 2,
        finCount: 1,
        qnaCount: 3,
        qnaFinCount: 3,
        nvaCount: 0,
        total: 104,
      },
      {
        interviewer: {
          id: "INTW6",
          interviewerFirstName: "Jacques",
          interviewerLastName: "Boulanger",
        },
        nvmCount: 22,
        nnsCount: 22,
        anvCount: 22,
        vinCount: 22,
        vicCount: 22,
        prcCount: 29,
        aocCount: 30,
        apsCount: 12,
        insCount: 5,
        wftCount: 0,
        wfsCount: 0,
        tbrCount: 2,
        finCount: 1,
        qnaCount: 3,
        qnaFinCount: 3,
        nvaCount: 0,
        total: 104,
      },
      {
        interviewer: {
          id: "INTW7",
          interviewerFirstName: "Thierry",
          interviewerLastName: "Fabres",
        },
        nvmCount: 22,
        nnsCount: 22,
        anvCount: 22,
        vinCount: 22,
        vicCount: 22,
        prcCount: 29,
        aocCount: 30,
        apsCount: 12,
        insCount: 5,
        wftCount: 0,
        wfsCount: 0,
        tbrCount: 2,
        finCount: 1,
        qnaCount: 3,
        qnaFinCount: 3,
        nvaCount: 0,
        total: 104,
      },
      {
        interviewer: {
          id: "INTW8",
          interviewerFirstName: "Bertrand",
          interviewerLastName: "Renard",
        },
        nvmCount: 22,
        nnsCount: 22,
        anvCount: 22,
        vinCount: 22,
        vicCount: 22,
        prcCount: 29,
        aocCount: 30,
        apsCount: 12,
        insCount: 5,
        wftCount: 0,
        wfsCount: 0,
        tbrCount: 2,
        finCount: 1,
        qnaCount: 3,
        qnaFinCount: 3,
        nvaCount: 0,
        total: 104,
      },
      {
        interviewer: {
          id: "INTW9",
          interviewerFirstName: "Emilie",
          interviewerLastName: "Boulanger",
        },
        nvmCount: 22,
        nnsCount: 22,
        anvCount: 22,
        vinCount: 22,
        vicCount: 22,
        prcCount: 29,
        aocCount: 30,
        apsCount: 12,
        insCount: 5,
        wftCount: 0,
        wfsCount: 0,
        tbrCount: 2,
        finCount: 1,
        qnaCount: 3,
        qnaFinCount: 3,
        nvaCount: 0,
        total: 104,
      },
      {
        interviewer: {
          id: "INTW10",
          interviewerFirstName: "Renée",
          interviewerLastName: "Dupont",
        },
        nvmCount: 22,
        nnsCount: 22,
        anvCount: 22,
        vinCount: 22,
        vicCount: 22,
        prcCount: 29,
        aocCount: 30,
        apsCount: 12,
        insCount: 5,
        wftCount: 0,
        wfsCount: 0,
        tbrCount: 2,
        finCount: 1,
        qnaCount: 3,
        qnaFinCount: 3,
        nvaCount: 0,
        total: 104,
      },
      {
        interviewer: {
          id: "INTW11",
          interviewerFirstName: "Alphonse",
          interviewerLastName: "Delmarre",
        },
        nvmCount: 22,
        nnsCount: 22,
        anvCount: 22,
        vinCount: 22,
        vicCount: 22,
        prcCount: 29,
        aocCount: 30,
        apsCount: 12,
        insCount: 5,
        wftCount: 0,
        wfsCount: 0,
        tbrCount: 2,
        finCount: 1,
        qnaCount: 3,
        qnaFinCount: 3,
        nvaCount: 0,
        total: 104,
      },
    ];
    res.json(mockResponse);
  });

   api.get("/campaign/:id/survey-units/not-attributed/state-count", (req, res) => {
    const date = new Date(Number(req.query.date));
    const day = date.getDay();
    const month = date.getMonth();

    const mockResponse = {
        nvmCount: 22,
        nnsCount: 22,
        anvCount: 22,
        vinCount: 22,
        vicCount: 22,
        prcCount: 29,
        aocCount: 30,
        apsCount: 12,
        insCount: 5,
        wftCount: 0,
        wfsCount: 0,
        tbrCount: 2,
        finCount: 1,
        qnaCount: 3,
        qnaFinCount: 3,
        nvaCount: 0,
        npaCount: 0,
        npiCount: 1,
        rowCount: 0,
        total: 104,
      };
    res.json(mockResponse);
  });

      api.get("/campaign/:id/survey-units/not-attributed/contact-outcomes", (req, res) => {
    const date = new Date(Number(req.query.date));
    const day = date.getDay();
    const month = date.getMonth();

    const mockResponse = {
        inaCount: 33,
        refCount: 2,
        impCount: 5,
        iniCount:11,
        alaCount: 9,
        wamCount: 7,
        oosCount: 8,
      };
    res.json(mockResponse);
  });

  return api;
};
