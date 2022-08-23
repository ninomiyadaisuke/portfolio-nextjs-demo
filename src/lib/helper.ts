export const returnCodeToBr = (text: string): string => {
  if (text === '') {
    return text;
  } else {
    return text.replace(/\r?\n/g, '<br/>');
  }
};
