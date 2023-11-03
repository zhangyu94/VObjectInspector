import type { PropType } from './vue/dist/vue.esm-bundler.js';
import type { CompareFunction, ObjectIterator } from '../utils/data';
declare const _default: import('./vue/dist/vue.esm-bundler.js').DefineComponent<{
    /** The JavaScript object to inspect. */
    data: {
        type: null;
        required: true;
    };
    /** The root variables prefix name. */
    name: {
        type: PropType<string>;
        default: null;
    };
    /** The depth level to which the tree should be initially expanded. */
    expandLevel: {
        type: PropType<number>;
        default: number;
    };
    /** The list of paths that should be initially expanded. */
    expandPaths: {
        type: PropType<string[]>;
        default: null;
    };
    /** A factory of object property iterators. */
    dataIterator: {
        type: PropType<ObjectIterator>;
        required: true;
    };
    /**
     * Whether to sort the object keys.
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
}, {}, unknown, {}, {}, import('./vue/dist/vue.esm-bundler.js').ComponentOptionsMixin, import('./vue/dist/vue.esm-bundler.js').ComponentOptionsMixin, {}, string, import('./vue/dist/vue.esm-bundler.js').VNodeProps & import('./vue/dist/vue.esm-bundler.js').AllowedComponentProps & import('./vue/dist/vue.esm-bundler.js').ComponentCustomProps, Readonly<import('./vue/dist/vue.esm-bundler.js').ExtractPropTypes<{
    /** The JavaScript object to inspect. */
    data: {
        type: null;
        required: true;
    };
    /** The root variables prefix name. */
    name: {
        type: PropType<string>;
        default: null;
    };
    /** The depth level to which the tree should be initially expanded. */
    expandLevel: {
        type: PropType<number>;
        default: number;
    };
    /** The list of paths that should be initially expanded. */
    expandPaths: {
        type: PropType<string[]>;
        default: null;
    };
    /** A factory of object property iterators. */
    dataIterator: {
        type: PropType<ObjectIterator>;
        required: true;
    };
    /**
     * Whether to sort the object keys.
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
}>>, {
    name: string;
    expandLevel: number;
    expandPaths: string[];
    sortObjectKeys: boolean | CompareFunction;
}, {}>;
export default _default;
