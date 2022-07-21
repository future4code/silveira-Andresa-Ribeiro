import { TYPE } from '../Types/types';

export class Post {
    
    constructor(
        private id: string,
        private photo: string,
        private description: string,
        private created_at: Date,
        private type: TYPE,
        private author_id: string
    ) {}
}