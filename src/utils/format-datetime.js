export const formatDate = date => {
  return new Date(date)
    .toLocaleString()
    .split(',')
    .reverse()
    .join(', ')
}
