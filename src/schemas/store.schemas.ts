import { z } from 'zod';

export const AnswerItemSchema = z.object({
  answer: z.string(),
  correct: z.boolean(),
});

export const AnswerItemStateSchema = AnswerItemSchema.merge(z.object({ id: z.string() }));

export const QuestionItemSchema = z.object({
  question: z.string(),
  prize: z.number(),
  answers: z.array(AnswerItemSchema),
});

export const QuestionItemStateSchema = QuestionItemSchema.merge(
  z.object({
    id: z.string(),
    isAnsweredCorrectly: z.boolean().nullish(),
    answers: z.array(AnswerItemStateSchema),
  }),
);

export const ConfigSchema = z.object({
  questions: z.array(QuestionItemSchema),
});

export const QuizStateSchema = z.object({
  currentQuestion: z.string().nullable(),
  questions: z.array(QuestionItemStateSchema),
});
