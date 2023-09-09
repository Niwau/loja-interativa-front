import { useForm, SubmitHandler } from "react-hook-form"
import { Button } from "../../components/Button/Button"
import { Field } from "../../components/Field/Field"
import { zodResolver } from "@hookform/resolvers/zod";
import { CreateCategorySchemaType, createCategorySchema } from "../../schemas/category.schema";
import { Input } from "../../components/Input/Input";
import { api } from "../../services/api";

export const CreateCategory = () => {

  const { register, handleSubmit } = useForm<CreateCategorySchemaType>({
    resolver: zodResolver(createCategorySchema),
    defaultValues: {
      name: ''
    }
  });

  const onSubmit: SubmitHandler<CreateCategorySchemaType> = async (form) => {
    try {
      await api.post('/categories', { name: form.name })
    } catch (error) {
      alert('error')
    }
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      <h1>Adicionar nova categoria</h1>

      <form onSubmit={handleSubmit(onSubmit, (a) => console.log(a))} style={{ gap: '36px', display: "flex", flexDirection: 'column', maxWidth: '800px'}}>
        <div style={{ flex: 1 }}>
          <Field>
            <Field.Label>NOME DA CATEGORIA</Field.Label>
            <Input {...register('name')}/>
          </Field>
        </div>
    
        <div style={{ alignSelf: 'flex-start' }}>
          <Button>
            Adicionar nova categoria
          </Button>
        </div>
      </form>
    </div>
  )
}