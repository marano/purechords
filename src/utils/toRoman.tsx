const numerals = {
  'M': 1000,
  'CM': 900,
  'D': 500,
  'CD': 400,
  'C': 100,
  'XC': 90,
  'L': 50,
  'XL': 40,
  'X': 10,
  'IX': 9,
  'V': 5,
  'IV': 4,
  'I': 1,
}

export default function toRoman(number: number) {
  let result = ''

  Object.entries(numerals).forEach(
    ([romanDigit, value]) => {
      while (number >= value) {
        result += romanDigit
        number -= value
      }
    }
  )

  return result
}
