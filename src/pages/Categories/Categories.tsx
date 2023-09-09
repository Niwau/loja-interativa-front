import { Column } from "react-table"
import { Table } from "../../components/Table/Table"
import { useFetch } from "../../hooks/useFetch"
import { Category } from "../../types/Category"
import { useMemo } from 'react'
import { ActionButtons } from "../../components/Table/ActionButtons/ActionButtons"

export const Categories = () => {

  const { data } = useFetch<Category[]>('categories')

  const columns = useMemo<Column<Category>[]>(() => (
    [
      {
        Header: 'ID',
        accessor: 'id',
      },
      {
        Header: 'Nome da categoria',
        accessor: 'name'
      },
      {
        Header: 'Data',
        accessor: 'createdAt',
        Cell: ({ value }) => new Date(value).toLocaleDateString('pt-BR')
      },
      {
        Header: 'Ação',
        Cell: ({ row: { original }}) => <ActionButtons editURL="" deleteURL={"/categories/" + original.id }/>
      }
    ]
  ), [])

  return (
    <div>
      <Table
        data={data || []}
        columns={columns}
        title="Categorias" 
        buttonText="Adicionar nova categoria"
      />
    </div>
  )
}