/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface QuizQuestion {
  id: string;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

export interface RelatableExample {
  title: string;
  scenario: string;
  analogy: string;
  takeaway: string;
}

export interface ModuleData {
  id: string;
  title: string;
  shortDescription: string;
  emoji: string;
  academicContext: string; // Tailored specifically for 3rd-year engineering students
  detailedContent: {
    sectionTitle: string;
    paragraphs: string[];
  }[];
  relatableExamples: RelatableExample[];
  quiz: QuizQuestion[];
  keyTakeaways: string[];
}

export interface StudentProgress {
  completedModules: string[];
  quizScores: Record<string, number>; // moduleId -> score
}
