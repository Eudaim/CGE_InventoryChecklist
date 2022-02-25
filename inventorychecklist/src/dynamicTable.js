import React, { Component, useState} from 'react'
import Table from 'react-bootstrap/Table'
import Button from 'react-bootstrap/Button'
import CenteredModal from './centeredModal'
import './table.css'
import data from "./devices.json"
import Hardware from './hardwareModal'
const DynamicTable = () => {
   const [devices, setDevices] = useState(data); 
   const [formData, setFormData] = useState({
      device_ID: " ", 
      device_Type: " ", 
      device_Brand: " ", 
      device_SerialNum: " "
   })
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
            <th>Device Hardware</th>
            <th>CheckOut</th>
            </tr>
         </thead>
         <tbody>
            {devices.map((device) => 
            <tr>
               <td>{device.device_ID}</td>
               <td>{device.device_Type}</td>
               <td>{device.device_Brand}</td>
               <td>{device.device_SerialNum}</td>
               <td>{<Hardware hardware={device.Hardware}/>}</td>
               <td><CenteredModal device={device}></CenteredModal></td>
            </tr>)}
         </tbody>
      </Table>
      </div>
   )
}

export default DynamicTable; 