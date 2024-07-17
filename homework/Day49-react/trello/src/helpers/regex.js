const pattern =
  /[a-zA-Z][a-zA-Z0-9-_\.]+[a-zA-Z0-9]@([a-zA-Z]|[a-zA-Z][a-zA-Z0-9-_]*[a-zA-Z0-9])(\.[a-zA-Z]{2,})+/g;
export const regexEmail = (email) => {
  return pattern.test(email);
};
