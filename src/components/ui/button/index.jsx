import * as styles from "./button.module.scss";

import { Button as ReactAriaButton } from "react-aria-components";

const Button = ({ children, ...props }) => {
  return (
    <ReactAriaButton
      className={`${styles["btn"]} ${styles["btn--primary"]}`}
      {...props}
    >
      {children}
    </ReactAriaButton>
  );
};

export default Button;
