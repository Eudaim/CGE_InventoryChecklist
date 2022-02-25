const fs = require("fs")

export const updateDeviceFile = (id,type,brand,serialNum) => {
    const deviceObj = {
        device_ID: id, 
        device_Type: type, 
        device_Brand: brand, 
        device_serialNum: serialNum
    } 
    var deviceData;
    fs.readFile("./device.json","utf8", function(error,jsondeviceData){
        if(error) {
            console.log("Trouble reading file");
            return;
        }
        deviceData = JSON.parse(jsondeviceData);
        deviceData.push(deviceObj);
        var jsonStr = JSON.stringify(deviceData);
        fs.writeFile("./src/device.json",jsonStr, (error) =>{
            if(error)
                console.log("Trouble reading file");
            else
                console.log("File written successfully");
        
        })
    })
}

export default updateDeviceFile;