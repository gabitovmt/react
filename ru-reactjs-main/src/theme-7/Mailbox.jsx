import React from "react";

export default function Mailbox(props) {
  const unreadMessages = props.unreadMessages;

  return <div>
    <h1>Здравствуйте!</h1>
    {unreadMessages.length > 0 && <h2>У вас {unreadMessages.length} непрочитанных сообщений</h2>}
  </div>
}
