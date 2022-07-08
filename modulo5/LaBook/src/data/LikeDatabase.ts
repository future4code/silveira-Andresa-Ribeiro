import { Likes } from '../model/Likes';
import { BaseDatabase } from './BaseDatabase';

export class LikeDatabase extends BaseDatabase {
    protected table = "labook_likes"


    like = async (likes: Likes) => {
        try {
            await LikeDatabase
                .connection(this.table)
                .insert(likes)

        } catch (error: any) {
            let err = error.message || error.sqlMessage
            throw new Error(err)
        }
    }


    dislike = async (likes: Likes) => {
        try {
            await LikeDatabase
                .connection(this.table)
                .delete()
                .where({ author_id: likes.getAuthorId(), post_id: likes.getPostId() })
        } catch (error: any) {
            let err = error.message || error.sqlMessage
            throw new Error(err)
        }
    }


    findingLikes = async (likes: Likes) => {
        try {
            const link = await LikeDatabase
                .connection(this.table)
                .select()
                .where({ author_id: likes.getAuthorId(), post_id: likes.getPostId() })
            return link;
        } catch (error: any) {
            let err = error.message || error.sqlMessage
            throw new Error(err)
        }
    }

}