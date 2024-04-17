In this question, you need to create a Notifications component that would render auto dismissible notifications. Your solution should provide a custom hook called useNotifications that returns a method showNotification to display notifications. This question is asked in companies like Razorpay.

Syntax
const App = () => {
  const { showNotification } = useNotifications();

  useEffect(() => {
    // show success notification after 2 seconds
    setTimeout(() => {
      // showNotification({ type, message })
      showNotification({
        type: 'SUCCESS', // 'SUCCESS', 'INFO', 'ERROR', 'WARNING'
        message: 'Hello World'
      })
    }, 2000)
  }, []);

  return (
    ...
  );
};
Functional Requirements
We should be able to call useNotifications at any level in the React tree.
It should provide a method showNotification to display a notification.
showNotification takes two parameters: type and message.
type (String) could be any of the following -- SUCCESS, ERROR, INFO, WARNING.
message (String) is the actual content of the notification.
The notification should be auto dismissed after 2 seconds.
The dismissible timer should be paused on notification hover.
Multiple notifications should be allowed at once.