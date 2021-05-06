# vue-3-tailwind-boilerplate

## Project setup

```
npm install
```

### Compiles and hot-reloads for development

```
npm run serve
```

### Compiles and minifies for production

```
npm run build
```

### Run your unit tests

```
npm run test:unit
```

### Run your end-to-end tests

```
npm run test:e2e
```

### Lints and fixes files

```
npm run lint
```

## Setup Tailwind

1. Configure your colors in tailwind.config.js ([Learn more](https://tailwindcss.com/docs/customizing-colors#color-palette-reference))

## Components

You can register common components wich will automatically be registered globally. They will be prefixed with `v-` + filename so you can use them f.e. like `<v-button>Button</v-button>`

### Available components

**Button**

| Prop      | Type    | Default | Description                                                                                                              |
| --------- | ------- | ------- | ------------------------------------------------------------------------------------------------------------------------ |
| primary   | boolean | true    | Sets primary color scheme                                                                                                |
| minimal   | boolean |         | Sets minimal (white) color scheme                                                                                        |
| secondary | boolean |         | Sets secondary color scheme                                                                                              |
| to        | string  |         | Denotes the target route of the link                                                                                     |
| icon      | string  |         | Adds an icon to the button. (Use PascalCase convention of [Heroicons](https://heroicons.com/) + 'Icon'. F.e. 'MailIcon') |
| left      | boolean | true    | Aligns the ccon left                                                                                                     |
| right     | boolean |         | Aligns the icon right                                                                                                    |
