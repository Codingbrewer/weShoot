import React from 'react'
import styles from '../styles/form.module.css'
import { Link } from 'react-router-dom'

export default function pro() {
  
  return (
    
<div>
<div className={styles.formContainer}>
  <div className={styles.card} style={{width:'500px', height: '430px'}}>
    <div className={styles.box}>
      <div className={styles.content} style={{padding:'0px'}}>
        <h4>Pro package</h4>
        <form className={styles.orderForm}>


        <label>
          <span> Full Name </span>
          <input
             className={styles.inputOrder}
             type="text"
             placeholder="Full Name"
             required/>
         </label>



      <label>
          <span> Address </span>
          <input
           className={styles.inputOrder}
             type="text"
             placeholder="Home address"
    
             required/>
        </label>


 <label>
     <span>Email</span> 
     <input  
      className={styles.inputOrder}
     type="email"
     placeholder="Email Address"
     required
 />
     
 </label>

 <label>
  
 <span> Phone Number </span>
<input 
 className={styles.inputOrder}
  type="tel"
  placeholder="Phone number"
  
  />
    
 </label>

 <label>
     <span>How many products?</span>
     <select>
         <option value="upto10">1-10</option>
         <option value="upto25">10-25</option>
         <option value="upto50">25-50</option>
     </select>
 </label>

 
 <Link className={styles.formButton}  to='/thankyou'>Send</Link>
 <Link className={styles.formButton}  to='/trynow'>Back</Link>

        </form>
  

        
      </div>
    </div>
  </div>


  
  </div>
  </div>
  )};
