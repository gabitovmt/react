import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Greeting from "./chapter-03-01/Greeting";
// Глава 2. Обзор React
// import App from './chapter-02-04/App';
// Листинг 3.2. Использование setState для изменения состояния компонента
// import Secret from "./chapter-03-01/Secret";
// Листинг 3.3. Мелкое слияние с setState
// import ShallowMerge from "./chapter-03-01/ShallowMerge";
// Листинг 3.4. Неизменяемые свойства компонентов React
// import Counter from "./chapter-03-01/Counter";
// Листинг 3.5. Функциональные компоненты без состояния

ReactDOM.render(
  <React.StrictMode>
    {/*<App />*/}
    {/*<Secret />*/}
    {/*<ShallowMerge />*/}
    {/*<Counter incrementBy={1} />*/}
    <Greeting for="Mark" />
  </React.StrictMode>,
  document.getElementById('root')
);
