import React from "react";
import Page5 from "./theme-5/Page5";
import "./App.css";
import ExtraPage5 from "./theme-5/ExtraPage5";

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      header: 'Содержание',
      page: this.intro()
    }
  }

  setPage(page) {
    this.setState({
      header: 'Назад в содержание',
      page
    });
  }

  back() {
    this.setState({
      header: 'Содержание',
      page: this.intro()
    });
  }

  intro() {
    return <ul>
      <li className="App__chapter" onClick={() => this.setPage(this.page5())}>
        Глава 5. Состояние и жизненный цикл
      </li>
      <li className="App__chapter" onClick={() => this.setPage(this.extraPage5())}>
        Глава 5. Дополнительное упражнение
      </li>
    </ul>
  }

  page5() {
    return <Page5 />
  }

  extraPage5() {
      return <ExtraPage5 />
  }

  render() {
    return <main className="App">
      <h4 className="App__header" onClick={() => this.back()}>{this.state.header}</h4>
      {this.state.page}
    </main>
  }
}
