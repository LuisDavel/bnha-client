import { Story, Meta } from '@storybook/react/';
import CardPets, { CardPetsProps } from '.';

export default {
  title: 'CardPets',
  component: CardPets,
  args: {}
} as Meta;

export const Default: Story<CardPetsProps> = (args) => <CardPets {...args} />;
