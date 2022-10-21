import axios from 'axios'

/**
 * Download file from a url
 * @param {String} url
 * @param {String} name
 * @return {Promise}
 */
export const downloadFile = (url, name = null) => axios({
  url,
  method: 'GET',
  responseType: 'blob' // important
}).then(response => {
  const urlCompose = window.URL.createObjectURL(new window.Blob([response.data]))
  const link = document.createElement('a')
  link.href = urlCompose
  link.setAttribute(
    'download',
    name || response.headers.filename
  )
  document.body.appendChild(link)
  link.click()
})
