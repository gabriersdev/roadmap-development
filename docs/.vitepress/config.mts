import {defineConfig} from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
    // https://vitepress.dev/reference/default-theme-config
    lang: 'pt-BR',
    base: "/",
    title: "Roadmap de Desenvolvimento",
    description: "Guia de aprendizado para programação.",
    head: [['link', {rel: 'icon', href: '/images/favicon.svg'}]],
    themeConfig: {
        siteTitle: "Roadmap Dev",
        logo: "/images/favicon.svg",

        // The title for establishing the outline of the page
        outlineTitle: 'Nesta página',

        nav: [
            {text: 'Início', link: '/'},
            {text: 'Roadmap', link: '/posts/roadmap'},
        ],

        sidebar: {
            '/roadmap/': [
                {
                    text: 'Roadmap',
                    items: [
                        {text: 'Lógica de Programação', link: '/roadmap/logic'},
                        {text: 'Front-end Básico', link: '/roadmap/frontend'},
                        {text: 'GIT', link: '/roadmap/git'},
                        {text: 'Markdown', link: '/roadmap/markdown'},
                        {text: 'Produtividade', link: '/roadmap/productivity'},
                        {text: 'Frameworks', link: '/roadmap/frameworks'},
                        {text: 'POO - Java', link: '/roadmap/oop-java'},
                        {text: 'Banco de dados', link: '/roadmap/database'},
                        {text: 'Fundamentos de Sistemas', link: '/roadmap/os-fundamentals'},
                        {text: 'Algoritmos e Estrutura de dados', link: '/roadmap/algorithms-data-structures'},
                        {text: 'Padrões de Arquitetura', link: '/roadmap/architecture-patterns'},
                        {text: 'Padrões de Design', link: '/roadmap/design-patterns'},
                        {text: 'Padrões de Desenvolvimento', link: '/roadmap/development-patterns'},
                        {text: 'APIs e Segurança WEB', link: '/roadmap/apis-security'},
                    ]
                }
            ]
        },

        socialLinks: [
            {icon: 'github', link: 'https://github.com/#'}
        ],

        footer: {
            message: 'Feito com ❤️ usando <a href="https://vitepress.dev" target="_blank" rel="noreferrer noopener">VitePress</a>',
            copyright: `Copyright &copy; ${new Date().getFullYear()}`
        },

        // Enable the edit link
        editLink: {
            pattern: 'https://github.com/#/#/edit/main/docs/:path'
        },

        // Config for the last updated text
        lastUpdated: {
            text: 'Modificado em',
            formatOptions: {
                dateStyle: 'short',
                timeStyle: 'short'
            }
        },

        search: {
            provider: 'local'
        },
    },
    markdown: {
        lazyLoading: true,
    }
})
