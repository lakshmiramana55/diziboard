
import React, { useEffect, useState } from "react";

import './KidsTable.css'

const KidsTable = (props) => {
    
    const { data, column, disableButtons,selectedKidId , removeCheckBox,buttons} = props
    
    

    const [data1, setData1]=useState([])

    useEffect(()=>{
        setData1(data)
    }, [data])
   
    return (

        <div>
             
            <table className="table">
           
                <thead>
                
                    <tr className="table-head">
                        {column.map((item, index) => <th>{item.heading}</th>)}
                    </tr>
                    
                </thead>
                
                <tbody>
               
                { 
                    data1.length>0?
                data1.map((item, index) => <TableBody  disableButtons={disableButtons} removeCheckBox = {removeCheckBox}
                selectedKidId={selectedKidId} eachObj={item} />): ""}
                
                </tbody>
                
            </table>
            
        </div>
        
    )

}



// const TableHeadItem = ({ item }) => <th>{item.heading}</th>
const TableBody = (props) => {

    const { eachObj,selectedKidId, removeCheckBox, disableButtons} = props
    const [checkedKidIds  , setCheckedKidIds]=useState([])
    const[checkboxStatus,setCheckboxStatus] = useState([])
    const [is_checked,set_is_checked]= useState(false);
    

    const onChangeCheckboxHandler=event=>{
        set_is_checked(event.target.checked)
        
        selectedKidId(eachObj.mas_kidId)
       if(event.target.checked ){
        disableButtons(false)
        removeCheckBox(false)
      }
      else{
        disableButtons(true)
        removeCheckBox(true)
      }
       selectedKidId('')   
    } 
    useEffect(()=>{
        
        
    }, [checkedKidIds])

    return (
            <tr>
                <th >
                    <input type="checkbox"  checked = {is_checked}  onChange={onChangeCheckboxHandler}
                 removeCheckBox = {removeCheckBox}/></th>
                <th >{eachObj.mas_kidId}</th>
                <th >{eachObj.mas_firstName}</th>
                <th >{eachObj.mas_lastName}</th>
                <th >{eachObj.mas_schoolName}</th>
                <th >{eachObj.mas_createdOn}</th>
                <th >{eachObj.mas_kidStatus}</th>
            </tr>
        )
}


export default KidsTable;

