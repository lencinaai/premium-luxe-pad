// =============================================
// DADOS CENTRALIZADOS DO SITE
// Todos os textos e configurações ficam aqui.
// Para trocar mídias, basta substituir os arquivos
// nas pastas indicadas nos comentários.
// =============================================

export const siteInfo = {
  name: "Cristian Lencina",
  role: "Corretor de imóveis",
  location: "Litoral Norte - RS",
  creci: "CRECI 59.227",
  whatsappNumber: "5551999999999", // Substituir pelo número real
  whatsappText: "Olá, Cristian! Gostaria de mais informações.",
  // Imagem de perfil: public/assets/profile/avatar.jpg
  avatarUrl: "/assets/profile/avatar.jpg",
};

export const heroContent = {
  // Imagens de fundo: public/assets/hero/hero-01.jpg até hero-17.jpg
  imageCount: 17,
  imageBasePath: "/assets/hero/hero-",
  intervalMs: 3000,
  // Imagem do card lateral: public/assets/profile/hero-card.jpg
  heroCardImage: "/assets/profile/hero-card.jpg",
  balloon1:
    "Para você que busca investir: Eu trabalho com as melhores condições de pagamento do mercado, sempre expostas e confirmadas com os proprietários. Com transparência e honestidade, direto ao ponto, preto no branco.",
  balloon2:
    "Para quem vende: Fotos e vídeos de alto padrão e apresentação profissional, com inteligência artificial para destacar o seu imóvel no mercado.",
  ctaPrimary: "Ver imóveis em destaque da semana",
  ctaSecondary: "Quero vender meu imóvel",
};

export const menuItems = [
  { label: "Início", anchor: "hero" },
  { label: "Imóveis à venda (Top 06)", anchor: "imoveis" },
  { label: "Quero vender meu imóvel", anchor: "vender" },
  { label: "Vazio, versão decorada", anchor: "decorada" },
  { label: "Terreno, projeto com IA", anchor: "terreno" },
  { label: "Projeto de condomínio fechado", anchor: "condominio" },
  { label: "Depoimentos", anchor: "depoimentos" },
  { label: "Sobre mim", anchor: "sobre" },
  { label: "FAQ", anchor: "faq" },
  { label: "Redes e contato", anchor: "contato" },
];

// =============================================
// SEÇÃO 2: IMÓVEIS À VENDA
// Imagens de cada imóvel:
//   public/assets/properties/top-XX/01.jpg, 02.jpg, 03.jpg
// =============================================
export interface PropertyData {
  id: string;
  badge: string;
  title: string;
  location: string;
  conditions: string[];
  features: string[];
  totalPrice: string;
  images: string[];
  whatsappMessage: string;
}

export const propertiesSection = {
  title: "Imóveis à venda - Top 06 da semana",
  subtitle:
    "Abaixo estão 06 oportunidades da semana. O que chama a atenção aqui é a condição. Os títulos abaixo priorizam a condição. Clique nas setas para ver as 03 imagens de cada imóvel.",
  ctaText:
    "Se você tiver uma condição específica como  prazo longo, permuta ou financiamento bancario, fale comigo no WhatsApp.",
  ctaButton: "Falar no WhatsApp",
  buttonText: "Tenho interesse, agendar visita",
};

export const properties: PropertyData[] = [
  {
    id: "top-01",
    badge: "TOP 01",
    title: "R$ 350 mil de entrada + saldo em 72x",
    location: "Condomínio Terrasul, Capão da Canoa, RS",
    conditions: [
      "72x com reforços anuais",
      "Aceita financiamento bancário",
      "Aceita carro",
      "Somente à vista: R$ 1.000.000"
    ],
    features: [
      "03 suítes",
      "02 banheiros",
      "03 vagas cobertas",
      "Próximo à infraestrutura do condomínio",
      "Mobiliada",
      "Nova"
    ],
    totalPrice: "R$ 1.290.000,00",
    images: [
      "/assets/properties/top-01/top-01-1.jpg.jpeg",
      "/assets/properties/top-01/top-01-2.jpg.jpeg",
      "/assets/properties/top-01/top-01-3.jpg.jpeg",
    ],
    whatsappMessage: "Olá, Cristian! Tenho interesse no imóvel TOP 01 (Condomínio Terrasul).",
  },
  {
    id: "top-02",
    badge: "TOP 02",
    title: "100x direto para pagar",
    location: "Condomínio Velas da Marina, Capão da Canoa, RS",
    conditions: [
      "100x direto com reforços anuais",
      "Aceita lancha",
      "Aceita jet ski",
      "Aceita carro de alto valor",
      "Aceita imóvel fora da cidade",
      "Bom de negócio"
    ],
    features: [
      "Casa térrea",
      "04 suítes independentes e lavabo",
      "05 banheiros",
      "Piscina",
      "Área gourmet",
      "Pé direito duplo",
      "Mobiliada e decorada"
    ],
    totalPrice: "R$ 3.590.000,00",
    images: [
      "/assets/properties/top-02/top-02-1.jpg.jpg",
      "/assets/properties/top-02/top-02-2.jpg.jpg",
      "/assets/properties/top-02/top-02-3.jpg.jpg",
    ],
    whatsappMessage: "Olá, Cristian! Tenho interesse no imóvel TOP 02 (Capão Ilhas Resort).",
  },
  {
    id: "top-03",
    badge: "TOP 03",
    title: "R$ 1 milhão no ato + 48x para pagar",
    location: "Condomínio Capão Ilhas Resort, Capão da Canoa, RS",
    conditions: [
      "48x com reforços anuais",
      "Aceita Plano Safra, conforme análise",
      "Aceita carro",
      "Bom de negócio"
    ],
    features: [
      "Casa beira lago",
      "Gourmet com vista para o lago",
      "Mobiliada e decorada",
      "04 suítes",
      "02 vagas",
      "Pé direito duplo",
      "Ambientes integrados"
    ],
    totalPrice: "R$ 2.490.000,00",
    images: [
      "/assets/properties/top-03/top-03-1.jpg",
      "/assets/properties/top-03/top-03-2.jpg",
      "/assets/properties/top-03/top-03-3.jpg",
    ],
    whatsappMessage: "Olá, Cristian! Tenho interesse no imóvel TOP 03 (Velas da Marina).",
  },
  {
    id: "top-04",
    badge: "TOP 04",
    title: "R$ 570 mil de entrada + 50x para pagar",
    location: "Condomínio Capão Ilhas Resort, Capão da Canoa, RS",
    conditions: [
      "R$ 570 mil de entrada",
      "50x para pagar com reforços anuais",
      "Aceita carro",
      "Estuda imóvel de menor valor no litoral"
    ],
    features: [
      "04 suítes",
      "05 banheiros",
      "02 vagas",
      "Mobiliada e decorada",
      "Beira lago",
      "Espaço para piscina"
    ],
    totalPrice: "R$ 2.970.000,00",
    images: [
      "/assets/properties/top-04/top-04-1.jpg",
      "/assets/properties/top-04/top-04-2.jpg",
      "/assets/properties/top-04/top-04-3.jpg",
    ],
    whatsappMessage: "Olá, Cristian! Tenho interesse no imóvel TOP 04.",
  },
  {
    id: "top-05",
    badge: "TOP 05",
    title: "R$ 800 mil de entrada + prazo em até 36x",
    location: "Condomínio Amare Home Resort",
    conditions: [
      "Aceita carro até R$ 400 mil",
      "R$ 800 mil de entrada",
      "Prazo em até 36x",
      "Estuda terreno no litoral",
      "Aberto a propostas diferentes",
      "Muito bom de negócio"
    ],
    features: [
      "Sobrado",
      "04 suítes",
      "Novo",
      "Vazio",
      "Living todo integrado",
      "Piscina instalada",
      "Lareira"
    ],
    totalPrice: "R$ 2.900.000,00",
    images: [
      "/assets/properties/top-05/top-05-1.jpg",
      "/assets/properties/top-05/top-05-2.jpg",
      "/assets/properties/top-05/top-05-3.jpg",
    ],
    whatsappMessage: "Olá, Cristian! Tenho interesse no imóvel TOP 05.",
  },
  {
    id: "top-06",
    badge: "TOP 06",
    title: "15% de entrada + 100x para pagar",
    location: "Condomínio Terrasul - Capão da Canoa/RS",
    conditions: [
      "100x para pagar com reforços anuais",
      "15% de entrada",
      "Aceita imóvel no litoral",
      "Aceita carro",
      "Estuda propostas diferentes",
      "Muito bom de negócio"
    ],
    features: [
      "Sobrado",
      "04 suítes",
      "01 suíte térrea",
      "01 suíte master",
      "02 vagas cobertas",
      "Finamente decorado",
      "Ao lado da área verde",
      "Nunca habitado"
    ],
    totalPrice: "R$ 3.750.000,00",
    images: [
      "/assets/properties/top-06/top-06-1.jpg",
      "/assets/properties/top-06/top-06-2.jpg",
      "/assets/properties/top-06/top-06-3.jpg",
    ],
    whatsappMessage: "Olá, Cristian! Tenho interesse no imóvel TOP 06.",
  },
];

// =============================================
// SEÇÃO 3: QUERO VENDER MEU IMÓVEL
// =============================================
export const sellerSection = {
  title: "Quero vender meu imóvel",
  blocks: [
    "Eu cuido do seu anúncio como vitrine: fotos e vídeos de alto padrão, texto direto e material pronto para redes sociais.",
    "Se o imóvel estiver vazio, eu crio uma versão decorada para dar noção real de espaço e também posso incluir pessoas realistas no ambiente, com qualidade e realismo.",
    "Se você tem um terreno, um lote em condomínio, um apartamento ou uma casa à venda e quer destacar seu anúncio no mercado, abaixo estão exemplos do que eu consigo criar com inteligência artificial para valorizar a apresentação e aumentar a visibilidade do seu imóvel.",
    "No tráfego pago, eu faço a segmentação e a estrutura do anúncio para atingir o público certo para o imóvel anunciado. Para imóveis em exclusividade comigo, não existe taxa de gestão. O proprietário paga apenas o valor investido na plataforma, cobrado diretamente pela Meta.",
  ],
};

// =============================================
// SEÇÃO 4: VAZIO, VERSÃO DECORADA
// Imagens:
//   public/assets/seller/empty-decorated/example-01/before.jpg
//   public/assets/seller/empty-decorated/example-01/after-ia.jpg
//   public/assets/seller/empty-decorated/example-01/poster.jpg
//   public/assets/seller/empty-decorated/example-02/before.jpg
//   public/assets/seller/empty-decorated/example-02/after-ia.jpg
//   public/assets/seller/empty-decorated/example-02/poster.jpg
// Vídeos:
//   public/assets/videos/seller/empty-decorated/example-01.mp4
//   public/assets/videos/seller/empty-decorated/example-02.mp4
// =============================================
export const emptyDecoratedSection = {
  title: "Imóvel vazio não cria conexão. Versão decorada dá noção real de espaço.",
  chipLabel: "Versão decorada com inteligência artificial",
  beforeLabel: "Antes",
  afterLabel: "Depois com IA",
  examples: [
    {
      label: "Exemplo 01",
      before: "/assets/seller/empty-decorated/example-01/before.jpg",
      after: "/assets/seller/empty-decorated/example-01/after-ia.jpg",
      poster: "/assets/seller/empty-decorated/example-01/poster.jpg",
      video: "/assets/videos/seller/empty-decorated/example-01.mp4",
    },
    {
      label: "Exemplo 02",
      before: "/assets/seller/empty-decorated/example-02/before.jpg",
      after: "/assets/seller/empty-decorated/example-02/after-ia.jpg",
      poster: "/assets/seller/empty-decorated/example-02/poster.jpg",
      video: "/assets/videos/seller/empty-decorated/example-02.mp4",
    },
  ],
};

// =============================================
// SEÇÃO 5: TERRENO, PROJETO COM IA
// Imagens:
//   public/assets/seller/lot-ai/example-01/empty-lot.jpg
//   public/assets/seller/lot-ai/example-01/project-ia.jpg
//   public/assets/seller/lot-ai/example-01/poster.jpg
//   public/assets/seller/lot-ai/example-02/empty-lot.jpg
//   public/assets/seller/lot-ai/example-02/project-ia.jpg
//   public/assets/seller/lot-ai/example-02/poster.jpg
// Vídeos:
//   public/assets/videos/seller/lot-ai/example-01.mp4
//   public/assets/videos/seller/lot-ai/example-02.mp4
// =============================================
export const lotAiSection = {
  title: "Lote vende melhor quando o comprador enxerga o que ele pode virar.",
  chipLabel: "Projeto com inteligência artificial",
  beforeLabel: "Terreno vazio",
  afterLabel: "Projeto com IA",
  examples: [
    {
      label: "Exemplo 01",
      before: "/assets/seller/lot-ai/example-01/empty-lot.jpg",
      after: "/assets/seller/lot-ai/example-01/project-ia.jpg",
      poster: "/assets/seller/lot-ai/example-01/poster.jpg",
      video: "/assets/videos/seller/lot-ai/example-01.mp4",
    },
    {
      label: "Exemplo 02",
      before: "/assets/seller/lot-ai/example-02/empty-lot.jpg",
      after: "/assets/seller/lot-ai/example-02/project-ia.jpg",
      poster: "/assets/seller/lot-ai/example-02/poster.jpg",
      video: "/assets/videos/seller/lot-ai/example-02.mp4",
    },
  ],
};

// =============================================
// SEÇÃO 6: PROJETO DE CONDOMÍNIO FECHADO
// Imagens:
//   public/assets/condo/featured.jpg
//   public/assets/condo/gallery-01.jpg
//   public/assets/condo/gallery-02.jpg
//   public/assets/condo/gallery-03.jpg
//   public/assets/condo/video-poster.jpg
// Vídeo:
//   public/assets/videos/condo/featured.mp4
// =============================================
export const condoSection = {
  title: "Projeto de condomínio fechado",
  subtitle: "Projeto completo com imagens e vídeos para mostrar execução real.",
  featured: "/assets/condo/featured.jpg",
  gallery: [
    "/assets/condo/gallery-01.jpg",
    "/assets/condo/gallery-02.jpg",
    "/assets/condo/gallery-03.jpg",
  ],
  videoPoster: "/assets/condo/video-poster.jpg",
  video: "/assets/videos/condo/featured.mp4",
};

// =============================================
// SEÇÃO 7: DEPOIMENTOS
// Fotos: public/assets/testimonials/01.jpg .. 04.jpg
// =============================================
export const testimonialsSection = {
  title: "Depoimentos",
  items: [
    {
      text: "Excelente atendimento, muito transparente com as condições. Encontramos exatamente o que procurávamos.",
      signature: "M.",
      avatar: "/assets/testimonials/01.jpg",
    },
    {
      text: "O material de divulgação que ele fez para a minha casa foi impecável. Vendeu rápido e com segurança.",
      signature: "C.",
      avatar: "/assets/testimonials/02.jpg",
    },
    {
      text: "Profissionalismo do início ao fim. As imagens com inteligência artificial fizeram toda a diferença no anúncio.",
      signature: "D.",
      avatar: "/assets/testimonials/03.jpg",
    },
    {
      text: "Sempre claro nas negociações. Mostrou as melhores opções de pagamento sem enrolação.",
      signature: "F.",
      avatar: "/assets/testimonials/04.jpg",
    },
  ],
};

// =============================================
// SEÇÃO 8: SOBRE MIM
// Foto: public/assets/profile/about-card.jpg
// =============================================
export const aboutSection = {
  title: "Sobre mim",
  image: "/assets/profile/about-card.jpg",
  paragraphs: [
    "Cristian Lencina. Corretor de imóveis em Capão da Canoa, no Litoral Norte do Rio Grande do Sul.",
    "Eu percebi que o mercado imobiliário está confuso: anúncios com informações incompletas, condições mal explicadas e atendimento inconsistente. Isso desgasta o comprador e também o vendedor, que acaba recebendo propostas sem filtro.",
    "Meu trabalho é conectar duas pontas: quem busca imóvel com condição real de pagamento e quem quer vender com apresentação profissional e visibilidade de verdade. Para os dois lados, eu entrego clareza, atendimento direto e foco em resultado.",
    "Eu uso tecnologia e inteligência artificial como ferramenta para valorizar o imóvel do vendedor e para encontrar oportunidades com melhor cenário de negociação para o comprador. A tecnologia entra para melhorar a apresentação e o alcance do anúncio.",
    "Cada negócio que eu fecho é um relacionamento construído com transparência e responsabilidade.",
    "Se você está buscando imóvel no Litoral Norte ou quer vender com destaque e clareza, entre em contato comigo.",
  ],
};

// =============================================
// SEÇÃO 9: FAQ
// =============================================
export const faqSection = {
  title: "FAQ",
  items: [
    {
      question: "Atende quais regiões?",
      answer: "Capão da Canoa e Xangri-Lá, Rio Grande do Sul.",
    },
    {
      question: "Você cobra comissão quanto?",
      answer:
        "A comissão padrão em Capão da Canoa é 08% sobre o valor total do negócio, sendo 04% do comprador e 04% do vendedor. Em Xangri-Lá, a comissão é 06% sobre o valor total do negócio, paga somente pelo vendedor. A comissão é calculada sobre o valor total final do contrato, inclusive em casos de permuta ou entrada com imóveis, e não apenas sobre a parte em dinheiro.",
    },
    {
      question: "Você cobra para fazer material do vendedor?",
      answer:
        "Eu avalio caso a caso. Meu foco é criar um material acima do padrão do mercado para aumentar a visibilidade de imóveis e terrenos à venda. Quando o imóvel é meu cliente e está em exclusividade comigo, nenhum valor adicional é acrescentado. Quando não é exclusividade, podemos conversar para definir o melhor formato de trabalho.",
    },
    {
      question: "Como funciona o Meta Ads?",
      answer:
        "Eu cuido da segmentação e da estrutura do anúncio para alcançar o público com maior probabilidade de interesse no imóvel anunciado. Para imóveis em exclusividade comigo, não existe taxa de gestão. O proprietário paga apenas o valor investido na plataforma, cobrado diretamente pela Meta. O alcance e o volume de interessados variam conforme o orçamento definido para o anúncio. Em imóveis sem exclusividade, conversamos para alinhar a melhor forma de fazer essa gestão.",
    },
    {
      question: "Como funciona a versão decorada (Virtual Stage)?",
      answer:
        "Eu crio uma versão decorada com inteligência artificial a partir do ambiente real vazio. Isso ajuda o comprador a visualizar melhor o espaço e o potencial do imóvel. Posso produzir imagens e vídeos curtos para redes sociais, criando um material mais completo e atrativo, sem a necessidade de investimento imediato em decoração ou design de interiores.",
    },
    {
      question: "Como funciona a exclusividade em Capão da Canoa e Xangri-Lá?",
      answer:
        "Na exclusividade, eu centralizo a divulgação, os materiais e o filtro de propostas, para que o proprietário receba apenas contatos e negociações consistentes. A exclusividade não trava a venda. No litoral, corretores trabalham em parceria, e o imóvel continua sendo ofertado ao mercado com organização e melhor apresentação. Em Capão da Canoa, a comissão do vendedor na venda é 04%. Em Xangri-Lá, a comissão é 06% paga pelo vendedor, sempre sobre o valor total do negócio.",
    },
  ],
};

// =============================================
// SEÇÃO 10: REDES E CONTATO
// =============================================
export const socialSection = {
  title: "Redes e contato",
  subtitle: "Acompanhe minhas referências e conteúdos nas redes sociais.",
  links: [
    { label: "Instagram", url: "https://www.instagram.com/lencina.rs/", icon: "instagram", brandColor: "#E1306C" },
    { label: "Instagram IA", url: "https://www.instagram.com/lencina.ai/", icon: "instagram", brandColor: "#E1306C" },
    { label: "YouTube", url: "https://www.youtube.com/@LencinaAi", icon: "youtube", brandColor: "#FF0000" },
    { label: "TikTok", url: "https://www.tiktok.com/@lencina.rs", icon: "tiktok", brandColor: "#69C9D0" },
    { label: "TikTok IA", url: "https://www.tiktok.com/@lencinaai", icon: "tiktok", brandColor: "#69C9D0" },
    { label: "LinkedIn", url: "https://www.linkedin.com/in/lencina-ai-082b9b3a1/", icon: "linkedin", brandColor: "#0A66C2" },
    { label: "Facebook", url: "https://www.facebook.com/profile.php?id=100068691367762", icon: "facebook", brandColor: "#1877F2" },
  ],
};

// =============================================
// RODAPÉ
// =============================================
export const footerContent = {
  name: "Cristian Lencina",
  line1: "Capão da Canoa, RS • CRECI 59.227",
  copyright: "© 2026 Cristian Lencina. Todos os direitos reservados.",
};
