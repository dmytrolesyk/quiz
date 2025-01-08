import { z } from 'zod';

import {
  QuestionItemSchema,
  QuestionItemStateSchema,
  ConfigSchema,
  QuizStateSchema,
} from './store.schemas';

export type ConfigI = z.infer<typeof ConfigSchema>;

export type QuizStateI = z.infer<typeof QuizStateSchema>;

export type QuestionItemI = z.infer<typeof QuestionItemSchema>;

export type QuestionItemStateI = z.infer<typeof QuestionItemStateSchema>;
