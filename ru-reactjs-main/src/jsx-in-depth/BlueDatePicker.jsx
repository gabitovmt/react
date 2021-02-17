import React from 'react';

const MyComponents = {
  DatePicker: function DatePicker(props) {
    return <div>Представьте, что здесь цвет {props.color} виджета выбора даты</div>
  }
}

function BlueDatePicker() {
  return <MyComponents.DatePicker color="blue" />;
}

export default BlueDatePicker;
