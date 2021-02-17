import React from "react";
import PropTypes from "prop-types";

function Button(props) {
  const { kind, ...other } = props;
  const className = kind === 'primary' ? 'PrimaryButton' : 'SecondaryButton';

  return <button className={className} {...other} />;
}

Button.propTypes = {
  kind: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
}

export default function App() {
  return (
    <div>
      <Button kind="primary" onClick={() => console.log("Кнопка нажата!")}>
        Привет, мир!
      </Button>
    </div>
  );
}
