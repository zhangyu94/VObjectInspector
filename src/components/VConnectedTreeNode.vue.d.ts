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
    /** A factory of object property iterators. */
    dataIterator: {
        type: FunctionConstructor;
        required: true;
    };
    /**
     * The path of the variable.
     * (Root variable has path DEFAULT_ROOT_PATH)
     */
    path: {
        type: StringConstructor;
        required: true;
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
    /** The list of paths currently expanded. */
    expandedPaths: {
        type: ObjectConstructor;
        required: true;
    };
}, (_ctx: any, _cache: any) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}>, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "update:expanded-paths"[], "update:expanded-paths", import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
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
    /** A factory of object property iterators. */
    dataIterator: {
        type: FunctionConstructor;
        required: true;
    };
    /**
     * The path of the variable.
     * (Root variable has path DEFAULT_ROOT_PATH)
     */
    path: {
        type: StringConstructor;
        required: true;
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
    /** The list of paths currently expanded. */
    expandedPaths: {
        type: ObjectConstructor;
        required: true;
    };
}>> & {
    "onUpdate:expanded-paths"?: ((...args: any[]) => any) | undefined;
}, {
    name: string;
}, {}>;
export default _default;
//# sourceMappingURL=VConnectedTreeNode.vue?vue&type=script&setup=true&lang.d.ts.map