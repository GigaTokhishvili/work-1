import { useEffect, useState } from 'react';
import MainCss from './Main.module.css';
import Checkbox from '../../components/Checkbox';
import studentData from '../../data/data.js';
import StudentTd from '../../components/StudentTd.jsx';
import Pagination from '../../components/Pagination.jsx';
import { nanoid } from 'nanoid';

const tableHead = [ 'სტუდენტის სახელი და გვარი', 'სტატუსი', 'სქესი', 'ქულები', 'პირადი ნომერი', 'მაილი', 'მობილურის ნომერი', 'მისამართი', 'დაბადების თარიღი' ];

function Main() {
  const [showFilter, setShowFilter] = useState(false)
  const [currentPage, setCurrentPage] = useState(1);
  const [studentsPerPage] = useState(5);
  const [activeChecked, setActiveChecked] = useState(true)
  const [inactiveChecked, setInactiveChecked] = useState(true)

  const [students, setStudents] = useState(studentData);
  
  const lastPost = currentPage * studentsPerPage;
  const firstPost = lastPost - studentsPerPage;
  const currentStudents = students?.slice(firstPost, lastPost);

  useEffect(() => {
    if (activeChecked && inactiveChecked) {
      setStudents(studentData);
    } else if (activeChecked && !inactiveChecked) {
      setStudents(studentData.filter((item) => item.სტატუსი === 'active'));
    } else if (inactiveChecked && !activeChecked) {
      setStudents(studentData.filter((item) => item.სტატუსი === 'inactive'));
    } else if (!activeChecked && !inactiveChecked) {
      setStudents([]);
    }
  }, [activeChecked, inactiveChecked]);
  

  const handleFilter = (id, checked) => {
    if (id === 'active') {
      setActiveChecked(checked);
    } else if (id === 'inactive') {
      setInactiveChecked(checked);
    }
  };

  const paginate = (number) => {
    if (number === 'sub' && currentPage > 1) setCurrentPage(prev => prev - 1);
    else if (number === 'add' && currentPage < students?.length / studentsPerPage) setCurrentPage(prev => prev + 1);
    else if (typeof number === 'number' && number >= 1 && number <= 10) setCurrentPage(number);
  };

  const student = currentStudents?.map((item) => {
    const bgc = currentStudents.indexOf(item) % 2;
    return (
      <StudentTd 
        key={nanoid()}
        studentName={item['სტუდენტის სახელი და გვარი']} 
        studentStatus={item.სტატუსი}
        studentSex={item.სქესი}
        studentMarks={item.ქულები}
        studentId={item['პირადი ნომერი']}
        studentMail={item.მაილი}
        studentPhone={item['მობიის ნომერი']}
        studentAddress={item.მისამართი}
        studentBday={item['დაბადების თარიღი']}
        bgc={bgc === 0 ? true : false}
      />
    )
  })
  
  return (
    <div className={`page ${MainCss.main}`}>
        <div className={MainCss.topDiv}>
          <div onClick={() => setShowFilter(!showFilter)} className={MainCss.filterBtn}>
            filter
          </div>
          <div className={MainCss.search}>
            <input type="text"/>
          </div>
        </div>

        <div className={MainCss.mainDivParent}>
          {showFilter && 
            <div className={MainCss.filterDiv}>
              <p>სტუდენტის სტატუსი</p>
                <div className={MainCss.studentStatus}>
                  <Checkbox 
                    labelName={'active'} 
                    checked={activeChecked}
                    filterVal={handleFilter}
                  />
                  <Checkbox 
                    labelName={'inactive'} 
                    checked={inactiveChecked}
                    filterVal={handleFilter}
                  />
                </div>
              <p>სქესი</p>
                <div className={MainCss.sex}>
                </div>
            </div>
          }
          <table className={MainCss.mainTable}>
            <thead>
              <tr className={MainCss.tableHeader}>
                {tableHead.map((th) => {
                  return (
                    <th key={th}>{th}</th>
                    )
                  })}
              </tr>
            </thead>
            
            <tbody>
              {student}
            </tbody>
          </table>
        </div>

        <Pagination 
          studentsPerPage={studentsPerPage} 
          totalStudents={students?.length} 
          paginate={paginate}
          currentPage={currentPage}
        />
    </div>
  )
}

export default Main