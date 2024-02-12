/// <reference types="react" />
type EmployeeType = {
    [index: string]: string;
};
declare function TableBody(props: {
    columns: Array<{
        label: string;
        accessor: string;
    }>;
    tableData: EmployeeType[];
    searchValue: string;
}): JSX.Element;
export default TableBody;
