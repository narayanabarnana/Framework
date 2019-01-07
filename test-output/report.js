$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("C:/Users/1024812/Downloads/Framework-master/src/test/resources/features/CallCreation.feature");
formatter.feature({
  "line": 1,
  "name": "This feature file contains scenarios for Call in Free CRM",
  "description": "",
  "id": "this-feature-file-contains-scenarios-for-call-in-free-crm",
  "keyword": "Feature"
});
formatter.before({
  "duration": 17082262966,
  "status": "passed"
});
formatter.before({
  "duration": 242953,
  "status": "passed"
});
formatter.scenario({
  "line": 3,
  "name": "This scenario is to create call in CRM Application",
  "description": "",
  "id": "this-feature-file-contains-scenarios-for-call-in-free-crm;this-scenario-is-to-create-call-in-crm-application",
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
  "name": "User Navigates to New Call Page",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "User enters the call details",
  "rows": [
    {
      "cells": [
        "CallScript",
        "AssignedTo",
        "SearchContact"
      ],
      "line": 9
    },
    {
      "cells": [
        "test",
        "Narayana B",
        "Narayana"
      ],
      "line": 10
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "Extract the Task id",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "Extract the Case id",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "Extract the Deal id",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "Click on Submit button",
  "keyword": "And "
});
formatter.match({
  "location": "ContactCreationStepDefination.user_is_on_CRMHomePage()"
});
formatter.result({
  "duration": 138098382,
  "status": "passed"
});
formatter.match({
  "location": "CallCreationStepDefinition.user_Navigates_to_New_Call_Page()"
});
formatter.result({
  "duration": 1812656959,
  "status": "passed"
});
formatter.match({
  "location": "CallCreationStepDefinition.user_enters_the_call_details(DataTable)"
});
formatter.result({
  "duration": 12618922037,
  "status": "passed"
});
formatter.match({
  "location": "CallCreationStepDefinition.extract_the_Task_id()"
});
formatter.result({
  "duration": 167858863,
  "status": "passed"
});
formatter.match({
  "location": "CallCreationStepDefinition.extract_the_Case_id()"
});
formatter.result({
  "duration": 52892,
  "status": "passed"
});
formatter.match({
  "location": "CallCreationStepDefinition.extract_the_Deal_id()"
});
formatter.result({
  "duration": 192176,
  "status": "passed"
});
formatter.match({
  "location": "CallCreationStepDefinition.click_on_Submit_button()"
});
formatter.result({
  "duration": 33146,
  "status": "passed"
});
formatter.write("Finished scenario");
formatter.after({
  "duration": 551588150,
  "status": "passed"
});
formatter.after({
  "duration": 151272,
  "status": "passed"
});
});