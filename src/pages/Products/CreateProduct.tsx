import { useForm, SubmitHandler } from "react-hook-form"
import { Button } from "../../components/Button/Button"
import { Field } from "../../components/Field/Field"
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "../../components/Input/Input";
import { api } from "../../services/api";
import { ProductSchemaType, productSchema } from "../../schemas/product.schema";
import { useFetch } from "../../hooks/useFetch";
import { Category } from "../../types/Category";

export const CreateProduct = () => {

  const { register, handleSubmit } = useForm<ProductSchemaType>({
    resolver: zodResolver(productSchema),
  });

  const { data } = useFetch<Category[]>('categories')

  const onSubmit: SubmitHandler<ProductSchemaType> = async (form) => {
    try {
      await api.post('/products', {
        name: form.name,
        price: parseInt(form.price),
        quantity: parseInt(form.quantity),
        categoryId: parseInt(form.categoryId)
      })
    } catch (error) {
      alert('error')
    }
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      <h1>Adicionar novo produto</h1>

      <form onSubmit={handleSubmit(onSubmit, (a) => console.log(a))} style={{ gap: '36px', display: "flex", flexDirection: 'column', maxWidth: '800px'}}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
          <Field>
            <Field.Label>Nome do produto</Field.Label>
            <Input {...register('name')}/>
          </Field>
          <Field>
            <Field.Label>Preço</Field.Label>
            <Input {...register('price')}/>
          </Field>
          <Field>
            <Field.Label>Qntd</Field.Label>
            <Input type='number' {...register('quantity')}/>
          </Field>
          <Field>
            <Field.Label>CATEGORIA</Field.Label>
            <select {...register('categoryId')}>
              {
                data?.map(category => (
                  <option value={category.id}>
                    {category.name}
                  </option>
                ))
              }
            </select>
          </Field>
        </div>
    
        <div style={{ alignSelf: 'flex-start' }}>
          <Button>
            Adicionar novo produto
          </Button>
        </div>
      </form>
    </div>
  )
}