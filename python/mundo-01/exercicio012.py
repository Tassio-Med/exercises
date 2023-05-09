preco = float(input('Qual é o preço do produto R$'))
desconto = int(input('Quanto você quer de desconto? '))
novo = preco - (preco * desconto / 100)
print('O produto que custava R${:.2f} na promoção com desconto de {}% vai custar R${:.2f}'
  .format(preco, desconto, novo))