import React, { useState, useEffect } from "react";
import emojiList from "./emojiList.json"; // JSON file containing emoji data

const EmojiPicker = ({ onSelect }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedEmoji, setSelectedEmoji] = useState("");
  const [recentEmojis, setRecentEmojis] = useState([]);

  // Filtered emojis based on search term
  const filteredEmojis = emojiList.filter((emoji) => {
    return emoji.keywords.includes(searchTerm.toLowerCase());
  });

  // Update recent emojis on emoji selection
  const handleEmojiSelect = (emoji) => {
    setSelectedEmoji(emoji);
    onSelect(emoji);
    if (!recentEmojis.includes(emoji)) {
      setRecentEmojis([emoji, ...recentEmojis.slice(0, 9)]);
    }
  };

  // Save recent emojis to local storage
  useEffect(() => {
    localStorage.setItem("recentEmojis", JSON.stringify(recentEmojis));
  }, [recentEmojis]);

  // Load recent emojis from local storage on component mount
  useEffect(() => {
    const storedRecentEmojis =
      JSON.parse(localStorage.getItem("recentEmojis")) || [];
    setRecentEmojis(storedRecentEmojis);
  }, []);

  return (
    <div>
      <input
        type="text"
        placeholder="Search emojis..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {filteredEmojis.map((emoji, index) => (
          <span
            key={index}
            style={{ fontSize: "24px", margin: "5px", cursor: "pointer" }}
            onClick={() => handleEmojiSelect(emoji.char)}
          >
            {emoji.char}
          </span>
        ))}
      </div>
      <h3>Recent Emojis:</h3>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {recentEmojis.map((emoji, index) => (
          <span
            key={index}
            style={{ fontSize: "24px", margin: "5px", cursor: "pointer" }}
            onClick={() => handleEmojiSelect(emoji)}
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
