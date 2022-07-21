import { Post } from "../model/Post";
import { BaseDatabase } from "./BaseDatabase";

export class PostDatabase extends BaseDatabase {
    protected table = "labook_posts"

    createPost = async(post: Post): Promise<void> => {
        try {
            await PostDatabase.connection(this.table)
                .insert(post)

        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message);
        }
    }


    findPostById = async (id: string) => {
        try {
            const post = await PostDatabase
                .connection(this.table)
                .select()
                .where({ id })

            return post
            
        } catch (error: any) {
            let err = error.message || error.sqlMessage
            throw new Error(err)
        }
    }
}