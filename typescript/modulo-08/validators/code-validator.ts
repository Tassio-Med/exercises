import { Validator } from "./validator";

class CodeValidator implements Validator {
  isValid(s: string): boolean {
    const codeRegex = /^[0-9]{5}(?:-[0-9]{3})?$/;
    return codeRegex.test(s);
  }
}

export { CodeValidator };