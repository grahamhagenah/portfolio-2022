# Getting Started

From the gatsby directory, run the command:

`npm run develop`
or
`npm start`

The site will be available at <http://localhost:8000/>

To access the Sanity Studio, from the sanity directory, run the command:

`npm start`

You may need to log in if it's been a while:

`sanity login`

The site will be available at <http://localhost:8000/>

# Making changes to the site content

After making changes to the site content, from the Gatsby directory run the command:

`npm run build`

Then commit the changes and push to remote to trigger a new deploy on Netlify

# Adding fields to the schema

When making changes to the schema, make sure to redeploy sanity and restart dev environment after

`sanity graphql deploy`
`npm run build`
