import React, { useEffect, useState } from "react";
import axios from 'axios'
import KidsTable from "./KidsTable/KidsTable";



import Popup from 'reactjs-popup'

import './KidsStatus.css'



const KidsStatus = () =>{
    const[statusKid,setStatusKid] = useState([])
    const[buttonsDisable,setButtonsDisable] = useState(true)
    const[kidIdSelected, setkidIdSelected] = useState()
    const [updateStatus, setUpdateStatus]= useState()
    // const [paginatedPosts, setPaginatedPosts] = useState();
    // const [currentPage, setcurrentPage] = useState(1)
    
  
    


    const buttons = buttonsDisable? 'trigger-button1': 'trigger-button' 

    const selectedKidId=(id)=>{
        setkidIdSelected(id)
    }

   

    useEffect(() => {
        const getKidStatus=()=>{
            axios.get('http://192.168.0.116:8280/Mas_KIDS_Details/1.0/get_kid_Records?mas_userId=ct2@gmail.com&mas_requestedOn=2022-6-28%2014:37:16&mas_requestedFrom=Mozilla/5.0%20(Windows%20NT%2010.0;%20Win64;%20x64)%20AppleWebKit/537.36%20(KHTML,%20like%20Gecko)%20Chrome/102.0.0.0%20Safari/537.36&mas_guid=cec12daa-943f-ac03-ee8f-33636f145179&mas_geolocation=anonymous&limit=10&totalResults=true', {
                headers: {
                 Accept:"application/json",
                  Authorization: `Bearer 1896efef-d34a-3605-b194-8e430faa5fa5`
                }
              })
              .then((res) => {console.log(res.data);
                 setStatusKid(res.data.body);
                //  setPaginatedPosts((res.data.body).slice(0).take(pageSize).value());
                 
                 });

        }

        getKidStatus()
        
       }, [updateStatus]);  
       

       


       const column = [
       {heading:'Select', value :'checkbox'},
        {heading: 'Kid ID', value: 'mas_kidId'},
        {heading: 'First Name', value: 'mas_firstName'},
        {heading: 'Last Name', value: 'mas_lastName'},
        {heading: 'School Name', value: 'mas_schoolName'},
        {heading: 'Created On', value: 'mas_createdOn'},
        {heading: 'kid Status', value: 'mas_kidStatus'},
       
      ]

      const disableButtons = showOrHide =>{
              setButtonsDisable(showOrHide)
              console.log(setButtonsDisable)
      }
     
      const onResetButton = () =>{
               setButtonsDisable(true)
                
               }
      
   
    return(
        
        
    
   <div>
    
    <div className="container">
            <Popup
                modal
                trigger={

                    <button type="button" className={buttons} disabled = {buttonsDisable}>
                        ACTIVATE
                    </button>


                }

            >

                {close =>{
                    
                    const updateStatus = (status) =>{
                        setButtonsDisable(true)
                        close()
                      fetch('http://192.168.0.116:8280/mas_kids_Status_Change/1.0/Kid_Status_Change', {
                        method: 'POST',
                        headers: {
                            "Content-Type":"application/json",
                            Authorization: `Bearer 1896efef-d34a-3605-b194-8e430faa5fa5`
                        },
                        body: JSON.stringify({
                            "header": {
                                "guid": "a82e064e-bc21-3e5b-68dc-acfbc600f376",
                                "requestedFrom": "Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/102.0.0.0 Mobile Safari/537.36",
                                "geoLocation": ""
                            },
                            "body": {
                                "mas_kidId": [
                                    kidIdSelected
                                ],
                                "mas_kidStatus": status
                            }
                        })
                      })
                      
                      
                      .then((data) => {
                        setUpdateStatus(data)
                      })
                      
                      .catch((error) => {
                        console.error(error);
                      });
                    

                    }


                    return (
                    <>
                       <div className="'popup1">
                       <div className="popup-container"> 
                            <h1 className="heading">Change Status</h1>
                            <button type="button" className="close" aria-label="Close" onClick = {close}>
                               <span aria-hidden="true">&times;</span>
                            </button>
                            </div>
                            
                        <div className="para-container">
                        <p className="para">Do You Really Want to Change Status..?</p>
                        
                        <div className="button-container">
                        <button
                            type="button"
                            className="closing-button"
                            onClick={() => updateStatus("Active")}
                        >
                            YES
                        </button>
                        <button
                            type="button"
                            className="closing-button"
                            onClick={() => close()}
                        >
                            NO
                        </button>
                        </div>
                        </div>
                        </div>
                        
                        </>
                    
                )}}
                
            </Popup>
            
           

          

<Popup
                modal
                trigger={

                    <button type="button" className={buttons}  disabled = {buttonsDisable}>
                        DEACTIVATE
                    </button>


                }

            >

                {close => {
                  const updateStatus = (status) =>{
                    setButtonsDisable(true)
                    close()
                  fetch('http://192.168.0.116:8280/mas_kids_Status_Change/1.0/Kid_Status_Change', {
                    method: 'POST',
                    headers: {
                        "Content-Type":"application/json",
                        Authorization: `Bearer 1896efef-d34a-3605-b194-8e430faa5fa5`
                    },
                    body: JSON.stringify({
                        "header": {
                            "guid": "a82e064e-bc21-3e5b-68dc-acfbc600f376",
                            "requestedFrom": "Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/102.0.0.0 Mobile Safari/537.36",
                            "geoLocation": ""
                        },
                        "body": {
                            "mas_kidId": [
                                kidIdSelected
                            ],
                            "mas_kidStatus": status
                        }
                    })
                  })
                  
                  
                  .then((data) => {
                    setUpdateStatus(data)
                  })
                  
                  .catch((error) => {
                    console.error(error);
                  });
                  
                  
                }

                
                return(

                    <>

                    
                        
                       <div className="popup-container"> 
                            <h1 className="heading">Change Status</h1>
                            <button type="button" class="close" aria-label="Close" onClick = {close}>
                               <span aria-hidden="true">&times;</span>
                            </button>
                            </div>
                            
                        <div className="para-container">
                        <p className="para">Do You Really Want to Change Status..?</p>
                        
                        <div className="button-container">
                        <button
                            type="button"
                            className="closing-button"
                            onClick={() => updateStatus("InActive")}
                        >
                            YES
                        </button>
                        <button
                            type="button"
                            className="closing-button"
                            onClick={() => close()}
                        >
                            NO
                        </button>
                        </div>
                        </div>
                        </>
               
                )}
            }
            </Popup>

            <button type="button" className = {buttons} onClick = {onResetButton}>
                RESET
            </button>
        </div>
    
        <KidsTable data= {statusKid} column = {column} disableButtons = {disableButtons} selectedKidId={selectedKidId}/>
        
       
    
      </div>
    )

}

export default KidsStatus
 