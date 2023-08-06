import React, { useEffect, useState } from "react";

import Modal from "react-modal";

import "./Settings.scss";
import { useStore } from "./store/store";

export default function Settings() {
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const [isEnabled, setIsEnabled] = useState(false);

  const setSettings = useStore((state) => state.setSettings);
  const settings = useStore((state) => state.settings);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  useEffect(() => {
    console.log("my settings", settings);

    setIsEnabled(settings.isEnabled);
  }, [settings]);

  return (
    <div>
      <button onClick={openModal}>Settings</button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        portalClassName="Settings"
        contentLabel="Example Modal">
        <div className="Settings-wrapper">
          <h2>Settings</h2>
          <div className="a-card a-card--compact">
            <div className="a-card__paddings">
              <div className="form-area">
                <div className="form-area__title form-area__title--medium">
                  <span className="gwt-InlineLabel">Enable app</span>
                </div>{" "}
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
                      <div data-on="Enabled" data-off="Disabled">
                        {" "}
                        <div />{" "}
                      </div>
                      <span className="checkbox__on-text-placeholder">
                        Enabled
                      </span>
                      <span className="checkbox__off-text-placeholder">
                        Disabled
                      </span>
                    </label>
                  </div>{" "}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
}
