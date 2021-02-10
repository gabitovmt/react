import React from "react";

export default class Arguments extends React.Component {
  deleteRow() {
    console.log(arguments);
  }

  render() {
    const id = 1;

    return <div>
      <button onClick={(e) => this.deleteRow(id, e)}>Удалить строку</button>
      <button onClick={this.deleteRow.bind(this, id)}>Удалить строку</button>
    </div>
  }
}
