declare const _default: import("vue").DefineComponent<{
    /** The JavaScript object to inspect. */
    data: {
        type: null;
        required: true;
    };
    /** The root node's prefix name. */
    name: {
        type: StringConstructor;
        default: null;
    };
    /** The depth level to which the tree should be initially expanded. */
    expandLevel: {
        type: NumberConstructor;
        default: number;
    };
    /** The paths in the tree that should be initially expanded. */
    expandPaths: {
        type: ArrayConstructor;
        default: null;
    };
    /** Whether to show non-enumerable properties (e.g., __proto__, length). */
    showNonEnumerable: {
        type: BooleanConstructor;
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
        type: (BooleanConstructor | FunctionConstructor)[];
        default: boolean;
    };
    /**
     * The maximal number of object properties to show in preview.
     * (The ones not in preview are abbreviated with ...)
     */
    objectMaxProperties: {
        type: NumberConstructor;
        default: number;
    };
    /**
     * The maximal number of array properties to show in preview.
     * (The ones not in preview are abbreviated with ...)
     */
    arrayMaxProperties: {
        type: NumberConstructor;
        default: number;
    };
    /** Whether to use the dark theme or the light theme. */
    darkTheme: {
        type: BooleanConstructor;
        default: boolean;
    };
}, (_ctx: any, _cache: any) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}>, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    /** The JavaScript object to inspect. */
    data: {
        type: null;
        required: true;
    };
    /** The root node's prefix name. */
    name: {
        type: StringConstructor;
        default: null;
    };
    /** The depth level to which the tree should be initially expanded. */
    expandLevel: {
        type: NumberConstructor;
        default: number;
    };
    /** The paths in the tree that should be initially expanded. */
    expandPaths: {
        type: ArrayConstructor;
        default: null;
    };
    /** Whether to show non-enumerable properties (e.g., __proto__, length). */
    showNonEnumerable: {
        type: BooleanConstructor;
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
        type: (BooleanConstructor | FunctionConstructor)[];
        default: boolean;
    };
    /**
     * The maximal number of object properties to show in preview.
     * (The ones not in preview are abbreviated with ...)
     */
    objectMaxProperties: {
        type: NumberConstructor;
        default: number;
    };
    /**
     * The maximal number of array properties to show in preview.
     * (The ones not in preview are abbreviated with ...)
     */
    arrayMaxProperties: {
        type: NumberConstructor;
        default: number;
    };
    /** Whether to use the dark theme or the light theme. */
    darkTheme: {
        type: BooleanConstructor;
        default: boolean;
    };
}>>, {
    name: string;
    expandLevel: number;
    expandPaths: unknown[];
    showNonEnumerable: boolean;
    sortObjectKeys: boolean | Function;
    objectMaxProperties: number;
    arrayMaxProperties: number;
    darkTheme: boolean;
}, {}>;
export default _default;
//# sourceMappingURL=VObjectInspector.vue?vue&type=script&setup=true&lang.d.ts.map