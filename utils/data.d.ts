export declare const getPropertyValue: (object: unknown, propertyName: string) => unknown;
export type ObjectIterator = (object: unknown) => Generator<{
    name: unknown;
    data: unknown;
    isNonEnumerable: boolean;
}, void, unknown>;
export type CompareFunction = ((a: string, b: string) => number) | undefined;
export declare const createIterator: (showNonEnumerable: boolean, sortObjectKeys: boolean | CompareFunction) => ObjectIterator;
