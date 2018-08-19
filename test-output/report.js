$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("./src/main/java/features/TestMultipleScenario.feature");
formatter.feature({
  "line": 1,
  "name": "This feature file contains scenarios for Contact creation and Deals creation",
  "description": "",
  "id": "this-feature-file-contains-scenarios-for-contact-creation-and-deals-creation",
  "keyword": "Feature"
});
formatter.before({
  "duration": 63708632278,
  "status": "passed"
});
formatter.before({
  "duration": 4662998,
  "status": "passed"
});
formatter.scenario({
  "line": 3,
  "name": "This scenario is to create Contact in CRM Application",
  "description": "",
  "id": "this-feature-file-contains-scenarios-for-contact-creation-and-deals-creation;this-scenario-is-to-create-contact-in-crm-application",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "User is on CRMHomePage",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "User Navigates to New Contacts Page",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "User enters FirstName and LastName and Position details",
  "rows": [
    {
      "cells": [
        "FirstName",
        "LastName",
        "Position"
      ],
      "line": 9
    },
    {
      "cells": [
        "Test123",
        "Test456",
        "Manager"
      ],
      "line": 10
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "Contact Created",
  "keyword": "Then "
});
formatter.match({
  "location": "ContactCreationStepDefination.user_is_on_CRMHomePage()"
});
formatter.result({
  "duration": 886089399,
  "status": "passed"
});
formatter.match({
  "location": "ContactCreationStepDefination.user_Navigates_to_New_Contacts_Page()"
});
formatter.result({
  "duration": 3782002914,
  "status": "passed"
});
formatter.match({
  "location": "ContactCreationStepDefination.user_enters_FirstName_and_LastName_and_Position_details(DataTable)"
});
formatter.result({
  "duration": 8903938437,
  "status": "passed"
});
formatter.match({
  "location": "ContactCreationStepDefination.contact_Created()"
});
formatter.result({
  "duration": 146506,
  "status": "passed"
});
formatter.write("Finished scenario");
formatter.after({
  "duration": 1175680545,
  "status": "passed"
});
formatter.after({
  "duration": 343389,
  "status": "passed"
});
formatter.before({
  "duration": 24330465760,
  "status": "passed"
});
formatter.before({
  "duration": 369606,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "This scenario is to create Deal in CRM Application",
  "description": "",
  "id": "this-feature-file-contains-scenarios-for-contact-creation-and-deals-creation;this-scenario-is-to-create-deal-in-crm-application",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 16,
  "name": "User is on CRMHomePage",
  "keyword": "Given "
});
formatter.step({
  "line": 17,
  "name": "User move to New Deal Page",
  "keyword": "Then "
});
formatter.step({
  "line": 18,
  "name": "User enters deals details",
  "rows": [
    {
      "cells": [
        "title",
        "Amount",
        "Probability",
        "Commission"
      ],
      "line": 20
    },
    {
      "cells": [
        "test deal",
        "1000",
        "50",
        "10"
      ],
      "line": 21
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 23,
  "name": "Deal Created Succesfully",
  "keyword": "Then "
});
formatter.match({
  "location": "ContactCreationStepDefination.user_is_on_CRMHomePage()"
});
formatter.result({
  "duration": 28430871,
  "status": "passed"
});
formatter.match({
  "location": "DealMapStepDefination.user_move_to_New_Deal_Page()"
});
formatter.result({
  "duration": 2975617317,
  "status": "passed"
});
formatter.match({
  "location": "DealMapStepDefination.user_enters_deals_details(DataTable)"
});
formatter.result({
  "duration": 17894435605,
  "status": "passed"
});
formatter.match({
  "location": "DealMapStepDefination.deal_Created_Succesfully()"
});
formatter.result({
  "duration": 136738,
  "status": "passed"
});
formatter.write("Finished scenario");
formatter.after({
  "duration": 840568751,
  "status": "passed"
});
formatter.after({
  "duration": 235951,
  "status": "passed"
});
});