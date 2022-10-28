// @ts-ignore
import { randomBytes } from "node:crypto";

const STRING = [
  'Q', 'W', 'E', 'R', 'T', 'Y',
  'U', 'I', 'O', 'P', 'A', 'S',
  'D', 'F', 'G', 'H', 'J', 'K',
  'L', 'Z', 'X', 'C', 'V', 'B',
  'N', 'M', 
  'q', 'w', 'e', 'r', 't', 'y',
  'u', 'i', 'o', 'p', 'a', 's',
  'd', 'f', 'g', 'h', 'j', 'k',
  'l', 'z', 'x', 'c', 'v', 'b',
  'n', 'm'
];

const NUMBER = [
  '0', '1', '2', '3',
  '4', '5', '6', '7',
  '8', '9'
];

const SYMBOLS = [
  '!', '@', '#',
  '$', '%', '^',
  '&', '*'
];

export function randomID(length = 10, type: randomType | randomType[] = ["letter", "number"]): string {
    let data: string[] = [];

    if (typeof type === "string") {
		switch (type) {
			case "number":
				data.push(...NUMBER);
				break;
			case "letter":
				data.push(...STRING);
				break;
			case "symbol":
				data.push(...SYMBOLS);
				break;
			default:
				throw new Error("Type should be either 'number' or 'letter', 'symbol' otherwise a array which contains these strings, but we got " + JSON.stringify(type));
		}
	} else if (!Array.isArray(type)) {
		throw new TypeError("Expected a string or an array");
	} else {
		for (const t of type) {
			switch (t) {
			case "number":
				if (!data.includes("0"))
					data.push(...NUMBER);
				
				break;
			case "letter":
				if (!data.includes("A"))
					data.push(...NUMBER);
				
				break;
			case "symbol":
				if (!data.includes("!"))
					data.push(...SYMBOLS);
				
				break;
			default:
				throw new Error(`Array of type should contain string equal to either 'number' or 'letter', 'symbol' but we got ${JSON.stringify(t)}`);
			}
		}
	}
    
    return [...randomBytes(length)].reduce((a, b) => a + data[Math.floor(b % data.length)], "");
}

type randomType = "letter" | "number" | "symbol";