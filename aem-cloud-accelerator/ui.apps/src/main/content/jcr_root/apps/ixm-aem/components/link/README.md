Link Component
====

A multifield component with Link URL, Link Text, Image URL, Image Title and Link Target Checkbox which allows to list link details .

## Usage

1. Add the component using drag and drop option available.

## Edit Dialog

The edit dialog allows the content author to define:

- **Link Text** - link title field.
- **Link URL** - Link URL.
- **Image URL** - It takes Image URL for the component.
- **Image Title** - It takes Alternate text for the Image URL.
- **Link Checkbox** - It is a checkbox required to open link in new tab.

### Use Object
The Link component uses the `com.ixm.core.models.Link` Sling model as its Use-object.

### Model return structure

```json
{
  "item0": {
            "jcr:primaryType": "",
            "linkCheckbox": "true",
            "altText": "",
            "imageUrl": "",
            "linkUrl": "",
            "linkText": ""
        }
}
```