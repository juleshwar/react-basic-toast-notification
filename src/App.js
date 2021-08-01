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
    // clear all notifications
  }
  render() {
    return (
      <>
        <div className="py-5 flex justify-around">
          <button className="bg-gray px-4 py-2 border rounded" onClick={this.onClickTriggerNotification}>Trigger Notification</button>
          <button className="bg-gray px-4 py-2 border rounded" onClick={this.onClickClearNotifications}>Clear All Notifications</button>
          <NotificationHandler notifications={this.state.notifications} />
        </div>
      </>
    );
  }
}

export default App;
