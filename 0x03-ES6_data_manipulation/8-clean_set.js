function cleanSet(set, start_string) {
  if (start_string === '' || typeof start_string !== 'string') {
    return '';
  }
  return [...set]
    .filter((str) => str.startsWith(start_string))
    .map((str) => str.replace(start_string, ''))
    .join('-');
}

export default cleanSet;
