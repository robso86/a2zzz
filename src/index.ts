/**
 * A simple generator to provide string labels, if a `startingPoint` is specified then
 * this is used as the starting point and returned as the first value.
 * The number of values generated can be restricted by specifying a `count` value greater than
 * -1 otherwise the number of values generated is unrestricted.
 *
 * @export
 * 
 * @param {string} [startingPoint='a']  The starting point expected to be a-z characters
 * @param {number} [count=-1] 
 * 
 * @returns {IterableIterator<string>}
 */
export function* a2zzz(startingPoint: string = 'a', count: number = -1): IterableIterator<string> {
    let currentItem = startingPoint;
    let cursor = count;

    while (cursor !== 0) {
        yield currentItem;

        currentItem = (parseInt(currentItem, 36) + 1)
                        .toString(36)
                        .replace(/[0-1]/g, 'a');

        if (cursor > -1) {
            cursor -= 1;
        }
    }
}

export default class a2z{
    /**
     * A generator for labels 'a' onwards
     * 
     * @alias a2zzz()
     *
     * @returns IterableIterator<string>
     */
    public static simple() {
        return a2zzz('a');
    }

    /**
     * A generator for a limited number of labels 'a' onwards
     *
     * @alias a2zzz('a', count)
     * 
     * @param {number} count The number of labels to generate
     * 
     * @returns IterableIterator<string>
     */
    public static limit(count:number) {
        return a2zzz('a', count);
    }

    /**
     * A generator with a specified start label and optional limit
     *
     * @param {string} startingPoint
     * @param {number} [count=-1] 
     * 
     * @returns IterableIterator<string>
     */
    public static standard(startingPoint:string, count:number = -1) {
        return a2zzz(startingPoint, count);
    }
}