import { useEffect, useState } from 'react';
import ApiCss from './Api.module.css';
import axios from 'axios';
import { nanoid } from 'nanoid';
import Pagination from '../../components/Pagination';

function Api() {
    const [data, setData] = useState([]);
    const [dataPerPage] = useState(10);
    const [currentPage, setCurrentPage] = useState(1);

    const lastData = dataPerPage * currentPage;
    const firstData = lastData - dataPerPage;
    const displayData = data?.slice(firstData, lastData);

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then((res) => {
            setData(res.data);
            console.log(data)
        }).catch((error) => {
            console.error(error);
        })
    }, []);

    const paginate = (number) => {
        if (number === 'sub' && currentPage > 1) setCurrentPage(prev => prev - 1);
        else if (number === 'add' && currentPage < data?.length / dataPerPage) setCurrentPage(prev => prev + 1);
        else if (typeof number === 'number' && number >= 1 && number <= 10) setCurrentPage(number);
    };

  return (
    <div onClick={() => console.log(data)} className={`page ${ApiCss.apiDiv}`}>
        <table className={ApiCss.styledTable}>
            <thead>
                <tr>
                    <th>user id</th>
                    <th>id</th>
                    <th>title</th>
                    <th>body</th>
                </tr>
            </thead>
            <tbody>
                {displayData?.map((item) => {
                return(
                    <tr key={nanoid()}>
                        <td>{item.userId}</td>
                        <td>{item.id}</td>
                        <td>{item.title}</td>
                        <td>{item.body}</td>
                    </tr>
                )})}
            </tbody>
        </table>
        <Pagination 
            studentsPerPage={dataPerPage}
            totalStudents={data.length}
            paginate={paginate}
            currentPage={currentPage}
        />
    </div>
  )
}

export default Api