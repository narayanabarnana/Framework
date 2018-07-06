$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("F:/CucumberFramework/Framework/src/main/java/features/CreateContact.feature");
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
  "name": "User is on Login Page",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "Title of the page is freeCRM",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "User enter \"\u003cusername\u003e\" and \"\u003cpassword\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "User clicks on Login button",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "User is on Home page",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "User move to New Contact Page",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "User enters \"\u003cFirstName\u003e\" and \"\u003cLastName\u003e\" and \"\u003cPosition\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "Close the browser",
  "keyword": "Then "
});
formatter.examples({
  "line": 15,
  "name": "",
  "description": "",
  "id": "free-crm-contact-creation;new-contact-creation;",
  "rows": [
    {
      "cells": [
        "username",
        "password",
        "FirstName",
        "LastName",
        "Position"
      ],
      "line": 17,
      "id": "free-crm-contact-creation;new-contact-creation;;1"
    },
    {
      "cells": [
        "naveenk",
        "test@123",
        "Test123",
        "Test456",
        "Manager"
      ],
      "line": 18,
      "id": "free-crm-contact-creation;new-contact-creation;;2"
    },
    {
      "cells": [
        "naveenk",
        "test@123",
        "David",
        "John",
        "Director"
      ],
      "line": 19,
      "id": "free-crm-contact-creation;new-contact-creation;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 18,
  "name": "New Contact Creation",
  "description": "",
  "id": "free-crm-contact-creation;new-contact-creation;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 6,
  "name": "User is on Login Page",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "Title of the page is freeCRM",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "User enter \"naveenk\" and \"test@123\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "User clicks on Login button",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "User is on Home page",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "User move to New Contact Page",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "User enters \"Test123\" and \"Test456\" and \"Manager\"",
  "matchedColumns": [
    2,
    3,
    4
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "Close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefination.user_is_on_Login_Page()"
});
formatter.result({
  "duration": 115881662563,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefination.title_of_the_page_is_freeCRM()"
});
formatter.result({
  "duration": 97529956,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "naveenk",
      "offset": 12
    },
    {
      "val": "test@123",
      "offset": 26
    }
  ],
  "location": "LoginStepDefination.user_enter_something_and_something(String,String)"
});
formatter.result({
  "duration": 409205730,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefination.user_clicks_on_Login_button()"
});
formatter.result({
  "duration": 55390750060,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefination.User_is_on_Home_page()"
});
formatter.result({
  "duration": 13621993,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefination.user_move_to_new_contact_page()"
});
formatter.result({
  "duration": 470486452,
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
  "location": "LoginStepDefination.user_enters_and_and(String,String,String)"
});
formatter.result({
  "duration": 5177231906,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"id\",\"selector\":\"first_name\"}\n  (Session info: chrome\u003d67.0.3396.99)\n  (Driver info: chromedriver\u003d2.35.528161 (5b82f2d2aae0ca24b877009200ced9065a772e73),platform\u003dWindows NT 10.0.16299 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.5.3\u0027, revision: \u0027a88d25fe6b\u0027, time: \u00272017-08-29T12:42:44.417Z\u0027\nSystem info: host: \u0027DESKTOP-E8IIGOH\u0027, ip: \u0027192.168.43.181\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_121\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{mobileEmulationEnabled\u003dfalse, hasTouchScreen\u003dfalse, platform\u003dXP, acceptSslCerts\u003dfalse, acceptInsecureCerts\u003dfalse, webStorageEnabled\u003dtrue, browserName\u003dchrome, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, platformName\u003dXP, setWindowRect\u003dtrue, unexpectedAlertBehaviour\u003d, applicationCacheEnabled\u003dfalse, rotatable\u003dfalse, networkConnectionEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d2.35.528161 (5b82f2d2aae0ca24b877009200ced9065a772e73), userDataDir\u003dC:\\Users\\Narayana\\AppData\\Local\\Temp\\scoped_dir11992_18537}, takesHeapSnapshot\u003dtrue, pageLoadStrategy\u003dnormal, unhandledPromptBehavior\u003d, databaseEnabled\u003dfalse, handlesAlerts\u003dtrue, version\u003d67.0.3396.99, browserConnectionEnabled\u003dfalse, nativeEvents\u003dtrue, locationContextEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue}]\nSession ID: f68fecffdf02d630e6c046b8475e103a\n*** Element info: {Using\u003did, value\u003dfirst_name}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:215)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:167)\r\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:82)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:45)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:164)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:82)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:646)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:416)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementById(RemoteWebDriver.java:462)\r\n\tat org.openqa.selenium.By$ById.findElement(By.java:218)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:408)\r\n\tat stepDefinations.LoginStepDefination.user_enters_and_and(LoginStepDefination.java:114)\r\n\tat ✽.Then User enters \"Test123\" and \"Test456\" and \"Manager\"(F:/CucumberFramework/Framework/src/main/java/features/CreateContact.feature:12)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "LoginStepDefination.close_the_browser()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 19,
  "name": "New Contact Creation",
  "description": "",
  "id": "free-crm-contact-creation;new-contact-creation;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 6,
  "name": "User is on Login Page",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "Title of the page is freeCRM",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "User enter \"naveenk\" and \"test@123\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "User clicks on Login button",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "User is on Home page",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "User move to New Contact Page",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "User enters \"David\" and \"John\" and \"Director\"",
  "matchedColumns": [
    2,
    3,
    4
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "Close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefination.user_is_on_Login_Page()"
});
