declare const _default: import("vue").DefineComponent<{
    /** The JavaScript variable to inspect. */
    data: {
        type: null;
        required: true;
    };
    /** The variable name. */
    name: {
        type: StringConstructor;
        default: null;
    };
    /**
     * The depth of the variable.
     * (Root variable has depth 0)
     */
    depth: {
        type: NumberConstructor;
        required: true;
    };
    /** Whether the variable is non-enumerable. */
    isNonEnumerable: {
        type: BooleanConstructor;
        required: true;
    };
    /** Whether the variable should be expanded. */
    expanded: {
        type: BooleanConstructor;
        required: true;
    };
    /** Whether to show an arrow for expand interaction. */
    showArrow: {
        type: BooleanConstructor;
        required: true;
    };
    /**
     * Whether to pad a placeholder on the left.
     * The placeholder makes variable attributes look indented.
     */
    showPlaceholder: {
        type: BooleanConstructor;
        required: true;
    };
}, (_ctx: any, _cache: any) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}>, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "update:expand"[], "update:expand", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    /** The JavaScript variable to inspect. */
    data: {
        type: null;
        required: true;
    };
    /** The variable name. */
    name: {
        type: StringConstructor;
        default: null;
    };
    /**
     * The depth of the variable.
     * (Root variable has depth 0)
     */
    depth: {
        type: NumberConstructor;
        required: true;
    };
    /** Whether the variable is non-enumerable. */
    isNonEnumerable: {
        type: BooleanConstructor;
        required: true;
    };
    /** Whether the variable should be expanded. */
    expanded: {
        type: BooleanConstructor;
        required: true;
    };
    /** Whether to show an arrow for expand interaction. */
    showArrow: {
        type: BooleanConstructor;
        required: true;
    };
    /**
     * Whether to pad a placeholder on the left.
     * The placeholder makes variable attributes look indented.
     */
    showPlaceholder: {
        type: BooleanConstructor;
        required: true;
    };
}>> & {
    "onUpdate:expand"?: ((...args: any[]) => any) | undefined;
}, {
    name: string;
}, {}>;
export default _default;
//# sourceMappingURL=VTreeNode.vue?vue&type=script&setup=true&lang.d.ts.map