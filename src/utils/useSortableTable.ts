import { useState } from 'react'

type EmployeeType = {
    [index: string]: string
}

export function useSortableTable(
    data: EmployeeType[]
): [EmployeeType[], (sortField: string, sortOrder: string) => void] {
    const [tableData, setTableData] = useState(data)

    const handleSorting = (sortField: string, sortOrder: string) => {
        if (sortField) {
            const sorted = [...tableData].sort(
                (a: EmployeeType, b: EmployeeType) => {
                    if (a[sortField] === null) return 1
                    if (b[sortField] === null) return -1
                    if (a[sortField] === null && b[sortField] === null) return 0

                    return (
                        a[sortField]
                            .toString()
                            .localeCompare(b[sortField].toString(), 'en', {
                                numeric: true
                            }) * (sortOrder === 'asc' ? 1 : -1)
                    )
                }
            )
            setTableData(sorted)
        }
    }
    return [tableData, handleSorting]
}
