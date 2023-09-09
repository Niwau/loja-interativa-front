import { z } from 'zod'

export const productSchema = z.object({
  name:
    z.string(),
  price:
    z.string(),
  quantity:
    z.string(),
  categoryId:
    z.string(),
})

export type ProductSchemaType = z.infer<typeof productSchema>
