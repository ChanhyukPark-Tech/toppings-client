const replaceSpace = <T extends string>(text: string) => {
  return text.replaceAll(" ", "") as T;
};

export default replaceSpace;
