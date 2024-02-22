const data = "Hello World. It is alive!";

export const fakeApi = () => {
  return new Promise((resolve, reject) => {
    if (Math.random() > 0.5) {
      resolve(data);
    } else {
      reject(new Error(data));
    }
  });
};
