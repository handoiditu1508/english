import { ReportedSpeechConversion } from "./models";

export const reportedSpeechConversions: ReportedSpeechConversion[] = [
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
    directSpeech: "will/can/may",
    indirectSpeech: ["would/could/might"],
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
    directSpeech: "today",
    indirectSpeech: ["that day"],
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
