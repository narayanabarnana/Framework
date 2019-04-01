$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("C:/Users/1024812/Downloads/Framework-master/src/test/resources/features/DealsMap.feature");
formatter.feature({
  "line": 1,
  "name": "Deals Data creation",
  "description": "",
  "id": "deals-data-creation",
  "keyword": "Feature"
});
formatter.before({
  "duration": 432877740,
  "status": "passed"
});
formatter.before({
  "duration": 16413552558,
  "status": "passed"
});
formatter.before({
  "duration": 7508584993,
  "status": "passed"
});
formatter.scenario({
  "line": 3,
  "name": "Create a new deal data creation",
  "description": "",
  "id": "deals-data-creation;create-a-new-deal-data-creation",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "comments": [
    {
      "line": 6,
      "value": "#\tGiven User is on Login Page"
    },
    {
      "line": 7,
      "value": "#\tWhen Title of the page is freeCRM"
    },
    {
      "line": 8,
      "value": "#\tThen User enter username and password"
    },
    {
      "line": 9,
      "value": "#"
    },
    {
      "line": 10,
      "value": "#\t\t| Username | Password |"
    },
    {
      "line": 11,
      "value": "#\t\t| naveenk  | test@123 |"
    },
    {
      "line": 12,
      "value": "#"
    },
    {
      "line": 13,
      "value": "#\tThen User clicks on Login button"
    }
  ],
  "line": 14,
  "name": "User is on CRMHomePage",
  "keyword": "Given "
});
formatter.step({
  "line": 15,
  "name": "User move to New Deal Page",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "User enters deals details",
  "rows": [
    {
      "cells": [
        "title",
        "Amount",
        "Probability",
        "Commission"
      ],
      "line": 18
    },
    {
      "cells": [
        "test deal1",
        "1000",
        "50",
        "10"
      ],
      "line": 19
    },
    {
      "cells": [
        "test deal2",
        "2000",
        "40",
        "20"
      ],
      "line": 20
    },
    {
      "cells": [
        "test deal3",
        "3000",
        "30",
        "30"
      ],
      "line": 21
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 25,
  "name": "Close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "ContactCreationStepDefination.user_is_on_CRMHomePage()"
});
formatter.result({
  "duration": 659527345,
  "status": "passed"
});
formatter.match({
  "location": "DealMapStepDefination.user_move_to_New_Deal_Page()"
});
formatter.result({
  "duration": 3144693271,
  "status": "passed"
});
formatter.match({
  "location": "DealMapStepDefination.user_enters_deals_details(DataTable)"
});
formatter.result({
  "duration": 58285513042,
  "status": "passed"
});
formatter.match({
  "location": "DealMapStepDefination.close_the_browser()"
});
formatter.result({
  "duration": 40551,
  "status": "passed"
});
formatter.write("Finished scenario");
formatter.after({
  "duration": 8302282808,
  "status": "passed"
});
});