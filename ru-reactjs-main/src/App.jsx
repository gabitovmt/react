import React from "react";
import "./App.css";
import Page5 from "./theme-5/Page5";
import ExtraPage5 from "./theme-5/ExtraPage5";
import Page6 from "./theme-6/Page6";
import Page7 from "./theme-7/Page7";
import Page8 from "./theme-8/Page8";
import Page9 from "./theme-9/Page9";

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

  onBackClick = () => {
    this.setState({
      header: 'Содержание',
      page: this.intro()
    });
  }

  onPage5Click = () => {
    this.setPage(<Page5 />);
  }

  onExtraPage5Click = () => {
    this.setPage(<ExtraPage5 />);
  }

  onPage6Click = () => {
    this.setPage(<Page6 />);
  }

  onPage7Click = () => {
    this.setPage(<Page7 />);
  }

  onPage8Click = () => {
    this.setPage(<Page8 />);
  }

  onPage9Click = () => {
    this.setPage(<Page9 />);
  }

  intro() {
    return <ul>
      <li className="App__chapter" onClick={this.onPage5Click}>
        Глава 5. Состояние и жизненный цикл
      </li>
      <li className="App__chapter" onClick={this.onExtraPage5Click}>
        Глава 5. Дополнительное упражнение
      </li>
      <li className="App__chapter" onClick={this.onPage6Click}>
        Глава 6. Обработка событий
      </li>
      <li className="App__chapter" onClick={this.onPage7Click}>
        Глава 7. Условный рендеринг
      </li>
      <li className="App__chapter" onClick={this.onPage8Click}>
        Глава 8. Списки и ключи
      </li>
      <li className="App__chapter" onClick={this.onPage9Click}>
        Глава 9. Формы
      </li>
    </ul>
  }

  render() {
    return <main className="App">
      <h4 className="App__header" onClick={this.onBackClick}>{this.state.header}</h4>
      {this.state.page}
    </main>
  }
}
