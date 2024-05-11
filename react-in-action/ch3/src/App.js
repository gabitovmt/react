import './App.css';
import React, {Component} from 'react';
import Secret from './Secret/Secret';
import ShallowMerge from './ShallowMerge/ShallowMerge';
import Parent from './Parent/Parent';
import Counter from './Counter/Counter';
import Greeting from './Greeting/Greeting';

const pages = [{
  id: 'l-3.2',
  label: 'Листинг 3.2. setState()',
  component: <Secret/>
}, {
  id: 'l-3.3',
  label: 'Листинг 3.3. setState()',
  component: <ShallowMerge/>
}, {
  id: 'ex-3.2',
  label: 'Упражнение 3.2. setState()',
  component: <Parent/>
}, {
  id: 'l-3.4',
  label: 'Листинг 3.4. Неизменяемые свойства',
  component: <Counter onIncrement={console.log}/>
}, {
  id: 'l-3.5',
  label: 'Листинг 3.5. Функциональные компоненты',
  component: <Greeting for="Mark"/>
}]

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      page: null
    };
    this.onClick = this.onClick.bind(this);
    this.onBackClick = this.onBackClick.bind(this);
  }

  onClick(event) {
    this.setState(() => ({
      page: pages.find(page => page.id === event.target.value)
    }));
  }

  onBackClick() {
    this.setState(() => ({
      page: null
    }));
  }

  buttons() {
    if (this.state.page != null) {
      return <button onClick={this.onBackClick}>Назад</button>;
    }

    return (
      <>
        {
          pages.map((page) =>
            <button key={page.id} onClick={this.onClick} value={page.id}>{page.label}</button>
          )
        }
      </>
    );
  }

  page() {
    if (this.state.page == null) {
      return null;
    }

    return this.state.page.component;
  }

  render() {
    return (
      <div className="App">
        <div>{this.buttons()}</div>
        <hr/>
        <div>{this.page()}</div>
      </div>
    );
  }
}

export default App;
