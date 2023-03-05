import React from 'react'

function Alert(props) {
    const wordCapitalize = (word) => {
        return word.charAt(0).toUpperCase() + word.slice(1);
    };
  return (
    <div className="container" style={{ height: '60px' }}>
      {props.alert && <div className={`alert alert-${ props.alert.type } alert-dismissible fade show`} role="alert">
          <strong>{ wordCapitalize(props.alert.type) }</strong> : { props.alert.message }
      </div>}
    </div>
  )
}

export default Alert
