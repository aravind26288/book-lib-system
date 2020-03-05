import React from 'react';
import {Spinner} from 'reactstrap';

const LoadingIndicator = (props) => {
 return (
     <React.Fragment>
         <div className="book-lib-app__loading-indicator">
      <Spinner type="grow" color="primary" size="sm"></Spinner>
      <Spinner type="grow" color="secondary" size="sm"></Spinner>
      <Spinner type="grow" color="success" size="sm"></Spinner>
      <Spinner type="grow" color="info" size="sm"></Spinner>
      <Spinner type="grow" color="danger" size="sm"></Spinner>
      <Spinner type="grow" color="dark" size="sm"></Spinner> 
      </div>
     </React.Fragment>
 )
}

export default LoadingIndicator;