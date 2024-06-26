.typingArea {
    padding: 20px 25px;
    margin: 0 0 20px;
    color: #445d6e;
    font-size: 18px;
    background-color: #fff;
    box-shadow: 0 2px 4px rgba(50, 50, 93, 0.7);
    white-space: pre-wrap;
    border-radius: 4px;
    line-height: 1.9em;
    flex: 0 0 90%;
    width: 90%;
  }
  
  .blinkingCursor {
    width: 2px;
    height: 1em;
    background: #607d8b;
    display: inline-block;
    margin: 0 1px;
    animation: blink 0.9s infinite;
  }
  
  @keyframes blink {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }