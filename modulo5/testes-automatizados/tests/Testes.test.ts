import { User } from "../src/model/User"
import { performPurchase, verifyAge } from "../src/index"
import { Casino, LOCATION, NACIONALITY, UserCasino } from "../src/model/Cassino"


test("Exercício 1.A", () => {
	const user: User = {
		name: "Andresa",
		balance: 100
	}

	const result = performPurchase(user, 40)
	
	expect(result).toEqual({
		name: "Andresa",
		balance: 60
	})
})


test("Exercício 1.B", () => {
	const user: User = {
		name: "Andresa",
		balance: 50
	}

	const result = performPurchase(user, 50)
	
	expect(result).toEqual({
		...user,
		balance: 0
	})
})


test("Exercício 1.C", () => {
	const user: User = {
		name: "Andresa",
		balance: 30
	}

	const result = performPurchase(user, 50)
	
	expect(result).not.toBeDefined()
})


// DESAFIOS


describe("Desafio 3 e 4", () => {

    test("Entrada de brasileiro permitida", () => {
        const brazilian: UserCasino = {
          name: "Andresa",
          age: 27,
          nacionality: NACIONALITY.BRAZILIAN,
        };
    
        const casino: Casino = {
          name: "Balada Coins",
          location: LOCATION.BRAZIL,
        };
    
        const result = verifyAge(casino, [brazilian])

        expect(result.brazilians.allowed).toEqual(["Andresa"]);
      });


      test("Entrada de americano permitida", () => {
        const brazilian: UserCasino = {
          name: "Paulo",
          age: 229,
          nacionality: NACIONALITY.AMERICAN,
        };
    
        const casino: Casino = {
          name: "Balada Coins",
          location: LOCATION.BRAZIL,
        };
    
        const result = verifyAge(casino, [brazilian]);
        expect(result.americans.allowed).toEqual(["Paulo"]);
      });


      test("Ninguém permitido", () => {

        const brazilian1: UserCasino = {
          name: "Miguel BR",
          age: 19,
          nacionality: NACIONALITY.BRAZILIAN,
        };

        const brazilian2: UserCasino = {
            name: "Andrei BR",
            age: 19,
            nacionality: NACIONALITY.BRAZILIAN,
          };
    
        const american1: UserCasino = {
          name: "Adriana EUA",
          age: 19,
          nacionality: NACIONALITY.AMERICAN,
        };

        const american2: UserCasino = {
            name: "Angelo EUA",
            age: 19,
            nacionality: NACIONALITY.AMERICAN,
          };
    
        const casino: Casino = {
          name: "Balada Estelar",
          location: LOCATION.EUA,
        };
    
        const result = verifyAge(casino, [
          brazilian1,
          brazilian2,
          american1,
          american2,
        ])

        expect(result.brazilians.unallowed).toEqual(["Miguel BR", "Andrei BR"])

        expect(result.americans.unallowed).toEqual([
          "Adriana EUA",
          "Angelo EUA",
        ])
      });


      test("2 americanos permitidos e 2 brasileiros não permitidos", () => {

        const brazilian1: UserCasino = {
          name: "Ana BR",
          age: 19,
          nacionality: NACIONALITY.BRAZILIAN,
        };

        const brazilian2: UserCasino = {
            name: "Pedro BR",
            age: 19,
            nacionality: NACIONALITY.BRAZILIAN,
          };
    
        const american1: UserCasino = {
          name: "Ethan EUA",
          age: 21,
          nacionality: NACIONALITY.AMERICAN,
        };

        const american2: UserCasino = {
            name: "Karen EUA",
            age: 21,
            nacionality: NACIONALITY.AMERICAN,
          };
    
        const casino: Casino = {
          name: "Balada Estelar",
          location: LOCATION.EUA,
        };
    
        const result = verifyAge(casino, [
          brazilian1,
          brazilian2,
          american1,
          american2,
        ])

        expect(result.brazilians.unallowed).toEqual(["Ana BR", "Pedro BR"])

        expect(result.americans.allowed).toEqual([
          "Ethan EUA",
          "Karen EUA",
        ])
      });

})