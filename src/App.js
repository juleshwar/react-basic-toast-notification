import React from "react";
import NotificationHandler from './NotificationHandler';
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notifications: [],
      notificationCounter: 0
    }
  }
  render() {
    function onClickTriggerNotification() {
      // trigger a notification
    }
    function onClickClearNotifications() {
      // clear all notifications
    }
    return (
      <>
        <div className="py-5 flex justify-around">
          <button className="bg-gray px-4 py-2 border rounded" onClick={onClickTriggerNotification}>Trigger Notification</button>
          <button className="bg-gray px-4 py-2 border rounded" onClick={onClickClearNotifications}>Clear All Notifications</button>
          <NotificationHandler notifications={notifications} />
        </div>
      </>
    );
  }
}

export default App;
