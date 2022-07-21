import { Comment } from '../model/Comment';
import { BaseDatabase } from './BaseDatabase';

export class CommentDatabase extends BaseDatabase {
    protected table = "labook_comments"

    comment = async (comment: Comment) => {
        try {
            await CommentDatabase
                .connection(this.table)
                .insert(comment)

        } catch (error: any) {
            let err = error.message || error.sqlMessage
            throw new Error(err)
        }
    }

}