import app from "./app";
import CommentBusiness from "./business/CommentBusiness";
import LikeBusiness from "./business/LikeBusiness";
import { PostBusiness } from "./business/PostBusiness";
import { UserBusiness } from "./business/UserBusiness";
import { CommentController } from "./controller/CommentController";
import { LikeController } from "./controller/LikeController";
import { PostController } from "./controller/PostController";
import { UserController } from "./controller/UserController";
import { CommentDatabase } from "./data/CommentDatabase";
import { LikeDatabase } from "./data/LikeDatabase";
import { PostDatabase } from "./data/PostDatabase";
import { UserDatabase } from "./data/UserDatabase";
import { Authenticator } from "./services/Authenticator";
import { GenerateId } from "./services/GenerateId";
import { HashManager } from "./services/HashManager";


const userBusiness = new UserBusiness(
    new UserDatabase(),
    new GenerateId(),
    new HashManager(),
    new Authenticator()
);

const userController = new UserController(
    userBusiness
);

const postBusiness = new PostBusiness(
    new PostDatabase(),
    new GenerateId(),
    new HashManager(),
    new Authenticator(),
)
const postController = new PostController(
    postBusiness
)

const likesBusiness = new LikeBusiness(
    new LikeDatabase(),
    new PostDatabase(),
    new Authenticator()
)
const likesController = new LikeController(
    likesBusiness
)

const commentBusiness = new CommentBusiness(
    new CommentDatabase(),
    new PostDatabase(),
    new Authenticator(),
    new GenerateId()
)
const commentController = new CommentController(
    commentBusiness
)


app.post("/user/signup", userController.signUp)

app.post("/user/login", userController.login)

app.post("/user/like", likesController.like)

app.delete("/user/dislike", likesController.dislike)

app.post("/post", postController.createPost)

app.get("/post/:id", postController.getPostById)

app.post("/post/comment", commentController.comment)

