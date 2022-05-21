import React from "react";

export default function CompatibilityBar({name, value}) {
  return (
    <div>
      <h4 className="mt-2 compatibility-sign">{name}</h4>
      <div className="progress mt-1">
        <div
          className="progress-bar"
          role="progressbar"
          style={{ width: value+"%" }}
          aria-valuenow="75"
          aria-valuemin="0"
          aria-valuemax="100"
        ></div>
      </div>
    </div>
  );
}
