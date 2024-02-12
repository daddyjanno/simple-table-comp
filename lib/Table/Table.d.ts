import React from 'react';
import '../Style/index.css';
interface TableIProps {
    caption: string;
    data: EmployeeType[];
    columns: Array<{
        label: string;
        accessor: string;
        sortable: boolean;
    }>;
    showEntries?: boolean;
    showSearch?: boolean;
}
type EmployeeType = {
    [index: string]: string;
};
declare function Table({ caption, data, columns, showEntries, showSearch }: TableIProps): React.JSX.Element;
export default Table;
