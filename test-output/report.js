$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("C:/Users/1024812/Downloads/Framework-master/src/test/resources/features/CreateContact.feature");
formatter.feature({
  "line": 1,
  "name": "Free CRM Contact Creation",
  "description": "",
  "id": "free-crm-contact-creation",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 4,
  "name": "New Contact Creation",
  "description": "",
  "id": "free-crm-contact-creation;new-contact-creation",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 6,
  "name": "User is on CRMHomePage",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "User Navigates to New Contacts Page",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "User enters \"\u003cFirstName\u003e\" and \"\u003cLastName\u003e\" and \"\u003cPosition\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "Close the browser",
  "keyword": "Then "
});
formatter.examples({
  "line": 11,
  "name": "",
  "description": "",
  "id": "free-crm-contact-creation;new-contact-creation;",
  "rows": [
    {
      "cells": [
        "FirstName",
        "LastName",
        "Position"
      ],
      "line": 13,
      "id": "free-crm-contact-creation;new-contact-creation;;1"
    },
    {
      "cells": [
        "Test123",
        "Test456",
        "Manager"
      ],
      "line": 14,
      "id": "free-crm-contact-creation;new-contact-creation;;2"
    },
    {
      "cells": [
        "David",
        "John",
        "Director"
      ],
      "line": 15,
      "id": "free-crm-contact-creation;new-contact-creation;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 23967917515,
  "status": "passed"
});
formatter.before({
  "duration": 406567,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "New Contact Creation",
  "description": "",
  "id": "free-crm-contact-creation;new-contact-creation;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 6,
  "name": "User is on CRMHomePage",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "User Navigates to New Contacts Page",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "User enters \"Test123\" and \"Test456\" and \"Manager\"",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "Close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "ContactCreationStepDefination.user_is_on_CRMHomePage()"
});
formatter.result({
  "duration": 249304992,
  "status": "passed"
});
formatter.match({
  "location": "ContactCreationStepDefination.user_Navigates_to_New_Contacts_Page()"
});
formatter.result({
  "duration": 3391908503,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Test123",
      "offset": 13
    },
    {
      "val": "Test456",
      "offset": 27
    },
    {
      "val": "Manager",
      "offset": 41
    }
  ],
  "location": "CreateContactStepDefination.user_enters_and_and(String,String,String)"
});
formatter.result({
  "duration": 9140504383,
  "status": "passed"
});
formatter.match({
  "location": "DealMapStepDefination.close_the_browser()"
});
formatter.result({
  "duration": 124121,
  "status": "passed"
});
formatter.write("Finished scenario");
formatter.after({
  "duration": 2368627334,
  "status": "passed"
});
formatter.after({
  "duration": 129763,
  "status": "passed"
});
formatter.before({
  "duration": 22089059359,
  "status": "passed"
});
formatter.before({
  "duration": 140342,
  "status": "passed"
});
formatter.scenario({
  "line": 15,
  "name": "New Contact Creation",
  "description": "",
  "id": "free-crm-contact-creation;new-contact-creation;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 6,
  "name": "User is on CRMHomePage",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "User Navigates to New Contacts Page",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "User enters \"David\" and \"John\" and \"Director\"",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "Close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "ContactCreationStepDefination.user_is_on_CRMHomePage()"
});
formatter.result({
  "duration": 26450489,
  "status": "passed"
});
formatter.match({
  "location": "ContactCreationStepDefination.user_Navigates_to_New_Contacts_Page()"
});
formatter.result({
  "duration": 9831102915,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "David",
      "offset": 13
    },
    {
      "val": "John",
      "offset": 25
    },
    {
      "val": "Director",
      "offset": 36
    }
  ],
  "location": "CreateContactStepDefination.user_enters_and_and(String,String,String)"
});
formatter.result({
  "duration": 8943799587,
  "status": "passed"
});
formatter.match({
  "location": "DealMapStepDefination.close_the_browser()"
});
formatter.result({
  "duration": 98380,
  "status": "passed"
});
formatter.write("Finished scenario");
formatter.after({
  "duration": 2919806484,
  "status": "passed"
});
formatter.after({
  "duration": 56772,
  "status": "passed"
});
});