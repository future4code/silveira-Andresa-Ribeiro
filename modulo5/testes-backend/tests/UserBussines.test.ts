import { UserBusiness } from "../src/business/UserBusiness"
import { User, USER_ROLES } from "../src/model/User"
import { HashGeneratorMock } from "./mocks/HashGeneratorMock"
import { IdGeneratorMock } from "./mocks/IdGeneratorMock"
import { TokenGeneratorMock } from "./mocks/TokenGeneratorMock"
import { UserDatabaseMock } from "./mocks/UserDatabaseMock"
import { userMock } from "./mocks/UserMock"

const userBusinessMock = new UserBusiness(
  new IdGeneratorMock(),
  new HashGeneratorMock(),
  new TokenGeneratorMock(),
  new UserDatabaseMock() as any
)


describe("getUserById", () => {
  // (a)
  test("Should catch error when id is not registered", async () => {
   expect.assertions(2)

   try {
     await userBusinessMock.getUserById("abc")
   } catch (error: any) {
     expect(error.statusCode).toBe(404)
     expect(error.message).toBe("User not found")
   }
 })

  // (b)
  test("Should return respective user when id is registered", async () => {

    try {
      const getUserById = jest.fn((id: string) => {
        return userBusinessMock.getUserById(id)
      })

      const result = await getUserById("001")

      expect(getUserById).toHaveBeenCalledWith("001")

      expect(result).toEqual({
        id: "001",
        name: "astrodev",
        email: "astrodev@gmail.com",
        role: "NORMAL",
      })
    } catch (error: any) {
      console.log(error.message)
    } finally {
      expect.assertions(2)
    }
  })
})


describe("getAllUsers", () => {
  // a
  test("Should catch error when role is not ADMIN", async () => {
    expect.assertions(2)
    
    try {
      await userBusinessMock.getAllUsers(USER_ROLES.NORMAL)
    } catch (error: any) {
      expect(error.statusCode).toBe(401)
      expect(error.message).toBe("You must be an admin to access this endpoint")
    }
  })

  // b
  test("Should return all users when authorized", async () => {
    expect.assertions(3)
    
    try {
      const getAllUsers = jest.fn(
        (role: USER_ROLES) => userBusinessMock.getAllUsers(role)
      )

      const result = await getAllUsers(USER_ROLES.ADMIN)

      expect(getAllUsers).toHaveBeenCalledWith(USER_ROLES.ADMIN)
      expect(result).toContainEqual({
        id: "002",
        name: "astrodev2",
        email: "astrodev2@gmail.com",
        role: "ADMIN",
      })
      expect(result).toContainEqual({
        id: "id_mock_normal",
        name: "bananinha",
        email: "bananinha@gmail.com",
        role: "NORMAL",
      })
    } catch (error: any) {
      console.log(error.message)
    }
  })
})


describe("getProfile", () => {
  // a
  test("User don't exist", async () => {
    expect.assertions(2)
    
    try {
      await userBusinessMock.getProfile("003")
    } catch (error: any) {
      expect(error.statusCode).toBe(404)
      expect(error.message).toBe("User not found")
    }
  })

  // b
  test("User exist", async () => {

    try {
      const getProfile = jest.fn((id: string) => userBusinessMock.getUserById(id))

      const result = await getProfile("002")

      expect(getProfile).toHaveBeenCalledWith("002")

      expect(result).toContainEqual({
        id: "002",
        name: "astrodev2",
        email: "astrodev2@gmail.com",
        role: "ADMIN",
      })
    } catch (error: any) {
      console.log(error.message)
    }
  })
})