import React from 'react'

function ToastComponent(props) {
    const {title, message} = props
    return (
        <div className="flex flex-col items-center bg-red-900 px-2 py-4 w-64">
            <h2>{title}</h2>
            <p className="mt-2">{message}</p>
        </div>
    )
}

export default ToastComponent
