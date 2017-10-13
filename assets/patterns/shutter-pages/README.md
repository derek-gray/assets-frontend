# Shutter pages

<div class="alert alert--info">

This patterns is work in progress.

View the todo list for this pattern on [GitHub](https://github.com/hmrc/design-language-documentation/issues/103).

</div>

A shutter page is a page tell useres that a service has been switched off on purpose. These are different to [page not found](/pages/404-pages/index) and [technical difficulties](/pages/500-pages/index) pages.

Shutter pages are nessasary because [Start pages](https://www.gov.uk/service-manual/design/start-pages) do not have the technical capability to check to see if a service is avalible.

### Standard Shutter page example

<div class="scale-wrapper">

<div class="scale">{% include "examples/standard-shutter.html" %}</div>

</div>

[View in a browser](examples/standard-shutter.html)

## How Shutter pages work for users

All HMRC services' should have a general page that does not include the day, date and time so a service can be shuttered quickly, before the content can be updated. But the content should be updated as fast as possible.

### What to include in your shutter page

The page should:

*   use the standard [page template](/pages/page-template/index)
*   include the phase banner relevent to the service
*   have "Service unavailable" as the page title and H1
*   be clear and concise
*   not have breadcrumbs
*   not use vague terms like maintenance or jargon
*   not use red text to warn people

Wherever possible, a shutter page should include:

*   the day, date and time the service is going to be back
*   other ways for someone to do what they need to do, if there are any

### What not include in your shutter page

Shutter pages should never apologise for a service being offline.

## Research on Shutter pages

We need more user research for shutter pages. 

[Contribute user research findings](https://github.com/hmrc/design-patterns/issues/103) so that they can be included here.

***

### More examples for use in certain circumstances

*   [General page](#general-page)
*   [Day, date and time](#day-date-and-time)
*   [End of reporting period](#end-of-reporting-period)
*   [Closed forever](#closed-forever)
*   [Not available yet](#not-available-yet)

#### General page

This is a placeholder that can be used quickly if there is no time to change the content.

##### Example service that has a contact page on GOV.UK

<div class="scale-wrapper">

<div class="scale">{% include "examples/tc-general.html" %}</div>

</div>

[View in a browser](examples/tc-general.html)

##### Example service that has a contact number, but no contact page

<div class="scale-wrapper">

<div class="scale">{% include "examples/ei-general.html" %}</div>

</div>

[View in a browser](examples/ei-general.html)

##### Example service that has no offline support

<div class="scale-wrapper">

<div class="scale">{% include "examples/amls-general.html" %}</div>

</div>

[View in a browser](examples/amls-general.html)

#### Day, date and time

This includes the helpful day, date and time information when a service will be available.

##### Example service that has a contact page on GOV.UK

<div class="scale-wrapper">

<div class="scale">{% include "examples/tc-shutter.html" %}</div>

</div>

[View in a browser](examples/tc-shutter.html)

##### Example service that has a contact number, but no contact page

<div class="scale-wrapper">

<div class="scale">{% include "examples/ei-shutter.html" %}</div>

</div>

[View in a browser](examples/ei-shutter.html)

##### Example service that has no offline support

<div class="scale-wrapper">

<div class="scale">{% include "examples/amls-shutter.html" %}</div>

</div>

[View in a browser](examples/amls-shutter.html)

#### End of reporting period

This is for a service, like tax credit renewals, that is only open for part of the year.

##### Example service that has a contact page on GOV.UK

<div class="scale-wrapper">

<div class="scale">{% include "examples/tc-closed.html" %}</div>

</div>

[View in a browser](examples/tc-closed.html)

##### Example service that has a contact number, but no contact page

<div class="scale-wrapper">

<div class="scale">{% include "examples/ei-closed.html" %}</div>

</div>

[View in a browser](examples/ei-closed.html)

##### Example service that has no offline support

<div class="scale-wrapper">

<div class="scale">{% include "examples/amls-closed.html" %}</div>

</div>

[View in a browser](examples/amls-closed.html)

#### Closed forever

You should try and provide information about what has replaced it or what people need to do if they have outstanding questions.

##### Example service that has a contact page on GOV.UK

<div class="scale-wrapper">

<div class="scale">{% include "examples/tc-permanent.html" %}</div>

</div>

[View in a browser](examples/tc-permanent.html)

##### Example service that has a contact number, but no contact page

<div class="scale-wrapper">

<div class="scale">{% include "examples/ei-permanent.html" %}</div>

</div>

[View in a browser](examples/ei-permanent.html)

##### Example service that has no offline support

<div class="scale-wrapper">

<div class="scale">{% include "examples/amls-permanent.html" %}</div>

</div>

[View in a browser](examples/amls-permanent.html)

#### Not available yet

This is for a service that has not opened yet. This could be for tax credit renewals, which opens in April, or for a service that has been published but is not open until a specific day. These pages may be the same as the day, date and time pages.

##### Example service that has a contact page on GOV.UK

<div class="scale-wrapper">

<div class="scale">{% include "examples/tc-notyet.html" %}</div>

</div>

[View in a browser](examples/tc-notyet.html)

##### Example service that has a contact number, but no contact page

<div class="scale-wrapper">

<div class="scale">{% include "examples/ei-notyet.html" %}</div>

</div>

[View in a browser](examples/ei-notyet.html)

##### Example service that has no offline support

<div class="scale-wrapper">

<div class="scale">{% include "examples/amls-notyet.html" %}</div>

</div>

[View in a browser](examples/amls-notyet.html)

If this section is quite long, break it into smaller sections with H3s.

Research on this pattern

Summarise and link to research relating to this pattern (ideally a blog post) and describe any gaps or questions you still need to answer.

If there is no research, leave this section out.