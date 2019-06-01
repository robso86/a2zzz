import { a2zzz } from './../src/index';

describe('simple generation', () => {
    test('no parameters', () => {
        const iterator:IterableIterator<string> = a2zzz();
        expect(iterator.next().value).toBe('a');
        expect(iterator.next().value).toBe('b');
        expect(iterator.next().value).toBe('c');
    });

    test('specify start point', () => {
        const iterator:IterableIterator<string> = a2zzz('x');
        expect(iterator.next().value).toBe('x');
        expect(iterator.next().value).toBe('y');
        expect(iterator.next().value).toBe('z');
    });

    test('specify start point, restricted run', () => {
        const iterator:IterableIterator<string> = a2zzz('a', 5);
        expect(iterator.next().value).toBe('a');
        expect(iterator.next().value).toBe('b');
        expect(iterator.next().value).toBe('c');
        expect(iterator.next().value).toBe('d');
        expect(iterator.next().value).toBe('e');
        expect(iterator.next().value).not.toBeDefined();
    });

    test('test rotation', () => {
        const iterator:IterableIterator<string> = a2zzz();
        expect(iterator.next().value).toBe('a');

        for(let i = 0; i < 24; i += 1) {
            iterator.next().value
        }

        expect(iterator.next().value).toBe('z');
        expect(iterator.next().value).toBe('aa');

        for(let i = 0; i < 24; i += 1) {
            iterator.next().value
        }

        expect(iterator.next().value).toBe('az');
        expect(iterator.next().value).toBe('ba');
        expect(iterator.next().value).toBe('bb');

        for(let i = 0; i < 18223; i += 1) {
            iterator.next().value
        }

        expect(iterator.next().value).toBe('zzz');
        expect(iterator.next().value).toBe('aaaa');
    });


})