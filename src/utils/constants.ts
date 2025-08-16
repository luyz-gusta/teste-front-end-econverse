import type { Category, Link } from "../@types/types";

export const SUBCATEGORIES: string[] = [
    "Celular",
    "Acessórios",
    "Tablets",
    "Notebooks",
    "Tvs"
];

export const CATEGORIES: Category[] = [
    {
        name: "Tecnologia",
        icon: "Tecnology",
        subCategory: ["Celular", "Acessórios", "Tablets", "Notebooks", "Tvs"]
    }, 
    {
        name: "Supermercado",
        icon: "Market",
    },
    {
        name: "Bebidas",
        icon: "Whiskey",
    },
    {
        name: "Ferramentas",
        icon: "Tools",
    },
    {
        name: "Saúde",
        icon: "Health",
    },
    {
        name: "Esportes e fitness",
        icon: "Race",
    },

    {
        name: "Moda",
        icon: "Fashion",
    }
]

export const LINKS: Link[] = [
    {
        title: 'Institucional',
        options: ['Sobre nós', 'Movimento', 'Trabalhe conosco']
    },
    {
        title: 'Ajuda',
        options: ['Suporte', 'Fale Conosco', 'Perguntas Frequentes']
    },
    {
        title: 'Termos',
        options: ['Termos e Condições', 'Política de Privacidade', 'Troca e Devolução']
    }
]