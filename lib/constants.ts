import { Briefcase, Calculator, LucideProps, Shield } from "lucide-react";

export const SITE_CONFIG = {
    name: process.env.NEXT_PUBLIC_SITE_NAME || "Arthur Ybson",
    fullName: process.env.NEXT_PUBLIC_SITE_FULL_NAME || "Arthur Ybson Advocacia e Consultoria Jurídica",
    description: "Assessoria jurídica estratégica com foco em segurança e resultado",
    url: process.env.NEXT_PUBLIC_SITE_URL || "https://arthurybson.adv.br",

    contact: {
        phone: process.env.NEXT_PUBLIC_PHONE || "84 9 8776-8280",
        email: process.env.NEXT_PUBLIC_EMAIL || "contato@arthurybson.adv.br",
        whatsapp: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "84987768280",
        whatsappDisplay: process.env.NEXT_PUBLIC_WHATSAPP_DISPLAY || "84 9 8776-8280",
        address: {
            street: process.env.NEXT_PUBLIC_STREET || "Rua Meira e Sá, 293 (Moura e Advogados Associados), Sala 6",
            neighborhood: process.env.NEXT_PUBLIC_NEIGHBORHOOD || "Centro",
            city: process.env.NEXT_PUBLIC_CITY || "Mossoró",
            state: process.env.NEXT_PUBLIC_STATE || "RN",
            full: process.env.NEXT_PUBLIC_ADDRESS_FULL || "Rua Meira e Sá, 293 (Moura e Advogados Associados), Sala 6, Centro, Mossoró/RN",
        },
    },

    businessHours: {
        weekdays: process.env.NEXT_PUBLIC_BUSINESS_HOURS_WEEKDAYS || "07h30 às 17h30",
        saturday: process.env.NEXT_PUBLIC_BUSINESS_HOURS_SATURDAY || "",
    },

    social: {
        instagram: process.env.NEXT_PUBLIC_INSTAGRAM || "arthurybson",
        linkedin: process.env.NEXT_PUBLIC_LINKEDIN || "",
        facebook: process.env.NEXT_PUBLIC_FACEBOOK || "",
    },

    oab: {
        primary: process.env.NEXT_PUBLIC_OAB_PRIMARY || "OAB/RN - 20.628"
    },

    education: [
        "Graduado em Direito pela Ufersa",
        "Pós-graduado em Direito Tributário"
    ],

    experience: [
        "2 anos de estágio no escritório Moura & Advogados Associados",
        "1 ano e 6 meses de estágio na Advocacia Geral da União",
        "1 ano de estágio no Gabinete da 10ª Vara Federal em Mossoró/RN"
    ],
};



type IconMap = Record<string, React.ForwardRefExoticComponent<Omit<LucideProps, "ref"> & React.RefAttributes<SVGSVGElement>>>;
export const iconMap: IconMap = {
    Briefcase,
    Calculator,
    Shield
};

export const PRACTICE_AREAS = [
    {
        id: "empresarial",
        title: "Direito Empresarial",
        description: "Consultoria jurídica para empresas, contratos, societário e compliance.",
        icon: "Briefcase",
        slug: "empresarial",
    },
    {
        id: "tributario",
        title: "Direito Tributário",
        description: "Planejamento tributário, recuperação de créditos e defesas fiscais.",
        icon: "Calculator",
        slug: "tributario",
    },
    {
        id: "previdenciário",
        title: "Direito Previdenciário",
        description: "Assessoria em questões previdenciárias, aposentadorias, pensões e defesas trabalhistas.",
        icon: "Shield",
        slug: "previdenciario",
    }
];


export const areaDetails: Record<string, { services: string[]; cases: string[] }> = {
    empresarial: {
        services: ["Contratos empresariais", "Direito societário", "Compliance", "Fusões e aquisições"],
        cases: ["Constituição de empresas", "Revisão de contratos", "Resolução de conflitos societários"],
    },
    tributario: {
        services: ["Planejamento tributário", "Recuperação de créditos", "Defesas fiscais", "Consultoria"],
        cases: ["Redução de carga tributária", "Contestação de autos de infração", "Parcelamentos fiscais"],
    },
    previdenciário: {
        services: ["Aposentadorias", "Pensão por morte", "Auxílio-doença", "Defesas trabalhistas"],
        cases: ["Concessão de aposentadoria", "Revisão de benefícios", "Recursos administrativos e judiciais"],
    },
};

export const FAQ_ITEMS = [
    {
        question: "Como funciona a primeira consulta?",
        answer: "A primeira consulta é uma conversa para entendermos seu caso, avaliarmos a viabilidade jurídica e apresentarmos as melhores estratégias. Pode ser presencial ou online, conforme sua preferência.",
    },
    {
        question: "Quais são as formas de pagamento?",
        answer: "Trabalhamos com honorários fixos, percentuais ou mensalidades, dependendo do tipo de serviço. Aceitamos PIX, transferência bancária, cartão de crédito e parcelamento em casos específicos.",
    },
    {
        question: "Quanto tempo leva um processo?",
        answer: "O prazo varia conforme a complexidade do caso e a área do direito. Durante a consulta inicial, fornecemos uma estimativa realista baseada em nossa experiência com casos similares.",
    },
    {
        question: "Vocês atendem em quais regiões?",
        answer: "Nosso escritório está localizado em Mossoró/RN, mas atendemos clientes em todo o Brasil através de consultas online e atuação em processos digitais.",
    },
    {
        question: "Como é garantida a confidencialidade?",
        answer: "Seguimos rigorosamente o Código de Ética da OAB. Todas as informações compartilhadas são protegidas por sigilo profissional absoluto, garantindo total privacidade e segurança.",
    }
];

export const TESTIMONIALS = [
    {
        initials: "M.S.",
        text: "Profissionais extremamente competentes e atenciosos. Resolveram minha questão trabalhista com agilidade e transparência total.",
        role: "Empresário",
        rating: 5,
    },
    {
        initials: "R.L.",
        text: "Excelente assessoria jurídica para minha empresa. Sempre disponíveis e com soluções práticas e eficientes.",
        role: "Diretora Comercial",
        rating: 5,
    },
    {
        initials: "C.A.",
        text: "Recomendo! Cuidaram do inventário da minha família com muito profissionalismo e sensibilidade. Processo tranquilo do início ao fim.",
        role: "Arquiteta",
        rating: 5,
    },
    {
        initials: "P.M.",
        text: "Atendimento humanizado e técnica jurídica impecável. Conseguiram reverter uma situação que parecia impossível.",
        role: "Médico",
        rating: 5,
    },
];
