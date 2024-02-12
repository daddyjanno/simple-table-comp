import React from 'react';
interface IProps {
    columns: Array<{
        label: string;
        accessor: string;
        sortable: boolean;
    }>;
    handleSorting: (sortField: string, sortOrder: string) => void;
}
declare function TableHead({ columns, handleSorting }: IProps): React.ReactElement;
export default TableHead;
