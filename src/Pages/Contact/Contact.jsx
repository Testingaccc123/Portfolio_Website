import React from 'react'
import "./Contact.css"

const Contact = () => {
  return (
    <div className='container   Top'>
    <div className='Conatct_Flex'>
      <div className='col-md-4 Contact_details color'>
        <h4>Get In Touch</h4>
        <p>
        If you would like to reach out about a potential job offer or freelance work please contact me through one of the mediums below!
        </p>
        <div className='d-flex gap-5'>
          <div>
            <h3>Phone</h3>
            <span>N/A</span>
          </div>
          <div>
            <h3>Email</h3>
            <span>benjaminmurdy@gmail.com</span>
          </div>
        </div>
      </div>
      <div className='col-md-4  color '>
        <div className='margin-left'>    <h1 className='text_vertical '>THANK</h1></div>
        <h1 className='text'>YOU</h1>
      </div>
    </div>
  </div>
  
  )
}

export default Contact