import React, { Suspense } from "react";

const OtherComponent = React.lazy(() => import("./OtherComponent"));
const AnotherComponent = React.lazy(() => import("./AnotherComponent"));
const MyComponent = React.lazy(() => import("./MyComponent"));

export default class CodeSplittingPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      sum: null
    }

    this.calcSum();
  }

  calcSum() {
    import("./math").then(math => {
      this.setState({
        sum: math.add(16, 26)
      });
    });
  }

  render() {
    return (
      <div>
        <p>{this.state.sum}</p>
        <hr />

        <Suspense fallback={<div>Загрузка...</div>}>
          <OtherComponent />
        </Suspense>
        <hr />

        <Suspense fallback={<div>Загрузка...</div>}>
          <section>
            <OtherComponent />
            <AnotherComponent />
          </section>
        </Suspense>
        <hr />

        <Suspense fallback={<div>Загрузка...</div>}>
          <MyComponent />
        </Suspense>
      </div>
    )
  }

  // TODO Рассмотреть пример с предохранителями
  // TODO Рассмотреть пример с маршрутами
}
