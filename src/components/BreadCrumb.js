import React from 'react';
import { Link } from 'react-router-dom';

  const Breadcrumb = ({ breadcrumbs, location: { pathname } }) => {
    console.log(breadcrumbs)
    return(
    
    <div>
      {breadcrumbs.map((breadcrumb, index) => (
        <span key={breadcrumb.props.path}>
          {pathname === breadcrumb.props.path ? (
            <span>{breadcrumb}</span>
          ) : (
            <Link to={breadcrumb.props.path}>{breadcrumb}</Link>
          )}
          {index < breadcrumbs.length - 1 && <i> / </i>}
        </span>
      ))}
    </div>
  )};
  
  
  export default Breadcrumb;