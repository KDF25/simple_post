import {FC} from 'react';
import { getPagesArray } from '../../shared/utils/pages';
import cl from './Pagination.module.css';
// import { Pagination } from 'antd';

interface PaginationProps {
    totalPages: number, 
    page: number, 
    changePage: any,
}

export const MyPagination: FC<PaginationProps> = ({totalPages, page, changePage}) => {
    let pagesArray = getPagesArray(totalPages)
    return (
        <div className={cl.page__wrapper}>
            {pagesArray.map(p =>
              <span 
                onClick={()=> changePage(p)}
                key={p}
                className={page === p ? cl.page__current : cl.page}>
                  {p}
              </span>)}
        </div>
    );
};
