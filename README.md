# unix-date-formatter

`unix-date-formatter` is a JavaScript library designed to simplify the formatting of Unix timestamps into human-readable strings. With this library, you can easily present timestamps in a user-friendly way, such as "About 2 days ago."

## Installation
To install the library using npm, run the following command:

```bash 
npm install unix-date-formatter
```

## Usage
After installing the library, you can use it to format Unix timestamps in your JavaScript or TypeScript projects.
This library should work 

Import the unixFormatter function from the unix-date-formatter module:
```javascript
import { unixFormatter } from "unix-date-formatter/unix";
```

Use the unixFormatter function to format Unix timestamps into readable strings. Pass the Unix timestamp (in seconds) as an argument to the unixFormatter component:
 
```javascript
import React from "react";
import { unixFormatter } from "unix-date-formatter/unix";

const DateFormat = () => {
    const unixTimestamp = 1675135145; // Replace with your Unix timestamp

    return (
        <p>
            Submitted: {unixFormatter(unixTimestamp)}
        </p>
    );
};
```

By following these steps, you can effectively format Unix timestamps and display them in a more understandable and user-friendly manner.

## Example Output
Assuming the unixTimestamp is provided as 1675135145, the rendered output will be:
```makefile
Submitted: About 2 days ago
```

Keep in mind that the actual formatted output will depend on the current time and the specific Unix timestamp you provide.