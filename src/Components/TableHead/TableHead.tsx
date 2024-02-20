import React, {useState} from 'react';

interface IProps {
    columns: Array<{label: string; accessor: string; sortable: boolean}>;
    handleSorting: (sortField: string, sortOrder: string) => void;
}

function TableHead({columns, handleSorting}: IProps): React.ReactElement {
    const [sortField, setSortField] = useState('');
    const [order, setOrder] = useState('asc');

    const handleSortingChange = (accessor: string, sortable: boolean) => {
        if (sortable) {
            const sortOrder =
                accessor === sortField && order === 'asc' ? 'desc' : 'asc';
            setSortField(accessor);
            setOrder(sortOrder);
            handleSorting(accessor, sortOrder);
        } else {
            null;
        }
    };

    return (
        <thead>
            <tr role="row">
                {columns.map(({label, accessor, sortable}) => {
                    const className = sortable
                        ? sortField === accessor && order === 'asc'
                            ? 'up'
                            : sortField === accessor && order === 'desc'
                            ? 'down'
                            : 'default'
                        : '';
                    return (
                        <th
                            key={accessor}
                            tabIndex={0}
                            aria-controls="employee-table"
                            rowSpan={1}
                            colSpan={1}
                            className={className}
                            aria-label={`${label}: activate to sort column`}
                            onClick={() =>
                                handleSortingChange(accessor, sortable)
                            }
                        >
                            {label}
                        </th>
                    );
                })}
            </tr>
        </thead>
    );
}

export default TableHead;
