import React, { Component, useState} from 'react'
import Table from 'react-bootstrap/Table'
import Button from 'react-bootstrap/Button'
import CenteredModal from './centeredModal'
import './table.css'
import data from "./devices.json"

const DynamicTable = () => {
   const [devices, setDevice] = useState(data); 
   const [addFormData, setAddFormData] = useState({
      ID: " ", 
      type: " ", 
      brand: " ", 
      serialNum: " "
   })

   const handleAddFormChange = (event) => {
      event.preventDefault();

      const fieldName = event.target.getAttribute("name"); 
      const fieldValue = event.target.value; 
      
      const newFormData = {...addFormData}; 
      newFormData[fieldName] = fieldValue;
      setAddFormData(newFormData)
   }

   return (
      <div>
      <h1 id="title">CGE Availible Inventory</h1>
      <Table striped border hover id='device'> 
         <thead id> 
            <tr> 
            <th>Device ID</th>
            <th>Device Type</th>
            <th>Device Brand</th>
            <th>Device Serial</th>
            </tr>
         </thead>
         <tbody>
            {devices.map((device) => 
            <tr>
               <td>{device.device_ID}</td>
               <td>{device.device_Type}</td>
               <td>{device.device_Brand}</td>
               <td>{device.device_SerialNum}</td>
               
            </tr>)}
         </tbody>
      </Table>
      <form>
            <input 
               type="text"
               name="ID"
               required="required"
               placeholder="Enter device ID... "
               onChange={handleAddFormChange}
               id="box"
            >
            </input>
            <input
               type="text"
               name="type"
               required="required"
               placeholder="Enter device Serial Number..."
               onChange={handleAddFormChange}
               id="box"
            >
            </input>
            <input 
               type="text"
               name="brand"
               required="required"
               placeholder="Enter device brand..."
               onChange={handleAddFormChange}
               id="box"
            >
            </input>
            <input 
               type="text"
               name="serialNum"
               required="required"
               placeholder="Enter device Serial Number..."
               onChange={handleAddFormChange}
               id="box"
            >
            </input>
         </form> 
      </div>
   )
}

export default DynamicTable; 