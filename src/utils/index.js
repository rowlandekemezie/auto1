import queryString from "query-string";

/**
 *
 * @param {String} str
 * @return {String}
 */
export const capitalize = str =>
  str.charAt(0).toUpperCase() + str.substr(1).toLowerCase();

/**
 *
 * @param {Array} values
 * @params {Object}
 * @return {Array}
 */
export const renderOptions = (values = [], allOption) =>
  values.reduce(
    (acc, next) => {
      acc.push({ value: next, label: next });
      return acc;
    },
    [{ label: allOption, value: "" }]
  );

/**
 *
 * @param {Object} filters
 * @return {String}
 */
export const buildQueryString = filters => {
  const parsed = queryString.parse(window.location.search);
  const needsUpdate = {};
  for (let key in filters) {
    if (filters.hasOwnProperty(key) && key) needsUpdate[key] = filters[key];
  }
  const query = Object.assign({}, parsed, { ...needsUpdate });

  return queryString.stringify(query);
};

/**
 *
 * @param {Object} item
 * @return {String}
 */
export const saveToCollection = item => {
  const collection = JSON.parse(localStorage.getItem("collection")) || [];
  const isSavedInCollection = getItemFromFavoriteCollection(item);
  let newCollection;
  if (isSavedInCollection) {
    newCollection = collection.filter(i => i.stockNumber !== item.stockNumber);
  } else {
    newCollection = collection.concat(item);
  }
  localStorage.setItem("collection", JSON.stringify(newCollection));
};

/**
 *
 * @param {Object} {}
 * @return {Object}
 */
export const getItemFromFavoriteCollection = ({ stockNumber } = {}) => {
  const collection = JSON.parse(localStorage.getItem("collection") || []);

  return collection.find(item => item.stockNumber === stockNumber);
};

/**
 * @return {Number}
 */
export const initialPageNumber = () => {
  const query = queryString.parse(window.location.search);
  if (Number.isInteger(parseInt(query.page))) {
    return parseInt(query.page);
  }
  return 1;
};
