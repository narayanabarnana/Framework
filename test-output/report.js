$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("F:/CucumberFramework/Framework/src/test/resources/features/TestMultipleScenario.feature");
formatter.feature({
  "line": 1,
  "name": "This feature file contains scenarios for Contact creation and Deals creation",
  "description": "",
  "id": "this-feature-file-contains-scenarios-for-contact-creation-and-deals-creation",
  "keyword": "Feature"
});
formatter.before({
  "duration": 1774008,
  "status": "passed"
});
formatter.before({
  "duration": 55775107142,
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
  "duration": 1979165821,
  "status": "passed"
});
formatter.match({
  "location": "ContactCreationStepDefination.user_Navigates_to_New_Contacts_Page()"
});
formatter.result({
  "duration": 4412339813,
  "status": "passed"
});
formatter.match({
  "location": "ContactCreationStepDefination.user_enters_FirstName_and_LastName_and_Position_details(DataTable)"
});
formatter.result({
  "duration": 10232978446,
  "status": "passed"
});
formatter.match({
  "location": "ContactCreationStepDefination.contact_Created()"
});
formatter.result({
  "duration": 101269,
  "status": "passed"
});
formatter.after({
  "duration": 151133,
  "status": "passed"
});
formatter.write("Finished scenario");
formatter.after({
  "duration": 4344449968,
  "status": "passed"
});
formatter.before({
  "duration": 434891,
  "status": "passed"
});
formatter.before({
  "duration": 29202319113,
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
  "duration": 15913634,
  "status": "passed"
});
formatter.match({
  "location": "DealMapStepDefination.user_move_to_New_Deal_Page()"
});
formatter.result({
  "duration": 4425853834,
  "status": "passed"
});
formatter.match({
  "location": "DealMapStepDefination.user_enters_deals_details(DataTable)"
});
formatter.result({
  "duration": 17582192685,
  "status": "passed"
});
formatter.match({
  "location": "DealMapStepDefination.deal_Created_Succesfully()"
});
formatter.result({
  "duration": 87390,
  "status": "passed"
});
formatter.after({
  "duration": 102297,
  "status": "passed"
});
formatter.write("Finished scenario");
formatter.after({
  "duration": 4184549221,
  "status": "passed"
});
formatter.before({
  "duration": 136739,
  "status": "passed"
});
formatter.before({
  "duration": 21683185688,
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
  "duration": 14148880,
  "status": "passed"
});
formatter.match({
  "location": "CaseCreationStepDefination.user_Navigate_to_New_CaseCreation_Page()"
});
formatter.result({
  "duration": 2771516461,
  "status": "passed"
});
formatter.match({
  "location": "CaseCreationStepDefination.user_enters_Case_creation_details(DataTable)"
});
formatter.result({
  "duration": 35580511208,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//input[@name\u003d\u0027version\u0027]\"}\n  (Session info: chrome\u003d70.0.3538.110)\n  (Driver info: chromedriver\u003d2.41.578737 (49da6702b16031c40d63e5618de03a32ff6c197e),platform\u003dWindows NT 10.0.17134 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.5.3\u0027, revision: \u0027a88d25fe6b\u0027, time: \u00272017-08-29T12:42:44.417Z\u0027\nSystem info: host: \u0027DESKTOP-E8IIGOH\u0027, ip: \u0027192.168.0.7\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_121\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{mobileEmulationEnabled\u003dfalse, hasTouchScreen\u003dfalse, platform\u003dXP, acceptSslCerts\u003dfalse, goog:chromeOptions\u003d{debuggerAddress\u003dlocalhost:51724}, acceptInsecureCerts\u003dfalse, webStorageEnabled\u003dtrue, browserName\u003dchrome, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, platformName\u003dXP, setWindowRect\u003dtrue, unexpectedAlertBehaviour\u003d, applicationCacheEnabled\u003dfalse, rotatable\u003dfalse, networkConnectionEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d2.41.578737 (49da6702b16031c40d63e5618de03a32ff6c197e), userDataDir\u003dC:\\Users\\Narayana\\AppData\\Local\\Temp\\scoped_dir11796_25984}, takesHeapSnapshot\u003dtrue, unhandledPromptBehavior\u003d, pageLoadStrategy\u003dnormal, databaseEnabled\u003dfalse, handlesAlerts\u003dtrue, version\u003d70.0.3538.110, browserConnectionEnabled\u003dfalse, nativeEvents\u003dtrue, locationContextEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue}]\nSession ID: d17fc49afd1877be691e6aeb11e084f7\n*** Element info: {Using\u003dxpath, value\u003d//input[@name\u003d\u0027version\u0027]}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:215)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:167)\r\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:82)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:45)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:164)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:82)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:646)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:416)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:518)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:361)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:408)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy17.sendKeys(Unknown Source)\r\n\tat stepDefinations.CaseCreationStepDefination.user_enters_Case_creation_details(CaseCreationStepDefination.java:62)\r\n\tat ✽.And User enters Case creation details(F:/CucumberFramework/Framework/src/test/resources/features/TestMultipleScenario.feature:29)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 91502,
  "status": "passed"
});
formatter.write("Finished scenario");
formatter.embedding("image/png", "embedded0.png");
formatter.after({
  "duration": 6417586270,
  "status": "passed"
});
});