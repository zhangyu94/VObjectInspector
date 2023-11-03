import type { PropType } from './vue/dist/vue.esm-bundler.js';
declare const _default: __VLS_WithTemplateSlots<import('./vue/dist/vue.esm-bundler.js').DefineComponent<{
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
    /** Whether the variable should be expanded. */
    expanded: {
        type: PropType<boolean>;
        required: true;
    };
    /** Whether to show an arrow for expand interaction. */
    showArrow: {
        type: PropType<boolean>;
        required: true;
    };
    /**
     * Whether to pad a placeholder on the left.
     * The placeholder makes variable attributes look indented.
     */
    showPlaceholder: {
        type: PropType<boolean>;
        required: true;
    };
}, {}, unknown, {}, {}, import('./vue/dist/vue.esm-bundler.js').ComponentOptionsMixin, import('./vue/dist/vue.esm-bundler.js').ComponentOptionsMixin, {
    "update:expand": () => void;
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
    /** Whether the variable should be expanded. */
    expanded: {
        type: PropType<boolean>;
        required: true;
    };
    /** Whether to show an arrow for expand interaction. */
    showArrow: {
        type: PropType<boolean>;
        required: true;
    };
    /**
     * Whether to pad a placeholder on the left.
     * The placeholder makes variable attributes look indented.
     */
    showPlaceholder: {
        type: PropType<boolean>;
        required: true;
    };
}>> & {
    "onUpdate:expand"?: (() => any) | undefined;
}, {
    name: string;
}, {}>, {
    default?(_: {}): any;
}>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
