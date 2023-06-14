type DeviderProp = {
  marginTop?: "sm" | "md" | "lg";
  marginBottom?: "sm" | "md" | "lg";
};

const Devider = ({ marginTop, marginBottom }: DeviderProp) => {
  return (
    <div
      className={`devider devider--mb--${marginBottom} devider devider--mt--${marginTop}`}
    ></div>
  );
};

export default Devider;
