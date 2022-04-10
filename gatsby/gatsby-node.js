import path from 'path';

async function turnProjectsIntoPages({ graphql, actions }) {
  //get template
  //query all proj
  //loops over and create pages
  const projectTemplate = path.resolve('./src/templates/Project.js');
  
  const { data } = await graphql(`
  query {
    projects: allSanityProjects {
      nodes {
        name
        slug {
          current
        }
      }
    }
  }
`);

  data.projects.nodes.forEach(project => {
    actions.createPage({
      path: `project/${project.slug.current}`,
      component: projectTemplate,
      context: {
        slug: project.slug.current
      }
    });
  });
}

export async function createPages(param) {
  //create pages dynamically 
  await turnProjectsIntoPages(param);
}