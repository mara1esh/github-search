import "./styles.scss";

const Loader = () => {
  return (
    <div className="c-loader">
      <svg height="60" width="60">
        <circle
          stroke="#e0e0e0"
          strokeWidth="4"
          fill="transparent"
          r="25"
          cx="30"
          cy="30"
        />
        <circle
          stroke="#5299f5"
          strokeWidth="5"
          fill="transparent"
          r="25"
          cx="30"
          cy="30"
        />
      </svg>
    </div>
  );
};

export { Loader };
