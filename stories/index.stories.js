import { action } from '@storybook/addon-actions';

import { Flat, Primary } from '../src/Button';

export default {
  title: 'Button',
};

export const button_normal = () => ({
  Component: Flat,
  props: { text: 'default Button' },
  on: { click: action('clicked') },
});

export const button_large = () => ({
  Component: Flat,
  props: { text: 'LARGE Button', size: 'LARGE' },
  on: { click: action('clicked') },
});

export const button_small = () => ({
  Component: Flat,
  props: { text: 'SMALL Button', size: 'SMALL' },
  on: { click: action('clicked') },
});

export const button_normal_secondary = () => ({
  Component: Flat,
  props: { text: 'default Button', type: 'SECONDARY' },
  on: { click: action('clicked') },
});

export const button_large_danger = () => ({
  Component: Flat,
  props: { text: 'LARGE Button', size: 'LARGE', type: 'DANGER' },
  on: { click: action('clicked') },
});

export const button_small_secondary_disabled = () => ({
  Component: Flat,
  props: { text: 'small', size: 'SMALL', type: 'SECONDARY', disabled: true },
  on: { click: action('clicked') },
});

export const button_Primary = () => ({
  Component: Primary,
  props: { text: 'Primary' },
  on: { click: action('clicked') },
});


