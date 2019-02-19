$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Login.feature");
formatter.feature({
  "line": 1,
  "name": "Application Login",
  "description": "",
  "id": "application-login",
  "keyword": "Feature"
});
formatter.before({
  "duration": 253724,
  "status": "passed"
});
formatter.scenario({
  "line": 11,
  "name": "Home page default login",
  "description": "",
  "id": "application-login;home-page-default-login",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 10,
      "name": "@MobileTest"
    }
  ]
});
formatter.step({
  "line": 12,
  "name": "User is on NetBanking landing page",
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "User login into application with \"john\" and password \"4321\"",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "Home page is populated",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "Cards displayed are \"false\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefination.user_is_on_netbanking_landing_page()"
});
formatter.result({
  "duration": 231634118,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "john",
      "offset": 34
    },
    {
      "val": "4321",
      "offset": 54
    }
  ],
  "location": "stepDefination.user_login_into_application_with_something_and_password_something(String,String)"
});
formatter.result({
  "duration": 1823860,
  "status": "passed"
});
formatter.match({
  "location": "stepDefination.home_page_is_populated()"
});
formatter.result({
  "duration": 40960,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "false",
      "offset": 21
    }
  ],
  "location": "stepDefination.cards_displayed_are(String)"
});
formatter.result({
  "duration": 76231,
  "status": "passed"
});
formatter.after({
  "duration": 42667,
  "status": "passed"
});
formatter.before({
  "duration": 52907,
  "status": "passed"
});
formatter.scenario({
  "line": 24,
  "name": "Home page default login",
  "description": "",
  "id": "application-login;home-page-default-login",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 23,
      "name": "@MobileTest"
    }
  ]
});
formatter.step({
  "line": 25,
  "name": "User is on NetBanking landing page",
  "keyword": "Given "
});
formatter.step({
  "line": 26,
  "name": "User sign up with following details",
  "rows": [
    {
      "cells": [
        "jenny",
        "abcd",
        "john@abcd.com",
        "Australia",
        "3242353"
      ],
      "line": 27
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 28,
  "name": "Home page is populated",
  "keyword": "Then "
});
formatter.step({
  "line": 29,
  "name": "Cards displayed are \"false\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefination.user_is_on_netbanking_landing_page()"
});
formatter.result({
  "duration": 46080,
  "status": "passed"
});
formatter.match({
  "location": "stepDefination.user_sign_up_with_following_details(DataTable)"
});
formatter.result({
  "duration": 980766,
  "status": "passed"
});
formatter.match({
  "location": "stepDefination.home_page_is_populated()"
});
formatter.result({
  "duration": 31290,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "false",
      "offset": 21
    }
  ],
  "location": "stepDefination.cards_displayed_are(String)"
});
formatter.result({
  "duration": 114916,
  "status": "passed"
});
formatter.after({
  "duration": 53475,
  "status": "passed"
});
});