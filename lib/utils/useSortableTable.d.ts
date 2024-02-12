type EmployeeType = {
    [index: string]: string;
};
export declare function useSortableTable(data: EmployeeType[]): [EmployeeType[], (sortField: string, sortOrder: string) => void];
export {};
