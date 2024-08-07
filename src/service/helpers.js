export function divide100(value) {
  value = parseFloat(value)
  return Number((value / 100.0).toFixed(2))
}

export function changeByPrior(prr, prc) {
  prr = parseFloat(prr)
  prc = parseFloat(prc)
  return Number((prc - prr).toFixed(2))
}

export function percentChangeByChange(prr, prc) {
  prr = parseFloat(prr)
  prc = parseFloat(prc)
  return Number((((prc - prr) / prr) * 100).toFixed(2))
}
