const { NotImplementedError } = require("../extensions/index.js");

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 *
 * @example
 *
 * const directMachine = new VigenereCipheringMachine();
 *
 * const reverseMachine = new VigenereCipheringMachine(false);
 *
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 *
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 *
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 *
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 *
 */
class VigenereCipheringMachine {
  constructor(noReverse) {
    this.noReverse = noReverse;
    this.alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  }
  encrypt(text, key) {
    if (text === undefined || key === undefined) {
      throw new Error("Incorrect arguments!");
    }
    text = text
      .split("")
      .map((letter) => letter.toUpperCase())
      .join("");
    let keyText = "";
    let encryptedText = "";
    let keyId = 0;
    for (let i = 0; i < text.length; i++) {
      if (this.alphabet.includes(text[i])) {
        keyText += key[keyId % key.length].toUpperCase();
        keyId++;
        encryptedText +=
          this.alphabet[
            (this.alphabet.indexOf(text[i]) +
              this.alphabet.indexOf(keyText[i])) %
              26
          ];
      } else {
        keyText += text[i];
        encryptedText += text[i];
      }
    }

    return this.noReverse === false
      ? encryptedText.split("").reverse().join("")
      : encryptedText;
  }
  decrypt(text, key) {
    if (text === undefined || key === undefined) {
      throw new Error("Incorrect arguments!");
    }

    let keyText = "";
    let decryptedText = "";
    let keyId = 0;

    for (let i = 0; i < text.length; i++) {
      if (this.alphabet.includes(text[i])) {
        keyText += key[keyId % key.length].toUpperCase();
        keyId++;
        decryptedText +=
          this.alphabet[
            (this.alphabet.indexOf(text[i]) -
              this.alphabet.indexOf(keyText[i]) +
              26) %
              26
          ];
      } else {
        keyText += text[i];
        decryptedText += text[i];
      }
    }

    return this.noReverse === false
      ? decryptedText.split("").reverse().join("")
      : decryptedText;
  }
}

module.exports = {
  VigenereCipheringMachine,
};
