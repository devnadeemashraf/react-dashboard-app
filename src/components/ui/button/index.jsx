import * as styles from "./button.module.scss";

import { Button as ReactAriaButton } from "react-aria-components";

const Button = ({ children }) => {
  return (
    <ReactAriaButton className={`${styles["btn"]} ${styles["btn--primary"]}`}>
      {children}
    </ReactAriaButton>
  );
};

export default Button;
