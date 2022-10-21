/**
 * Return query params from object
 * @param {Object} objectData
 * @param {Boolean} querySymbol
 * @returns {string}
 */
export const objectToParams = (objectData, querySymbol = true) => {
  if (!objectData) return ''
  let params = ''
  Object.entries(objectData)
    .forEach((item, index) => {
      if (item?.[1] !== undefined && item?.[1] !== '') {
        params += (index !== 0) ? '&' : ''
        if (index === 0) params += querySymbol ? '?' : '&'
        params += `${item[0]}=${encodeURIComponent(item[1])}`
      }
    }, '')

  return params
}
