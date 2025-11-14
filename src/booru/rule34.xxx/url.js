import { getUrl } from "#lib/url.js";

const baseHost = "https://rule34.xxx";
const apiHost = "https://api.rule34.xxx";

export function autocomplete(query) {
    
}

export function search(param) {
    return getUrl(baseHost, {
        page: "post",
        s: "list",
        tags: param.query ?? "",
        pid: param.page * 42
    });
}