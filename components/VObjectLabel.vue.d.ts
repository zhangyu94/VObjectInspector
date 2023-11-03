import type { PropType } from './vue/dist/vue.esm-bundler.js';
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
    /** Whether the variable is non-enumerable. */
    isNonEnumerable: {
        type: PropType<boolean>;
        required: true;
    };
}, {}, unknown, {}, {}, import('./vue/dist/vue.esm-bundler.js').ComponentOptionsMixin, import('./vue/dist/vue.esm-bundler.js').ComponentOptionsMixin, {}, string, import('./vue/dist/vue.esm-bundler.js').VNodeProps & import('./vue/dist/vue.esm-bundler.js').AllowedComponentProps & import('./vue/dist/vue.esm-bundler.js').ComponentCustomProps, Readonly<import('./vue/dist/vue.esm-bundler.js').ExtractPropTypes<{
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
    /** Whether the variable is non-enumerable. */
    isNonEnumerable: {
        type: PropType<boolean>;
        required: true;
    };
}>>, {
    name: string;
}, {}>;
export default _default;
