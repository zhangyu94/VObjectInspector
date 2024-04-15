declare const _default: import("vue").DefineComponent<{
    /** The JavaScript object to inspect. */
    data: {
        type: null;
        required: true;
    };
    /** The root variables prefix name. */
    name: {
        type: StringConstructor;
        default: null;
    };
    /** The depth level to which the tree should be initially expanded. */
    expandLevel: {
        type: NumberConstructor;
        default: number;
    };
    /** The list of paths that should be initially expanded. */
    expandPaths: {
        type: ArrayConstructor;
        default: null;
    };
    /** A factory of object property iterators. */
    dataIterator: {
        type: FunctionConstructor;
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
        type: (FunctionConstructor | BooleanConstructor)[];
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
    /** The root variables prefix name. */
    name: {
        type: StringConstructor;
        default: null;
    };
    /** The depth level to which the tree should be initially expanded. */
    expandLevel: {
        type: NumberConstructor;
        default: number;
    };
    /** The list of paths that should be initially expanded. */
    expandPaths: {
        type: ArrayConstructor;
        default: null;
    };
    /** A factory of object property iterators. */
    dataIterator: {
        type: FunctionConstructor;
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
        type: (FunctionConstructor | BooleanConstructor)[];
        default: boolean;
    };
}>>, {
    name: string;
    expandLevel: number;
    expandPaths: unknown[];
    sortObjectKeys: boolean | Function;
}, {}>;
export default _default;
//# sourceMappingURL=VTreeView.vue?vue&type=script&setup=true&lang.d.ts.map