# react-lineto-ts

Draw a line between two elements in React.

## Getting Started

```
yarn
yarn dev
```

Browse to [localhost:3000](http://localhost:3000).

## Components

- [LineTo](#lineto)
- [SteppedLineTo](#steppedlineto)
- [Line](#line)

### LineTo

Draw line between two DOM elements.

#### Example

```
import LineTo from 'react-lineto-ts';

function render() {
    return (
        <div>
            <div className="A">Element A</div>
            <div className="B">Element B</div>
            <LineTo from="A" to="B" />
        </div>
    );
}
```

If using multiple instances of `<LineTo />` inside separate components, you must provide a unique key for each of the container divs.

#### Properties

| Name        | Type           | Description                                    | Example Values                                 |
| ----------- | -------------- | ---------------------------------------------- | ---------------------------------------------- |
| borderColor | string         | Border color                                   | `#f00`, `red`, etc.                            |
| borderStyle | string         | Border style                                   | `solid`, `dashed`, etc.                        |
| borderWidth | number         | Border width (px)                              |
| className   | string         | Desired CSS className for the rendered element |
| fromAnchor  | string         | Anchor for starting point (Format: "x y")      | `top right`, `bottom center`, `left`, `100% 0` |
| from\*      | string         | CSS class name of the first element            |
| toAnchor    | string         | Anchor for ending point (Format: "x y")        | `top right`, `bottom center`, `left`, `100% 0` |
| to\*        | string         | CSS class name of the second element           |
| zIndex      | number         | Z-index offset                                 |

\* Required

### SteppedLineTo

Draw stepped line between two DOM elements.

#### Example

```
import { SteppedLineTo } from 'react-lineto-ts';

function render() {
    return (
        <div>
            <div className="A">Element A</div>
            <div className="B">Element B</div>
            <SteppedLineTo from="A" to="B" orientation="v" />
        </div>
    );
}
```

#### Properties

| Name        | Type   | Description                                    | Example Values                                 |
| ----------- | ------ | ---------------------------------------------- | ---------------------------------------------- |
| borderColor | string | Border color                                   | `#f00`, `red`, etc.                            |
| borderStyle | string | Border style                                   | `solid`, `dashed`, etc.                        |
| borderWidth | number | Border width (px)                              |
| className   | string | Desired CSS className for the rendered element |
| fromAnchor  | string | Anchor for starting point (Format: "x y")      | `top right`, `bottom center`, `left`, `100% 0` |
| from\*      | string | CSS class name of the first element            |
| orientation | enum   | "h" for horizontal, "v" for vertical           | `h` or `v`                                     |
| toAnchor    | string | Anchor for ending point (Format: "x y")        | `top right`, `bottom center`, `left`, `100% 0` |
| to\*        | string | CSS class name of the second element           |
| zIndex      | number | Z-index offset                                 |

\* Required

### Line

Draw line using pixel coordinates (relative to viewport).

#### Example

```
import { Line } from 'react-lineto-ts';

function render() {
    return (
        <Line x0={0} y0={0} x1={10} y1={10} />
    );
}
```

#### Properties

| Name        | Type   | Description                                    | Example Values          |
| ----------- | ------ | ---------------------------------------------- | ----------------------- |
| borderColor | string | Border color                                   | `#f00`, `red`, etc.     |
| borderStyle | string | Border style                                   | `solid`, `dashed`, etc. |
| borderWidth | number | Border width (px)                              |
| className   | string | Desired CSS className for the rendered element |
| x0\*        | number | First X coordinate                             |
| x1\*        | number | Second X coordinate                            |
| y0\*        | number | First Y coordinate                             |
| y1\*        | number | Second Y coordinate                            |
| zIndex      | number | Z-index offset                                 |

\* Required
