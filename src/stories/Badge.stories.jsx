import { useState } from 'react';
import { Badge } from './Badge';

export default {
  title: 'Components/Badge',
  component: Badge,
  parameters: {
    layout: 'centered',
    backgrounds: { default: 'light' },
  },
  argTypes: {
    label:    { name: 'Label',    control: { type: 'text' } },
    selected: { name: 'Selected', control: { type: 'boolean' } },
  },
  args: {
    label: 'Concrete surfaces',
    selected: false,
  },
};

export const Default = {};

export const Selected = { args: { selected: true } };

// Interactive filter group — clicking toggles selection
export const FilterGroup = {
  parameters: { controls: { disable: true } },
  render: () => {
    const tags = [
      'Concrete surfaces',
      'Waterproofing',
      'Repair & Protection',
      'Tunnelling',
      'Infrastructure',
      'Buildings',
      'Marine & Offshore',
      'Flooring',
    ];

    const [selected, setSelected] = useState(['Concrete surfaces']);

    const toggle = (tag) =>
      setSelected((prev) =>
        prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
      );

    return (
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', maxWidth: '600px' }}>
        {tags.map((tag) => (
          <Badge
            key={tag}
            label={tag}
            selected={selected.includes(tag)}
            onClick={() => toggle(tag)}
          />
        ))}
      </div>
    );
  },
};
