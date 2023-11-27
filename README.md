# Frontend Test Task

[LIVE DEMO PAGE](https://djbob2000.github.io/ecosolution/)

## Project Overview

Implement the Ecosolution landing page according to the technical
specifications.

## Technologies

- React

## Materials

- [Layout](https://www.figma.com/file/pTbhAbEXjsofeQHmtIE2tK/Ecosolution?type=design&node-id=136%3A1944&mode=design&t=dlfJhTEVY9V6T0vg-1)

## Setup

To run this project, install it locally using npm:

```
$ cd ../ecosolution
$ npm install
$ npm run dev
```

## Key Features

### Header

- Fixed header containing a logo, burger menu, Get in touch (excluding mobile
  version).
- Header color changes on scroll (see ui-kit).
- Smooth scroll to the Contact Us section when Get in touch is clicked.

### Burger-menu

- Close button, navigation menu, social media links.
- Each menu item is clickable and triggers a smooth scroll to the corresponding
  section.

### Main

- Smooth scroll to the Cases section when Learn more is clicked.

### About (Values)

- Use CSS Grid algorithm for the values list layout.
- Do not display photos on mobile, only values.

### Electricity

- Implement an automatic counter, +1 per second (bonus task).

### Cases

- Infinite slider.
- Change the slide by clicking the buttons or dragging.

### FAQ

- The first answer is open by default.
- Only one answer can be open at a time.

### Contact Us

- Smooth scroll to the Contact Us section when Contact Us is clicked.
- Form validation with mandatory and optional fields.

### Footer

- Arrow for smooth scroll to the Main section.

## Acceptance Criteria

- Fixed layout in px.
- Semantic and valid markup.
- Accessibility (a11y) as a bonus.
- Responsive and cross-browser layout.
- Use the Mobile First approach.
- Clean code with formatting preserved (ESLint/Prettier).
- Code divided into separate components.
