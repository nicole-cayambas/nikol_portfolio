import React from 'react'

const FormTextareaField = ({ name, label, error, ...otherProps }) => {
    return (
        <div className="form-group">
            <label className="form-label" htmlFor={name}>{label}</label>
            <textarea
                type="text"
                className="form-input"
                name={name}
                id={name}
                {...otherProps}
            />
            <small className="form-error-message">{error ?? ''}</small>
        </div>
    )
}

export default FormTextareaField