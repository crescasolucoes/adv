export const SITE_CONFIG = {
    name: "Advocacia Especializada",
    description: "Assessoria jurídica estratégica com foco em segurança e resultado",
    url: "https://advocacia.com.br",

    contact: {
        phone: "(11) 99999-9999",
        email: "contato@advocacia.com.br",
        whatsapp: "5511999999999",
        address: {
            street: "Av. Paulista, 1000 - Conjunto 1501",
            city: "São Paulo",
            state: "SP",
            zip: "01310-100",
        },
    },

    businessHours: {
        weekdays: "Segunda a Sexta: 9h às 18h",
        saturday: "Sábado: 9h às 13h",
    },

    social: {
        linkedin: "https://linkedin.com/company/almeida-rocha",
        instagram: "https://instagram.com/almeidarocha.adv",
        facebook: "https://facebook.com/almeidarocha.adv",
    },

    oab: {
        primary: "OAB/SP 123.456",
        secondary: "OAB/SP 789.012",
    },
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
        id: "civil",
        title: "Direito Civil",
        description: "Contratos, responsabilidade civil, indenizações e direitos do consumidor.",
        icon: "Scale",
        slug: "civil",
    },
    {
        id: "trabalhista",
        title: "Direito Trabalhista",
        description: "Defesa em ações trabalhistas, rescisões e consultoria preventiva.",
        icon: "Users",
        slug: "trabalhista",
    },
    {
        id: "tributario",
        title: "Direito Tributário",
        description: "Planejamento tributário, recuperação de créditos e defesas fiscais.",
        icon: "Calculator",
        slug: "tributario",
    },
    {
        id: "imobiliario",
        title: "Direito Imobiliário",
        description: "Compra, venda, locação, regularização e usucapião de imóveis.",
        icon: "Home",
        slug: "imobiliario",
    },
    {
        id: "familia",
        title: "Família e Sucessões",
        description: "Divórcio, inventário, testamento e planejamento sucessório.",
        icon: "Heart",
        slug: "familia-sucessoes",
    },
];

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
        answer: "Nosso escritório está localizado em São Paulo/SP, mas atendemos clientes em todo o Brasil através de consultas online e atuação em processos digitais.",
    },
    {
        question: "Como é garantida a confidencialidade?",
        answer: "Seguimos rigorosamente o Código de Ética da OAB. Todas as informações compartilhadas são protegidas por sigilo profissional absoluto, garantindo total privacidade e segurança.",
    },
    {
        question: "Posso acompanhar meu processo online?",
        answer: "Sim! Mantemos nossos clientes sempre informados através de relatórios periódicos por e-mail e WhatsApp, além de disponibilizar acesso aos andamentos processuais quando solicitado.",
    },
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
