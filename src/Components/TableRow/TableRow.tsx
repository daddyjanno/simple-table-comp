import React from 'react'

type EmployeeType = {
    [index: string]: string
}
interface TableRowIProps {
    idx: number
    employee: EmployeeType
    columns: Array<{ label: string; accessor: string; sortable: boolean }>
}

function TableRow({ idx, employee, columns }: TableRowIProps) {
    return (
        <tr role="row" className={idx % 2 === 0 ? 'odd' : 'even'}>
            {columns.map(column => {
                const tData: string = employee[column.accessor]
                    ? employee[column.accessor]
                    : '--'
                return (
                    <td
                        key={column.accessor}
                        // width={`(100 / ${columns.length})%`}
                    >
                        {tData}
                    </td>
                )
            })}
        </tr>
    )
}

export default TableRow
