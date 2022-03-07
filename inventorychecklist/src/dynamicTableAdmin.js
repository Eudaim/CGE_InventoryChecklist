import React, { Component, useState} from 'react'
import Table from 'react-bootstrap/Table'
import Button from 'react-bootstrap/Button'
import CenteredModal from './centeredModal'
import './table.css'
import data from "./devices.json"
import updateDeviceFile from "./update";

const DynamicTableAdmin = () => {
   const [devices, setDevices] = useState(data); 
   const [addFormData, setAddFormData] = useState({
      device_ID: " ", 
      device_Type: " ", 
      device_Brand: " ", 
      device_SerialNum: " "
   })

   const handleAddFormChange = (event) => {
      event.preventDefault();

      const fieldName = event.target.getAttribute("name"); 
      const fieldValue = event.target.value; 
      
      const newFormData = {...addFormData}; 
      newFormData[fieldName] = fieldValue;
      setAddFormData(newFormData)
   }
   const handleAddFormSubmit = (event) => {
     
      const newDevice = {
         device_ID: addFormData.device_ID, 
         device_Type: addFormData.device_Type, 
         device_Brand: addFormData.device_Brand, 
         device_SerialNum: addFormData.device_SerialNum
      }; 
      const newDevices = [...devices, newDevice];
      setDevices(newDevices);
      updateDeviceFile(test,test,test,test);
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
      <form onSubmit={handleAddFormSubmit} method="post" action="/inventory">
            <input 
               type="text"
               name="device_ID"
               required="required"
               placeholder="Enter device ID... "
               onChange={handleAddFormChange}
               id="box"
            >
            </input>
            <input
               type="text"
               name="device_Type"
               required="required"
               placeholder="Enter Type"
               onChange={handleAddFormChange}
               id="box"
            >
            </input>
            <input 
               type="text"
               name="device_Brand"
               required="required"
               placeholder="Enter device brand..."
               onChange={handleAddFormChange}
               id="box"
            >
            </input>
            <input 
               type="text"
               name="device_SerialNum"
               required="required"
               placeholder="Enter device Serial Number..."
               onChange={handleAddFormChange}
               id="box"
            >
            </input>
            <Button type="submit">Add</Button>
         </form> 
      </div>
   )
}

export default DynamicTableAdmin; 