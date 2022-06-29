import { compareSync, genSaltSync, hashSync } from "bcryptjs";


export class HashConfig {

 createHash = (plainText: string): string => {
    const cost = 12;
    const salt: string = genSaltSync(cost);
    const cypherText = hashSync(plainText, salt);

    return cypherText;
  }

 compareHash = (plainText: string, cypherText: string): boolean => {
    return compareSync(plainText, cypherText);
  }
}