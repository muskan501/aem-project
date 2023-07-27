Tile
=========
This component is written in HTL.

*This is multifield component Allows to define a Title, subTitle, quotes ,layout and Card with Title and Description.

## Dialog has following properties
1. `./title` - will store the text of the title to be rendered
2. `./subTitle` - will store the text of the subTile to be rendered
3. `./quotes` - will store the boolean value for quotes i.e Quotes to be displayed on top left and bottom right of the component
4. `./layout` - will store the layout order for rendering order of tiles on the page i.e 2x2,3x3
5. `./tileItems` - multifield that will store the tiles

## Style System has following properites
1. `Title-Text-Color`- will set the text color of title and subTile to be rendered
2. `Tile-Title-Text-Color`- will set the Tile text color of title to be rendered
3. `Tile-Description-Text-Color`- will set the Tile text color of description to be rendered
4. `Tile-Background-Color`- will set the background color of the Tile
5. `Tile-Hover-Color`- will set the hover color for the component

### Use Object
The Tile component uses the `com.ixm.core.models.TileModel` Sling model as its Use-object.

### Model return structure

```json
{
    "title": " ",
	"subTitle": " ",
	"layout": " ",
	"quotes": " ",
	"tileItems": {
		"item0": {
			"description": " ",
			"title": " "
		},
		"item1": {
			"description": " ",
			"title": " "
		}
	}
}
```