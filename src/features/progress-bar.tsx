type ProgressBarProps = {
  progress?: number;
  color?: "orange" | "red" | "green";
  size?: "sm" | "md" | "lg";
};

const ProgresBar = ({ progress, color, size }: ProgressBarProps) => {
  const handleState = (progress: number) => {
    if (progress < 100) {
      return "active";
    }
    if (progress === 100) {
      return "success";
    }
  };
  return (
    <div>
      {handleState(100) && (
        <div className="progress-bar-container">
          <div className={`progress-bar progress-bar--${size} `}>
            <span
              className={`percentage percentage--${progress}  percentage--${color}`}
            ></span>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProgresBar;
