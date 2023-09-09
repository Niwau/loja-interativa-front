import { Column } from "react-table"
import { Table } from "../../components/Table/Table"
import { useFetch } from "../../hooks/useFetch"
import { Product } from "../../types/Product"
import { useMemo } from 'react'
import { ActionButtons } from "../../components/Table/ActionButtons/ActionButtons"

export const Products = () => {

  const { data } = useFetch<Product[]>('products')

  const total = data?.reduce((acc, product) => acc + product.price, 0)

  const columns = useMemo<Column<Product>[]>(() => (
    [
      {
        Header: 'Nome',
        accessor: 'name',
      },
      {
        Header: 'Nome da categoria',
        accessor: 'categoryId'
      },
      {
        Header: 'Preço',
        accessor: 'price',
      },
      {
        Header: 'Qtde',
        accessor: 'quantity',
      },
      {
        Header: 'Total',
        Cell: () => total
      },
      {
        Header: 'Ação',
        Cell: ({ row: { original }}) => <ActionButtons editURL="" deleteURL={"/products/" + original.id}/>
      }
    ]
  ), [])

  return (
    <div>
      <Table
        data={data || []}
        columns={columns}
        title="Produtos" 
        buttonText="Adicionar novo produto"
      />
    </div>
  )
}