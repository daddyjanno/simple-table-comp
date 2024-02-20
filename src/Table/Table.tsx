import React, {useEffect, useState} from 'react';
import {useSortableTable} from '../utils/useSortableTable';
import TableHead from '../Components/TableHead/TableHead';
import TableShowEntries from '../Components/TableShowEntries/TableShowEntries';
import TableSearch from '../Components/TableSearch/TableSearch';
import Pagination from '../Components/Pagination/Pagination';
import TableRow from '../Components/TableRow/TableRow';
import '../Style/index.css';

interface TableIProps {
    caption: string;
    data: EmployeeType[];
    columns: Array<{label: string; accessor: string; sortable: boolean}>;
    showEntries?: boolean;
    showSearch?: boolean;
}
type EmployeeType = {
    [index: string]: string;
};

function Table({caption, data, columns, showEntries, showSearch}: TableIProps) {
    const [tableData, handleSorting] = useSortableTable(data);
    const [filteredData, setFilteredData] = useState(tableData || data);
    const [entries, setEntries] = useState(10);
    const [searchValue, setSearchValue] = useState('');
    const [currentPage, setCurrentPage] = useState(1);

    function entriesCallBack(value: number): void {
        setEntries(value);
    }

    function searchValueCallBack(value: string): void {
        if (value.length >= 2) {
            setSearchValue(value);
        } else {
            setSearchValue('');
        }
    }

    function currentPageCallBack(value: number): void {
        setCurrentPage(value);
    }

    useEffect(() => {
        if (searchValue && showSearch && tableData) {
            setFilteredData(
                tableData.filter(item => {
                    return Object.keys(item).some((key: string) =>
                        item[key]
                            .toLowerCase()
                            .includes(searchValue.toLowerCase())
                    );
                })
            );
        } else if (tableData) {
            setFilteredData(tableData);
        }
    }, [showSearch, searchValue, setFilteredData, tableData]);

    return (
        <div className="dataTable_container">
            {!filteredData && <div>no data to display</div>}
            {filteredData && (
                <>
                    <div className="dataTable_infos">
                        <h2>{caption}</h2>
                        <div className="dataTable_filter">
                            {showEntries && (
                                <TableShowEntries
                                    entriesCallBack={entriesCallBack}
                                    currentPageCallBack={currentPageCallBack}
                                />
                            )}

                            {showSearch && (
                                <TableSearch
                                    searchValueCallBack={searchValueCallBack}
                                />
                            )}
                        </div>

                        {searchValue && (
                            <span>{filteredData.length} results</span>
                        )}
                    </div>
                    <table
                        id="employee-table"
                        className="dataTable"
                        role="grid"
                        aria-describedby="employee-table_info"
                        width={'100%'}
                    >
                        <TableHead
                            columns={columns}
                            handleSorting={handleSorting}
                        />

                        <tbody>
                            {!filteredData && <div>no data to display</div>}
                            {showEntries &&
                                filteredData
                                    .slice(
                                        currentPage * entries - entries,
                                        currentPage * entries
                                    )
                                    .map(
                                        (
                                            employee: EmployeeType,
                                            idx: number
                                        ) => {
                                            return (
                                                <TableRow
                                                    key={idx}
                                                    idx={idx}
                                                    employee={employee}
                                                    columns={columns}
                                                />
                                            );
                                        }
                                    )}
                            {!showEntries &&
                                filteredData.map(
                                    (employee: EmployeeType, idx: number) => {
                                        return (
                                            <TableRow
                                                key={idx}
                                                idx={idx}
                                                employee={employee}
                                                columns={columns}
                                            />
                                        );
                                    }
                                )}
                        </tbody>
                    </table>
                    {showEntries && (
                        <Pagination
                            filteredData={filteredData}
                            pageNeighbours={2}
                            entries={entries}
                            currentPageCallBack={currentPageCallBack}
                            currentPage={currentPage}
                        />
                    )}
                </>
            )}
        </div>
    );
}

export default Table;
