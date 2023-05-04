number = int(input('Digite um número: '))
print('O dobro de {} vale {}. \nO triplo de {} vale {:.2f}. \nA raiz quadrada de {} é igual a {:.2f}.'
  .format(number, (number * 2), number, (number * 3), number, pow(number,(1/2))))