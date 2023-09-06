export const getDisplayAlignTextForKey = (key: string | number) => {
  const map = {
    '1': '입력일로 보기',
    '6': '협정마감일로 보기',
    '5': '투찰마감일로 보기',
    '2': '개찰일로 보기',
    '2023': '지난 입찰(2023년)',
    '2022': '지난 입찰(2022년)'
  }
  return map[key] || ''
}

export const getDisplayListNumTextForKey = (key: string | number) => {
  const map = {
    '10': '10개씩',
    '20': '20개씩',
    '30': '30개씩',
    '40': '40개씩',
    '50': '50개씩',
    '100': '100개씩',
    '500': '500개씩'
  }
  return map[key] || ''
}
