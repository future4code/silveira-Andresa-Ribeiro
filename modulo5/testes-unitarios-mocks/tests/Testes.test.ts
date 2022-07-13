import { performAttack2, validateCharacter } from "../src";
import { Character } from "../src/model/Character";


test("Retornar FALSO quando o nome estiver vazio", () => {
    const result = validateCharacter({
        name: "",
        life: 1500,
        strength: 300,
        defense: 500,
    })

    expect(result).toBe(false);
});


test("Retornar FALSO quando a vida estiver em 0", () => {
    const result = validateCharacter({
        name: "Capitão América",
        life: 0,
        strength: 800,
        defense: 600,
    })

    expect(result).toBe(false);
});


test("Retornar FALSO quando a força estiver em 0", () => {
    const result = validateCharacter({
        name: "Capitão América",
        life: 1500,
        strength: 0,
        defense: 600,
    })

    expect(result).toBe(false);
});


test("Retornar FALSO quando a defesa estiver em 0", () => {
    const result = validateCharacter({
        name: "Capitão América",
        life: 1500,
        strength: 800,
        defense: 0,
    })

    expect(result).toBe(false);
});


test("Retornar FALSO quando a vida ou a força ou a defesa estiver com um valor negativo", () => {
    const result = validateCharacter({
        name: "Capitão América",
        life: 1500,
        strength: -15,
        defense: 600,
    })

    expect(result).toBe(false);
});


test("Retornar TRUE quando todos os inputs são válidos", () => {
    const result = validateCharacter({
        name: "Capitão América",
        life: 1500,
        strength: 800,
        defense: 600,
    })

    expect(result).toBe(true);
});


test("Creating Mocks", () => {
    const validatorMock = jest.fn(() => {
        return true
    })
});


test("Creating Mocks", () => {
    const validatorMock = jest.fn(() => {
        return false
    })
});


test("Should perform attack", () => {
    const validatorMock = jest.fn(() => {
        return true;
    });

    const attacker: Character = {
        name: "Capitão América",
        life: 1500,
        defense: 200,
        strength: 600,
    };

    const defender: Character = {
        name: "Viúva Negra",
        life: 1500,
        defense: 400,
        strength: 800,
    };

    performAttack2(attacker, defender, validatorMock as any);

    expect(defender.life).toEqual(1300);
    expect(validatorMock).toHaveBeenCalled();
    expect(validatorMock).toHaveBeenCalledTimes(2);
    expect(validatorMock).toHaveReturnedTimes(2);
});


test("Should return invalid character error", () => {
    expect.assertions(4);
    const validatorMock = jest.fn(() => {
      return false;
    });

    const attacker: Character = {
      name: "",
      life: 1500,
      defense: 200,
      strength: 600,
    };

    const defender: Character = {
      name: "Kitana",
      life: 1500,
      defense: 400,
      strength: 800,
    };

    try {
      performAttack2(attacker, defender, validatorMock as any);
    } catch (err) {
      expect(err.message).toBe("Invalid character");
      expect(validatorMock).toHaveBeenCalled();
      expect(validatorMock).toHaveBeenCalledTimes(1);
      expect(validatorMock).toHaveReturnedTimes(1);
    }
  });