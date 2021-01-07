/**
 * Return query params from object
 * @param {Object} objectData
 * @param {Boolean} querySymbol
 * @returns {string}
 */
export const objectToParams = (objectData, querySymbol = true) => {
  if (!objectData) return '';
  let params = '';
  Object.entries(objectData)
    .forEach((item, index) => {
      if (item?.[1] !== undefined) {
        params += (index !== 0) ? '&' : '';
        params += (index === 0 && querySymbol) ? '?' : '&';
        params += `${item[0]}=${encodeURIComponent(item[1])}`;
      }
    }, '');

  return params;
};
