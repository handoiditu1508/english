import { ReportedSpeechConversion } from "./models";

export const introductoryVerbConversions: ReportedSpeechConversion[] = [
  {
    directSpeech: "said",
    indirectSpeech: ["said that", "said to + O", "told + O", "asked + O"],
  },
  {
    directSpeech: "asked",
    indirectSpeech: ["asked + O"],
  },
];

export const pronounConversions: ReportedSpeechConversion[] = [
  {
    directSpeech: "I",
    indirectSpeech: ["he", "she"],
  },
  {
    directSpeech: "me",
    indirectSpeech: ["him", "her"],
  },
  {
    directSpeech: "my",
    indirectSpeech: ["his", "her"],
  },
  {
    directSpeech: "mine",
    indirectSpeech: ["his", "hers"],
  },
  {
    directSpeech: "myself",
    indirectSpeech: ["himself", "herself"],
  },
  {
    directSpeech: "we",
    indirectSpeech: ["they"],
  },
  {
    directSpeech: "us",
    indirectSpeech: ["them"],
  },
  {
    directSpeech: "our",
    indirectSpeech: ["their"],
  },
  {
    directSpeech: "ours",
    indirectSpeech: ["theirs"],
  },
  {
    directSpeech: "ourselves",
    indirectSpeech: ["themselves"],
  },
];

export const tenseConversions: ReportedSpeechConversion[] = [
  {
    directSpeech: "Simple present",
    indirectSpeech: ["Simple past"],
  },
  {
    directSpeech: "Present perfect",
    indirectSpeech: ["Past perfect"],
  },
  {
    directSpeech: "Present continuous",
    indirectSpeech: ["Past continuous"],
  },
  {
    directSpeech: "Simple past",
    indirectSpeech: ["Past perfect"],
  },
  {
    directSpeech: "Past continuous",
    indirectSpeech: ["Past perfect continuous"],
  },
  {
    directSpeech: "Past perfect",
    indirectSpeech: ["Past perfect"],
  },
  {
    directSpeech: "will",
    indirectSpeech: ["would"],
  },
  {
    directSpeech: "can",
    indirectSpeech: ["could"],
  },
  {
    directSpeech: "may",
    indirectSpeech: ["might"],
  },
  {
    directSpeech: "shall",
    indirectSpeech: ["should", "would"],
  },
  {
    directSpeech: "must",
    indirectSpeech: ["must", "had to"],
  },
  {
    directSpeech: "have/has to",
    indirectSpeech: ["had to"],
  },
  {
    directSpeech: "Conditional type 1",
    indirectSpeech: ["Conditional type 2"],
  },
  {
    directSpeech: "Conditional type 2",
    indirectSpeech: ["Conditional type 2", "Conditional type 3"],
  },
  {
    directSpeech: "Conditional type 3",
    indirectSpeech: ["Conditional type 3"],
  },
];

export const otherConversions: ReportedSpeechConversion[] = [
  {
    directSpeech: "today",
    indirectSpeech: ["that day"],
  },
  {
    directSpeech: "tonight",
    indirectSpeech: ["that night"],
  },
  {
    directSpeech: "yesterday",
    indirectSpeech: ["the day before", "the previous day", "the last day"],
  },
  {
    directSpeech: "tomorrow",
    indirectSpeech: ["the day after", "the following day", "the next day"],
  },
  {
    directSpeech: "the day before yesterday",
    indirectSpeech: [
      "the day before the previous day",
      "the day before the last day",
      "two days before",
      "two days earlier",
    ],
  },
  {
    directSpeech: "the day after tomorrow",
    indirectSpeech: [
      "the day after the following day",
      "the day after the next day",
      "two days after",
      "two days later",
    ],
  },
  {
    directSpeech: "ago",
    indirectSpeech: ["before"],
  },
  {
    directSpeech: "now",
    indirectSpeech: ["then"],
  },
  {
    directSpeech: "last week",
    indirectSpeech: ["the last week", "the week before", "the previous week"],
  },
  {
    directSpeech: "next year",
    indirectSpeech: ["the next year", "the year after", "the following year"],
  },
  {
    directSpeech: "this",
    indirectSpeech: ["that"],
  },
  {
    directSpeech: "these",
    indirectSpeech: ["those"],
  },
  {
    directSpeech: "here",
    indirectSpeech: ["there"],
  },
];
