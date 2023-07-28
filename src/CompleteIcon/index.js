import React from "react";
import { TodoIcon } from "../TodoIcon";

function CompleteIcon({ completed, onComplete }) {
  return (
    <TodoIcon
      type="check"
      color={completed ? "gray" : "#c33a76"}
      onClick={onComplete}
    />
  );
}

export { CompleteIcon };
