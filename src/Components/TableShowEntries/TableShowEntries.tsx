import React from 'react'

interface IProps {
    entriesCallBack: (value: number) => void
    currentPageCallBack: (value: number) => void
}

function TableShowEntries({ entriesCallBack, currentPageCallBack }: IProps) {
    return (
        <div className="dataTable_length">
            <label>
                {'Show  '}
                <select
                    name="employee-table_length"
                    aria-controls="employee-table"
                    onChange={e => {
                        entriesCallBack(+e.target.value)
                        currentPageCallBack(1)
                    }}
                >
                    <option defaultChecked value={10}>
                        10
                    </option>
                    <option value={25}>25</option>
                    <option value={100}>100</option>
                </select>
                {'  entries'}
            </label>
        </div>
    )
}

export default TableShowEntries
