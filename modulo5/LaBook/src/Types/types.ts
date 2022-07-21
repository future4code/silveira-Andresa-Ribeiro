export enum TYPE {
    NORMAL = "NORMAL",
    EVENTO = "EVENTO"
}

export type Singup = {
    name: string,
    email: string,
    password: string
}

export type Login = {
    email: string,
    password: string
}

export type CreatePost = {
    photo: string,
    description: string,
    created_at: string,
    type: TYPE,
}

export type Like = {
    post_id: string
}

export type Comments = {
    post_id: string,
    comment: string
}