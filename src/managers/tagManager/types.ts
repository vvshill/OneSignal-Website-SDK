import { TagsObject } from '../../models/Tags';

export interface ITagManager {
    syncTags: () => Promise<TagsObject|null>;
    storeTagValuesToUpdate: (tags: TagsObject) => void;
}