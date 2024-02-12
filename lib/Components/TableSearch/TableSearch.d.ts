import React from 'react';
interface IProps {
    searchValueCallBack: (value: string) => void;
}
declare function TableSearch({ searchValueCallBack }: IProps): React.JSX.Element;
export default TableSearch;
