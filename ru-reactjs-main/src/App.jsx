import React from "react";
import "./App.css";
import Page5 from "./theme-5/Page5";
import ExtraPage5 from "./theme-5/ExtraPage5";
import Page6 from "./theme-6/Page6";
import Page7 from "./theme-7/Page7";
import Page8 from "./theme-8/Page8";
import Page9 from "./theme-9/Page9";
import Page10 from "./theme-10/Page10";
import Page11 from "./theme-11/Page11";

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

  handleBackClick = () => {
    this.setState({
      header: 'Содержание',
      page: this.intro()
    });
  }

  handlePage5Click = () => {
    this.setPage(<Page5 />);
  }

  handleExtraPage5Click = () => {
    this.setPage(<ExtraPage5 />);
  }

  handlePage6Click = () => {
    this.setPage(<Page6 />);
  }

  handlePage7Click = () => {
    this.setPage(<Page7 />);
  }

  handlePage8Click = () => {
    this.setPage(<Page8 />);
  }

  handlePage9Click = () => {
    this.setPage(<Page9 />);
  }

  handlePage10Click = () => {
    this.setPage(<Page10 />);
  }

  handlePage11Click = () => {
    this.setPage(<Page11 />);
  }

  intro() {
    return <ul>
      <li className="App__chapter" onClick={this.handlePage5Click}>
        Глава 5. Состояние и жизненный цикл
      </li>
      <li className="App__chapter" onClick={this.handleExtraPage5Click}>
        Глава 5. Дополнительное упражнение
      </li>
      <li className="App__chapter" onClick={this.handlePage6Click}>
        Глава 6. Обработка событий
      </li>
      <li className="App__chapter" onClick={this.handlePage7Click}>
        Глава 7. Условный рендеринг
      </li>
      <li className="App__chapter" onClick={this.handlePage8Click}>
        Глава 8. Списки и ключи
      </li>
      <li className="App__chapter" onClick={this.handlePage9Click}>
        Глава 9. Формы
      </li>
      <li className="App__chapter" onClick={this.handlePage10Click}>
        Глава 10. Подъём состояния
      </li>
      <li className="App__chapter" onClick={this.handlePage11Click}>
        Глава 11. Композиция против наследования
      </li>
    </ul>
  }

  render() {
    return <main className="App">
      <h4 className="App__header" onClick={this.handleBackClick}>{this.state.header}</h4>
      {this.state.page}
    </main>
  }
}
