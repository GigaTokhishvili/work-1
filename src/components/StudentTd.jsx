import StudentDataCss from './component-styles/StudentData.module.css';

function StudentData( {studentName, studentStatus, studentSex, studentMarks, studentId, studentMail, studentPhone, studentAddress, studentBday, bgc} ) {
  return (
    <tr className={bgc ? StudentDataCss.darkBg : null}>
        <td className={StudentDataCss.tableData} >{studentName}</td>
        <td className={StudentDataCss.tableData} >{studentStatus}</td>
        <td className={StudentDataCss.tableData} >{studentSex}</td>
        <td className={StudentDataCss.tableData} >{studentMarks}</td>
        <td className={StudentDataCss.tableData} >{studentId}</td>
        <td className={StudentDataCss.tableData} >{studentMail}</td>
        <td className={StudentDataCss.tableData} >{studentPhone}</td>
        <td className={StudentDataCss.tableData} >{studentAddress}</td>
        <td className={StudentDataCss.tableData} >{studentBday}</td>
    </tr>
  )
}

export default StudentData