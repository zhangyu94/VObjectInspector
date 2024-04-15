import { CompareFunction } from './utils/data';
import { PropType } from '../vue/dist/vue.esm-bundler.js';

declare const _default: import('../vue/dist/vue.esm-bundler.js').DefineComponent<{
    /** The JavaScript object to inspect. */
    data: {
        type: null;
        required: true;
    };
    /** The root node's prefix name. */
    name: {
        type: PropType<string>;
        default: null;
    };
    /** The depth level to which the tree should be initially expanded. */
    expandLevel: {
        type: PropType<number>;
        default: number;
    };
    /** The paths in the tree that should be initially expanded. */
    expandPaths: {
        type: PropType<string[]>;
        default: null;
    };
    /** Whether to show non-enumerable properties (e.g., __proto__, length). */
    showNonEnumerable: {
        type: PropType<boolean>;
        default: boolean;
    };
    /**
     * Whether to sort object keys.
     * If true, sort keys in alphabetical order except for arrays.
     * If false, no sorting is applied
     * (the keys are ordered by Object.getOwnPropertyNames).
     * If a compare function is passed,
     * the keys are sorted by the compare function.
     */
    sortObjectKeys: {
        type: PropType<boolean | CompareFunction>;
        default: boolean;
    };
    /**
     * The maximal number of object properties to show in preview.
     * (The ones not in preview are abbreviated with ...)
     */
    objectMaxProperties: {
        type: PropType<number>;
        default: number;
    };
    /**
     * The maximal number of array properties to show in preview.
     * (The ones not in preview are abbreviated with ...)
     */
    arrayMaxProperties: {
        type: PropType<number>;
        default: number;
    };
    /** Whether to use the dark theme or the light theme. */
    darkTheme: {
        type: PropType<boolean>;
        default: boolean;
    };
}, {}, unknown, {}, {}, import('../vue/dist/vue.esm-bundler.js').ComponentOptionsMixin, import('../vue/dist/vue.esm-bundler.js').ComponentOptionsMixin, {}, string, import('../vue/dist/vue.esm-bundler.js').PublicProps, Readonly<import('../vue/dist/vue.esm-bundler.js').ExtractPropTypes<{
    /** The JavaScript object to inspect. */
    data: {
        type: null;
        required: true;
    };
    /** The root node's prefix name. */
    name: {
        type: PropType<string>;
        default: null;
    };
    /** The depth level to which the tree should be initially expanded. */
    expandLevel: {
        type: PropType<number>;
        default: number;
    };
    /** The paths in the tree that should be initially expanded. */
    expandPaths: {
        type: PropType<string[]>;
        default: null;
    };
    /** Whether to show non-enumerable properties (e.g., __proto__, length). */
    showNonEnumerable: {
        type: PropType<boolean>;
        default: boolean;
    };
    /**
     * Whether to sort object keys.
     * If true, sort keys in alphabetical order except for arrays.
     * If false, no sorting is applied
     * (the keys are ordered by Object.getOwnPropertyNames).
     * If a compare function is passed,
     * the keys are sorted by the compare function.
     */
    sortObjectKeys: {
        type: PropType<boolean | CompareFunction>;
        default: boolean;
    };
    /**
     * The maximal number of object properties to show in preview.
     * (The ones not in preview are abbreviated with ...)
     */
    objectMaxProperties: {
        type: PropType<number>;
        default: number;
    };
    /**
     * The maximal number of array properties to show in preview.
     * (The ones not in preview are abbreviated with ...)
     */
    arrayMaxProperties: {
        type: PropType<number>;
        default: number;
    };
    /** Whether to use the dark theme or the light theme. */
    darkTheme: {
        type: PropType<boolean>;
        default: boolean;
    };
}>>, {
    darkTheme: boolean;
    objectMaxProperties: number;
    arrayMaxProperties: number;
    name: string;
    expandLevel: number;
    expandPaths: string[];
    sortObjectKeys: boolean | CompareFunction;
    showNonEnumerable: boolean;
}, {}>;
export default _default;
