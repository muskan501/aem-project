Service Offerings
====

A component with Title and Sub Title which allows to list pages with page title that links to the page and hero image.
It can also allow a CTA button. 

## Usage

The service offerings component will list sites with page title and page header image.
This list of pages is clickable, so it will navigate to that specific page when get clicked.
This header image is automatically retrieved from the Hero Image component of that page.

## Edit Dialog

The edit dialog allows the content author to define:

- **Title** - Component title and is required.
- **Subtitle** - Sub title for the title and can be left empty.
- **CTA** - It takes `text` and `link` for button.
- **Layout** - Defines layout style for displaying page list.
- **Offerings** - Takes multiple path values of pages.

### Use Object
The Service Offerings component uses the `com.ixm.core.models.ServiceOfferings` Sling model as its Use-object.

### Model return structure

```json
{
  "title": "",
  "subTitle": "",
  "ctaText": "",
  "ctaLink": "",
  "layout": "",
  "offerings": [
    {
      "title": "",
      "image": "",
      "pageUrl": ""
    }
  ]
}
```

`title`, `image`, `pageURL` for offering are extracted from the provided **page paths**.