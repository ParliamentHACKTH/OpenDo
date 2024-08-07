export const number = {
  parseToNumber,
  formatNumber,
  formatNumberWithMark,
  shortNumber
}

function parseToNumber(text) {
  if (text == 'N/A') return text
  let result = parseFloat(text.replaceAll(',', ''))
  return result
}

export function formatNumber(val, minDigit = 0, maxDigit = 2) {
  if (!Number(val) && val !== 0) {
    return val
  }

  return Number(val).toLocaleString(undefined, {
    minimumFractionDigits: minDigit,
    maximumFractionDigits: maxDigit
  })
}

function formatNumberWithMark(val, minDigit = 0, maxDigit = 2) {
  if (!Number(val) && val !== 0) {
    return val
  }

  let result = Number(val).toLocaleString(undefined, {
    minimumFractionDigits: minDigit,
    maximumFractionDigits: maxDigit
  })
  return result > 0 ? `+${result}` : result
}

function shortNumber(input, digits = 2) {
  if (input) {
    if (isNaN(input)) return input;

    let units = ['M', 'B', 'T'], decimal;

    for (let i = units.length - 1; i >= 0; i--) {
      decimal = Math.pow(1000, i + 2);

      if (input <= -decimal || input >= decimal) {
        return (
          Number(input / decimal).toLocaleString(undefined, { minimumFractionDigits: digits, maximumFractionDigits: digits }) +
          ' ' +
          units[i]
        );
      }
    }

    return Number(input).toLocaleString(undefined, {
      minimumFractionDigits: digits,
      maximumFractionDigits: digits
    });
  }
  return input;
}