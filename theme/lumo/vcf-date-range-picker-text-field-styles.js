import { registerStyles, css } from '@vaadin/vaadin-themable-mixin/register-styles.js';
import '@vaadin/vaadin-text-field/theme/lumo/vaadin-text-field.js';

registerStyles(
  'vcf-date-range-picker-text-field',
  css`
      :not(*):placeholder-shown, /* to prevent broken styles on IE */
      :host([dir="rtl"]) [part="value"]:placeholder-shown,
      :host([dir="rtl"]) [part="input-field"] ::slotted(input:placeholder-shown) {
        --_lumo-text-field-overflow-mask-image: none;
      }

      :host([dir="rtl"]) [part="value"],
      :host([dir="rtl"]) [part="input-field"] ::slotted(input) {
        --_lumo-text-field-overflow-mask-image: linear-gradient(to left, transparent, #000 1.25em);
      }

      [part="label"] {
        max-width: 200%;  
      }

      [part="error-message"] {
        max-width: 200%;
        width: 200%;
      }

      [part="value"] {
        --_lumo-text-field-overflow-mask-image: linear-gradient(to left, transparent, #000 0.25em);
      }

      :host([id="startInput"]) [part="input-field"] {
        padding-right:0px;
      }
      :host([id="startInput"]) [part="value"] {
        padding-right:0px;
      }
      :host([id="endInput"]) [part="input-field"] {
        padding-left:0px;
      }
      :host([id="endInput"]) [part="value"] {
        padding-left:0px;
      }
      `,
  { moduleId: 'lumo-vcf-date-range-picker-text-field' }
);