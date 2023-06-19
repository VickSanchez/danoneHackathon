import React from "react";
import { ProgressSpinner } from "primereact/progressspinner";

export const Loading = () => {
  return (
    <div className="flex justify-content-center align-items-center">
      <ProgressSpinner
        style={{ width: "50px", height: "50px" }}
        strokeWidth="8"
        fill="var(--surface-ground)"
        animationDuration=".5s"
      />
    </div>
  );
};
