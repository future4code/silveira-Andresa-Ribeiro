import { CustomError } from "../errors/CustomError";
import { User, stringToUserRole, USER_ROLES } from "../model/User";
import { UserDatabase } from "../data/UserDatabase";
import { HashGenerator } from "../services/hashGenerator";
import { IdGenerator } from "../services/idGenerator";
import { TokenGenerator } from "../services/tokenGenerator";

export class UserBusiness {
   constructor(
      private idGenerator: IdGenerator,
      private hashGenerator: HashGenerator,
      private tokenGenerator: TokenGenerator,
      private userDatabase: UserDatabase
   ) {
   }


   public async getUserById(id: string) {
      try {

         const user = await this.userDatabase.getUserById(id)

         if (!user) {
            throw new CustomError(404, "User not found")
         }

         return {
            id: user.getId(),
            name: user.getName(),
            email: user.getEmail(),
            role: user.getRole()
         }

      } catch (error: any) {
         throw new CustomError(error.statusCode, error.message)
      }
   }


   public async getAllUsers(role: USER_ROLES) {
      if (stringToUserRole(role) !== USER_ROLES.ADMIN) {
         throw new CustomError(401, "You must be an admin to access this endpoint"
        );
      }
      const users = await this.userDatabase.getAllUsers();
  
      return users.map((user) => ({
        id: user.getId(),
        name: user.getName(),
        email: user.getEmail(),
        role: user.getRole(),
      }));
   }


   public async getProfile(id: string) {
      const user = await this.userDatabase.getUserById(id);
  
      if (!user) {
        throw new CustomError(404, "User not found");
      }
  
      return {
        id: user.getId(),
        name: user.getName(),
        email: user.getEmail(),
        role: user.getRole(),
      };
    }
}

export default new UserBusiness(
   new IdGenerator(),
   new HashGenerator(),
   new TokenGenerator(),
   new UserDatabase()
)
