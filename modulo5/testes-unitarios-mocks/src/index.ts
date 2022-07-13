import knex from 'knex'
import { config } from 'dotenv'
import { Character } from './model/Character';


config();


export const validateCharacter = (input: Character): boolean => {

    if (
        !input.name ||
        input.life === undefined ||
        input.strength === undefined ||
        input.defense === undefined
    ) {
        return false;
    }

    if (input.life <= 0 || input.strength <= 0 || input.defense <= 0) {
        return false;
    }

    return true;
};


export const performAttack1 = (attacker: Character, defender: Character) => {
    if (!validateCharacter(attacker) || !validateCharacter(defender)) {
        throw new Error("Invalid character")
    }

    if (attacker.strength > defender.defense) {
        defender.life = defender.life - attacker.strength - defender.defense
    }
};


export const performAttack2 = (
    attacker: Character,
    defender: Character,
    validator: (input: Character) => boolean
) => {
    if (!validator(attacker) || !validator(defender)) {
        throw new Error("Invalid character");
    }

    if (attacker.strength > defender.defense) {
        defender.life -= attacker.strength - defender.defense;
    }
};




















export const connection = knex({
    client: "mysql",
    connection: {
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_SCHEMA,
        port: 3306,
        multipleStatements: true
    },
});