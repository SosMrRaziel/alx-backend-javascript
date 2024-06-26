/* eslint-disable */
function cleanSet(set, start_string) {
  if (
    start_string === '' ||
    typeof start_string !== 'string' ||
    start_string.length === 0
  ) {
    return '';
  }
  return [...set]
    .filter((str) => str.startsWith(start_string))
    .map((str) => str.slice(start_string.length))
    .join('-');
}

export default cleanSet;
