---
title: Rule34
description: booru-abuse module to access content from rule34.xxx
---

Rule34 is a module for accessing content from [rule34.xxx](https://rule34.xxx/). This package's namesake is from this submodule.

# Description

Traditionally, one would simply fetch from Rule34 using its API URLs.

```js
const post = await fetch(
  "https://api.rule34.xxx/"
  + "?page=dapi&s=post&q=index&json=1&api_key=123abc&user_id=123456"
  + "&id=5823623"
);
```

All the info, even credentials, is to be provided in the URL's search parameters. There are usually _many_ keys, some with lengthy values, some unnecessary&mdash;static, but mandatory for the request&mdash;which makes organizing request info difficult.

Each key has a different function. To name the few in the above example:

- `page`: Whether the response is from the API.
- `s`: What kind of data to return.
- `q`: Always `index`.
- `json`: Whether to return results as JSON.
- `api_key`: Allows access to the API.
- `user_id`: Associates the request with a user on the site.
- `id`: The ID of the requested post.

The reliance on URLs for requests, especially lengthy credentials, make request organization difficult. The common solution is to dynamically create links with a function.

Even with the length of the URLs, the API isn't reliable; each of the different return types have some exclusive info, and even the frontend pages have their own info not found using the APIs.

This package intends to solve that, allowing initialization of constants, simplifying request parameters, and even providing info only found on frontend pages.

With this package, the above example can be simplified. For example:

```js
import { Rule34 } from "booru-abuse";

const post = await Rule34.getPost(5823623);
```

> [!NOTE]
> This example is oversimplified. You can read more about setting up a Rule34 API client [using the guide.](./guide)

## Many requests

Because APIs and frontends have very differing info, multiple requests are made&mdash;typically 2&ndash;4&mdash;per function to resolve all possible info. This makes the package's namesake.

This can have network and API usage limit implications. Each documented function that uses requests will clarify its request usage.

<!-- TODO: remove this but still note methods that use the api multiple times -->

- - -

# Objects

- [`Client`](./Client) &mdash; Client to allow accessing data from the site

- [`Post`](./Post) &mdash; Post from rule34.xxx

# Functions

- [`getPost()`](./getPost) &mdash; Fetches a post by its ID

- [`search()`](./search) &mdash; Fetches an array of posts using a query

# Enumerables

- [`PostRating`](./PostRating) &mdash; Post content ratings

- [`PostStatus`](./PostStatus) &mdash; Post publicity statuses

- [`TagType`](./TagType) &mdash; Tag categories

- - -

# Examples

> [!IMPORTANT]
> The following examples are oversimplified. You can read more about setting up a Rule34 API client [using the guide.](./guide)

In this example, the post at ID '5823623' is fetched and the username of its creator is logged.

```js
const post = await Rule34.getPost(5823623);
console.log(post.creator.name);
// Logs "grovyleslut"
```

This example fetches multiple results, selects the fourth one, and logs whether it's explicit.

```js
Rule34.search("zoologist_(terraria)")
.then(results => {
  const selection = results[3];
  if (selection.rating === Rule34.PostRating.EXPLICIT) {
    console.log("This search's 4th post is explicit!");
  }
});
```
