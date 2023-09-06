export const buildQueryString = (settings: any): string => {
  const parameters = []

  for (const key in settings) {
    if (settings[key] !== undefined && settings[key] !== '') {
      parameters.push(`${key}=${encodeURIComponent(settings[key])}`)
    }
  }
  return parameters.join('&')
}
