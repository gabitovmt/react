import React from "react";

export default function WarningBanner(props) {
  return props.warn ? <div className="warning">Предупреждение</div> : null;
}
