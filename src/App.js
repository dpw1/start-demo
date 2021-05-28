import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="filtered-list">
        <div className="filtered-list__header">
          <div className="filter-panel">
            <div className="filter-panel-toggle dropdown-filter-panel no-body btn-default">
              <div className="dropdown-filter-panel__header">
                <div className="dropdown-filter-panel__header-title">
                  Filter
                </div>
                <div className="dropdown-filter-panel__header-icon" />
              </div>
            </div>
            <div className="filter-panel__search">
              <div className="fieldset fieldset--icon fieldset--with-label">
                <div>
                  <div className="fieldset__field-wrapper">
                    <div className="field field--medium">
                      <span className="fieldset__svg-icon">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="#9C9C9C"
                          viewBox="0 0 16 16"
                          focusable="false">
                          <path d="M5.8 3.1c1-.9 2.1-1.5 3.6-1.5 1.4 0 2.6.5 3.6 1.5.9 1 1.5 2.1 1.5 3.6 0 1.4-.5 2.6-1.5 3.6-1 .9-2.1 1.5-3.6 1.5-1.3 0-2.6-.5-3.5-1.5-1-1-1.5-2.1-1.5-3.6-.1-1.4.3-2.5 1.4-3.6M.8 16c.2 0 .4-.1.6-.2l3.8-3.7.3.2c1 .7 2.3 1.2 3.8 1.2.9 0 1.8-.2 2.6-.5.8-.4 1.5-.8 2.2-1.5.6-.6 1.1-1.3 1.5-2.1.3-.9.4-1.7.4-2.6 0-.9-.2-1.8-.5-2.6-.4-.8-.8-1.5-1.5-2.2-.6-.6-1.3-1.1-2.1-1.5C11 .2 10.2 0 9.3 0c-.9 0-1.8.2-2.6.5-.8.4-1.5.8-2.2 1.5-.6.6-1.1 1.3-1.4 2.1-.4.9-.5 1.7-.5 2.5 0 1.4.4 2.6 1.2 3.8l.2.3-3.7 3.7c-.2.2-.3.4-.3.7 0 .2.1.4.2.6.3.3.5.3.6.3" />
                        </svg>
                      </span>
                      <label className="field__label">Product name, SKU</label>
                      <input type="text" className="field__input" />
                      <div className="field__placeholder">
                        Product name, SKU
                      </div>
                      <span className="field-state--success">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="26px"
                          height="26px"
                          viewBox="0 0 26 26"
                          focusable="false">
                          <path d="M5 12l5.02 4.9L21.15 4c.65-.66 1.71-.66 2.36 0 .65.67.65 1.74 0 2.4l-12.3 14.1c-.33.33-.76.5-1.18.5-.43 0-.86-.17-1.18-.5l-6.21-6.1c-.65-.66-.65-1.74 0-2.41.65-.65 1.71-.65 2.36.01z" />
                        </svg>
                      </span>
                      <span className="field-state--close">
                        <svg
                          version="1.1"
                          xmlns="http://www.w3.org/2000/svg"
                          xmlnsXlink="http://www.w3.org/1999/xlink"
                          x="0px"
                          y="0px"
                          viewBox="0 0 16 16"
                          enableBackground="new 0 0 16 16"
                          xmlSpace="preserve"
                          focusable="false">
                          <path d="M15.6,15.5c-0.53,0.53-1.38,0.53-1.91,0L8.05,9.87L2.31,15.6c-0.53,0.53-1.38,0.53-1.91,0c-0.53-0.53-0.53-1.38,0-1.9l5.65-5.64L0.4,2.4c-0.53-0.53-0.53-1.38,0-1.91c0.53-0.53,1.38-0.53,1.91,0l5.64,5.63l5.74-5.73 c0.53-0.53,1.38-0.53,1.91,0c0.53,0.53,0.53,1.38,0,1.91L9.94,7.94l5.66,5.65C16.12,14.12,16.12,14.97,15.6,15.5z" />
                        </svg>
                      </span>
                    </div>
                    <div className="fieldset__field-prefix" />
                    <div className="fieldset__field-suffix" />
                  </div>
                  <div
                    className="field__error"
                    aria-hidden="true"
                    style={{ display: "none" }}
                  />
                </div>
                <div
                  className="fieldset__note"
                  aria-hidden="true"
                  style={{ display: "none" }}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="filtered-list__body">
          <div className="vertical-filters__sticky-panel">
            <button type="button" className="btn btn-success btn-medium">
              Show Products
            </button>
          </div>
          <div className="ecwid-orders__filter-panel vertical-filters">
            <div className="vertical-filters__names-list">
              <div>
                <div className="vertical-filters__filter-list-item visited">
                  <div className="vertical-filters__filter-name">
                    All products
                  </div>
                  <div className="vertical-filters__filter-count">126</div>
                  <div className="vertical-filters__filter-close" />
                </div>
                <div className="vertical-filters__filter-list-item">
                  <div className="vertical-filters__filter-name">
                    Displayed on storefront
                  </div>
                  <div className="vertical-filters__filter-count">27</div>
                  <div className="vertical-filters__filter-close" />
                </div>
                <div className="vertical-filters__filter-list-item">
                  <div className="vertical-filters__filter-name">
                    Out of stock
                  </div>
                  <div className="vertical-filters__filter-count">8</div>
                  <div className="vertical-filters__filter-close" />
                </div>
                <div className="vertical-filters__filter-list-item">
                  <div className="vertical-filters__filter-name">Disabled</div>
                  <div className="vertical-filters__filter-count">99</div>
                  <div className="vertical-filters__filter-close" />
                </div>
              </div>
            </div>
            <div className="vertical-filters__save-panel">
              <div className="vertical-filters__save-panel-link">
                <a href>Save Filter</a>
              </div>
              <div className="vertical-filters__save-panel-body">
                <div className="fieldset">
                  <div className="field field--small">
                    <span className="fieldset__svg-icon" />
                    <label className="field__label">Filter name</label>
                    <input
                      type="text"
                      className="field__input filter-name"
                      tabIndex={4}
                      maxLength={64}
                    />
                    <div className="field__placeholder">Filter name</div>
                    <span className="field-state--success">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="26px"
                        height="26px"
                        viewBox="0 0 26 26"
                        focusable="false">
                        <path d="M5 12l5.02 4.9L21.15 4c.65-.66 1.71-.66 2.36 0 .65.67.65 1.74 0 2.4l-12.3 14.1c-.33.33-.76.5-1.18.5-.43 0-.86-.17-1.18-.5l-6.21-6.1c-.65-.66-.65-1.74 0-2.41.65-.65 1.71-.65 2.36.01z" />
                      </svg>
                    </span>
                    <span className="field-state--close">
                      <svg
                        version="1.1"
                        xmlns="http://www.w3.org/2000/svg"
                        x="0px"
                        y="0px"
                        viewBox="0 0 16 16"
                        enableBackground="new 0 0 16 16"
                        xmlSpace="preserve"
                        focusable="false">
                        <path d="M15.6,15.5c-0.53,0.53-1.38,0.53-1.91,0L8.05,9.87L2.31,15.6c-0.53,0.53-1.38,0.53-1.91,0c-0.53-0.53-0.53-1.38,0-1.9l5.65-5.64L0.4,2.4c-0.53-0.53-0.53-1.38,0-1.91c0.53-0.53,1.38-0.53,1.91,0l5.64,5.63l5.74-5.73c0.53-0.53,1.38-0.53,1.91,0c0.53,0.53,0.53,1.38,0,1.91L9.94,7.94l5.66,5.65C16.12,14.12,16.12,14.97,15.6,15.5z" />
                      </svg>
                    </span>
                  </div>
                </div>
                <button className="btn btn-default btn-medium vertical-filters__save-panel-button">
                  Save
                </button>
              </div>
            </div>
          </div>
          <div className="filtered-list__items long-list">
            <div className="list-element list-element--compact list-element--has-hover">
              <div className="list-element__toggle">
                <input
                  type="checkbox"
                  defaultValue="on"
                  id="gwt-uid-1455"
                  tabIndex={0}
                  className="list-element__toggle-checkbox"
                />
                <label
                  htmlFor="gwt-uid-1455"
                  className="list-element__toggle-label"
                />
              </div>
              <div className="list-element__image">
                <img src="https://dpbfm6h358sh7.cloudfront.net/default-store/black_dress_160px.jpg" />
              </div>
              <div className="list-element__content">
                <div className="list-element__info">
                  <div className="list-element__header">
                    <div className="list-element__main-info">
                      <div className="list-element__title">
                        <span>SAMPLE. Black Dress</span>
                      </div>
                      <div className="list-element__description">
                        <span className="muted">0001</span>
                      </div>
                    </div>
                    <div className="list-element__price">$44.95</div>
                  </div>
                  <div className="list-element__data-row">
                    Perfect for wearing with your favorite flat sandals or
                    trendy sneakers.
                  </div>
                </div>
                <div className="list-element__actions">
                  <div className="list-element__price">$44.95</div>
                </div>
              </div>
              <div className="list-element__move-forward-arrow" />
            </div>
            <div className="list-element list-element--compact list-element--has-hover">
              <div className="list-element__toggle">
                <input
                  type="checkbox"
                  defaultValue="on"
                  id="gwt-uid-1456"
                  tabIndex={0}
                  className="list-element__toggle-checkbox"
                />
                <label
                  htmlFor="gwt-uid-1456"
                  className="list-element__toggle-label"
                />
              </div>
              <div className="list-element__image">
                <img src="https://dpbfm6h358sh7.cloudfront.net/default-store/black_tank_160px.jpg" />
              </div>
              <div className="list-element__content">
                <div className="list-element__info">
                  <div className="list-element__header">
                    <div className="list-element__main-info">
                      <div className="list-element__title">
                        <span>SAMPLE. Black Tank</span>
                      </div>
                      <div className="list-element__description">
                        <span className="muted">0002</span>
                      </div>
                    </div>
                    <div className="list-element__price">$19.95</div>
                  </div>
                  <div className="list-element__data-row">
                    Perfect for a day in the sun.
                  </div>
                </div>
                <div className="list-element__actions">
                  <div className="list-element__price">$19.95</div>
                </div>
              </div>
              <div className="list-element__move-forward-arrow" />
            </div>
            <div className="list-element list-element--compact list-element--has-hover">
              <div className="list-element__toggle">
                <input
                  type="checkbox"
                  defaultValue="on"
                  id="gwt-uid-1457"
                  tabIndex={0}
                  className="list-element__toggle-checkbox"
                />
                <label
                  htmlFor="gwt-uid-1457"
                  className="list-element__toggle-label"
                />
              </div>
              <div className="list-element__image">
                <img src="https://dpbfm6h358sh7.cloudfront.net/default-store/jade_tank_160px.jpg" />
              </div>
              <div className="list-element__content">
                <div className="list-element__info">
                  <div className="list-element__header">
                    <div className="list-element__main-info">
                      <div className="list-element__title">
                        <span>SAMPLE. Jade Tank</span>
                      </div>
                      <div className="list-element__description">
                        <span className="muted">0003</span>
                      </div>
                    </div>
                    <div className="list-element__price">$18.95</div>
                  </div>
                  <div className="list-element__data-row">
                    This lightweight crinkle gauze tank features an allover
                    floral print.
                  </div>
                </div>
                <div className="list-element__actions">
                  <div className="list-element__price">$18.95</div>
                </div>
              </div>
              <div className="list-element__move-forward-arrow" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
