import { Column, useTable } from 'react-table';
import { Button } from '../Button/Button';
import { NavLink } from  'react-router-dom'
import * as S from './styles'

interface TableProps<T extends object> {
  title: string;
  buttonText: string;
  columns: Column<T>[];
  data: any[];
}

export const Table = <T extends object> ({ title, buttonText, columns, data }: TableProps<T>) => {

  const {
    getTableProps,
    getTableBodyProps, 
    headerGroups,
    rows,
    prepareRow
  } = useTable({ columns, data });

  return (
    <div>
      <S.Header>
        <S.Title>{title}</S.Title>
        <NavLink to='create'>
          <Button>{buttonText}</Button>
        </NavLink>
      </S.Header>
      <S.Table {...getTableProps()}>
        <S.TableHead>
          {headerGroups.map(headerGroup => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map(column => (
                <th {...column.getHeaderProps()}>{column.render("Header")}</th>
              ))}
            </tr>
          ))}
        </S.TableHead>
        <S.TableBody {...getTableBodyProps()}>
          {rows.map((row) => {
            prepareRow(row);
            return (
              <S.TableRow {...row.getRowProps()}>
                {row.cells.map(cell => {
                  return <S.TableCell {...cell.getCellProps()}>{cell.render("Cell")}</S.TableCell>;
                })}
              </S.TableRow>
            );
          })}
        </S.TableBody>
      </S.Table>
    </div>
  )
}