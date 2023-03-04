import React from 'react'

function Alert(props) {
    const wordCapitalize = (word) => {
        return word.charAt(0).toUpperCase() + word.slice(1);
    };
  return (
    props.alert && <div className={`alert alert-${ props.alert.type } alert-dismissible fade show`} role="alert">
        <strong>{ wordCapitalize(props.alert.type) }</strong> : { props.alert.message }
    </div>
  )
}

export default Alert
