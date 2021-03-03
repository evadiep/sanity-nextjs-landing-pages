export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '60401112631f7400cb14f06a',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-t6ffzfi1',
                  apiId: '7b3ef753-ca75-472b-a9f2-1378df275106'
                },
                {
                  buildHookId: '6040111277199300c98765c9',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-t8nu67so',
                  apiId: '19358153-4caa-45c4-ad59-2d1735d03ccb'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/evadiep/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-t8nu67so.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
