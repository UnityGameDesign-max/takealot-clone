import React from 'react';
import {headerDepartments} from '../utilis/departments';

function DepartmentsItems(props){
    return (
        <Departments>
            <ul>
                {headerDepartments.map((department)=>{
                    return <li key={department.id}>{department}</li>
                })}
            </ul>
        </Departments>
    );
}

export default DepartmentsItems;