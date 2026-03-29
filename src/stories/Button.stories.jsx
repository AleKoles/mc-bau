import { Button } from './Button';

export default {
  title: 'Components/Button',
  component: Button,
  parameters: {
    layout: 'centered',
    backgrounds: { default: 'light' },
  },
  argTypes: {
    variant: {
      name: 'Variant',
      description: 'Solid fills with a blue1 slide-in on hover. Ghost has a border that fills on hover.',
      control: { type: 'radio' },
      options: ['solid', 'ghost'],
      labels: { solid: 'Solid (slider)', ghost: 'Ghost (border)' },
    },
    icon: {
      name: 'Icon',
      description: 'Optional icon shown before the label',
      control: { type: 'select' },
      options: ['none', 'users', 'settings', 'headphones'],
      labels: {
        none: '— None',
        users: '👥 Users',
        settings: '⚙️ Settings',
        headphones: '🎧 Headphones',
      },
    },
    label: {
      name: 'Label',
      control: { type: 'text' },
    },
    href: {
      table: { disable: true },
    },
  },
  args: {
    variant: 'solid',
    label: 'More',
    icon: 'none',
    href: '#',
  },
};

export const Solid = { args: { variant: 'solid' } };
export const Ghost = { args: { variant: 'ghost' } };

export const SolidWithIcon = {
  name: 'Solid + Icon',
  args: { variant: 'solid', icon: 'users' },
};

export const GhostWithIcon = {
  name: 'Ghost + Icon',
  args: { variant: 'ghost', icon: 'headphones' },
};

export const AllVariants = {
  name: 'All Variants',
  parameters: { controls: { disable: true } },
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '32px', alignItems: 'flex-start' }}>
      <div style={{ display: 'flex', gap: '24px', alignItems: 'center' }}>
        <Button variant="solid" label="More" icon="none" />
        <Button variant="solid" label="Contact Us" icon="headphones" />
        <Button variant="solid" label="Our Team" icon="users" />
        <Button variant="solid" label="Settings" icon="settings" />
      </div>
      <div style={{ display: 'flex', gap: '24px', alignItems: 'center' }}>
        <Button variant="ghost" label="More" icon="none" />
        <Button variant="ghost" label="Contact Us" icon="headphones" />
        <Button variant="ghost" label="Our Team" icon="users" />
        <Button variant="ghost" label="Settings" icon="settings" />
      </div>
    </div>
  ),
};
