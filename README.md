# plotly-test

Testing a plotly build with react &amp; parcel

## Requirements

I have had errors installing the dependencies for Parcel 2 when running an older version of node.

It's recommended to have a newer version of node available. I have had success with `v14.19.1`.

1. You can test your version of node with `node -v`.
2. If using an older version of node you can update it by running `nvm install 14.19.1`

## Cloning and Installing

1. In your editor/terminal navigate to the folder you want the repo stored and type `git clone https://github.com/gorsuchtim/parcel2`
2. Navigate into the folder via `cd parcel2`
3. Install all dependencies via `npm install`

## Running the server and available scripts

### Starting a local environment

1. Running `npm start` will open the project in a new browser window at `localhost:1234`

- `npm start` also creates the `dev` folder in the file tree

### Additional Scripts

**Prettier**
`npm run prettier` will format all of the code manually via Prettier

**Lint**
`npm run lint` will lint-check all javascript code manually and call out any errors to be resolved

**Build**
`npm run build` first lints the files. If linting passes it will format all of the code via prettier. It then will create the production css and javascript files in a `prod` folder in the file tree.

## TODO!

### Determine which compiled version of Plotly to use

- Default Plotly bundle is ~6MB unminified and compiles to just over 2MB
  - There are [different pre-compiled bundles] (https://github.com/plotly/plotly.js/blob/master/dist/README.md#partial-bundles) that can be used
    - Example basic bundle minifies to ~997kb
    - Example cartesian bundle minifies to 1.2MB and includes 12 chart types
  - It is possible to create a [completely customized bundle] (https://github.com/plotly/plotly.js/blob/master/CUSTOM_BUNDLE.md) as well
- We could avoid installing plotly as a dependency and load [from a CDN] (https://github.com/plotly/plotly.js#use-the-plotlyjs-cdn-hosted-by-fastly)
