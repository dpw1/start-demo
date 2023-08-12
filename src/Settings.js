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
    <div className="Settings">
      <button className="Settings-button" onClick={openModal}>
        <span className="Settings-button-text">Settings</span>
        <span className="Settings-button-icon">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="800px"
            height="800px"
            viewBox="0 0 1024 1024">
            <path
              fill="#000000"
              d="M600.704 64a32 32 0 0 1 30.464 22.208l35.2 109.376c14.784 7.232 28.928 15.36 42.432 24.512l112.384-24.192a32 32 0 0 1 34.432 15.36L944.32 364.8a32 32 0 0 1-4.032 37.504l-77.12 85.12a357.12 357.12 0 0 1 0 49.024l77.12 85.248a32 32 0 0 1 4.032 37.504l-88.704 153.6a32 32 0 0 1-34.432 15.296L708.8 803.904c-13.44 9.088-27.648 17.28-42.368 24.512l-35.264 109.376A32 32 0 0 1 600.704 960H423.296a32 32 0 0 1-30.464-22.208L357.696 828.48a351.616 351.616 0 0 1-42.56-24.64l-112.32 24.256a32 32 0 0 1-34.432-15.36L79.68 659.2a32 32 0 0 1 4.032-37.504l77.12-85.248a357.12 357.12 0 0 1 0-48.896l-77.12-85.248A32 32 0 0 1 79.68 364.8l88.704-153.6a32 32 0 0 1 34.432-15.296l112.32 24.256c13.568-9.152 27.776-17.408 42.56-24.64l35.2-109.312A32 32 0 0 1 423.232 64H600.64zm-23.424 64H446.72l-36.352 113.088-24.512 11.968a294.113 294.113 0 0 0-34.816 20.096l-22.656 15.36-116.224-25.088-65.28 113.152 79.68 88.192-1.92 27.136a293.12 293.12 0 0 0 0 40.192l1.92 27.136-79.808 88.192 65.344 113.152 116.224-25.024 22.656 15.296a294.113 294.113 0 0 0 34.816 20.096l24.512 11.968L446.72 896h130.688l36.48-113.152 24.448-11.904a288.282 288.282 0 0 0 34.752-20.096l22.592-15.296 116.288 25.024 65.28-113.152-79.744-88.192 1.92-27.136a293.12 293.12 0 0 0 0-40.256l-1.92-27.136 79.808-88.128-65.344-113.152-116.288 24.96-22.592-15.232a287.616 287.616 0 0 0-34.752-20.096l-24.448-11.904L577.344 128zM512 320a192 192 0 1 1 0 384 192 192 0 0 1 0-384zm0 64a128 128 0 1 0 0 256 128 128 0 0 0 0-256z"
            />
          </svg>
        </span>
      </button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        portalClassName="Settings"
        contentLabel="Example Modal">
        <div className="Settings-wrapper">
          <button className="Settings-close" onClick={() => setIsOpen(false)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              focusable="false"
              className="icon icon-close"
              fill="none"
              viewBox="0 0 18 17">
              <path
                d="M.865 15.978a.5.5 0 00.707.707l7.433-7.431 7.579 7.282a.501.501 0 00.846-.37.5.5 0 00-.153-.351L9.712 8.546l7.417-7.416a.5.5 0 10-.707-.708L8.991 7.853 1.413.573a.5.5 0 10-.693.72l7.563 7.268-7.418 7.417z"
                fill="currentColor"
              />
            </svg>
          </button>
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
