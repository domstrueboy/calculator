import { isAllowedSymbol, isDigit, isOperation } from '@/types'

export function solver(expression: string): string | null {

  const containsValidSymbols = expression.split('').filter(symbol => symbol !== ' ').some(s => !isAllowedSymbol(s))
  if (containsValidSymbols) {
    return 'NaN';
  }

  const expressionTokens = expression.split(' ');

  const stack = [];
  const output = [];

  expressionTokens.forEach(token => {
    if (isOperation(token)) {
      stack.push(token)
    } else {
      output.push(token)
    }
  })

  console.log({ stack });
  console.log({ output });
                                 
  return output.join(' ');
}
