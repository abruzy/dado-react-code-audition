export const validateInput = text => {
  if (text.includes('/')) {
    return true
  }

  return false
}
