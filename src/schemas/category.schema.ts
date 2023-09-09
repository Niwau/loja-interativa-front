import { z } from 'zod';

export const categoryNameSchema = (
  z.string()
  .min(1, 'Campo obrigatório')
  .max(16, 'Máximo de 16 caracteres')
)

export const createCategorySchema = z.object({
  name: categoryNameSchema,
})

export type CreateCategorySchemaType = z.infer<typeof createCategorySchema>