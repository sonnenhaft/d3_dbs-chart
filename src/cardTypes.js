export const DBS_PAYLAH = 'paylah'

const cardTypes = [
  { key: 'visa', value: 'Visa', color: '#ff6384' },
  { key: 'american_express', value: 'American Express', color: '#36a2eb' },
  { key: DBS_PAYLAH, value: 'DBS PayLah', color: '#ffce56' }
]

export default cardTypes

export const cardsMap = cardTypes.reduce((cardsMap, { key, value }) => {
  cardsMap[key] = value
  return cardsMap
}, {})

export const getRandomTransaction = (type, maxAmount = 1000) => ({
  type: type || cardTypes[Math.floor(Math.random() * 3)].key,
  amount: maxAmount - Math.floor(Math.random() * maxAmount)
})
