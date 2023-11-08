import PaginationCss from './component-styles/Pagination.module.css';

function Pagination({ studentsPerPage, totalStudents, paginate, currentPage }) {
    const pageNumbers = [];

    for(let i=1; i <= Math.ceil(totalStudents / studentsPerPage); i++) {
        pageNumbers.push(i);
    }

  return (
    <nav className={PaginationCss.navBar}>
        <ul>
            <li onClick={() => paginate(1)} className={PaginationCss.chevsLeft}><button></button></li>
            <li onClick={() => paginate('sub')} className={PaginationCss.chevLeft}></li>
            {pageNumbers.map(numb => (
                <li key={numb}>
                    <button className={currentPage === numb ? PaginationCss.borderBot : null} onClick={() => paginate(numb)}>{numb}</button>
                </li>
            ))}
            <li onClick={() => paginate('add')} className={PaginationCss.chevRight}></li>
            <li onClick={() => paginate(pageNumbers.length)} className={PaginationCss.chevsRight}><button></button></li>
        </ul>
    </nav>
  )
}

export default Pagination