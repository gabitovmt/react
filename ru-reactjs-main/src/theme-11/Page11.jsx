import React from "react";
import WelcomeDialog from "./WelcomeDialog";
import SplitPane from "./SplitPane";
import SignUpDialog from "./SignUpDialog";

export default class Page11 extends React.Component {
  render() {
    return (
      <section>
        <WelcomeDialog />
        <SplitPane left={<p>Левая панель</p>} right={<p>Правая панель</p>} />
        <SignUpDialog />
      </section>
    )
  }
}
