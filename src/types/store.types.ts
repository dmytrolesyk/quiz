type QuestionId = string;

type AnswerId = string;

export interface ConfigI {
  questions: Array<QuestionItemI>;
}

export interface QuizStateI {
  currentQuestion: QuestionId | null;
  selectedAnswers: Array<AnswerId>;
  questions: Array<QuestionItemStateI>;
}

interface QuestionItemI {
  question: string;
  prize: number;
  answers: Array<AnswerItemI>;
}

export interface QuestionItemStateI extends QuestionItemI {
  id: QuestionId;
  answers: Array<AnswerItemStateI>;
  isAnsweredCorrectly: boolean | undefined;
}

interface AnswerItemI {
  answer: string;
  correct: boolean;
}

interface AnswerItemStateI extends AnswerItemI {
  id: AnswerId;
}
