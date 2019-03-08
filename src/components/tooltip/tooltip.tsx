import { Component, State, Prop } from "@stencil/core";

@Component({
  tag: "uc-tooltip",
  styleUrl: "./tooltip.css",
  shadow: true
})
export class Tooltip {
  @State() toggle = false;
  @Prop({ reflectToAttr: true }) title: string;

  onToggleTooltip() {
    this.toggle = !this.toggle;
  }
  
  render() {
    let tooltipContainer = null;
    if (this.toggle) {
      tooltipContainer = <div class="tooltip">{this.title}</div>;
    }
    return (
      <div class="container">
        <slot />
        <span class="icon" onClick={this.onToggleTooltip.bind(this)}>
          ?
        </span>
        {tooltipContainer}
      </div>
    );
  }
}
