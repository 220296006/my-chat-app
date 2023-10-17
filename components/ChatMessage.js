import React, { Component } from "react";

class ChatMessage extends Component {
  render() {
    const { position = "left", message } = this.props;
    const isRight = position.toLowerCase() === "right";
    const align = isRight ? "text-right" : "text-left";
    const justify = isRight ? "justify-content-end" : "justify-content-start";
    const messageBoxStyles = {
      maxWidth: "70%",
      flexGrow: 0,
    };

    const messageStyles = {
      fontWeight: 500,
      lineHeight: 1.4,
      whiteSpace: "pre-wrap",
    };
    return (
      <div className={containerClassName}>
        <div className={messageBoxClassName} style={messageBoxStyles}>
          <span className="message-text" style={messageStyles}>
            {message}
          </span>
        </div>
      </div>
    );
  }
}

export default ChatMessage;
