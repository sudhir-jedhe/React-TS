import React, { useState } from "react";

const emojis = [
  "😊",
  "😢",
  "😐",
  "😃",
  "😴",
  "😁",
  "😭",
  "😒",
  "😄",
  "😴",
  "😅",
  "😂",
  "😇",
  "😉",
  "😋",
  "😌",
  "😍",
  "😘",
  "😗",
  "😙",
  "😚",
  "😜",
  "😝",
  "😛",
  "😎",
  "😏",
  "😶",
  "😑",
  "😒",
  "😓",
  "😔",
  "😕",
  "😖",
  "😞",
  "😟",
  "😤",
  "😢",
  "😭",
  "😦",
  "😧",
  "😨",
  "😩",
  "😰",
  "😱",
  "😲",
  "😳",
  "😵",
  "😡",
  "😠",
  "😷",
  "🤒",
  "🤕",
  "🤢",
  "🤮",
  "🤧",
  "🥵",
  "🥶",
  "🥴",
  "🤯",
  "🤠",
  "🥳",
  "🥺",
  "🤓",
  "🤥",
  "🤫",
  "🤬",
  "🧐",
  "🤪",
  "🤡",
  "🤠",
  "🥳",
  "🥺",
  "🤓",
  "🤥",
  "🤫",
  "🤬",
  "🧐",
  "🤪",
  "🤡",
];

const EmojiPicker = ({ onSelect }) => {
  const [selectedEmoji, setSelectedEmoji] = useState("");

  const handleEmojiClick = (emoji) => {
    setSelectedEmoji(emoji);
    onSelect(emoji);
  };

  return (
    <div>
      <h3>Select an Emoji:</h3>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {emojis.map((emoji, index) => (
          <span
            key={index}
            style={{ fontSize: "24px", margin: "5px", cursor: "pointer" }}
            onClick={() => handleEmojiClick(emoji)}
          >
            {emoji}
          </span>
        ))}
      </div>
      <h4>Selected Emoji: {selectedEmoji}</h4>
    </div>
  );
};

export default EmojiPicker;
