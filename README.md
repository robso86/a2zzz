# a2zzz
Generate strings from a to zzz and beyond

A simple utiliy for creating sequential labels i.e. a,b,c,...,x,y,z

## example usage
Create a table with spreadsheet headers

```javascript
import a2z from 'node_modules/a2zzz';

const table = document.createElement('table');
const header = table.createTHead();
const body = table.createTBody();
const headerRow = header.insertRow();

const headings = a2z.simple();

headerRow.insertCell()

for (let i = 0; i < 30; i += 1) {
    const headerCell = headerRow.insertCell();

    headerCell.innerText = headings.next().value.toUpperCase();
}

for (let i = 0; i < 2; i += 1) {
    let bodyRow = body.insertRow();

    for (let ii = 0; ii < 31; ii += 1) {
        const bodyCell = bodyRow.insertCell();
        bodyCell.innerText = ii === 0 ? i + 1 : '-';
    }
}

document.appendChild(table);
```

results in 

&nbsp;| A | B | C | ... | Y | Z | AA | AB | AC | AD
--|---|---|---|-----|---|---|----|----|----|----
1 | - | - | - |  -- | - | - |  - |  - |  - | - 
2 | - | - | - |  -- | - | - |  - |  - |  - | -

## API
A default class with static methods is provided, these are simplified aliases of the core function `a2zzz` which is the generator.

### Simple approach
At it's simplest the generator will start at 'a' and continue until stopped.

```javascript
import a2z from 'node_modules/a2zzz';

const generator = a2z.simple();

// print 'a',...
for(let label of generator) {
    console.log(label);
}
```

### Limit the number of labels created
If the number of labels required is known then the `limit` function can be utilised

```javascript
import a2z from 'node_modules/a2zzz';

const generator = a2z.limit(7);

// print 'a',...,'g'
for(let label of generator) {
    console.log(label);
}
```

### Specify the starting label (optional limit)

```javascript
import a2z from 'node_modules/a2zzz';

const generator = a2z.standard('x', 4); // optional limit

// print 'x', 'y', 'z', 'aa'
for(let label of generator) {
    console.log(label);
}
```