.checkbox {
    display: none;
  }
  
  .checkbox:checked + .customLabel {
    background: #68c721;
    border-color: #68c721;
  }
  
  .checkbox:checked + .customLabel:after {
    content: "";
  }
  
  .customLabel {
    border: 1px solid #a8acb1;
    background-color: #fff;
    border-radius: 3px;
    min-width: 20px;
    min-height: 20px;
    cursor: pointer;
  }
  
  .customLabel::after {
    width: 12px;
    height: 5px;
    border-left: 2px solid #fff;
    border-bottom: 2px solid #fff;
    display: block;
    transform: rotate(-45deg) translateY(4px) translateX(-1px);
  }
  
  .white .checkbox:checked + .customLabel {
    background: transparent;
    border-color: #a8acb1;
  }
  
  .white .checkbox:checked + .customLabel::after {
    border-color: #2d2d2d;
  }
  
  .item {
    display: flex;
    align-items: center;
    margin: 0 10px 10px 10px;
  }
  
  .item.disabled {
    opacity: 0.3;
  }
  
  .item.disabled .label,
  .item.disabled .customLabel {
    cursor: default;
  }
  
  .inlineItem {
    display: inline-flex;
  }
  
  .label {
    cursor: pointer;
    margin-left: 15px;
    font-size: 14px;
  }