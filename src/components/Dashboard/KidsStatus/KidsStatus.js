// import React, { useEffect, useState ,useCallback} from "react";
// import axios from 'axios'
// import KidsTable from "./KidsTable/KidsTable";

// import Paginations from "./Paginations";

// import Popup from 'reactjs-popup'
// import _ from "lodash";
// import './KidsStatus.css'
// import Cookies from "js-cookie";


// const pageSize = 6;

// const KidsStatus = () =>{
    
//     const [posts,setPosts] = useState()
//     const[statusKid,setStatusKid] = useState([])
//     const[buttonsDisable,setButtonsDisable] = useState(true)
//     const[kidIdSelected, setkidIdSelected] = useState()
//     const [updateStatus, setUpdateStatus]= useState()
//     const [removeBox,setRemoveBox] = useState()
//     const [paginatedPosts, setPaginatedPosts] = useState();
    


//     const [currentPage, setCurrentPage] = useState(1);

//     const [checkedKidIds  , setCheckedKidIds]=useState([])
//     const[checkboxStatus,setCheckboxStatus] = useState([])
//     const [is_checked,set_is_checked]= useState(false);
    

//     const onChangeCheckboxHandler=event=>{
//         set_is_checked(event.target.checked)
        
        
//        if(event.target.checked ){
//         disableButtons(false)
       
//       }
//       else{
//         disableButtons(true)
       
//       }
         
//     } 
//     useEffect(()=>{
        
        
//     }, [checkedKidIds])

    
    
  
//     const loginToken= Cookies.get("loginToken")

    


//     const buttons = buttonsDisable? 'trigger-button1': 'trigger-button' 

//     const selectedKidId=(id)=>{
//         setkidIdSelected(id)
//      }

   

//     useEffect(() => {
//         const getKidStatus=()=>{
//             axios.get('http://192.168.0.116:8280/Mas_KIDS_Details/1.0/get_kid_Records?mas_userId=ct2@gmail.com&mas_requestedOn=2022-6-28%2014:37:16&mas_requestedFrom=Mozilla/5.0%20(Windows%20NT%2010.0;%20Win64;%20x64)%20AppleWebKit/537.36%20(KHTML,%20like%20Gecko)%20Chrome/102.0.0.0%20Safari/537.36&mas_guid=cec12daa-943f-ac03-ee8f-33636f145179&mas_geolocation=anonymous&limit=10&totalResults=true', {
//                 headers: {
//                  Accept:"application/json",
//                   Authorization: `Bearer ${loginToken}`
//                 }
//               })
//               .then((res) => {console.log(res.data);
//                  setPosts(res.data.body);
                 
//                  setPaginatedPosts(_(res.data.body).slice(0).take(pageSize).value());
                 
//                  });

//         }

//         getKidStatus()
        
//        }, [updateStatus]);  
       

//     //    updateStatus


//     //    const column = [
//     //    {heading:'Select', value :'checkbox'},
//     //     {heading: 'Kid ID', value: 'mas_kidId'},
//     //     {heading: 'First Name', value: 'mas_firstName'},
//     //     {heading: 'Last Name', value: 'mas_lastName'},
//     //     {heading: 'School Name', value: 'mas_schoolName'},
//     //     {heading: 'Created On', value: 'mas_createdOn'},
//     //     {heading: 'kid Status', value: 'mas_kidStatus'},
       
//     //   ]

//       const disableButtons = showOrHide =>{
//               setButtonsDisable(showOrHide)
//               setRemoveBox(showOrHide)
//               console.log(setButtonsDisable)
//       }
     
//       const onResetButton = () =>{
//                setButtonsDisable(true)
//                 setRemoveBox(true)
//                }

//     const pageCount = posts ? Math.ceil(posts.length / pageSize) : 0;
//     if (pageCount === 1) return null;
//     const page = _.range(1, pageCount + 1);
  
//     const pagination = (pageNo) => {
//       currentPage(pageNo);
//       const startIndex = (pageNo - 1) * pageSize;
//       const paginatedPost = _(posts)
//         .slice(startIndex)
//         .take(pageSize)
//         .value();
//       setPaginatedPosts(paginatedPost);
//     };
            
      
   
    
        
        
    

// return(
//     <div>
//         <div className="container ">
//             <Popup
//                 modal
//                 trigger={

//                     <button type="button" className={buttons} disabled = {buttonsDisable}>
//                         ACTIVATE
//                     </button>


//                 }

//             >

//                 {close =>{
                    
//                     const updateStatus = (status) =>{
//                         setButtonsDisable(true)
//                         setRemoveBox(true)
//                         close()
//                       fetch('http://192.168.0.116:8280/mas_kids_Status_Change/1.0/Kid_Status_Change', {
//                         method: 'POST',
//                         headers: {
//                             "Content-Type":"application/json",
//                             Authorization: `Bearer ${loginToken}`
//                         },
//                         body: JSON.stringify({
//                             "header": {
//                                 "guid": "a82e064e-bc21-3e5b-68dc-acfbc600f376",
//                                 "requestedFrom": "Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/102.0.0.0 Mobile Safari/537.36",
//                                 "geoLocation": ""
//                             },
//                             "body": {
//                                 "mas_kidId": [
//                                     kidIdSelected
//                                 ],
//                                 "mas_kidStatus": status
//                             }
//                         })
//                       })
                      
                      
//                       .then((data) => {
//                         setUpdateStatus(data)
//                       })
                      
//                       .catch((error) => {
//                         console.error(error);
//                       });
                    

//                     }


//                     return (
//                     <>
                       
//                        <div className="kid-popup-container col-md-4"> 
//                             <h1 className="kidStatus-heading">Change Status</h1>
//                             <button type="button" className="close" aria-label="Close" onClick = {close}>
//                                <span aria-hidden="true">&times;</span>
//                             </button>
//                             </div>
                            
//                         <div className="para-container ">
//                         <p className="kid-para">Do You Really Want to Change Status..?</p>
                        
//                         <div className="kid-button-container">
//                         <button
//                             type="button"
//                             className="closing-button"
//                             onClick={() => updateStatus("Active")}
//                         >
//                             YES
//                         </button>
//                         <button
//                             type="button"
//                             className="closing-button"
//                             onClick={() => close()}
//                         >
//                             NO
//                         </button>
//                         </div>
//                         </div>
                        
                        
//                         </>
                    
//                 )}}
                
//             </Popup>
            
           

          

//  <Popup
//                 modal
//                 trigger={

//                     <button type="button" className={buttons}  disabled = {buttonsDisable}>
//                         DEACTIVATE
//                     </button>


//                 }

//             >

//                 {close => {
//                   const updateStatus = (status) =>{
                    
//                     setButtonsDisable(true)
//                     setRemoveBox(true)
//                     close()
//                   fetch('http://192.168.0.116:8280/mas_kids_Status_Change/1.0/Kid_Status_Change', {
//                     method: 'POST',
//                     headers: {
//                         "Content-Type":"application/json",
//                         Authorization: `Bearer ${loginToken}`
//                     },
//                     body: JSON.stringify({
//                         "header": {
//                             "guid": "a82e064e-bc21-3e5b-68dc-acfbc600f376",
//                             "requestedFrom": "Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/102.0.0.0 Mobile Safari/537.36",
//                             "geoLocation": ""
//                         },
//                         "body": {
//                             "mas_kidId": [
//                                 kidIdSelected
//                             ],
//                             "mas_kidStatus": status
//                         }
//                     })
//                   })
                  
                  
//                   .then((data) => {
//                     setUpdateStatus(data)
//                   })
                  
//                   .catch((error) => {
//                     console.error(error);
//                   });
                  
                  
//                 }

                
//                 return(

//                     <>

                    
                        
//                        <div className="kid-popup-container"> 
//                             <h1 className="kidStatus-heading">Change Status</h1>
//                             <button type="button" class="close" aria-label="Close" onClick = {close}>
//                                <span aria-hidden="true">&times;</span>
//                             </button>
//                             </div>
                            
//                         <div className="para-container">
//                         <p className="kid-para">Do You Really Want to Change Status..?</p>
                        
//                         <div className="kid-button-container">
//                         <button
//                             type="button"
//                             className="closing-button"
//                             onClick={() => updateStatus("InActive")}
//                         >
//                             YES
//                         </button>
//                         <button
//                             type="button"
//                             className="closing-button"
//                             onClick={() => close()}
//                         >
//                             NO
//                         </button>
//                         </div>
//                         </div>
//                         </>
               
//                 )}
//             }
//             </Popup>
            
//             <button type="button" className = {buttons} onClick = {onResetButton}>
//                 RESET
//             </button>
//         </div>
// <main role="main" class="container">
// <div className="current-page">
//   <div className="user">
//     <div className="user__body">
//     {!paginatedPosts ? (
//             "No data Found"
//         ) :(
//       <table id="table1">
//         <thead>
//           <tr>
           
//             <th className="table-head">select</th>
//             <th className="table-head">Kid Id</th>
//             <th className="table-head">First Name</th>
//             <th className="table-head">Last Name</th>
//             <th className="table-head">School Name</th>
//             <th className="table-head">Created On</th>
//             <th  className="table-head">Kid Status</th>
//           </tr>
//         </thead>
        
          
//             <tbody>
//                 {paginatedPosts.map((item,index) =>{
//                 return (    
//               <tr>
//               <th>
//               <input type="checkbox" onChange={onChangeCheckboxHandler} /></th>
//                 <th>{item.mas_kidId}</th>
//                 <th >{item.mas_firstName}</th>
//                 <th >{item.mas_lastName}</th>
//                 <th >{item.mas_schoolName}</th>
//                 <th >{item.mas_createdOn}</th>
//                 <th >{item.mas_kidStatus}</th>
//               </tr>
//                 );
//                })}
//             </tbody>
//           </table>
//       )}
//     </div>
//   </div>
//   <div className="pagination-wrapper">
//   {/* <Paginations
//       totalRecords={NUM_OF_RECORDS}
//       pageLimit={LIMIT}
//       pageNeighbours={2}
//       onPageChanged={onPageChanged}
//       currentPage={currentPage}
//     /> */}

// <nav className="d-flex justify-content-center ">
// <div className="status-button">

//         <ul className="pagination">
//           {page.map((page) => (
//             <li
//               className = "pagination"
//             >
//               <p className="page-link" onClick={() => pagination(page)}>
//                 {page}
//               </p>
//             </li>
//           ))}
//         </ul>
//         </div>
//       </nav>

//   </div>
// </div>
// </main>
        
// </div>         
//     )
//             }


// export default KidsStatus





import React, { useEffect, useState ,useReducer} from "react";
import axios from 'axios'
import KidsTable from "./KidsTable/KidsTable";



import Popup from 'reactjs-popup'

import './KidsStatus.css'

import Cookies from "js-cookie";

const KidsStatus = () =>{
    const[statusKid,setStatusKid] = useState([])
    const[buttonsDisable,setButtonsDisable] = useState(true)
    const[kidIdSelected, setkidIdSelected] = useState()
    const [updateStatus, setUpdateStatus]= useState()
    const [removeBox,setRemoveBox] = useState()
    // const [paginatedPosts, setPaginatedPosts] = useState();
    // const [currentPage, setcurrentPage] = useState(1)
    
  
    const loginToken= Cookies.get("loginToken")


    const buttons = buttonsDisable? 'trigger-button1': 'trigger-button' 

    const selectedKidId=(id)=>{
        setkidIdSelected(id)
    }

   

    useEffect(() => {
        const getKidStatus=()=>{
            axios.get('http://192.168.0.116:8280/Mas_KIDS_Details/1.0/get_kid_Records?mas_userId=ct2@gmail.com&mas_requestedOn=2022-6-28%2014:37:16&mas_requestedFrom=Mozilla/5.0%20(Windows%20NT%2010.0;%20Win64;%20x64)%20AppleWebKit/537.36%20(KHTML,%20like%20Gecko)%20Chrome/102.0.0.0%20Safari/537.36&mas_guid=cec12daa-943f-ac03-ee8f-33636f145179&mas_geolocation=anonymous&limit=10&totalResults=true', {
                headers: {
                 Accept:"application/json",
                  Authorization: `Bearer ${loginToken}`
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
              setRemoveBox(showOrHide)
              console.log(setButtonsDisable)
      }
     
      const onResetButton = () =>{
               setButtonsDisable(true)
                setRemoveBox(true)
               }
      
   
    return(
        
        
    
   <div>
    
    <div className="container ">
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
                        setRemoveBox(true)
                        close()
                      fetch('http://192.168.0.116:8280/mas_kids_Status_Change/1.0/Kid_Status_Change', {
                        method: 'POST',
                        headers: {
                            "Content-Type":"application/json",
                            Authorization: `Bearer ${loginToken}`
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
                       
                       <div className="kid-popup-container col-md-4"> 
                            <h1 className="kidStatus-heading">Change Status</h1>
                            <button type="button" className="close" aria-label="Close" onClick = {close}>
                               <span aria-hidden="true">&times;</span>
                            </button>
                            </div>
                            
                        <div className="para-container ">
                        <p className="kid-para">Do You Really Want to Change Status..?</p>
                        
                        <div className="kid-button-container">
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
                    setRemoveBox(true)
                    close()
                  fetch('http://192.168.0.116:8280/mas_kids_Status_Change/1.0/Kid_Status_Change', {
                    method: 'POST',
                    headers: {
                        "Content-Type":"application/json",
                        Authorization: `Bearer ${loginToken}`
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

                    
                        
                       <div className="kid-popup-container"> 
                            <h1 className="kidStatus-heading">Change Status</h1>
                            <button type="button" class="close" aria-label="Close" onClick = {close}>
                               <span aria-hidden="true">&times;</span>
                            </button>
                            </div>
                            
                        <div className="para-container">
                        <p className="kid-para">Do You Really Want to Change Status..?</p>
                        
                        <div className="kid-button-container">
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
    
        <KidsTable  data= {statusKid} column = {column} disableButtons = {disableButtons} selectedKidId={selectedKidId} />
        
       
    
      </div>
    )

}

export default KidsStatus
 