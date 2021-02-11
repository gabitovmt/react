import React from "react";
import NumberList from "./NumberList";
import NumberList2 from "./NumberList2";
import Blog from "./Blog";

export default class Page8 extends React.Component {
  render() {
    const numbers = [1,2,3,4,5];

    const posts = [
      {id: 1, title: 'Привет, мир', content: 'Добро пожаловать в документацию React!'},
      {id: 2, title: 'Установка', content: 'React можно установить из npm.'}
    ];

    return <div>
      <NumberList numbers={numbers} />
      <NumberList2 numbers={numbers} />
      <Blog posts={posts} />
    </div>;
  }
}
