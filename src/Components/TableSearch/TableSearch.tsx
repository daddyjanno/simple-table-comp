import React from 'react'
interface IProps {
    searchValueCallBack: (value: string) => void
}

function TableSearch({ searchValueCallBack }: IProps) {
    return (
        <div className="dataTable_search">
            <label>
                {'Search: '}
                <input
                    type="search"
                    aria-controls="employee-table"
                    autoFocus
                    placeholder="Search..."
                    onChange={e => searchValueCallBack(e.target.value)}
                />
            </label>
        </div>
    )
}

export default TableSearch
