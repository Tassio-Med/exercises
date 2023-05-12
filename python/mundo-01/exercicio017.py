from math import hypot
oposto = float(input('Qual é o compimento do cateto oposto? '))
adjacente = float(input('Qual é o compimento do cateto adjacente? '))
hipotenusa = hypot(oposto, adjacente)
print('A hipotenusa vai medir {:.2f}'.format(hipotenusa))