import type { PropType } from './vue/dist/vue.esm-bundler.js';
import type { ObjectIterator } from '../utils/data';
declare const _default: import('./vue/dist/vue.esm-bundler.js').DefineComponent<{
    /** The JavaScript variable to inspect. */
    data: {
        type: null;
        required: true;
    };
    /** The variable name. */
    name: {
        type: PropType<string>;
        default: null;
    };
    /** A factory of object property iterators. */
    dataIterator: {
        type: PropType<ObjectIterator>;
        required: true;
    };
    /**
     * The path of the variable.
     * (Root variable has path DEFAULT_ROOT_PATH)
     */
    path: {
        type: PropType<string>;
        required: true;
    };
    /**
     * The depth of the variable.
     * (Root variable has depth 0)
     */
    depth: {
        type: PropType<number>;
        required: true;
    };
    /** Whether the variable is non-enumerable. */
    isNonEnumerable: {
        type: PropType<boolean>;
        required: true;
    };
    /** The list of paths currently expanded. */
    expandedPaths: {
        type: PropType<Record<string, boolean>>;
        required: true;
    };
}, {}, unknown, {}, {}, import('./vue/dist/vue.esm-bundler.js').ComponentOptionsMixin, import('./vue/dist/vue.esm-bundler.js').ComponentOptionsMixin, {
    "update:expanded-paths": (d: {
        path: string;
        val: boolean;
    }) => void;
}, string, import('./vue/dist/vue.esm-bundler.js').VNodeProps & import('./vue/dist/vue.esm-bundler.js').AllowedComponentProps & import('./vue/dist/vue.esm-bundler.js').ComponentCustomProps, Readonly<import('./vue/dist/vue.esm-bundler.js').ExtractPropTypes<{
    /** The JavaScript variable to inspect. */
    data: {
        type: null;
        required: true;
    };
    /** The variable name. */
    name: {
        type: PropType<string>;
        default: null;
    };
    /** A factory of object property iterators. */
    dataIterator: {
        type: PropType<ObjectIterator>;
        required: true;
    };
    /**
     * The path of the variable.
     * (Root variable has path DEFAULT_ROOT_PATH)
     */
    path: {
        type: PropType<string>;
        required: true;
    };
    /**
     * The depth of the variable.
     * (Root variable has depth 0)
     */
    depth: {
        type: PropType<number>;
        required: true;
    };
    /** Whether the variable is non-enumerable. */
    isNonEnumerable: {
        type: PropType<boolean>;
        required: true;
    };
    /** The list of paths currently expanded. */
    expandedPaths: {
        type: PropType<Record<string, boolean>>;
        required: true;
    };
}>> & {
    "onUpdate:expanded-paths"?: ((d: {
        path: string;
        val: boolean;
    }) => any) | undefined;
}, {
    name: string;
}, {}>;
export default _default;
