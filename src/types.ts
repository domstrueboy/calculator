export type Digits = '0' | '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9'
export type Operations = '+' | '-' | '×' | '/' |'√' | '%'
export type Delimeter = ','
export type Parentheses = '(' | ')'

const digits = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
const operations = ['+', '-', '×', '/', '√', '%']
const delimeter = [',']
const parentheses = ['(', ')']

export type AllowedSymbols = Digits | Operations | Delimeter | Parentheses;

export function isAllowedSymbol(symbol: string): symbol is AllowedSymbols {
    return [...digits, ...operations, ...delimeter, ...parentheses].includes(symbol)
}

export function isDigit(symbol: string): symbol is Operations {
    return [...digits].includes(symbol)
}

export function isOperation(symbol: string): symbol is Operations {
    return [...operations].includes(symbol)
}

export type DigitButtons = Digits | '00'
export type OperationButtons = Operations
export type DelimeterButton = Delimeter
export type ActionButtons = 'C' | '='
export type Buttons = DigitButtons | OperationButtons | DelimeterButton | ActionButtons
