import React from 'react';
interface IProps {
    filteredData: EmployeeType[];
    pageNeighbours: number;
    entries: number;
    currentPageCallBack: (value: number) => void;
    currentPage: number;
}
type EmployeeType = {
    [index: string]: string;
};
export default function Pagination({ filteredData, pageNeighbours, entries, currentPageCallBack, currentPage, }: IProps): React.JSX.Element | null;
export {};
