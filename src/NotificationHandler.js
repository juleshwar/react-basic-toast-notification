import React from 'react'
import ReactDOM from 'react-dom'
import ToastComponent from './ToastComponent'

export default class NotificationHandler extends React.Component {
    constructor(props) {
        super(props)
        this.setupNotificationContainer()
    }
    componentDidMount() {
        document.getElementById("app").appendChild(this.notificationContainer)
    }
    componentWillUnmount() {
        document.getElementById("app").removeChild(this.notificationContainer)
    }
    setupNotificationContainer() {
        const notificationContainer = document.createElement('div')
        notificationContainer.classList.add("fixed", "z-10", "h-full", "w-full", "top-0", "left-0")
        notificationContainer.id = 'notifications-container'
        this.notificationContainer = notificationContainer
    }
    render() {
        return ReactDOM.createPortal(
            <>
                {
                    this.props.notifications.map((notification) => {
                        const { title, message } = notification
                        return (
                            <div key={notification.id}>
                                <ToastComponent title={title} message={message} />
                            </div>
                        )
                    })
                }
            </>,
            this.notificationContainer
        )
    }
}
