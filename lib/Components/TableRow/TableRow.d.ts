import React from 'react';
type EmployeeType = {
    [index: string]: string;
};
interface TableRowIProps {
    idx: number;
    employee: EmployeeType;
    columns: Array<{
        label: string;
        accessor: string;
        sortable: boolean;
    }>;
}
declare function TableRow({ idx, employee, columns }: TableRowIProps): React.JSX.Element;
export default TableRow;
