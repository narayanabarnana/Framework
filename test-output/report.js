$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("F:/CucumberFramework/Framework/src/test/resources/features/TestMultipleScenario.feature");
formatter.feature({
  "line": 1,
  "name": "This feature file contains scenarios for Contact creation and Deals creation",
  "description": "",
  "id": "this-feature-file-contains-scenarios-for-contact-creation-and-deals-creation",
  "keyword": "Feature"
});
formatter.before({
  "duration": 68561142315,
  "status": "passed"
});
formatter.before({
  "duration": 451855,
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
  "duration": 687738843,
  "status": "passed"
});
formatter.match({
  "location": "ContactCreationStepDefination.user_Navigates_to_New_Contacts_Page()"
});
formatter.result({
  "duration": 3458109077,
  "status": "passed"
});
formatter.match({
  "location": "ContactCreationStepDefination.user_enters_FirstName_and_LastName_and_Position_details(DataTable)"
});
formatter.result({
  "duration": 9602622508,
  "status": "passed"
});
formatter.match({
  "location": "ContactCreationStepDefination.contact_Created()"
});
formatter.result({
  "duration": 138281,
  "status": "passed"
});
formatter.write("Finished scenario");
formatter.after({
  "duration": 839773425,
  "status": "passed"
});
formatter.after({
  "duration": 283244,
  "status": "passed"
});
formatter.before({
  "duration": 61227772997,
  "status": "passed"
});
formatter.before({
  "duration": 728931,
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
  "duration": 19389157,
  "status": "passed"
});
formatter.match({
  "location": "DealMapStepDefination.user_move_to_New_Deal_Page()"
});
formatter.result({
  "duration": 3372599488,
  "status": "passed"
});
formatter.match({
  "location": "DealMapStepDefination.user_enters_deals_details(DataTable)"
});
formatter.result({
  "duration": 18555266142,
  "status": "passed"
});
formatter.match({
  "location": "DealMapStepDefination.deal_Created_Succesfully()"
});
formatter.result({
  "duration": 221044,
  "status": "passed"
});
formatter.write("Finished scenario");
formatter.after({
  "duration": 780907350,
  "status": "passed"
});
formatter.after({
  "duration": 323855,
  "status": "passed"
});
formatter.before({
  "duration": 62625942650,
  "status": "passed"
});
formatter.before({
  "duration": 348530,
  "status": "passed"
});
formatter.scenario({
  "line": 25,
  "name": "This scenario is to create Case in CRM Application",
  "description": "",
  "id": "this-feature-file-contains-scenarios-for-contact-creation-and-deals-creation;this-scenario-is-to-create-case-in-crm-application",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 27,
  "name": "User is on CRMHomePage",
  "keyword": "Given "
});
formatter.step({
  "line": 28,
  "name": "User Navigate to New CaseCreation Page",
  "keyword": "Then "
});
formatter.step({
  "line": 29,
  "name": "User enters Case creation details",
  "rows": [
    {
      "cells": [
        "title",
        "description",
        "version"
      ],
      "line": 31
    },
    {
      "cells": [
        "test case creation",
        "case description",
        "01"
      ],
      "line": 32
    }
  ],
  "keyword": "And "
});
formatter.match({
  "location": "ContactCreationStepDefination.user_is_on_CRMHomePage()"
});
formatter.result({
  "duration": 13335636,
  "status": "passed"
});
formatter.match({
  "location": "CaseCreationStepDefination.user_Navigate_to_New_CaseCreation_Page()"
});
formatter.result({
  "duration": 2395533575,
  "status": "passed"
});
formatter.match({
  "location": "CaseCreationStepDefination.user_enters_Case_creation_details(DataTable)"
});
formatter.result({
  "duration": 35698656875,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//input[@name\u003d\u0027version\u0027]\"}\n  (Session info: chrome\u003d68.0.3440.106)\n  (Driver info: chromedriver\u003d2.41.578737 (49da6702b16031c40d63e5618de03a32ff6c197e),platform\u003dWindows NT 10.0.17134 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.5.3\u0027, revision: \u0027a88d25fe6b\u0027, time: \u00272017-08-29T12:42:44.417Z\u0027\nSystem info: host: \u0027DESKTOP-E8IIGOH\u0027, ip: \u0027192.168.0.8\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_121\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{mobileEmulationEnabled\u003dfalse, hasTouchScreen\u003dfalse, platform\u003dXP, acceptSslCerts\u003dfalse, goog:chromeOptions\u003d{debuggerAddress\u003dlocalhost:63215}, acceptInsecureCerts\u003dfalse, webStorageEnabled\u003dtrue, browserName\u003dchrome, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, platformName\u003dXP, setWindowRect\u003dtrue, unexpectedAlertBehaviour\u003d, applicationCacheEnabled\u003dfalse, rotatable\u003dfalse, networkConnectionEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d2.41.578737 (49da6702b16031c40d63e5618de03a32ff6c197e), userDataDir\u003dC:\\Users\\Narayana\\AppData\\Local\\Temp\\scoped_dir4448_22813}, takesHeapSnapshot\u003dtrue, unhandledPromptBehavior\u003d, pageLoadStrategy\u003dnormal, databaseEnabled\u003dfalse, handlesAlerts\u003dtrue, version\u003d68.0.3440.106, browserConnectionEnabled\u003dfalse, nativeEvents\u003dtrue, locationContextEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue}]\nSession ID: a392d5b8c3f3dee21fa927879de360a0\n*** Element info: {Using\u003dxpath, value\u003d//input[@name\u003d\u0027version\u0027]}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:215)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:167)\r\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:82)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:45)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:164)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:82)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:646)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:416)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:518)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:361)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:408)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy18.sendKeys(Unknown Source)\r\n\tat stepDefinations.CaseCreationStepDefination.user_enters_Case_creation_details(CaseCreationStepDefination.java:62)\r\n\tat ✽.And User enters Case creation details(F:/CucumberFramework/Framework/src/test/resources/features/TestMultipleScenario.feature:29)\r\n",
  "status": "failed"
});
formatter.write("Finished scenario");
formatter.embedding("image/png", "embedded0.png");
formatter.after({
  "duration": 1132815577,
  "status": "passed"
});
formatter.after({
  "duration": 322313,
  "status": "passed"
});
});