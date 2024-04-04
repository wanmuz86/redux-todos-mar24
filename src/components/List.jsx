import React from 'react';
import Row from './Row';
export default function List() {
 return (
   <div>
       <h2>To do List</h2>
       <ul>
           <li><Row/></li>
           <li><Row/></li>
           <li><Row/></li>
       </ul>
   </div>
 )
}


