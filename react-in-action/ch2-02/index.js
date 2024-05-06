const node = document.getElementById('root');
const root = React.createElement('div', {},
  React.createElement('h1', {}, 'Hello, world!',
    React.createElement('a', {href: 'https://react.dev'},
      React.createElement('h1', {}, 'React In Action'),
      React.createElement('em', {}, '... and now it really is!')
    )
  )
);

ReactDOM.render(root, node);
