const toLowerCase = (text) => text.toLowerCase();

const toUpperCase = (text) => text.toUpperCase();

const encodeBase64 = (data) => {
  // string to base64
  const buff = new Buffer(data);
  const stringToBase64 = buff.toString("base64");
  return stringToBase64;
};

const decodeBase64 = (str) => {
  const buff = new Buffer(str, "base64");
  const base64ToString = buff.toString("ascii");
  return base64ToString;
};

export { toLowerCase, toUpperCase, encodeBase64, decodeBase64 };
