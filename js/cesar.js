const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
const increaseIndex = 13;

function checkSizeChar(char) {
    let size;

    if (alphabet.indexOf(char) === -1) {

        char = char.toLowerCase();
        alphabet.indexOf(char) > -1 ? size = "big" : size = "null";

    } else size = "small";

    return size;
}

function encrypt(text) {
    const textBeforeEncrypt = [...text];
    const textAfterEncrypt = [];
    let flagSize;


    for (let i = 0; i < textBeforeEncrypt.length; i++) {
        let index;
        flagSize = checkSizeChar(textBeforeEncrypt[i]);
        flagSize === "big" ? index = alphabet.indexOf(textBeforeEncrypt[i].toLowerCase()) : index = alphabet.indexOf(textBeforeEncrypt[i]);

        if (index > -1 && index + increaseIndex < alphabet.length) {
            flagSize === "big" ? textAfterEncrypt.push(alphabet[index + increaseIndex].toUpperCase()) : textAfterEncrypt.push(alphabet[index + increaseIndex]);
        }

        if (index > -1 && index + increaseIndex >= alphabet.length) {
            const modulo = (index + increaseIndex) % 26;
            flagSize === "big" ? textAfterEncrypt.push(alphabet[modulo].toUpperCase()) : textAfterEncrypt.push(alphabet[modulo]);
        }
    }

    if (textBeforeEncrypt.length === 0 || textAfterEncrypt.length != textBeforeEncrypt.length) return "Tekst przekazany do zaszyfrowania jest pusty lub nie jest ciągiem znaków";
    else return textAfterEncrypt.join("").replace(",", "");
}

export {
    encrypt
};