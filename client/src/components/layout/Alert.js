import React, { Component } from 'react'

class Alert extends Component {
  render(){
    return (
      <div className="alert alert-info py-5 my-9 border-0" role="alert">
        <label className='m-auto font-weight-bold'>
        <svg className="bi bi-exclamation-octagon mr-1 d-none d-lg-inline" width="1.7em" height="1.7em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
  <path fillRule="evenodd" d="M4.54.146A.5.5 0 014.893 0h6.214a.5.5 0 01.353.146l4.394 4.394a.5.5 0 01.146.353v6.214a.5.5 0 01-.146.353l-4.394 4.394a.5.5 0 01-.353.146H4.893a.5.5 0 01-.353-.146L.146 11.46A.5.5 0 010 11.107V4.893a.5.5 0 01.146-.353L4.54.146zM5.1 1L1 5.1v5.8L5.1 15h5.8l4.1-4.1V5.1L10.9 1H5.1z" clipRule="evenodd"/>
  <path d="M7.002 11a1 1 0 112 0 1 1 0 01-2 0zM7.1 4.995a.905.905 0 111.8 0l-.35 3.507a.552.552 0 01-1.1 0L7.1 4.995z"/>
</svg> If you have any medical queries, reach out to your state helpline, district administration or trusted doctors!</label>
      </div>
    )
  }
}
  
export default Alert;
