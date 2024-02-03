export const formatNumber = (value: number) => {
  if (value >= 1000000000) {
    return `${Math.floor(value / 1000000000)}B`
  }

  if (value >= 1000000) {
    return `${Math.floor(value / 1000000)}M`
  }

  if (value >= 1000) {
    return `${Math.floor(value / 1000)}K`
  }

  return value
}
