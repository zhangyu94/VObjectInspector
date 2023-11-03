import type { StoryObj } from '@storybook/vue3';
declare const meta: {
    title: string;
    component: import('./vue/dist/vue.esm-bundler.js').DefineComponent<{
        data: {
            type: null;
            required: true;
        };
        name: {
            type: import('./vue/dist/vue.esm-bundler.js').PropType<string>;
            default: null;
        };
        expandLevel: {
            type: import('./vue/dist/vue.esm-bundler.js').PropType<number>;
            default: number;
        };
        expandPaths: {
            type: import('./vue/dist/vue.esm-bundler.js').PropType<string[]>;
            default: null;
        };
        showNonEnumerable: {
            type: import('./vue/dist/vue.esm-bundler.js').PropType<boolean>;
            default: boolean;
        };
        sortObjectKeys: {
            type: import('./vue/dist/vue.esm-bundler.js').PropType<boolean | import("../utils/data").CompareFunction>;
            default: boolean;
        };
        objectMaxProperties: {
            type: import('./vue/dist/vue.esm-bundler.js').PropType<number>;
            default: number;
        };
        arrayMaxProperties: {
            type: import('./vue/dist/vue.esm-bundler.js').PropType<number>;
            default: number;
        };
        darkTheme: {
            type: import('./vue/dist/vue.esm-bundler.js').PropType<boolean>;
            default: boolean;
        };
    }, {}, unknown, {}, {}, import('./vue/dist/vue.esm-bundler.js').ComponentOptionsMixin, import('./vue/dist/vue.esm-bundler.js').ComponentOptionsMixin, {}, string, import('./vue/dist/vue.esm-bundler.js').VNodeProps & import('./vue/dist/vue.esm-bundler.js').AllowedComponentProps & import('./vue/dist/vue.esm-bundler.js').ComponentCustomProps, Readonly<import('./vue/dist/vue.esm-bundler.js').ExtractPropTypes<{
        data: {
            type: null;
            required: true;
        };
        name: {
            type: import('./vue/dist/vue.esm-bundler.js').PropType<string>;
            default: null;
        };
        expandLevel: {
            type: import('./vue/dist/vue.esm-bundler.js').PropType<number>;
            default: number;
        };
        expandPaths: {
            type: import('./vue/dist/vue.esm-bundler.js').PropType<string[]>;
            default: null;
        };
        showNonEnumerable: {
            type: import('./vue/dist/vue.esm-bundler.js').PropType<boolean>;
            default: boolean;
        };
        sortObjectKeys: {
            type: import('./vue/dist/vue.esm-bundler.js').PropType<boolean | import("../utils/data").CompareFunction>;
            default: boolean;
        };
        objectMaxProperties: {
            type: import('./vue/dist/vue.esm-bundler.js').PropType<number>;
            default: number;
        };
        arrayMaxProperties: {
            type: import('./vue/dist/vue.esm-bundler.js').PropType<number>;
            default: number;
        };
        darkTheme: {
            type: import('./vue/dist/vue.esm-bundler.js').PropType<boolean>;
            default: boolean;
        };
    }>>, {
        darkTheme: boolean;
        objectMaxProperties: number;
        arrayMaxProperties: number;
        name: string;
        expandLevel: number;
        expandPaths: string[];
        sortObjectKeys: boolean | import("../utils/data").CompareFunction;
        showNonEnumerable: boolean;
    }, {}>;
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const AnonymousFunction: Story;
export declare const AnonymousArrowFunction: Story;
export declare const NamedFunction: Story;
export declare const NamedFunctionShowNonEnumerable: Story;
