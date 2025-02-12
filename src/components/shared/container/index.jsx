import * as styles from "./container.module.scss";

const ALLOWED_TYPES = ["div", "section", "article", "main"];

const Container = ({ type = "div", className = "", children }) => {
  // Check if 'type' specified is valid
  if (!ALLOWED_TYPES.includes(type)) {
    throw new Error(
      `Invalid type: ${type}. Allowed types: ${ALLOWED_TYPES.join(", ")}`
    );
  }

  const Component = type;

  return (
    <Component
      className={`${styles.container} ${styles.container}--${type} ${className}`}
    >
      {children}
    </Component>
  );
};

export default Container;
