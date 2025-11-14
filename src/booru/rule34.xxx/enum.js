import Enum from "#lib/enum.js";

export let PostRating = Enum([ "Safe", "Questionable", "Explicit" ]);
export let PostStatus = Enum([ "Active", "Flagged", "Deleted" ]);

export let TagType = Enum([
    "Copyright",
    "Character",
    "Artist",
    "General",
    "Metadata"
]).setProperties({ "Null": null });