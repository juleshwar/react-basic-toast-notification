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
        notificationContainer.classList.add("fixed", "z-10", "top-0", "right-0", "h-full", "overflow-y-scroll")
        notificationContainer.id = 'notifications-container'
        this.notificationContainer = notificationContainer
    }
    render() {
        const { onClickClose, notifications } = this.props
        return ReactDOM.createPortal(
            <div className="flex flex-col">
                {
                    notifications.map((notification) => {
                        const { title, message, id } = notification
                        return (
                            <div key={notification.id}>
                                <ToastComponent title={title} message={message} id={id} onClickClose={onClickClose} />
                            </div>
                        )
                    })
                }
            </div>,
            this.notificationContainer
        )
    }
}
