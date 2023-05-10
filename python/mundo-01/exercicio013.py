salario = float(input('Qual é o salário do funcionário? R$'))
aumento = (15 * salario / 100) + salario
print('Um funcionário que ganhava R${:.2f}, com 15% de aumento, passa a receber R${:.2f}'.format(salario, aumento))