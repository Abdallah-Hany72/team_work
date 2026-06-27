# Shared UI Package

This directory contains the core reusable presentation components for the Spotly application. These components are integrated with the Spotly design system and styled using Tailwind CSS v4.

## What has been completed

We have implemented the following core components in this initial version:

1. **PrimaryButton**: Highly interactive call-to-action button supporting multiple variants, sizes, states, and icon placements.
2. **InputField**: Fully styled input control with support for labels, helper/error states, disabled states, and prepended icons.
3. **SearchBar**: A search-input form styled with glassmorphism and integrated with location query actions.
4. **TagBadge**: A compact status/tag indicator component with standard sizes and semantic variants.
5. **SectionHeader**: A standardized section typography layout supporting titles, subtitles, and text alignments.
6. **Form**: A wrapper card layout to group input elements (helper component in the Form module).

---

## Folder Structure

```
src/Components/Ui/
├── index.js               # Root export file (Currently empty - to be configured)
├── README.md              # Shared UI Package Handoff Documentation
│
├── PrimaryButton/
│   ├── PrimaryButton.jsx  # PrimaryButton component
│   └── index.js           # Directory export file (Currently empty)
│
├── Form/
│   ├── Form.jsx           # Form wrapper container component
│   ├── InputField.jsx     # InputField component
│   └── index.js           # Form module exports
│
├── SearchBar/
│   ├── SearchBar.jsx      # SearchBar component
│   └── index.js           # Directory export file (Currently empty)
│
├── SectionHeader/
│   ├── SectionHeader.jsx  # SectionHeader component
│   └── index.js           # Directory export file
│
└── TagBadge/
    ├── TagBadge.jsx       # TagBadge component
    └── index.js           # Directory export file
```

### Explanation of Folders

- Each component group is isolated in its own folder to keep logic, styles (if any), tests, and exports clean.
- The `index.js` files act as "barrel exports" to prevent developers from needing to type nested paths like `import PrimaryButton from "../Components/Ui/PrimaryButton/PrimaryButton"`.

---

## Design System

The styling definitions are declared in `src/styles/designSystem.js` and loaded into the build via `tailwind.config.js`. Teammates can use these design system tokens as standard Tailwind utilities.

### Design System Tokens Reference

- **Colors** (`colorPalette`):
  - **Primary**: `bg-primary` (brand primary, `#ac3509`), `text-on-primary` (`#ffffff`), `bg-primary-container` (`#ff7043`), `text-on-primary-container` (`#641800`).
  - **Secondary**: `bg-secondary` (`#006a63`), `text-on-secondary` (`#ffffff`), `bg-secondary-container` (`#8bf1e6`).
  - **Tertiary**: `bg-tertiary` (`#835500`), `text-on-tertiary` (`#ffffff`).
  - **Semantic (Error)**: `bg-error` (`#ba1a1a`), `text-on-error` (`#ffffff`), `bg-error-container` (`#ffdad6`).
  - **Neutral/Surface**: `bg-background` (`#f4faff`), `bg-surface` (`#f4faff`), `bg-surface-container` (`#e3f0f8`), and surface elevations from `-lowest` (`#ffffff`) to `-highest` (`#d7e4ec`).
  - **Borders/Outlines**: `border-outline` (`#8d7169`), `border-outline-variant` (`#e0bfb6`).

- **Typography** (`typographyScale` and `fontFamily`):
  - **Font Family**: Plus Jakarta Sans is mapped to display, headers, and badge categories (`font-display-lg`, `font-headline-lg`, `font-vibe-tag`). DM Sans is mapped to body copy and labels (`font-body-lg`, `font-body-md`, `font-label-md`).
  - **Size Scales**:
    - `text-display-lg`: `48px`, font-weight `800`
    - `text-headline-lg`: `32px`, font-weight `700`
    - `text-headline-md`: `24px`, font-weight `600`
    - `text-body-lg`: `18px`, font-weight `400`
    - `text-body-md`: `16px`, font-weight `400`
    - `text-label-md`: `14px`, font-weight `600`
    - `text-vibe-tag`: `12px`, font-weight `700`

- **Spacing** (`spacingSystem`):
  - Base grid unit is `8px` (`spacing-unit`).
  - `spacing-stack-sm` (`8px`), `spacing-stack-md` (`16px`), `spacing-stack-lg` (`32px`).
  - `spacing-gutter` (`24px`), `spacing-margin-mobile` (`20px`), `spacing-margin-desktop` (`64px`).
  - `max-w-container-max` (`1280px`).

- **Border Radius** (`borderRadius`):
  - `rounded-lg` (`0.5rem`), `rounded-xl` (`0.75rem`), `rounded-2xl` (`1rem`), `rounded-3xl` (`1.5rem`), `rounded-full` (`9999px`).

- **Shadows** (`shadows`):
  - `shadow-sunlight` (`0 30px 60px -12px rgba(17, 29, 35, 0.08)`).
  - `shadow-sunlight-sm` (`0 4px 30px 0 rgba(0,0,0,0.05)`).

---

## Available Components

### 1. PrimaryButton

Highly interactive button used for user submissions, links, actions, and primary triggers.

- **Props**:
  - `children` (React.ReactNode): The label of the button.
  - `variant` (`"primary" | "secondary" | "outline" | "ghost"`): The visual style theme (default: `"primary"`).
  - `size` (`"sm" | "md" | "lg" | "xl"`): The dimensions scale of the button (default: `"md"`).
  - `icon` (string): Name of a Google Material Symbols icon to render.
  - `iconPosition` (`"left" | "right"`): Where to display the icon relative to the text (default: `"right"`).
  - `className` (string): Additional custom CSS classes (will override/append styles).
  - `...props` (HTMLButtonElement attributes): Accepts standard props such as `onClick`, `type`, `disabled`, etc.

- **Usage**:

```jsx
import PrimaryButton from "../Components/Ui/PrimaryButton/PrimaryButton";

// Standard Primary Button
<PrimaryButton variant="primary">
  Explore Spots
</PrimaryButton>

// Button with Icon
<PrimaryButton variant="secondary" icon="arrow_forward" iconPosition="right">
  Get Directions
</PrimaryButton>
```

---

### 2. InputField

A standardized form text input control that supports labeling, validation error layouts, disabled states, and prepended icons.

- **Props**:
  - `label` (string): Text display for the input label.
  - `id` (string): Unique identifier for the input element (binds to `htmlFor` of the label). If not provided, it generates a random ID.
  - `type` (string): The input type attribute, e.g. `"text" | "email" | "password" | "number"` (default: `"text"`).
  - `placeholder` (string): Input placeholder text.
  - `icon` (string | React.ReactNode): Google Material Symbol icon name or custom element displayed at the left.
  - `error` (string): Form validation error message. If present, it styles the input border with the error theme color and displays the message below.
  - `disabled` (boolean): Sets input to disabled state (dimmed opacity, no hover effects, prevents interaction).
  - `className` (string): Wrapper container custom styling classes.
  - `...props` (HTMLInputElement attributes): All standard input attributes (e.g. `value`, `onChange`, `required`).

- **Usage**:

```jsx
import InputField from "../Components/Ui/Form/InputField";

// Regular Input
<InputField
  label="Email Address"
  type="email"
  placeholder="you@domain.com"
  icon="mail"
/>

// Input with validation error
<InputField
  label="Username"
  defaultValue="taken_name"
  error="This username is already registered."
/>
```

---

### 3. SearchBar

A specialized query form styled with glassmorphism, featuring a search input and button. It executes query-string routing.

- **Props**:
  - `placeholder` (string): Custom input placeholder (default: `"Find me a quiet café for studying..."`).
  - `large` (boolean): Increases height, padding, and font sizes for primary landing layouts (default: `false`).

- **Usage**:

```jsx
import SearchBar from "../Components/Ui/SearchBar/SearchBar";

// Standard Header SearchBar
<SearchBar placeholder="Search spots..." />

// Large Landing Hero SearchBar
<SearchBar large={true} placeholder="Find spots with quiet vibes..." />
```

---

### 4. TagBadge

A visual label indicator used to display tags, vibes, categories, or status codes.

- **Props**:
  - `children` (React.ReactNode): Tag text or badge value.
  - `variant` (`"default" | "secondary" | "success" | "warning" | "danger"`): Visual status color categories.
  - `size` (`"sm" | "md" | "lg"`): Size scale (default: `"md"`).
  - `className` (string): Additional custom CSS classes.
  - `...props` (HTMLSpanElement attributes): All standard span properties.

- **Usage**:

```jsx
import TagBadge from "../Components/Ui/TagBadge/TagBadge";

// Standard tag
<TagBadge variant="default">Wi-Fi</TagBadge>

// Success status tag
<TagBadge variant="success" size="sm">Verified</TagBadge>
```

---

### 5. SectionHeader

A modular layout component to structure headers of page sections consistently.

- **Props**:
  - `title` (string): Main heading text.
  - `subtitle` (string): Description sub-text.
  - `align` (`"left" | "center" | "right"`): Text alignment (default: `"left"`).
  - `className` (string): Additional wrapper CSS classes.
  - `...props` (HTMLDivElement attributes): Standard wrapper div parameters.

- **Usage**:

```jsx
import SectionHeader from "../Components/Ui/SectionHeader/SectionHeader";

<SectionHeader
  title="Popular Studying Spots"
  subtitle="Based on ratings from students and remote workers in your area."
  align="center"
/>;
```

---

## Import Rules

Currently, imports must target individual component files. Once the root `Ui/index.js` file is populated with barrel exports, teammates should transition to destructured imports from the UI module root.

### Current Import Method:

```javascript
import PrimaryButton from "../Components/Ui/PrimaryButton/PrimaryButton";
import InputField from "../Components/Ui/Form/InputField";
```

### Proposed (Standard) Import Method:

```javascript
import {
  PrimaryButton,
  InputField,
  SearchBar,
  TagBadge,
  SectionHeader,
} from "../Components/Ui";
```

---

## Best Practices

1. **Do Not Duplicate Components**: Check this folder before writing custom buttons, inputs, badge indicators, or standard headers. Add new variants to existing components if necessary rather than creating duplicates.
2. **Keep Business Logic Separate**: These components are presentational. Do not embed direct API fetching, state machines, or business rules in them. Pass data and event triggers down through props.
3. **Ref/Form Binding Integration**: When integrating with form frameworks (like React Hook Form), make sure to pass a ref. _(Note: Current `InputField` needs to be updated with ref support)._
4. **Style Consistency**: Always use design system classes rather than raw colors (e.g. prefer `text-primary` over `text-[#ac3509]`, and use theme shadows like `shadow-sunlight` instead of custom box shadows).
5. **Class Overrides**: When overriding styles, use custom class strings cautiously to avoid colliding with default spacing or border radii.

---

## Dependencies

Teammates must verify the following items are configured in their environment:

- **Tailwind CSS v4** config configured at `src/index.css` via `@config "../tailwind.config.js"`.
- **Material Symbols (Outlined)** loaded in the document head (e.g., in `index.html` or dynamically via layout hooks) to render icons properly.
- **FontAwesome** React dependencies (`@fortawesome/react-fontawesome` and associated icon packages) for icon layouts inside `SearchBar`.

---

## Next Team Tasks

Now that these components are ready, future developers can safely integrate them to build pages and layouts:

- **Landing Page**: Can integrate `SearchBar` (large size) and `PrimaryButton` in the hero section.
- **Discover/Search Page**: Can use `SearchBar`, `TagBadge` for filters/vibes, and `SectionHeader` for results list headers.
- **Auth Forms (Login / Signup)**: Can safely depend on `InputField` and `PrimaryButton` to construct secure inputs and submission buttons.
- **Spot Details Page**: Can use `SectionHeader`, `TagBadge` (for spot categories/amenities), and `PrimaryButton` for actions like "Directions" or "Review".

---

## Final Notes

> _“This Shared UI module provides a foundation to streamline visual quality and interaction patterns across Spotly. Let's make sure we keep these components clean, lightweight, and strictly presentational. If you spot design issues or need extra styling variants, update the shared definitions in `designSystem.js` rather than applying local inline overrides. Happy coding!”_ — Shared UI Developer
