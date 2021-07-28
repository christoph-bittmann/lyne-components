/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
import { InterfaceButtonAttributes } from "./components/lyne-cta-button/lyne-cta-button.d";
import { InterfaceHeadingAttributes } from "./components/lyne-heading/lyne-heading.d";
export namespace Components {
    interface LyneAlert {
    }
    interface LyneCtaButton {
        /**
          * Id which is send in the click event payload
         */
        "eventId"?: string;
        /**
          * Label text to show on the button
         */
        "label": string;
        /**
          * @sampleDocTag sampleName - sampleValue
          * @sampleDocTag2 sampleName2 - sampleValue2
         */
        "samplePropForJSDocs": string;
        /**
          * Variant of the button, like primary, secondary etc.
         */
        "variant"?: InterfaceButtonAttributes['variant'];
    }
    interface LyneCtaButtonNoShadow {
        /**
          * Id which is send in the click event payload
         */
        "eventId"?: string;
        /**
          * Label text to show on the button
         */
        "label": string;
        /**
          * @sampleDocTag sampleName - sampleValue
          * @sampleDocTag2 sampleName2 - sampleValue2
         */
        "samplePropForJSDocs": string;
    }
    interface LyneCtaButtonScoped {
        /**
          * Id which is send in the click event payload
         */
        "eventId"?: string;
        /**
          * Label text to show on the button
         */
        "label": string;
        /**
          * @sampleDocTag sampleName - sampleValue
          * @sampleDocTag2 sampleName2 - sampleValue2
         */
        "samplePropForJSDocs": string;
    }
    interface LyneFooter {
        "footertitle": string;
    }
    interface LyneFooterBottom {
    }
    interface LyneFooterColumn {
    }
    interface LyneFooterColumnLinkList {
    }
    interface LyneFooterColumnLinkListItem {
        "external": string;
        "href": string;
        "label": string;
    }
    interface LyneFooterColumnRte {
    }
    interface LyneFooterColumnTitle {
        "columntitle": string;
    }
    interface LyneFooterColumns {
        "footertitle": string;
    }
    interface LyneFooterLinksBottom {
    }
    interface LyneHeading {
        /**
          * Heading level
         */
        "level": InterfaceHeadingAttributes['level'];
        /**
          * Text for the Heading
         */
        "text": string;
        /**
          * Visual level for the heading
         */
        "visualLevel": InterfaceHeadingAttributes['visualLevel'];
    }
    interface LyneLink {
        /**
          * Link to use as href
         */
        "link": string;
        /**
          * If true, target=_blank will be set on the link
         */
        "openInNewWindow": boolean;
        /**
          * Text to show for the link
         */
        "text": string;
    }
    interface LyneSeoTestNoShadow {
        /**
          * Title for the Test
         */
        "heading": string;
        /**
          * Text for the Test
         */
        "text": string;
    }
    interface LyneSeoTestNoShadowSlot {
    }
    interface LyneSeoTestShadow {
        /**
          * Title for the Test
         */
        "heading": string;
        /**
          * Text for the Test
         */
        "text": string;
    }
    interface LyneSeoTestShadowSlot {
    }
}
declare global {
    interface HTMLLyneAlertElement extends Components.LyneAlert, HTMLStencilElement {
    }
    var HTMLLyneAlertElement: {
        prototype: HTMLLyneAlertElement;
        new (): HTMLLyneAlertElement;
    };
    interface HTMLLyneCtaButtonElement extends Components.LyneCtaButton, HTMLStencilElement {
    }
    var HTMLLyneCtaButtonElement: {
        prototype: HTMLLyneCtaButtonElement;
        new (): HTMLLyneCtaButtonElement;
    };
    interface HTMLLyneCtaButtonNoShadowElement extends Components.LyneCtaButtonNoShadow, HTMLStencilElement {
    }
    var HTMLLyneCtaButtonNoShadowElement: {
        prototype: HTMLLyneCtaButtonNoShadowElement;
        new (): HTMLLyneCtaButtonNoShadowElement;
    };
    interface HTMLLyneCtaButtonScopedElement extends Components.LyneCtaButtonScoped, HTMLStencilElement {
    }
    var HTMLLyneCtaButtonScopedElement: {
        prototype: HTMLLyneCtaButtonScopedElement;
        new (): HTMLLyneCtaButtonScopedElement;
    };
    interface HTMLLyneFooterElement extends Components.LyneFooter, HTMLStencilElement {
    }
    var HTMLLyneFooterElement: {
        prototype: HTMLLyneFooterElement;
        new (): HTMLLyneFooterElement;
    };
    interface HTMLLyneFooterBottomElement extends Components.LyneFooterBottom, HTMLStencilElement {
    }
    var HTMLLyneFooterBottomElement: {
        prototype: HTMLLyneFooterBottomElement;
        new (): HTMLLyneFooterBottomElement;
    };
    interface HTMLLyneFooterColumnElement extends Components.LyneFooterColumn, HTMLStencilElement {
    }
    var HTMLLyneFooterColumnElement: {
        prototype: HTMLLyneFooterColumnElement;
        new (): HTMLLyneFooterColumnElement;
    };
    interface HTMLLyneFooterColumnLinkListElement extends Components.LyneFooterColumnLinkList, HTMLStencilElement {
    }
    var HTMLLyneFooterColumnLinkListElement: {
        prototype: HTMLLyneFooterColumnLinkListElement;
        new (): HTMLLyneFooterColumnLinkListElement;
    };
    interface HTMLLyneFooterColumnLinkListItemElement extends Components.LyneFooterColumnLinkListItem, HTMLStencilElement {
    }
    var HTMLLyneFooterColumnLinkListItemElement: {
        prototype: HTMLLyneFooterColumnLinkListItemElement;
        new (): HTMLLyneFooterColumnLinkListItemElement;
    };
    interface HTMLLyneFooterColumnRteElement extends Components.LyneFooterColumnRte, HTMLStencilElement {
    }
    var HTMLLyneFooterColumnRteElement: {
        prototype: HTMLLyneFooterColumnRteElement;
        new (): HTMLLyneFooterColumnRteElement;
    };
    interface HTMLLyneFooterColumnTitleElement extends Components.LyneFooterColumnTitle, HTMLStencilElement {
    }
    var HTMLLyneFooterColumnTitleElement: {
        prototype: HTMLLyneFooterColumnTitleElement;
        new (): HTMLLyneFooterColumnTitleElement;
    };
    interface HTMLLyneFooterColumnsElement extends Components.LyneFooterColumns, HTMLStencilElement {
    }
    var HTMLLyneFooterColumnsElement: {
        prototype: HTMLLyneFooterColumnsElement;
        new (): HTMLLyneFooterColumnsElement;
    };
    interface HTMLLyneFooterLinksBottomElement extends Components.LyneFooterLinksBottom, HTMLStencilElement {
    }
    var HTMLLyneFooterLinksBottomElement: {
        prototype: HTMLLyneFooterLinksBottomElement;
        new (): HTMLLyneFooterLinksBottomElement;
    };
    interface HTMLLyneHeadingElement extends Components.LyneHeading, HTMLStencilElement {
    }
    var HTMLLyneHeadingElement: {
        prototype: HTMLLyneHeadingElement;
        new (): HTMLLyneHeadingElement;
    };
    interface HTMLLyneLinkElement extends Components.LyneLink, HTMLStencilElement {
    }
    var HTMLLyneLinkElement: {
        prototype: HTMLLyneLinkElement;
        new (): HTMLLyneLinkElement;
    };
    interface HTMLLyneSeoTestNoShadowElement extends Components.LyneSeoTestNoShadow, HTMLStencilElement {
    }
    var HTMLLyneSeoTestNoShadowElement: {
        prototype: HTMLLyneSeoTestNoShadowElement;
        new (): HTMLLyneSeoTestNoShadowElement;
    };
    interface HTMLLyneSeoTestNoShadowSlotElement extends Components.LyneSeoTestNoShadowSlot, HTMLStencilElement {
    }
    var HTMLLyneSeoTestNoShadowSlotElement: {
        prototype: HTMLLyneSeoTestNoShadowSlotElement;
        new (): HTMLLyneSeoTestNoShadowSlotElement;
    };
    interface HTMLLyneSeoTestShadowElement extends Components.LyneSeoTestShadow, HTMLStencilElement {
    }
    var HTMLLyneSeoTestShadowElement: {
        prototype: HTMLLyneSeoTestShadowElement;
        new (): HTMLLyneSeoTestShadowElement;
    };
    interface HTMLLyneSeoTestShadowSlotElement extends Components.LyneSeoTestShadowSlot, HTMLStencilElement {
    }
    var HTMLLyneSeoTestShadowSlotElement: {
        prototype: HTMLLyneSeoTestShadowSlotElement;
        new (): HTMLLyneSeoTestShadowSlotElement;
    };
    interface HTMLElementTagNameMap {
        "lyne-alert": HTMLLyneAlertElement;
        "lyne-cta-button": HTMLLyneCtaButtonElement;
        "lyne-cta-button-no-shadow": HTMLLyneCtaButtonNoShadowElement;
        "lyne-cta-button-scoped": HTMLLyneCtaButtonScopedElement;
        "lyne-footer": HTMLLyneFooterElement;
        "lyne-footer-bottom": HTMLLyneFooterBottomElement;
        "lyne-footer-column": HTMLLyneFooterColumnElement;
        "lyne-footer-column-link-list": HTMLLyneFooterColumnLinkListElement;
        "lyne-footer-column-link-list-item": HTMLLyneFooterColumnLinkListItemElement;
        "lyne-footer-column-rte": HTMLLyneFooterColumnRteElement;
        "lyne-footer-column-title": HTMLLyneFooterColumnTitleElement;
        "lyne-footer-columns": HTMLLyneFooterColumnsElement;
        "lyne-footer-links-bottom": HTMLLyneFooterLinksBottomElement;
        "lyne-heading": HTMLLyneHeadingElement;
        "lyne-link": HTMLLyneLinkElement;
        "lyne-seo-test-no-shadow": HTMLLyneSeoTestNoShadowElement;
        "lyne-seo-test-no-shadow-slot": HTMLLyneSeoTestNoShadowSlotElement;
        "lyne-seo-test-shadow": HTMLLyneSeoTestShadowElement;
        "lyne-seo-test-shadow-slot": HTMLLyneSeoTestShadowSlotElement;
    }
}
declare namespace LocalJSX {
    interface LyneAlert {
    }
    interface LyneCtaButton {
        /**
          * Id which is send in the click event payload
         */
        "eventId"?: string;
        /**
          * Label text to show on the button
         */
        "label"?: string;
        /**
          * @sampleDocTag sampleName - sampleValue
          * @sampleDocTag2 sampleName2 - sampleValue2
         */
        "samplePropForJSDocs"?: string;
        /**
          * Variant of the button, like primary, secondary etc.
         */
        "variant"?: InterfaceButtonAttributes['variant'];
    }
    interface LyneCtaButtonNoShadow {
        /**
          * Id which is send in the click event payload
         */
        "eventId"?: string;
        /**
          * Label text to show on the button
         */
        "label"?: string;
        /**
          * @sampleDocTag sampleName - sampleValue
          * @sampleDocTag2 sampleName2 - sampleValue2
         */
        "samplePropForJSDocs"?: string;
    }
    interface LyneCtaButtonScoped {
        /**
          * Id which is send in the click event payload
         */
        "eventId"?: string;
        /**
          * Label text to show on the button
         */
        "label"?: string;
        /**
          * @sampleDocTag sampleName - sampleValue
          * @sampleDocTag2 sampleName2 - sampleValue2
         */
        "samplePropForJSDocs"?: string;
    }
    interface LyneFooter {
        "footertitle"?: string;
    }
    interface LyneFooterBottom {
    }
    interface LyneFooterColumn {
    }
    interface LyneFooterColumnLinkList {
    }
    interface LyneFooterColumnLinkListItem {
        "external"?: string;
        "href"?: string;
        "label"?: string;
    }
    interface LyneFooterColumnRte {
    }
    interface LyneFooterColumnTitle {
        "columntitle"?: string;
    }
    interface LyneFooterColumns {
        "footertitle"?: string;
    }
    interface LyneFooterLinksBottom {
    }
    interface LyneHeading {
        /**
          * Heading level
         */
        "level"?: InterfaceHeadingAttributes['level'];
        /**
          * Text for the Heading
         */
        "text"?: string;
        /**
          * Visual level for the heading
         */
        "visualLevel"?: InterfaceHeadingAttributes['visualLevel'];
    }
    interface LyneLink {
        /**
          * Link to use as href
         */
        "link": string;
        /**
          * If true, target=_blank will be set on the link
         */
        "openInNewWindow"?: boolean;
        /**
          * Text to show for the link
         */
        "text": string;
    }
    interface LyneSeoTestNoShadow {
        /**
          * Title for the Test
         */
        "heading"?: string;
        /**
          * Text for the Test
         */
        "text"?: string;
    }
    interface LyneSeoTestNoShadowSlot {
    }
    interface LyneSeoTestShadow {
        /**
          * Title for the Test
         */
        "heading"?: string;
        /**
          * Text for the Test
         */
        "text"?: string;
    }
    interface LyneSeoTestShadowSlot {
    }
    interface IntrinsicElements {
        "lyne-alert": LyneAlert;
        "lyne-cta-button": LyneCtaButton;
        "lyne-cta-button-no-shadow": LyneCtaButtonNoShadow;
        "lyne-cta-button-scoped": LyneCtaButtonScoped;
        "lyne-footer": LyneFooter;
        "lyne-footer-bottom": LyneFooterBottom;
        "lyne-footer-column": LyneFooterColumn;
        "lyne-footer-column-link-list": LyneFooterColumnLinkList;
        "lyne-footer-column-link-list-item": LyneFooterColumnLinkListItem;
        "lyne-footer-column-rte": LyneFooterColumnRte;
        "lyne-footer-column-title": LyneFooterColumnTitle;
        "lyne-footer-columns": LyneFooterColumns;
        "lyne-footer-links-bottom": LyneFooterLinksBottom;
        "lyne-heading": LyneHeading;
        "lyne-link": LyneLink;
        "lyne-seo-test-no-shadow": LyneSeoTestNoShadow;
        "lyne-seo-test-no-shadow-slot": LyneSeoTestNoShadowSlot;
        "lyne-seo-test-shadow": LyneSeoTestShadow;
        "lyne-seo-test-shadow-slot": LyneSeoTestShadowSlot;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "lyne-alert": LocalJSX.LyneAlert & JSXBase.HTMLAttributes<HTMLLyneAlertElement>;
            "lyne-cta-button": LocalJSX.LyneCtaButton & JSXBase.HTMLAttributes<HTMLLyneCtaButtonElement>;
            "lyne-cta-button-no-shadow": LocalJSX.LyneCtaButtonNoShadow & JSXBase.HTMLAttributes<HTMLLyneCtaButtonNoShadowElement>;
            "lyne-cta-button-scoped": LocalJSX.LyneCtaButtonScoped & JSXBase.HTMLAttributes<HTMLLyneCtaButtonScopedElement>;
            "lyne-footer": LocalJSX.LyneFooter & JSXBase.HTMLAttributes<HTMLLyneFooterElement>;
            "lyne-footer-bottom": LocalJSX.LyneFooterBottom & JSXBase.HTMLAttributes<HTMLLyneFooterBottomElement>;
            "lyne-footer-column": LocalJSX.LyneFooterColumn & JSXBase.HTMLAttributes<HTMLLyneFooterColumnElement>;
            "lyne-footer-column-link-list": LocalJSX.LyneFooterColumnLinkList & JSXBase.HTMLAttributes<HTMLLyneFooterColumnLinkListElement>;
            "lyne-footer-column-link-list-item": LocalJSX.LyneFooterColumnLinkListItem & JSXBase.HTMLAttributes<HTMLLyneFooterColumnLinkListItemElement>;
            "lyne-footer-column-rte": LocalJSX.LyneFooterColumnRte & JSXBase.HTMLAttributes<HTMLLyneFooterColumnRteElement>;
            "lyne-footer-column-title": LocalJSX.LyneFooterColumnTitle & JSXBase.HTMLAttributes<HTMLLyneFooterColumnTitleElement>;
            "lyne-footer-columns": LocalJSX.LyneFooterColumns & JSXBase.HTMLAttributes<HTMLLyneFooterColumnsElement>;
            "lyne-footer-links-bottom": LocalJSX.LyneFooterLinksBottom & JSXBase.HTMLAttributes<HTMLLyneFooterLinksBottomElement>;
            "lyne-heading": LocalJSX.LyneHeading & JSXBase.HTMLAttributes<HTMLLyneHeadingElement>;
            "lyne-link": LocalJSX.LyneLink & JSXBase.HTMLAttributes<HTMLLyneLinkElement>;
            "lyne-seo-test-no-shadow": LocalJSX.LyneSeoTestNoShadow & JSXBase.HTMLAttributes<HTMLLyneSeoTestNoShadowElement>;
            "lyne-seo-test-no-shadow-slot": LocalJSX.LyneSeoTestNoShadowSlot & JSXBase.HTMLAttributes<HTMLLyneSeoTestNoShadowSlotElement>;
            "lyne-seo-test-shadow": LocalJSX.LyneSeoTestShadow & JSXBase.HTMLAttributes<HTMLLyneSeoTestShadowElement>;
            "lyne-seo-test-shadow-slot": LocalJSX.LyneSeoTestShadowSlot & JSXBase.HTMLAttributes<HTMLLyneSeoTestShadowSlotElement>;
        }
    }
}
