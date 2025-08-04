//IF

void main() {
  int idade = 18;
  
  if (idade >= 18) {
    print("Maior de idade");
  } else {
    print("Menor de idade");
  }
}

//SWITCH

void main() {
  String dia = "segunda";

  switch (dia) {
    case "segunda":
      print("Dia útil");
      break;
    case "sábado":
      print("Final de semana");
      break;
    default:
      print("Dia não reconhecido");
  }
}