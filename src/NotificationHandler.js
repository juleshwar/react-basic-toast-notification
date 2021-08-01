import React from 'react'
import ToastComponent from './ToastComponent'

function NotificationHandler(props) {
    const { notifications } = props
    return (
        <div>
            {notifications.map((notification) => {
                const { title, message } = notification
                return (
                    <div key={notification.id}>
                        <ToastComponent title={title} message={message} />
                    </div>
                )
            })}
        </div>
    )
}

export default NotificationHandler
