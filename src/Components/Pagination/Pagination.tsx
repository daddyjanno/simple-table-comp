import React, {useEffect, useState} from 'react';
import {getPagesArray} from '../../utils/getPagesArray';

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

const LEFT_PAGE = -10;
const RIGHT_PAGE = -5;

export default function Pagination({
    filteredData,
    pageNeighbours,
    entries,
    currentPageCallBack,
    currentPage,
}: IProps) {
    const [lastPage, setLastPage] = useState(1);
    const [tempCurr, setTempCurr] = useState(1);

    useEffect(() => {
        setLastPage(entries ? Math.ceil(filteredData.length / entries) : 1);
    }, [entries, filteredData.length]);

    const handleClick = (value: number) => {
        currentPageCallBack(value);
    };

    const handleGoTo = (
        e: React.FormEvent<HTMLButtonElement | HTMLFormElement>
    ): void => {
        e.preventDefault();
        const goToForm: HTMLFormElement | null = document.querySelector(
            '.goToPage_container'
        );
        if (tempCurr <= lastPage) {
            currentPageCallBack(tempCurr);
            goToForm?.reset();
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        e.preventDefault();
        setTempCurr(+e.target.value);
    };

    const pages = getPagesArray(lastPage, currentPage, pageNeighbours);

    if (lastPage === 1) return null;

    return (
        <div className="pagination_container">
            <nav className="pagination" aria-label="Pagination">
                {pages.map((pageNum, idx) =>
                    pageNum === LEFT_PAGE ? (
                        <button
                            key={idx}
                            disabled={isNaN(pageNum)}
                            className={`page-link ${
                                currentPage === pageNum ? 'active' : 'inactive'
                            }`}
                            onClick={() => handleClick(currentPage - 1)}
                        >
                            <span aria-describedby="Previous">&laquo;</span>
                        </button>
                    ) : pageNum === RIGHT_PAGE ? (
                        <button
                            key={idx}
                            disabled={isNaN(pageNum)}
                            className={`page-link ${
                                currentPage === pageNum ? 'active' : 'inactive'
                            }`}
                            onClick={() => handleClick(currentPage + 1)}
                        >
                            <span aria-describedby="Next">&raquo;</span>
                        </button>
                    ) : (
                        <button
                            key={idx}
                            disabled={isNaN(pageNum)}
                            className={`page-link ${
                                currentPage === pageNum ? 'active' : 'inactive'
                            }`}
                            onClick={() => handleClick(pageNum)}
                        >
                            {pageNum}
                        </button>
                    )
                )}
            </nav>
            <form
                className="goToPage_container"
                name="goToPage"
                onSubmit={handleGoTo}
            >
                <label htmlFor="goToPage_input">Go to page: </label>
                <input
                    className="goToPage_input"
                    name="goToPage_input"
                    id="goToPage_input"
                    type="number"
                    min={1}
                    max={lastPage}
                    onChange={handleChange}
                />
                <button onClick={handleGoTo}>Go</button>
            </form>
        </div>
    );
}
