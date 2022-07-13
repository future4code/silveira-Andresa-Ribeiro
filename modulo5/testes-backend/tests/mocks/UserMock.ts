import { User, USER_ROLES } from "../../src/model/User";

export const userMock = new User(
    "001",
    "astrodev",
    "astrodev@gmail.com",
    "user1password",
    USER_ROLES.NORMAL
)

export const userAdminMock = new User(
    "002",
    "astrodev2",
    "astrodev2@gmail.com",
    "user2password",
    USER_ROLES.ADMIN
) 