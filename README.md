# plotly-test

Testing a plotly build with react &amp; parcel

## Requirements

I have had errors installing the dependencies for Parcel 2 when running an older version of node.

It's recommended to have a newer version of node available. I have had success with `v14.19.1`.

1. You can test your version of node with `node -v`.
2. If using an older version of node you can update it by running `nvm install 14.19.1`
3. If you have `v14.19.1` installed you can use it via `nvm use 14.19.1`

## Cloning and Installing

1. In your editor/terminal navigate to the folder you want the repo stored and type `git clone https://github.com/gorsuchtim/plotly-test`
2. Navigate into the folder via `cd parcel2`
3. Install all dependencies via `npm install`

## Running the server and available scripts

### Starting a local environment

1. Running `npm start` will open the project in a new browser window at `localhost:1234`

- `npm start` also creates the `dev` folder in the file tree

### File tree & imports overview

1. `app.html` loads in `app.js` via `<script src="./app.js" type="module" defer></script>`
2. `app.js` defines what container from the html to load the app into

- `app.js` imports and loads in the react component passed from `/src/js/apps/app-inline.jsx`

3. `app-inline.jsx` lazy imports the available layouts and renders these layouts as a mirror to how layouts are rendered via AC results & Chameleon

- a default (fallback) layout is defined
- a "dynamic" layout is defined (hardcoded for now) as the `FAKE_OBJ_VALUE` variable
- the "dynamic" or default layout is rendered as `<LayoutToRender>`

**_Changing the `FAKE_OBJ_VALUE` value to one of the other options in the `const layouts` object will change which layout is rendered by the app_**

### Additional Scripts

**Prettier**
`npm run prettier` will format all of the code manually via Prettier

**Lint**
`npm run lint` will lint-check all javascript code manually and call out any errors to be resolved

**Build**
`npm run build` first lints the files. If linting passes it will format all of the code via prettier. It then will create the production css and javascript files in a `prod` folder in the file tree.

## Layout and Example Chart Configurations

**Configs for each specific chart are available on the left side of the pages linked below**
_This is referencing bar chart configs as an example_

- [Layout Configs] (https://plotly.com/javascript/reference/layout/#layout-margin)
- [Bar Chart Configs] (https://plotly.com/javascript/reference/bar/)

## TODO!

### Determine which compiled version of Plotly to use

- Default Plotly bundle is ~6MB unminified and compiles to just over 2MB
  - There are [different pre-compiled bundles] (https://github.com/plotly/plotly.js/blob/master/dist/README.md#partial-bundles) that can be used
    - Example basic bundle minifies to ~997kb
    - Example cartesian bundle minifies to 1.2MB and includes 12 chart types
  - It is possible to create a [completely customized bundle] (https://github.com/plotly/plotly.js/blob/master/CUSTOM_BUNDLE.md) as well
- We could avoid installing plotly as a dependency and load [from a CDN] (https://github.com/plotly/plotly.js#use-the-plotlyjs-cdn-hosted-by-fastly)
- Create configuration details in readme or wiki that exposes the available configurations and chart types
  - Option: Just link somewhere to configs:
