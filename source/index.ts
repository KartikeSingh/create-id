const STRING = "QWERTYUIOPASDFGHJKLZXCVBNM", STRING2 = STRING.toLowerCase(), NUMBER = "1234567890", SYMBOLS = "!@#$%^&*";

export function randomID(length = 10, type: randomType | randomType[] = ["letter", "number"]): string {
    if (typeof (type) === "string" && (type !== "letter" && type !== "number" && type !== "symbol")) throw new Error("Type should be either 'number' or 'letter', 'symbol' otherwise a array which contains these strings, but we got " + JSON.stringify(type));
    Array.isArray(type) && type.forEach((type, i) => { if (type !== "letter" && type !== "number" && type !== "symbol") throw new Error(`Array of type should conatiner string equal to either 'number' or 'letter', 'symbol' but we got ${JSON.stringify(type)} at index : ${i}`); })
    let id = "", data = "";

    Array.isArray(type) ? type.forEach(v => data += v === "symbol" ? SYMBOLS : v === "letter" ? STRING + STRING2 : NUMBER) : data += type === "symbol" ? SYMBOLS : type === "letter" ? STRING + STRING2 : NUMBER;

    while (id.length < length) id += data[Math.floor(Math.random() * data.length)];

    return id;
}

type randomType = "letter" | "number" | "symbol";