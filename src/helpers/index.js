const toSnakeCase = (text = '') => {
  return (text.toLowerCase().replace(' ', '_'));
};

export { toSnakeCase };