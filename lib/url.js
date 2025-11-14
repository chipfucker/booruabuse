export function getUrl(base, obj) {
    const params = new URLSearchParams(obj);
    const url = new URL(base + "?" + params);
    return url.href;
}