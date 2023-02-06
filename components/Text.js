const Text = ({
  children,
  fontSize = "1.125rem",
  color = "rgba(0, 0, 0, 0.7",
  whiteSpace = "pre-wrap",
  lineHeight = "160%",
  letterSpacing = "0.02em",
  textAlign = "",
}) => {
  return (
    <p
      style={{
        letterSpacing: letterSpacing,
        whiteSpace: whiteSpace,
        lineHeight: lineHeight,
        fontSize: fontSize,
        color: color,
        textAlign: textAlign,
      }}
    >
      {children}
    </p>
  );
};

export default Text;
