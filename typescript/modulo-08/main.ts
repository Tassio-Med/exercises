import { CodeValidator, EmailValidator } from "./validators";

const email = "tassiohfmed@gmail.com";
const validator = new EmailValidator();
const result = validator.isValid(email);

console.log(`O e-mail ${email} é válido? ${result}`);

const validatorCode = new CodeValidator();
const resultCode = validatorCode.isValid('1234');

console.log(`O endereço 12345 é válido? ${resultCode}`);
