import React, { useEffect } from "react";
import Cookies from "js-cookie";
import { useState } from "react";
import './KidApproval.css'
import KidApprovalTable from "./KidApprovalTable/KidApprovalTable";

const KidApprovals = () => {
  let loginToken = Cookies.get("loginToken");
  const [kidpendingStatusArray, setKidpendingStatusArray] = useState([]);
  const[approvalState,setApprovalState] = useState('')
  const[rejectState,setRejectState] = useState('')
  useEffect(() => {
    const getPendingKidStatus = async () => {
      const getPendingKidStatusUrl =
        "http://192.168.0.116:8280/mas_kidStatus/1.0/get_pending_kid_Status?mas_userId=ct2@gmail.com&mas_requestedOn=2022-6-24%2017:20:17&mas_requestedFrom=Mozilla/5.0%20(Linux;%20Android%206.0;%20Nexus%205%20Build/MRA58N)%20AppleWebKit/537.36%20(KHTML,%20like%20Gecko)%20Chrome/102.0.0.0%20Mobile%20Safari/537.36&mas_guId=385bae40-ea6b-ef5c-d5d5-2fbb4e92baef&mas_geoLocation=anonymous&limit=10&offset=0&totalResults=true";
      let options = {
        method: "GET",
        headers: {
          Authorization: `Bearer 4f7eb322-50fe-3c77-8912-a516899f6936`,
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      };

      const response = await fetch(getPendingKidStatusUrl, options);
      const kidPendingStatusData = await response.json();
      console.log(kidPendingStatusData)
      setKidpendingStatusArray(kidPendingStatusData);
      
    };
    getPendingKidStatus();
  }, []);

  const column = [
    {heading:'Select', value :'checkbox'},
     {heading: 'Kid ID', value: 'mas_kidId'},
     {heading: 'First Name', value: 'mas_firstName'},
     {heading: 'Last Name', value: 'mas_lastName'},
     {heading: 'School Name', value: 'mas_schoolName'},
     {heading: 'Created On', value: 'mas_createdOn'},
     {heading: 'kid Status', value: 'mas_kidStatus'},
    
   ]

   const approvalButton = () =>{
        setApprovalState('Please Select Atleast One Kid To Approve')
   }
   const rejectButton = () =>{
    setRejectState('Please Select Atleast One Kid To Reject')
   }
  
  

  return (
    
  <div className="oj-flex.oj-flex-items-pad>.oj-flex-item">
    <p className="approval-name">{approvalState}</p>
    <p className="approval-name">{rejectState}</p>
      <div className="kid-approvals-buttons-container">
      
      <button className="trigger-button" onClick = {approvalButton}>APPROVE</button>
      <button className="trigger-button" onClick = {rejectButton}> REJECT</button>
      <button className="trigger-button">RESET</button>
      </div>
    <div>
    <hr />
    <table className="table table-bordered oj-flex.oj-flex-items-pad>.oj-flex-item">
                 <thead className="table-head1">
             <tr className='table-head '>
                 <th>Select</th>
                  <th>Kid ID</th>
                 <th>First Name</th>
                 <th>Last Name</th>
                 <th>Class</th>
                 <th>Created On</th>
                 <th>Kid Status</th>
                 <th>Roll No</th>
                
                 </tr>
                
                 </thead>
                 
                 
          </table>
          <div className="data-para">
            <h1 className="para">No data to display.</h1>
          </div>
          
    </div>
    <div className="page-container">
      <p >Page 1</p>
      <p className="page-name">(0 of at least 0 items)</p>
      <hr className="line"/>
    </div>
  </div>
  );
};

export default KidApprovals;