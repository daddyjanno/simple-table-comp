import React from 'react';
interface IProps {
    entriesCallBack: (value: number) => void;
    currentPageCallBack: (value: number) => void;
}
declare function TableShowEntries({ entriesCallBack, currentPageCallBack }: IProps): React.JSX.Element;
export default TableShowEntries;
