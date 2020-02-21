const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
const increaseIndex = 13;

function encrypt(text) {
    const textBeforeEncrypt = [...text];
    const textAfterEncrypt = [];


    for (let i = 0; i < textBeforeEncrypt.length; i++) {
        const index = alphabet.indexOf(textBeforeEncrypt[i]);

        if (index > -1 && index + increaseIndex < alphabet.length) {
            textAfterEncrypt.push(alphabet[index + increaseIndex]);
        }

        if (index > -1 && index + increaseIndex >= alphabet.length) {
            const modulo = (index + increaseIndex) % 26;
            textAfterEncrypt.push(alphabet[modulo]);
        }
    }

    if (textBeforeEncrypt.length === 0 || textAfterEncrypt.length != textBeforeEncrypt.length) return "Tekst przekazany do zaszyfrowania jest pusty lub nie jest ciągiem znaków";
    else return textAfterEncrypt.join("").replace(",", "");
}

export {
    encrypt
};