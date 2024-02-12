import React from 'react'

type EmployeeType = {
    [index: string]: string
}

function TableBody(props: {
    columns: Array<{ label: string; accessor: string }>
    tableData: EmployeeType[]

    searchValue: string
}): JSX.Element {
    const reduceData = props.tableData.filter(item => {
        return Object.keys(item).some((key: string) =>
            item[key].toLowerCase().includes(props.searchValue.toLowerCase())
        )
    })

    return (
        <tbody>
            {reduceData.map((employee: EmployeeType, idx: number) => {
                return (
                    <tr
                        key={idx}
                        role="row"
                        className={idx % 2 === 0 ? 'odd' : 'even'}
                    >
                        {props.columns.map(({ accessor }) => {
                            const tData: string = employee[accessor]
                                ? employee[accessor]
                                : '--'

                            return <td key={accessor}>{tData}</td>
                        })}
                    </tr>
                )
            })}
        </tbody>
    )
}

export default TableBody
