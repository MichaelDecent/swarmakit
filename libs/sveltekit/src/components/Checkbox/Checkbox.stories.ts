import Checkbox from './Checkbox.svelte';
import type { Meta, StoryObj } from '@storybook/svelte';

const meta: Meta<Checkbox> = {
  title: 'component/Forms/Checkbox',
  component: Checkbox,
  tags: ['autodocs'],
  argTypes: {
    label: { control: 'text' },
    checked: { control: 'boolean' },
    disabled: { control: 'boolean' },
  },
  parameters: {
    layout: 'centered',
    viewport: {
      viewports: {
        smallMobile: { name: 'Small Mobile', styles: { width: '320px', height: '568px' } },
        largeMobile: { name: 'Large Mobile', styles: { width: '414px', height: '896px' } },
        tablet: { name: 'Tablet', styles: { width: '768px', height: '1024px' } },
        desktop: { name: 'Desktop', styles: { width: '1024px', height: '768px' } },
      }
    }
  }
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: 'Accept terms and conditions',
    checked: false,
    disabled: false,
  }
};

export const Checked: Story = {
  args: {
    label: 'Accept terms and conditions',
    checked: true,
    disabled: false,
  }
};

export const Unchecked: Story = {
  args: {
    label: 'Accept terms and conditions',
    checked: false,
    disabled: false,
  }
};

export const Disabled: Story = {
  args: {
    label: 'Accept terms and conditions',
    checked: false,
    disabled: true,
  }
};