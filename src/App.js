import React from "react";
import NotificationHandler from './NotificationHandler';
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notifications: [],
      notificationCounter: 0
    }
    this.onClickTriggerNotification = this.onClickTriggerNotification.bind(this);
    this.onClickClearNotifications = this.onClickClearNotifications.bind(this);
    this.onClickCloseNotification= this.onClickCloseNotification.bind(this);
  }
  onClickTriggerNotification() {
    const notificationId = this.state.notificationCounter;
    this.setState({
      notifications: [
        {
          id: notificationId,
          title: "Notification " + notificationId,
          message: "This is a notification message",
        },
        ...this.state.notifications
      ],
      notificationCounter: notificationId + 1
    })
  }
  onClickClearNotifications() {
    this.setState({
      notifications: []
    })
  }
  onClickCloseNotification(notificationId) {
    this.setState({
      notifications: this.state.notifications.filter(notification => notification.id !== notificationId)
    })
  }
  render() {
    return (
      <>
        <div className="p-5 flex flex-col items-start">
          <button className="bg-gray px-4 py-2 border rounded" onClick={this.onClickTriggerNotification}>Trigger Notification</button>
          <button className="bg-gray px-4 py-2 border rounded mt-2" onClick={this.onClickClearNotifications}>Clear All Notifications</button>
        </div>
        <NotificationHandler notifications={this.state.notifications} onClickClose={this.onClickCloseNotification} />
      </>
    );
  }
}

export default App;
