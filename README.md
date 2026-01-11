# Modern SCSS Template

A professional, modular SCSS template for HTML/CSS projects using modern best practices.

## 📁 Project Structure

```
├── src/                        # 📝 Source files (edit these)
│   ├── scss/                   # SCSS source files
│   │   ├── abstracts/          # Variables, mixins, functions
│   │   │   ├── _variables.scss  # CSS custom properties + SCSS vars
│   │   │   └── _mixins.scss     # Reusable mixins
│   │   ├── base/               # Reset, typography, print
│   │   │   ├── _reset.scss      # Modern CSS reset
│   │   │   ├── _typography.scss # Typography styles
│   │   │   └── _print.scss      # Print styles
│   │   ├── layout/             # Layout components
│   │   │   ├── _container.scss  # Container system
│   │   │   └── _grid.scss       # Grid system
│   │   ├── components/         # 21 Reusable UI components
│   │   │   ├── _button.scss
│   │   │   ├── _header.scss
│   │   │   ├── _product-card.scss
│   │   │   └── ... (18 more)
│   │   ├── utilities/          # Utility classes
│   │   │   └── _helpers.scss
│   │   └── main.scss           # Main SCSS entry point
│   ├── css/                    # 🔄 Auto-compiled CSS (dev mode, gitignored)
│   │   └── main.css
│   ├── js/                     # JavaScript source
│   │   └── main.js
│   ├── index.html              # Landing page
│   └── components.html         # Component showcase
├── dist/                       # 🚀 Production build (gitignored)
│   ├── css/main.css            # Minified CSS
│   ├── js/main.min.js          # Minified JS
│   ├── index.html              # Minified HTML
│   └── components.html         # Minified HTML
├── assets/                     # Images, fonts, icons
├── package.json
└── README.md
```

## 🚀 Quick Start

### For Developers (Full Workflow)

#### 1. Install Global Tools (one-time setup)
```bash
npm install -g sass terser html-minifier-terser
```

#### 2. Development Mode
```bash
npm run dev:scss
```
Opens `src/index.html` in browser - CSS auto-recompiles on save.

#### 3. Production Build
```bash
npm run build
```
Creates optimized files in `dist/` folder (minified CSS, JS, HTML).

### For Beginners (Use Pre-compiled CSS)

Just open `src/index.html` in your browser! The CSS is already compiled in `src/css/main.css`.

### 4. Customize for Your Project

1. **Update Variables** (`css/scss/abstracts/_variables.scss`):
   - Replace colors with your brand colors
   - Update font families
   - Adjust spacing, borders, shadows

2. **Import Your Fonts** (`index.html`):
   ```html
   <link href="https://fonts.googleapis.com/css2?family=YourFont&display=swap" rel="stylesheet">
   ```

3. **Configure Breakpoints** (`css/scss/abstracts/_variables.scss`):
   ```scss
   $breakpoints: (
     'sm': 640px,
     'md': 768px,
     'lg': 1024px,
     'xl': 1280px
   );
   ```

## 🎨 Features

### Modern SCSS Architecture
- ✅ **@use/@forward** instead of deprecated @import
- ✅ **CSS Custom Properties** for theming
- ✅ **Modular structure** for maintainability
- ✅ **BEM-inspired** naming convention
- ✅ **No build tool lock-in** - works with or without npm

### 21 Components Included
- **Navigation**: Header, Footer, Breadcrumb
- **E-commerce**: Product Card, Category Card, Promo Banner, Carousel
- **Content**: Hero, Content Block, Contact Card
- **UI Elements**: Button, Input, Card, Badge
- **Layout**: Container, Grid

### Best Practices
- ✅ Modern CSS Reset
- ✅ Accessibility built-in
- ✅ Print styles
- ✅ Responsive design (mobile-first)
- ✅ Focus management
- ✅ No vendor prefixes (use autoprefixer)

## 📝 Usage Examples

### Using Mixins

```scss
@use '../abstracts/mixins' as *;

.my-element {
  @include flex-center;
  @include respond-to('md') {
    @include grid(3);
  }
}
```

### Using Variables

```scss
.my-button {
  padding: var(--spacing-md);
  background: var(--color-primary-600);
  border-radius: var(--border-radius-md);
  transition: var(--transition-base);
}
```

### Creating New Components

1. Create file: `src/scss/components/_yourcomponent.scss`
2. Add styles using BEM methodology
3. Import in `main.scss`: `@use 'components/yourcomponent';`

## 🔧 Adding New Components

Example: Creating a modal component

```scss
// src/scss/components/_modal.scss
@use '../abstracts/mixins' as *;

.modal {
  @include absolute-cover;
  @include flex-center;
  background: rgba(0, 0, 0, 0.5);
  z-index: var(--z-modal);
  
  &__content {
    background: var(--color-white);
    padding: var(--spacing-2xl);
    border-radius: var(--border-radius-lg);
    max-width: 500px;
    width: 90%;
  }
}
```

Then import in `main.scss`:
```scss
@use 'components/modal';
```

## 📦 NPM Scripts

```bash
# Development
npm run dev:scss      # Watch SCSS, auto-compile to src/css/

# Production Build (creates dist/ folder)
npm run build:scss    # Minified CSS
npm run build:js      # Minified JS
npm run build:html    # Minified HTML
npm run build         # Build everything (CSS + JS + HTML)
```

## 🎯 Workflow

### Development
1. Edit files in `src/` folder
2. Run `npm run dev:scss` to watch SCSS changes
3. Open `src/index.html` in browser
4. CSS auto-updates on save

### Production Deployment
1. Run `npm run build`
2. Upload `dist/` folder to your server
3. All files are minified and optimized

## 🔧 Adding New Components

Example: Creating a modal component

```scss
// src/scss/components/_modal.scss
@use '../abstracts/mixins' as *;

.modal {
  @include absolute-cover;
  @include flex-center;
  background: rgba(0, 0, 0, 0.5);
  z-index: var(--z-modal);
  
  &__content {
    background: var(--color-white);
    padding: var(--spacing-2xl);
    border-radius: var(--border-radius-lg);
    max-width: 500px;
    width: 90%;
  }
}
```

Then import in `src/scss/main.scss`:
```scss
@use 'components/modal';
```

## 🎯 Customization Checklist

- [ ] Update color variables in `_variables.scss`
- [ ] Replace font families
- [ ] Adjust spacing scale
- [ ] Configure breakpoints
- [ ] Update container max-width
- [ ] Customize component styles
- [ ] Add your project-specific components
- [ ] Remove unused components
- [ ] Test responsiveness
- [ ] Add your logo/branding

## 📚 Documentation

### Available Mixins

- `respond-to($breakpoint)` - Media queries
- `flex-center` - Center with flexbox
- `flex-between` - Space between with flexbox
- `grid($columns, $gap)` - CSS Grid
- `grid-auto-fit($min-width)` - Responsive grid
- `cover-image` - Object-fit cover
- `truncate($lines)` - Text truncation
- `transition($property, $duration)` - Transitions
- `visually-hidden` - Screen reader only

### Utility Classes

**Spacing:** `.mt-{0-5}`, `.mb-{0-5}`, `.pt-{0-5}`, `.pb-{0-5}`  
**Display:** `.d-none`, `.d-block`, `.d-flex`, `.d-grid`  
**Text:** `.text-center`, `.text-bold`, `.text-uppercase`, `.text-truncate`  
**Colors:** `.text-primary`, `.text-muted`, `.bg-primary`, `.bg-light`

## 🤝 Contributing

Feel free to customize this template for your needs. This is a starter template designed to be modified.

## 📄 License

Free to use for personal and commercial projects.

---

**Note:** This is a template. Replace all placeholder content, colors, and fonts with your actual project requirements.
