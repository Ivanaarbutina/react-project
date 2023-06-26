type ProgressBarProps = {
  progress: number;
  color?: "orange" | "red" | "green";
  size?: "sm" | "md" | "lg";
  onFinish?: () => void;
};

const ProgresBar = ({ progress , color, size, onFinish }: ProgressBarProps) => {
  const handleProgress = (progress: number): string => {
    if (progress === 100) {
      onFinish && onFinish();
    }
    if( progress > 100){
      return '100%';
    } else if (progress < 0) {
      return '0%';
    } else {
      return `${progress}%`;
    }
  };

  

  return (
    <div>
        <div className="progress-bar-container">
          <div className={`progress-bar  progress-bar--${size} `}>
            <span
              className={`percentage ${progress === 100 ? "percentage--finished" : ""} percentage--${color}`}
              style={{
                width: handleProgress(progress),
              }}
            > </span>
          </div>
        </div>
    </div>
  );
};

export default ProgresBar;
