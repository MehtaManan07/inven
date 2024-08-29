const RECORDS: Record<string, NodeJS.Timeout> = {};

const debounce = <TA extends Array<unknown>>(
  key: string,
  func: (...args: TA) => void,
  gap = 500
) => {
  return (...args: TA) => {
    clearTimeout(RECORDS[key]);
    const timeoutId = setTimeout(() => {
      func(...args);
      delete RECORDS[key];
    }, gap);
    RECORDS[key] = timeoutId;
  };
};

export default debounce;
