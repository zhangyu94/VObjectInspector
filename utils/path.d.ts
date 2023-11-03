import type { ObjectIterator } from './data';
export declare const DEFAULT_ROOT_PATH = "$";
/** Checks whether the data has child nodes. */
export declare const hasChildNodes: (data: unknown, dataIterator: ObjectIterator) => boolean;
/**
 * Create a list of wildcard paths
 * used to match all attributes to the given level.
 */
export declare const wildcardPathsFromLevel: (level: number) => string[];
/**
 * Get the paths that should be expanded.
 * In the returned object, if a path should be expanded,
 * it will be stored as key with value storing true.
 */
export declare const getExpandedPaths: (data: unknown, dataIterator: ObjectIterator, expandPaths: string[], expandLevel: number, prevExpandedPaths: Record<string, boolean>) => Record<string, boolean>;
