# 404 Pages

404 pages (usually described as a &#39;page not found&#39;) tell users that the page they were trying to access is not there.

Processes and systems should be put in place to prevent users encountering 404 pages in the first place.

## When to use a 404 page

## Why users see 404 pages

There are three main reasons users encounter a 404 page:

1.  they followed a link (URL) that is [broken](#broken-links-or-moved-pages) or pointing to the wrong location
2.  they followed an old link or a link that has expired
3.  they typed or [copied a link](#copied-links) incorrectly

## 404 page design

As with all error messages, we should reassure users that their progress has been saved and then help them to fix the error.

## Broken links or moved pages

There are a few possible reasons why this may happen:

*   if a user clicked a broken link
*   if a user bookmarked a page and the page has been moved or removed

### Broken links

[Testing](#) should catch errors like this but because of the often disjointed nature of the services we build 100% coverage may not always be possible.

If a user has clicked a broken link, we will - in most cases - know this because the referring URL of the page will be from within a GOV.UK domain or other domain that we control. 404 errors should be logged and fixed as soon as possible.

In this situation, we can tell users that we are aware of the problem and are working to resolve it.

**Example 404 page telling users that we know about the problem**

<div class="scale-wrapper">

<div class="scale">{% include "examples/404-broken-link.html" %}</div>

</div>

[View this page in a browser](/examples/404-broken-link.html)

If the result of a broken link is that a user can not complete the transaction and if the service they are using has an alternative channel that they can use. Users should be signposted to this channel to complete their transaction.

**Example: 404 page with an alternative route**

<div class="scale-wrapper">

<div class="scale">{% include "examples/404-broken-link-alternative-route.html" %}</div>

</div>

[View this page in a browser](examples/404-broken-link-alternative-route.html)

### Moved pages

Whenever a page is moved or removed, a 301 redirect should be implemented to ensure that bookmarks or external links are handled in a friendly way.

If a 301 redirect has not or can not be implemented users will be shown a 404 page. In this case, we would not know the referring URL so we can determine that this has been linked to from an external source, outside of our control. In this case, the same 404 page should be used as if the user has made a mistake described below.

## Copied links

When users copy links - either by copying and pasting or retyping a link - there is a higher chance of them making an error that they do not notice. In this situation, the content of the 404 page should help them to self-diagnose the issue and fix it.

We can help the user to:

*   check the link is correct
*   look out for spaces or other irregularities in the link
*   search for the page that they were trying to access if the page is something that they can search for, such as a start page
*   get help with the problem if the link is likely to be from official correspondence from HMRC such as a printed letter by providing an alternative channel if one exists

**Example: 404 page when the user has made a mistake**

<div class="example">
  <div class="scale-wrapper">
    <div class="scale">{% include "examples/404-mistake.html" %}</div>
  </div>
</div>

[View this page in a browser](examples/404-mistake.html)

**Example: 404 page when the user has made a mistake, and there is an alternative channel that they can use**

<div class="example">
  <div class="scale-wrapper">
    <div class="scale">{% include "examples/404-mistake-support.html" %}</div>
  </div>
</div>

[View this page in a browser](examples/404-mistake-support.html)

In the situation where a single user continually makes the same error either through copying and pasting or typing the link incorrectly. We can intercept these repeated attempts and provide more detailed help such as providing an alternative channel if one is available. In this situation, we may want to withhold this option initially so that users can self-help through a digital channel rather than diverting them to less efficient channels.

**Example: 404 page when the user has repeatedly tried to access the same URL**


<div class="example">
  <div class="scale-wrapper">
    <div class="scale">{% include "examples/404-intelligent.html" %}</div>
  </div>
</div>

[View this page in a browser](examples/404-intelligent.html)

## How it works 

Use this section to explain how the pattern works. This should include:

- (if the pattern/component is too complex to have been fully described in the overview) a full description of how the pattern works (for users)
- rules/instructions on how to implement it
- steps to follow

It can also include

- coded examples
- things to avoid
- why it works

If this section is quite long, break it into smaller sections with H3s.

## Research on this pattern

Summarise and link to research relating to this pattern (ideally a blog post) and describe any gaps or questions you still need to answer.

If there is no research, leave this section out.