## Editing the front-end code

The code that is injected in the front end can be located under the folder "public". The files are:

- inject_js.js
- inject_css.css

All HTML is being injected via Javascript.

To code the Javascript code, edit the `inject_js_dev.js` file

## Developing the project

Run _yarn start_ to start the project and get the app up and running locally.

Kindly bear in mind that some changes are visible only on the live project (the ones that use ecwid's window object, like the database)

## Pushing changes to dev

Once ready to test, publish it to github pages:

`git add . && git commit -m "PUBLISH UPDATES" && git push origin main && npm run deploy`

## Editing the front-end CSS

This project uses .SCSS. The compiled SCSS generates the inject_css.css

## What is the back-end folder

The back-end's contain one javascript code to minify the file "inject_js_dev.js" and transform it into "inject_js.js".

To enable it:

1. run `node index.js` in the `backend` folder.

## Deploying to production

After coding and testing it in dev, do the following to deploy to production:

`git checkout production`
`git add . && git commit -m "[DEPLOY PRODUCTION]"`
`git push origin production`

The JS and CSS will be deployed to https://dash.cloudflare.com/
