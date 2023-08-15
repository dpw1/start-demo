import React, { useEffect, useState } from "react";
import "./HomepageSettings.scss";

import { useStore } from "./store/store";

export default function HomepageSettings() {
  const setSettings = useStore((state) => state.setSettings);
  const [isEnabled, setIsEnabled] = useState(false);

  return (
    <div className="HomepageSettings">
      <div className="form-area__content form-area__content--no-margin">
        <div className="text-default">
          <label className="checkbox micro">
            <input
              name=""
              checked={isEnabled}
              onChange={() => {
                setIsEnabled(!isEnabled);
                setSettings({
                  isEnabled: !isEnabled,
                });
                return;
              }}
              type="checkbox"
            />{" "}
            <div
              className="HomepageSettings-text"
              data-on="App is visible on storefront"
              data-off="App is not visible on storefront">
              {" "}
              <div />{" "}
            </div>
          </label>
        </div>{" "}
      </div>
    </div>
  );
}
