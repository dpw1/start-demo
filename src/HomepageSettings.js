import React, { useEffect, useState } from "react";
import "./HomepageSettings.scss";

import { useStore } from "./store/store";

export default function HomepageSettings() {
  const setSettings = useStore((state) => state.setSettings);
  const [isEnabled, setIsEnabled] = useState(false);
  const [appTitle, setAppTitle] = useState("Complete your purchase");
  const settings = useStore((state) => state.settings);

  useEffect(() => {
    setIsEnabled(settings.isEnabled);
  }, [settings]);

  return (
    <div className="HomepageSettings">
      <div className="HomepageSettings-item HomepageSettings-item--checkbox form-area__content form-area__content--no-margin">
        <div className="HomepageSettings-description">
          <p className="HomepageSettings-text">Show on checkout page</p>

          <p className="HomepageSettings-subtitle">
            {isEnabled ? (
              `The app is enabled on the storefront.`
            ) : (
              <span>
                The app is <b>not</b> enabled on the storefront. It will not
                show up on the checkout page.
              </span>
            )}
          </p>
        </div>
        <div className="HomepageSettings-setting text-default">
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
              data-on="App is enabled on the storefront"
              data-off="App is disabled">
              {" "}
              <div />{" "}
            </div>
          </label>
        </div>{" "}
      </div>

      <div className="HomepageSettings-item form-area__content form-area__content--no-margin">
        <div className="HomepageSettings-description">
          <p className="HomepageSettings-text">App's title</p>

          <p className="HomepageSettings-subtitle">
            Text that is shown above the carousel on the checkout page.
          </p>
        </div>
        <div className="HomepageSettings-setting text-default">
          <div className="HomepageSettings-field field">
            <input
              type="text"
              className="field__input"
              placeholder="Carousel title"
              value={appTitle}
              onChange={(e) => setAppTitle(e.target.value)}
            />{" "}
          </div>
        </div>{" "}
      </div>
    </div>
  );
}
