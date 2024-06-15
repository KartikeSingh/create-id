import { lib } from "crypto-js";
import { STRING, NUMBER, SYMBOLS } from "./constants";

export function randomId(length = 10, type: randomType | randomType[] = ["letter", "number"]): string {
	let data: string[] = [];

	if (!Array.isArray(type)) {
		throw new TypeError("Expected a string or an array");
	}

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
	} else {
		for (const t of type) {
			switch (t) {
				case "number":
					if (!data.includes("0"))
						data.push(...NUMBER);

					break;
				case "letter":
					if (!data.includes("A"))
						data.push(...STRING);

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

	return [...lib.WordArray.random(length * 4).words].reduce((a, b) => a + data[Math.floor(b % data.length)], "");
}

export default randomId;

type randomType = "letter" | "number" | "symbol";