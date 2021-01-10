import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";
import * as Survey from "survey-react";
import "survey-react/survey.css";

export default function Questionnaire() {
    let json = {
        questions: [
            {
              type: "checkbox",
              name: "topics",
              title: "Please select the topics which you have performed or experience",
              isRequired: true,
              hasSelectAll: true,
              hasNone: true,
              noneText: "None of the above",
              colCount: 4,
              choicesOrder: "asc",
              choices: [
                "Yoga",
                "Dance",
                "Connected with NGOs",
                "Beach Cleanp-up",
                "Tree Plantation"
              ]
            },
            {
              type: "checkbox",
              name: "ecosystem",
              title: "What are your favourite Ecosystem?",
              isRequired: true,
              hasSelectAll: true,
              hasNone: true,
              noneText: "None of the above",
              colCount: 3,
              choicesOrder: "asc",
              choices: [
                "Health Wellness",
                "Mentall Wellness",
                "Arts & Culture",
                "Community Collaboration",
              ]
            },
            {
              type: "checkbox",
              name: "ngo",
              title: "Have you worked for any NGOs before ?",
              isRequired: true,
              hasSelectAll: true,
              hasNone: true,
              noneText: "None of the above",
              colCount: 3,
              choicesOrder: "asc",
              choices: [
                "Yes",
                "No",
                "Long back",
              ]
            },
            {
              type: "checkbox",
              name: "tree",
              title: "How often do you plant tree",
              isRequired: true,
              hasSelectAll: true,
              hasNone: true,
              noneText: "None of the above",
              colCount: 3,
              choicesOrder: "asc",
              choices: [
                "Very often",
                "Once in a year",
                "Rarely",
              ]
            },
            {
              type: "checkbox",
              name: "tree",
              title: "Do you perfom Yoga?",
              isRequired: true,
              hasSelectAll: true,
              hasNone: true,
              noneText: "None of the above",
              colCount: 3,
              choicesOrder: "asc",
              choices: [
                "Yes",
                "No",
                "Rarely",
              ]
            },
            {
              type: "checkbox",
              name: "tree",
              title: "Select the hobbies which you like to perform",
              isRequired: true,
              hasSelectAll: true,
              hasNone: true,
              noneText: "None of the above",
              colCount: 3,
              choicesOrder: "asc",
              choices: [
                "Drawing",
                "Craft",
                "Singing",
                "Swimming",
                "Reading",
              ]
            }
          ]
    };
    var surveyRender = <Survey.Survey json={json} />;
    return (
      <div className="App">
        <h1>Anubhav User Profile Questionnaire</h1>
        <h2>The below Questionnarie will help us to understand more about you</h2>
        <h3>It will help us in building a strong user profile (Hyper-Personalisation model)</h3>
        {surveyRender}
      </div>
    );
  }