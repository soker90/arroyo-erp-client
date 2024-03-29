export function restoreSettings () {
  let settings = null

  try {
    const storedData = window.localStorage.getItem('settings')

    if (storedData) settings = JSON.parse(storedData)
  } catch (err) {
    // If stored data is not a strigified JSON this might fail,
    // that's why we catch the error
  }

  return settings
}

export function storeSettings (settings) {
  window.localStorage.setItem('settings', JSON.stringify(settings))
}
