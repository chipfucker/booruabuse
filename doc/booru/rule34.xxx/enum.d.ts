/**
 * Rating values for posts.
 */
export declare enum PostRating {
    /**
     * Post that doesn't contain explicit material.
     * 
     * This may only yield results when searching for deleted posts. Use `Questionable`
     * otherwise.
     */
    Safe = 0,

    /**
     * Post that contains suggestive-at-most material.
     */
    Questionable = 1,

    /**
     * Post that contains explicit material.
     */
    Explicit = 2
};

/**
 * Status of posts.
 */
export declare enum PostStatus {
    /**
     * Post that is visible and unflagged.
     */
    Active,

    /**
     * Post that has been reported and is awaiting moderation.
     */
    Flagged,

    /**
     * Post that has been removed and hidden, only being found when searching for
     * deleted posts.
     */
    Deleted
};

/**
 * Types of tags.
 */
export declare enum TagType {
    /**
     * Tag that refers to a copyright.
     */
    Copyright,

    /**
     * Tag that identifies a character or type of character, or covers a vague
     * character description.
     */
    Character,

    /**
     * Tag that credits with an artist alias or explains lack of artist tags.
     */
    Artist,

    /**
     * Tag that describes visuals, activity, or generic interests.
     */
    General,

    /**
     * Tag that describes metadata info regarding a post or its media.
     */
    Metadata,

    /**
     * Tag with errenous `null` type; visualized as 'general' by the site.
     */
    Null = null
};