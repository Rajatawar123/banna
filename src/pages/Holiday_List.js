import React from "react";
import {useState} from 'react';
import Calendar from 'react-calendar'; 
import 'react-calendar/dist/Calendar.css'


import './Holiday_css.css'
const Holiday_List =()=>{
    const [date, setDate] = useState(new Date())
    return(
        <>  

<div className="app">
   <h1 className="header">React Calendar</h1>
   <div className="calendar-container">
     <Calendar onChange={setDate} value={date}/>
   </div>
   <div className="text-center">
      Selected date: {date.toDateString()}
   </div>
 </div>
  
 <div >
		<table >
			<thead>
				<th>Festival</th>
				<th>Date</th>
			</thead>
			<tbody>
				<tr>
					<td>Diwali</td>
					<td>24-12-2022</td>
				</tr>
				<tr>
					<td>Diwali</td>
					<td>24-12-2022</td>
				</tr>
				<tr>
					<td>Diwali</td>
					<td>24-12-2022</td>
				</tr>
				<tr>
					<td>Diwali</td>
					<td>24-12-2022</td>
				</tr>
				<tr>
					<td>Diwali</td>
					<td>24-12-2022</td>
				</tr>
				<tr>
					<td>Diwali</td>
					<td>24-12-2022</td>
				</tr>
				<tr>
					<td>Diwali</td>
					<td>24-12-2022</td>
				</tr>
				<tr>
					<td>Diwali</td>
					<td>24-12-2022</td>
				</tr>
				<tr>
					<td>Diwali</td>
					<td>24-12-2022</td>
				</tr>
				<tr>
					<td>Diwali</td>
					<td>24-12-2022</td>
				</tr>
			</tbody>
		</table>
	</div>     

            </>
    )
}

export default Holiday_List;