# Stats Block

Displays key statistics with large numbers and descriptive labels in a responsive grid layout.

## Features

- **Responsive Grid**: Auto-adjusts columns based on screen size
- **Accessible**: Includes ARIA labels for screen readers
- **Dark Variant**: Supports dark background styling with `.dark` class
- **No Dependencies**: Pure HTML/CSS/JS, no external libraries
- **Mobile Optimized**: Responsive font sizes and spacing

## Usage

Each stat item requires two rows:
1. First row: The number/statistic value
2. Second row: The label/description

Add the `dark` class to the block element for the dark variant.

### Basic Example

```html
<div class="stats">
  <div>
    <div>500K+</div>
  </div>
  <div>
    <div>Active Users</div>
  </div>
  <div>
    <div>99.9%</div>
  </div>
  <div>
    <div>Uptime</div>
  </div>
  <div>
    <div>24/7</div>
  </div>
  <div>
    <div>Customer Support</div>
  </div>
</div>
```

### Dark Variant

```html
<div class="stats dark">
  <div>
    <div>$2.5B</div>
  </div>
  <div>
    <div>Annual Revenue</div>
  </div>
  <div>
    <div>150+</div>
  </div>
  <div>
    <div>Countries</div>
  </div>
  <div>
    <div>10K+</div>
  </div>
  <div>
    <div>Team Members</div>
  </div>
</div>
```

## Customization

The block uses CSS custom properties for theming:

- `--link-color`: Color for stat numbers (default: `#0078d4`)
- `--text-color`: Color for stat labels (default: `#333`)

Override these in your styles to customize the appearance:

```css
.stats {
  --link-color: #ff6b6b;
  --text-color: #2c3e50;
}

.stats.dark {
  --link-color: #00d4ff;
}
```

## Accessibility

- Stat numbers include `aria-label` attributes for screen readers
- Focus states are clearly visible with colored outlines
- Responsive typography ensures readability on all devices
