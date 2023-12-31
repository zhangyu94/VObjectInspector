import type { Meta, StoryObj } from '@storybook/vue3'
import VObjectInspector from '../VObjectInspector.vue'

const meta = {
  title: 'Components/VObjectInspector',
  component: VObjectInspector,
} satisfies Meta<typeof VObjectInspector>

export default meta

type Story = StoryObj<typeof meta>

export const Null: Story = { args: { data: null } }
