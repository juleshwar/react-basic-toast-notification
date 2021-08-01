import React from 'react'

function ToastComponent(props) {
    const {title, message, id, onClickClose} = props
    return (
        <div className="flex flex-col relative items-center bg-red-900 px-2 py-4 w-64">
            <button className="absolute right-2 top-2 transform rotate-45 text-2xl" onClick={onClickClose.bind(this, id)}>+</button>
            <h2>{title}</h2>
            <p className="mt-2">{message}</p>
        </div>
    )
}

export default ToastComponent
