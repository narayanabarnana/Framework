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
  "duration": 23206050964,
  "status": "passed"
});
formatter.match({
  "location": "DealMapStepDefination.title_of_the_page_is_freeCRM()"
});
formatter.result({
  "duration": 240114943,
  "status": "passed"
});
formatter.match({
  "location": "DealMapStepDefination.user_enter_username_and_password(DataTable)"
});
formatter.result({
  "duration": 317750384,
  "status": "passed"
});
formatter.match({
  "location": "DealMapStepDefination.user_clicks_on_Login_button()"
});
formatter.result({
  "duration": 9598776031,
  "status": "passed"
});
formatter.match({
  "location": "DealMapStepDefination.User_is_on_Home_page()"
});
formatter.result({
  "duration": 15728599,
  "status": "passed"
});
formatter.match({
  "location": "DealMapStepDefination.user_move_to_New_Deal_Page()"
});
formatter.result({
  "duration": 762769944,
  "status": "passed"
});
formatter.match({
  "location": "DealMapStepDefination.user_enters_deals_details(DataTable)"
});
formatter.result({
  "duration": 642746400,
  "error_message": "org.openqa.selenium.WebDriverException: unknown error: unhandled inspector error: {\"code\":-32000,\"message\":\"Cannot find context with specified id\"}\n  (Session info: chrome\u003d67.0.3396.99)\n  (Driver info: chromedriver\u003d2.35.528161 (5b82f2d2aae0ca24b877009200ced9065a772e73),platform\u003dWindows NT 10.0.16299 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nBuild info: version: \u00273.5.3\u0027, revision: \u0027a88d25fe6b\u0027, time: \u00272017-08-29T12:42:44.417Z\u0027\nSystem info: host: \u0027DESKTOP-E8IIGOH\u0027, ip: \u0027192.168.2.6\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_121\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{mobileEmulationEnabled\u003dfalse, hasTouchScreen\u003dfalse, platform\u003dXP, acceptSslCerts\u003dfalse, acceptInsecureCerts\u003dfalse, webStorageEnabled\u003dtrue, browserName\u003dchrome, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, platformName\u003dXP, setWindowRect\u003dtrue, unexpectedAlertBehaviour\u003d, applicationCacheEnabled\u003dfalse, rotatable\u003dfalse, networkConnectionEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d2.35.528161 (5b82f2d2aae0ca24b877009200ced9065a772e73), userDataDir\u003dC:\\Users\\Narayana\\AppData\\Local\\Temp\\scoped_dir3056_2002}, takesHeapSnapshot\u003dtrue, pageLoadStrategy\u003dnormal, unhandledPromptBehavior\u003d, databaseEnabled\u003dfalse, handlesAlerts\u003dtrue, version\u003d67.0.3396.99, browserConnectionEnabled\u003dfalse, nativeEvents\u003dtrue, locationContextEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue}]\nSession ID: c48abfd240c4e555e4bb66d2952efdd1\n*** Element info: {Using\u003did, value\u003dtitle}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:215)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:167)\r\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:82)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:45)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:164)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:82)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:646)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElements(RemoteWebDriver.java:443)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementsById(RemoteWebDriver.java:466)\r\n\tat org.openqa.selenium.By$ById.findElements(By.java:210)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElements(RemoteWebDriver.java:404)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions.findElement(ExpectedConditions.java:882)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions.access$000(ExpectedConditions.java:44)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$7.apply(ExpectedConditions.java:206)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$7.apply(ExpectedConditions.java:202)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$22.apply(ExpectedConditions.java:644)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$22.apply(ExpectedConditions.java:641)\r\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:209)\r\n\tat stepDefinations.DealMapStepDefination.user_enters_deals_details(DealMapStepDefination.java:115)\r\n\tat ✽.Then User enters deals details(F:/CucumberFramework/Framework/src/main/java/features/DealsMap.feature:15)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "DealMapStepDefination.close_the_browser()"
});
formatter.result({
  "status": "skipped"
});
});