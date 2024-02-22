export default function useCopyToClipboard() {
  let value;

  const copy = (text) => {
    try {
      navigator.clipboard.writeText(text);
      value = text;
    } catch (e) {
      console.warn(e);
      value = null;
    }
  };

  return {
    value,
    copy,
  };
}
