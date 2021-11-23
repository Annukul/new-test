import decode from "jwt-decode";

export const checkLocalStorage = (item) => {
  if (!localStorage.getItem(item)) {
    return false;
  }
  return true;
};

export const saveToken = (name, data) => {
  localStorage.setItem(name, data);
};

export const removeToken = (name) => {
  localStorage.removeItem(name);
};

export const getDataLocalStorage = (name) => {
  const token = localStorage.getItem(name);
  const decoded = decode(token);
  return decoded;
};
