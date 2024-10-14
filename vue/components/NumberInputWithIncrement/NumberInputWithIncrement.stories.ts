import NumberInputWithIncrement from './NumberInputWithIncrement.vue';

export default {
  component: NumberInputWithIncrement,
  title: 'component/Forms/NumberInputWithIncrement',
  tags: ['autodocs'],
  argTypes: {
    modelValue: {
      control: { type: 'number' },
    },
    step: {
      control: { type: 'number' },
    },
    disabled: {
      control: { type: 'boolean' },
    },
  },
};

const Template = (args) => ({
  components: { NumberInputWithIncrement },
  setup() {
    return { args };
  },
  template: '<NumberInputWithIncrement v-bind="args" />',
});

export const Default = Template.bind({});
Default.args = {
  modelValue: 0,
  step: 1,
  disabled: false,
};

export const Increment = Template.bind({});
Increment.args = {
  modelValue: 0,
  step: 1,
  disabled: false,
};

export const Decrement = Template.bind({});
Decrement.args = {
  modelValue: 0,
  step: 1,
  disabled: false,
};

export const Disabled = Template.bind({});
Disabled.args = {
  modelValue: 0,
  step: 1,
  disabled: true,
};