/* eslint-disable no-unused-expressions */
const addCart = (id, quantity = 1) => {
  let cartItem = {};
  const exist = getCart();
  if (!exist) {
    cartItem[id] = quantity;
  } else {
    cartItem = JSON.parse(exist);
    const newitem = cartItem[id] + quantity;
    cartItem[id] ? (cartItem[id] = newitem) : (cartItem[id] = quantity);
  }
  updateCart(cartItem);
};

const dicrement = (id) => {
  let cartItem = {};
  const exist = getCart();
  if (exist) {
    cartItem = JSON.parse(exist);
    const newitem = cartItem[id] - 1;
    cartItem[id] ? (cartItem[id] = newitem) : (cartItem[id] = 0);
  }
  updateCart(cartItem);
};

const remove = (id) => {
  const exisit = getCart();
  if (exisit) {
    const add_product = JSON.parse(exisit);
    delete add_product[id];
    updateCart(add_product);
  }
};

const getCart = () => {
  return localStorage.getItem("add_product");
};
const getStorageItem = () => {
  return getCart() ? JSON.parse(getCart()) : {};
};

const updateCart = (item) => {
  localStorage.setItem("add_product", JSON.stringify(item));
};

export { addCart, updateCart, getStorageItem, dicrement, remove };
