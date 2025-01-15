function jsonToString(obj) {
  if (!obj) return '';
  if (typeof obj === 'string') return obj;
  try {
    return JSON.stringify(obj);
  } catch (err) {
    console.log(err);
    return obj || '';
  }
}

export default jsonToString;
