function controls_data(value) {
  let currentWrapper = "mf-response-props-id-145";
  let currentEl = document.getElementById(currentWrapper);

  return currentEl ? currentEl.dataset[value] : false;
}

let is_edit_mode = "" ? true : false;
let message_position = controls_data("messageposition") || "top";

let message_successIcon = controls_data("successicon") || "";
let message_errorIcon = controls_data("erroricon") || "";
let message_editSwitch =
  controls_data("editswitchopen") === "yes" ? true : false;
let message_proClass =
  controls_data("editswitchopen") === "yes" ? "mf_pro_activated" : "";

let is_dummy_markup = is_edit_mode && message_editSwitch ? true : false;

return html`
  <form
    className="metform-form-content"
    ref=${parent.formContainerRef}
    onSubmit=${validation.handleSubmit(parent.handleFormSubmit)}
  >
    ${is_dummy_markup
      ? message_position === "top"
        ? props.ResponseDummyMarkup(message_successIcon, message_proClass)
        : ""
      : ""}
    ${is_dummy_markup
      ? " "
      : message_position === "top"
      ? props.SubmitResponseMarkup`${parent}${state}${message_successIcon}${message_errorIcon}${message_proClass}`
      : ""}

    <!--------------------------------------------------------
                                    			*** IMPORTANT / DANGEROUS ***
                                    			${html``} must be used as in immediate child of "metform-form-main-wrapper"
                                    			class otherwise multistep form will not run at all
                                    			---------------------------------------------------------->

    <div
      className="metform-form-main-wrapper"
      key=${"hide-form-after-submit"}
      ref=${parent.formRef}
    >
      ${html`
        <div
          data-elementor-type="wp-post"
          key="2"
          data-elementor-id="145"
          className="elementor elementor-145"
        >
          <div
            className="elementor-element elementor-element-5338487 e-con-full e-flex sc_layouts_column_icons_position_left e-con e-parent"
            data-id="5338487"
            data-element_type="container"
          >
            <div
              className="elementor-element elementor-element-7778e4b e-con-full e-flex sc_layouts_column_icons_position_left e-con e-child"
              data-id="7778e4b"
              data-element_type="container"
            >
              <div
                className="elementor-element elementor-element-e89d063 elementor-widget__width-initial sc_fly_static elementor-widget elementor-widget-mf-text"
                data-id="e89d063"
                data-element_type="widget"
                data-settings='{"mf_input_name":"mf-name"}'
                data-widget_type="mf-text.default"
              >
                <div className="elementor-widget-container">
                  <div className="mf-input-wrapper rtl">
                    <label
                      className="mf-input-label"
                      htmlFor="mf-input-text-e89d063"
                    >
                      ${parent.decodeEntities(`الاسم`)}
                      <span className="mf-input-required-indicator">*</span>
                    </label>

                    <input
                      type="text"
                      className="mf-input "
                      id="mf-input-text-e89d063"
                      name="mf-name"
                      placeholder="${parent.decodeEntities(`أدخل الاسم`)} "
                      onInput=${parent.handleChange}
                      onBlur=${parent.handleChange}
                      aria-invalid=${validation.errors["mf-name"]
                        ? "true"
                        : "false"}
                      ref=${(el) => {
                        parent.activateValidation(
                          {
                            message: "هذا الحقل مطلوب",
                            minLength: 1,
                            maxLength: "",
                            type: "none",
                            required: true,
                            expression: "null",
                          },
                          el
                        );
                      }}
                    />

                    <${validation.ErrorMessage}
                      errors=${validation.errors}
                      name="mf-name"
                      as=${html`<span className="mf-error-message"></span>`}
                    />
                  </div>
                </div>
              </div>
              <div
                className="elementor-element elementor-element-55195b3 elementor-widget__width-initial sc_fly_static elementor-widget elementor-widget-mf-email"
                data-id="55195b3"
                data-element_type="widget"
                data-settings='{"mf_input_name":"mf-email"}'
                data-widget_type="mf-email.default"
              >
                <div className="elementor-widget-container">
                  <div className="mf-input-wrapper rtl">
                    <label
                      className="mf-input-label"
                      htmlFor="mf-input-email-55195b3"
                    >
                      ${parent.decodeEntities(`ايميل`)}
                      <span className="mf-input-required-indicator">*</span>
                    </label>

                    <input
                      type="email"
                      defaultValue=""
                      className="mf-input "
                      id="mf-input-email-55195b3"
                      name="mf-email"
                      placeholder="${parent.decodeEntities(`أدخل الايميل`)} "
                      onBlur=${parent.handleChange}
                      onFocus=${parent.handleChange}
                      aria-invalid=${validation.errors["mf-email"]
                        ? "true"
                        : "false"}
                      ref=${(el) =>
                        parent.activateValidation(
                          {
                            message: "هذا الحقل مطلوب",
                            emailMessage: "Please enter a valid Email address",
                            minLength: 1,
                            maxLength: "",
                            type: "none",
                            required: true,
                            expression: "null",
                          },
                          el
                        )}
                    />

                    <${validation.ErrorMessage}
                      errors=${validation.errors}
                      name="mf-email"
                      as=${html`<span className="mf-error-message"></span>`}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div
              className="elementor-element elementor-element-54cf7c4 sc_fly_static elementor-widget elementor-widget-mf-telephone"
              data-id="54cf7c4"
              data-element_type="widget"
              data-settings='{"mf_input_name":"mf-phone"}'
              data-widget_type="mf-telephone.default"
            >
              <div className="elementor-widget-container">
                <div className="mf-input-wrapper rtl">
                  <label
                    className="mf-input-label"
                    htmlFor="mf-input-telephone-54cf7c4"
                  >
                    ${parent.decodeEntities(`رقم الهاتف`)}
                    <span className="mf-input-required-indicator"></span>
                  </label>

                  <input
                    type="tel"
                    className="mf-input "
                    id="mf-input-telephone-54cf7c4"
                    name="mf-phone"
                    placeholder="${parent.decodeEntities(`أدخل رقم الهاتف`)} "
                    onInput=${parent.handleChange}
                    aria-invalid=${validation.errors["mf-phone"]
                      ? "true"
                      : "false"}
                    ref=${(el) =>
                      parent.activateValidation(
                        {
                          message: "هذا الحقل مطلوب",
                          minLength: 1,
                          maxLength: "",
                          type: "none",
                          required: false,
                          expression: "null",
                        },
                        el
                      )}
                  />

                  <${validation.ErrorMessage}
                    errors=${validation.errors}
                    name="mf-phone"
                    as=${html`<span className="mf-error-message"></span>`}
                  />
                </div>
              </div>
            </div>
            <div
              className="elementor-element elementor-element-6a43e83 e-con-full e-flex sc_layouts_column_icons_position_left e-con e-child"
              data-id="6a43e83"
              data-element_type="container"
            >
              <div
                className="elementor-element elementor-element-e0d0e04 sc_fly_static elementor-widget elementor-widget-mf-textarea"
                data-id="e0d0e04"
                data-element_type="widget"
                data-settings='{"mf_input_name":"mf-message"}'
                data-widget_type="mf-textarea.default"
              >
                <div className="elementor-widget-container">
                  <div className="mf-input-wrapper rtl">
                    <label
                      className="mf-input-label"
                      htmlFor="mf-input-text-area-e0d0e04"
                    >
                      ${parent.decodeEntities(`رسالتك`)}
                      <span className="mf-input-required-indicator"></span>
                    </label>

                    <textarea
                      className="mf-input mf-textarea "
                      id="mf-input-text-area-e0d0e04"
                      name="mf-message"
                      placeholder="${parent.decodeEntities(`أكتب رسالتك`)} "
                      cols="30"
                      rows="10"
                      onInput=${parent.handleChange}
                      aria-invalid=${validation.errors["mf-message"]
                        ? "true"
                        : "false"}
                      ref=${(el) =>
                        parent.activateValidation(
                          {
                            message: "هذا الحقل مطلوب",
                            minLength: 1,
                            maxLength: "",
                            type: "none",
                            required: false,
                            expression: "null",
                          },
                          el
                        )}
                    ></textarea>

                    <${validation.ErrorMessage}
                      errors=${validation.errors}
                      name="mf-message"
                      as=${html`<span className="mf-error-message"></span>`}
                    />
                  </div>
                </div>
              </div>
              <div
                className="elementor-element elementor-element-1ba4e47 sc_fly_static elementor-widget elementor-widget-mf-gdpr-consent"
                data-id="1ba4e47"
                data-element_type="widget"
                data-settings='{"mf_input_name":"mf-gdpr-consent"}'
                data-widget_type="mf-gdpr-consent.default"
              >
                <div className="elementor-widget-container">
                  <div className="mf-input-wrapper">
                    <div
                      className="mf-checkbox multi-option-input-type"
                      id="mf-input-gdpr-1ba4e47"
                    >
                      <div className="mf-checkbox-option"></div>
                    </div>

                    <${validation.ErrorMessage}
                      errors=${validation.errors}
                      name="mf-gdpr-consent"
                      as=${html`<span className="mf-error-message"></span>`}
                    />
                  </div>
                </div>
              </div>
              <div
                className="elementor-element elementor-element-659186d sc_fly_static elementor-widget elementor-widget-mf-button"
                data-id="659186d"
                data-element_type="widget"
                data-widget_type="mf-button.default"
              >
                <div className="elementor-widget-container">
                  <div
                    className="mf-btn-wraper "
                    data-mf-form-conditional-logic-requirement=""
                  >
                    <button
                      type="submit"
                      className="metform-btn metform-submit-btn "
                      id=""
                    >
                      <span>${parent.decodeEntities(`أرسل رسالتك`)} </span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      `}
    </div>

    ${is_dummy_markup
      ? message_position === "bottom"
        ? props.ResponseDummyMarkup(message_successIcon, message_proClass)
        : ""
      : ""}
    ${is_dummy_markup
      ? " "
      : message_position === "bottom"
      ? props.SubmitResponseMarkup`${parent}${state}${message_successIcon}${message_errorIcon}${message_proClass}`
      : ""}
  </form>
`;
