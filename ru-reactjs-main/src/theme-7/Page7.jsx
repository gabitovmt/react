import React from "react";
import LoginControl from "./LoginControl";
import Mailbox from "./Mailbox";
import WarningPage from "./WarningPage";

export default class Page7 extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      messages: ['React', 'Re: React', 'Re:Re: React']
    }
  }

  render() {
    return <div>
      <LoginControl />
      <Mailbox unreadMessages={this.state.messages} />
      <WarningPage />
    </div>
  }
}
