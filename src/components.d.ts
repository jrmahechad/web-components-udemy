/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */


import '@stencil/core';




export namespace Components {

  interface MyComponent {
    /**
    * The first name
    */
    'first': string;
    /**
    * The last name
    */
    'last': string;
    /**
    * The middle name
    */
    'middle': string;
  }
  interface MyComponentAttributes extends StencilHTMLAttributes {
    /**
    * The first name
    */
    'first'?: string;
    /**
    * The last name
    */
    'last'?: string;
    /**
    * The middle name
    */
    'middle'?: string;
  }

  interface UcSideDrawer {
    'open': () => void;
    'opened': boolean;
    'title': string;
  }
  interface UcSideDrawerAttributes extends StencilHTMLAttributes {
    'opened'?: boolean;
    'title'?: string;
  }
}

declare global {
  interface StencilElementInterfaces {
    'MyComponent': Components.MyComponent;
    'UcSideDrawer': Components.UcSideDrawer;
  }

  interface StencilIntrinsicElements {
    'my-component': Components.MyComponentAttributes;
    'uc-side-drawer': Components.UcSideDrawerAttributes;
  }


  interface HTMLMyComponentElement extends Components.MyComponent, HTMLStencilElement {}
  var HTMLMyComponentElement: {
    prototype: HTMLMyComponentElement;
    new (): HTMLMyComponentElement;
  };

  interface HTMLUcSideDrawerElement extends Components.UcSideDrawer, HTMLStencilElement {}
  var HTMLUcSideDrawerElement: {
    prototype: HTMLUcSideDrawerElement;
    new (): HTMLUcSideDrawerElement;
  };

  interface HTMLElementTagNameMap {
    'my-component': HTMLMyComponentElement
    'uc-side-drawer': HTMLUcSideDrawerElement
  }

  interface ElementTagNameMap {
    'my-component': HTMLMyComponentElement;
    'uc-side-drawer': HTMLUcSideDrawerElement;
  }


  export namespace JSX {
    export interface Element {}
    export interface IntrinsicElements extends StencilIntrinsicElements {
      [tagName: string]: any;
    }
  }
  export interface HTMLAttributes extends StencilHTMLAttributes {}

}
