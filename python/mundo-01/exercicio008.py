distancia = float(input('Digite uma distância em metros: '))
print('A medida de {}m corresponde a \n{}km \n{}hm \n{}dam \n{:.0f}dm \n{:.0f}cm \n{:.0f}mm'
  .format(distancia, (distancia / 1000), (distancia / 100), (distancia / 10), (distancia * 10), (distancia * 100), (distancia * 1000)))