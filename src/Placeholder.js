import Skeleton from "react-loading-skeleton";
import "./Placeholder.scss";

export const Placeholder = () => {
  return (
    <div className="Placeholder">
      <div className="Placeholder-item">
        <Skeleton
          className="Placeholder-image"
          highlightColor={"#ff0000"}
          count={1}
        />

        <Skeleton
          className="Placeholder-title"
          highlightColor={"#ff0000"}
          width={Math.floor(Math.random() * (300 - 150 + 1) + 150)}
          count={1}
        />

        <Skeleton
          className="Placeholder-button"
          highlightColor={"#ff0000"}
          count={1}
        />
      </div>

      <div className="Placeholder-item">
        <Skeleton
          className="Placeholder-image"
          highlightColor={"#ff0000"}
          count={1}
        />

        <Skeleton
          className="Placeholder-title"
          highlightColor={"#ff0000"}
          width={Math.floor(Math.random() * (300 - 150 + 1) + 150)}
          count={1}
        />

        <Skeleton
          className="Placeholder-button"
          highlightColor={"#ff0000"}
          count={1}
        />
      </div>

      <div className="Placeholder-item">
        <Skeleton
          className="Placeholder-image"
          highlightColor={"#ff0000"}
          count={1}
        />

        <Skeleton
          className="Placeholder-title"
          highlightColor={"#ff0000"}
          width={Math.floor(Math.random() * (300 - 150 + 1) + 150)}
          count={1}
        />

        <Skeleton
          className="Placeholder-button"
          highlightColor={"#ff0000"}
          count={1}
        />
      </div>
    </div>
  );
};
