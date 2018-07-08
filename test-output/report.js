$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("F:/CucumberFramework/Framework/src/main/java/features/DealsMap.feature");
formatter.feature({
  "line": 1,
  "name": "Deals Data creation",
  "description": "",
  "id": "deals-data-creation",
  "keyword": "Feature"
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
  "line": 5,
  "name": "User is on Login Page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "Title of the page is freeCRM",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "User enter username and password",
  "rows": [
    {
      "cells": [
        "Username",
        "Password"
      ],
      "line": 9
    },
    {
      "cells": [
        "naveenk",
        "test@123"
      ],
      "line": 10
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "User clicks on Login button",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "User is on Home page",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "User move to New Deal Page",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "User enters deals details",
  "rows": [
    {
      "cells": [
        "title",
        "Amount",
        "Probability",
        "Commission"
      ],
      "line": 17
    },
    {
      "cells": [
        "test deal",
        "1000",
        "50",
        "10"
      ],
      "line": 18
    },
    {
      "cells": [
        "test deal",
        "2000",
        "40",
        "20"
      ],
      "line": 19
    },
    {
      "cells": [
        "test deal",
        "3000",
        "30",
        "30"
      ],
      "line": 20
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 22,
  "name": "Close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "DealMapStepDefination.user_is_on_Login_Page()"
});
formatter.result({
  "duration": 128816553660,
  "status": "passed"
});
formatter.match({
  "location": "DealMapStepDefination.title_of_the_page_is_freeCRM()"
});
formatter.result({
  "duration": 35199893076,
  "status": "passed"
});
formatter.match({
  "location": "DealMapStepDefination.user_enter_username_and_password(DataTable)"
});
formatter.result({
  "duration": 47375417285,
  "status": "passed"
});
formatter.match({
  "location": "DealMapStepDefination.user_clicks_on_Login_button()"
});
formatter.result({
  "duration": 13030911783,
  "status": "passed"
});
formatter.match({
  "location": "DealMapStepDefination.User_is_on_Home_page()"
});
formatter.result({
  "duration": 15987683,
  "status": "passed"
});
formatter.match({
  "location": "DealMapStepDefination.user_move_to_New_Deal_Page()"
});
formatter.result({
  "duration": 3196457120,
  "status": "passed"
});
formatter.match({
  "location": "DealMapStepDefination.user_enters_deals_details(DataTable)"
});
formatter.result({
  "duration": 43514740581,
  "status": "passed"
});
formatter.match({
  "location": "DealMapStepDefination.close_the_browser()"
});
formatter.result({
  "duration": 12219479672,
  "status": "passed"
});
});