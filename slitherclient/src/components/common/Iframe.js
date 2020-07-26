import React from "react";
import { createPortal } from "react-dom";

class Iframe extends React.Component {
  componentDidMount() {
    this.iframeHead = this.node.contentDocument.head;
    this.iframeRoot = this.node.contentDocument.body;
    this.forceUpdate();
  }

  render() {
    const { children, head, ...rest } = this.props;
    return (
      <iframe
        title="the-frame"
        width="100%"
        height="100%"
        {...rest}
        ref={(node) => (this.node = node)}
      >
        {this.iframeHead && createPortal(head, this.iframeHead)}
        {this.iframeRoot && createPortal(children, this.iframeRoot)}
      </iframe>
    );
  }
}

export default Iframe;
