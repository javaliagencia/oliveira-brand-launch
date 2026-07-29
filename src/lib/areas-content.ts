/**
 * Conteúdo editorial de cada Área de Atuação.
 * Texto provisório (placeholder) — a ser substituído pelo conteúdo oficial.
 */
import bannerMedico from "@/assets/areas/direito-medico.jpg.asset.json";
import bannerCredito from "@/assets/areas/recuperacao-de-credito.jpg.asset.json";
import bannerVolume from "@/assets/areas/contencioso-de-volume.jpg.asset.json";
import bannerEstrategico from "@/assets/areas/contencioso-estrategico.jpg.asset.json";
import bannerCivel from "@/assets/areas/civel.jpg.asset.json";
import bannerTributario from "@/assets/areas/tributario.jpg.asset.json";
import bannerTrabalhista from "@/assets/areas/trabalhista.jpg.asset.json";

export type AreaContent = {
  banner: string;
  hero: string;
  lead: string;
  paragrafos: [string, string];
  servicos: string[];
  setores: { label: string; href: string }[];
  publicacoesTitulo: string;
  artigos: { categoria: string; data: string; titulo: string; href: string }[];
};

const H = "#";

export const AREAS_CONTENT: Record<string, AreaContent> = {
  "direito-medico": {
    banner: bannerMedico.url,
    hero: "Assessoria integral a médicos, clínicas, hospitais, operadoras e cooperativas. Defesa técnica, regulação e governança conduzidas com o mesmo método que sustenta trinta anos de atuação em decisões que exigem profundidade.",
    lead: "A prática médica exige advocacia que compreenda ciência, ética e regulação, e que traduza tudo isso em decisão segura.",
    paragrafos: [
      "Atuamos ao lado de profissionais e instituições de saúde nos momentos em que a resposta jurídica precisa acompanhar o rigor técnico da medicina. Do contencioso individual à estruturação de grandes operadoras, o método é o mesmo: leitura profunda do caso, definição clara da estratégia e execução previsível.",
      "A equipe integra sócios com atuação consolidada em responsabilidade civil, regulação sanitária, direito societário e contratos empresariais, condição necessária para tratar a saúde como o setor multidisciplinar que ela é.",
    ],
    servicos: [
      "Defesa técnica em processos éticos e disciplinares (CRM, CFM, CREMESC).",
      "Contencioso cível em ações de responsabilidade médica e hospitalar.",
      "Assessoria regulatória junto a Anvisa, ANS e vigilâncias sanitárias.",
      "Contratos de prestação de serviços médicos, credenciamento e cooperativas.",
      "Governança clínica, LGPD aplicada à saúde e compliance hospitalar.",
      "Estruturação societária de clínicas, day-hospitals e grupos médicos.",
    ],
    setores: [
      { label: "Hospitais e day-hospitals", href: H },
      { label: "Clínicas e centros médicos", href: H },
      { label: "Operadoras de saúde suplementar", href: H },
      { label: "Cooperativas médicas", href: H },
      { label: "Laboratórios e diagnóstico por imagem", href: H },
      { label: "Indústria farmacêutica e dispositivos médicos", href: H },
      { label: "Telemedicina e healthtechs", href: H },
      { label: "Profissionais autônomos e sociedades unipessoais", href: H },
    ],
    publicacoesTitulo: "Inteligência aplicada ao setor de saúde.",
    artigos: [
      {
        categoria: "Direito Médico",
        data: "Jul · 2026",
        titulo:
          "Erro médico e o ônus da prova: o que muda com a leitura contemporânea da responsabilidade",
        href: "/inteligencia",
      },
      {
        categoria: "Regulação",
        data: "Mai · 2026",
        titulo:
          "ANS e a judicialização da cobertura assistencial: limites do rol e da boa-fé contratual",
        href: "/inteligencia",
      },
      {
        categoria: "Governança clínica",
        data: "Mar · 2026",
        titulo:
          "LGPD nos hospitais: consentimento, prontuário e o novo desenho do risco jurídico",
        href: "/inteligencia",
      },
    ],
  },

  "recuperacao-de-credito": {
    banner: bannerCredito.url,
    hero: "Recuperação de crédito conduzida como operação: inteligência de carteira, escala tecnológica e execução disciplinada. Do crédito pulverizado à dívida estruturada, a régua é a mesma, previsibilidade de resultado.",
    lead: "Recuperar crédito não é insistir. É saber onde há patrimônio, quando agir e qual caminho encerra o caso mais rápido.",
    paragrafos: [
      "Trabalhamos carteiras de todos os portes com leitura analítica prévia: segmentação por perfil de devedor, probabilidade de êxito e custo processual. Essa triagem define o que vai para negociação, o que vai para execução e o que deve ser encerrado, decisão que preserva caixa e tempo do cliente.",
      "A operação combina equipe dedicada, rotinas de pesquisa patrimonial e indicadores de acompanhamento. O cliente enxerga a carteira em números claros: taxa de recuperação, prazo médio e curva de resultado mês a mês.",
    ],
    servicos: [
      "Cobrança extrajudicial estruturada e política de acordos.",
      "Execuções de títulos, contratos e cédulas de crédito bancário.",
      "Pesquisa patrimonial e medidas de constrição de ativos.",
      "Habilitação e defesa de créditos em recuperações judiciais e falências.",
      "Renegociação de dívidas e reperfilamento de passivos.",
      "Gestão de carteiras cedidas e diligência de portfólios de crédito.",
    ],
    setores: [
      { label: "Instituições financeiras", href: "/atuacao/segmentos/instituicoes-financeiras" },
      { label: "Cooperativas de crédito", href: H },
      { label: "Fundos de investimento em direitos creditórios", href: H },
      { label: "Indústria e distribuição", href: H },
      { label: "Varejo e e-commerce", href: H },
      { label: "Serviços de saúde e educação", href: H },
      { label: "Securitizadoras", href: H },
      { label: "Empresas de tecnologia e assinatura", href: H },
    ],
    publicacoesTitulo: "Inteligência aplicada a crédito e recuperação de ativos.",
    artigos: [
      {
        categoria: "Recuperação de Crédito",
        data: "Jul · 2026",
        titulo:
          "Pesquisa patrimonial e o novo padrão de efetividade nas execuções civis",
        href: "/inteligencia",
      },
      {
        categoria: "Insolvência",
        data: "Mai · 2026",
        titulo:
          "Habilitação de crédito em recuperação judicial: erros que custam a classe do credor",
        href: "/inteligencia",
      },
      {
        categoria: "Crédito",
        data: "Fev · 2026",
        titulo: "Política de acordos: como o desenho do desconto muda a curva de recuperação",
        href: "/inteligencia",
      },
    ],
  },

  "contencioso-de-volume": {
    banner: bannerVolume.url,
    hero: "Gestão de contencioso de massa com padronização de teses, automação de rotinas e governança de dados. Volume tratado com o mesmo rigor técnico que o escritório aplica às causas estratégicas.",
    lead: "Em contencioso de volume, o resultado não vem do esforço isolado: vem do processo desenhado para se repetir bem.",
    paragrafos: [
      "Estruturamos operações de massa com teses padronizadas, fluxos revisados por advogados sêniores e tecnologia de acompanhamento processual. A padronização libera tempo para o que é excepcional, e é justamente ali que a experiência do escritório se concentra.",
      "Cada carteira recebe indicadores próprios: provisionamento, tempo de ciclo, índice de êxito e custo por processo. O cliente passa a discutir contencioso com a mesma linguagem com que discute o próprio negócio.",
    ],
    servicos: [
      "Defesa padronizada em demandas repetitivas e consumeristas.",
      "Gestão de carteiras nacionais com equipes regionais integradas.",
      "Política de acordos, provisionamento e cálculo de contingências.",
      "Automação de prazos, peças e relatórios gerenciais.",
      "Mapeamento de causa-raiz e recomendações preventivas ao negócio.",
      "Auditoria de carteiras herdadas e planos de desmobilização.",
    ],
    setores: [
      { label: "Instituições financeiras", href: "/atuacao/segmentos/instituicoes-financeiras" },
      { label: "Telecomunicações", href: H },
      { label: "Varejo e e-commerce", href: H },
      { label: "Concessionárias de serviço público", href: H },
      { label: "Seguradoras", href: H },
      { label: "Transporte e logística", href: H },
      { label: "Educação", href: H },
      { label: "Plataformas digitais", href: H },
    ],
    publicacoesTitulo: "Inteligência aplicada à gestão de contencioso.",
    artigos: [
      {
        categoria: "Contencioso de Volume",
        data: "Jul · 2026",
        titulo: "Causa-raiz: quando o passivo judicial revela um problema de produto",
        href: "/inteligencia",
      },
      {
        categoria: "Gestão",
        data: "Abr · 2026",
        titulo: "Provisionamento e previsibilidade: métricas que sustentam decisões de acordo",
        href: "/inteligencia",
      },
      {
        categoria: "Tecnologia",
        data: "Jan · 2026",
        titulo: "Automação com supervisão técnica: o limite saudável da padronização de teses",
        href: "/inteligencia",
      },
    ],
  },

  "contencioso-estrategico": {
    banner: bannerEstrategico.url,
    hero: "Atuação em disputas decisivas: construção de teses, sustentação oral e condução técnica em tribunais superiores. Casos em que o resultado redefine o rumo de uma operação inteira.",
    lead: "Há causas em que o que está em jogo não é um processo. É a tese que vai reger todos os próximos.",
    paragrafos: [
      "Concentramos nesta prática os litígios de maior complexidade e impacto econômico. O trabalho começa antes da petição: diagnóstico do risco, escolha do foro, desenho probatório e definição da narrativa que sustentará o caso até a última instância.",
      "A condução envolve sócios em todas as etapas, pareceres de apoio quando necessário e preparação rigorosa para julgamentos colegiados. Sustentação oral e memoriais são tratados como peças centrais da estratégia, não como formalidade.",
    ],
    servicos: [
      "Litígios societários, contratuais e de responsabilidade civil de alta complexidade.",
      "Atuação perante STJ e STF, com sustentação oral e memoriais.",
      "Construção de teses, pareceres e coordenação de assistentes técnicos.",
      "Medidas de urgência, tutelas cautelares e execuções de grande porte.",
      "Arbitragem e mecanismos alternativos de solução de disputas.",
      "Gestão de crises com repercussão reputacional e regulatória.",
    ],
    setores: [
      { label: "Grupos empresariais e holdings", href: "/atuacao/segmentos/empresarial-estrategico" },
      { label: "Clientes corporativos", href: "/atuacao/segmentos/clientes-corporativos" },
      { label: "Instituições financeiras", href: "/atuacao/segmentos/instituicoes-financeiras" },
      { label: "Infraestrutura e energia", href: H },
      { label: "Agronegócio", href: H },
      { label: "Indústria", href: H },
      { label: "Construção e incorporação", href: H },
      { label: "Investidores e fundos", href: H },
    ],
    publicacoesTitulo: "Inteligência aplicada a disputas complexas.",
    artigos: [
      {
        categoria: "Contencioso Estratégico",
        data: "Jun · 2026",
        titulo: "Desenho probatório: a decisão silenciosa que define o resultado do julgamento",
        href: "/inteligencia",
      },
      {
        categoria: "Tribunais Superiores",
        data: "Abr · 2026",
        titulo: "Sustentação oral em colegiado: economia de argumento e clareza de tese",
        href: "/inteligencia",
      },
      {
        categoria: "Arbitragem",
        data: "Fev · 2026",
        titulo: "Cláusula arbitral bem redigida: previsibilidade antes do conflito existir",
        href: "/inteligencia",
      },
    ],
  },

  civel: {
    banner: bannerCivel.url,
    hero: "Consultivo e contencioso cível para empresas e famílias empresárias: contratos, responsabilidade civil, direitos reais e disputas patrimoniais conduzidas com técnica e serenidade.",
    lead: "O direito cível é a base sobre a qual quase todo negócio se apoia. Tratá-lo com displicência é caro; tratá-lo com método é economia.",
    paragrafos: [
      "Atuamos da redação preventiva de contratos à disputa judicial que deles decorre. A vantagem de manter as duas frentes na mesma equipe é evidente: quem litiga conhece as armadilhas que quem redige precisa evitar.",
      "A prática cobre responsabilidade civil, relações de consumo, direitos reais, locações, sucessões e conflitos patrimoniais entre sócios e familiares, sempre com atenção ao custo, ao prazo e ao efeito das decisões sobre as relações que continuam depois do processo.",
    ],
    servicos: [
      "Elaboração, revisão e negociação de contratos empresariais e civis.",
      "Ações de responsabilidade civil, indenizatórias e de danos.",
      "Direitos reais, posse, propriedade e regularização imobiliária.",
      "Locações urbanas, built to suit e disputas condominiais.",
      "Conflitos patrimoniais, sucessórios e entre sócios.",
      "Pareceres, due diligence contratual e prevenção de litígios.",
    ],
    setores: [
      { label: "Clientes corporativos", href: "/atuacao/segmentos/clientes-corporativos" },
      { label: "Famílias empresárias", href: H },
      { label: "Construção e incorporação", href: H },
      { label: "Indústria e distribuição", href: H },
      { label: "Varejo e serviços", href: H },
      { label: "Agronegócio", href: H },
      { label: "Tecnologia", href: H },
      { label: "Terceiro setor", href: H },
    ],
    publicacoesTitulo: "Inteligência aplicada a contratos e relações civis.",
    artigos: [
      {
        categoria: "Direito Cível",
        data: "Jul · 2026",
        titulo: "Cláusulas de limitação de responsabilidade: até onde os tribunais têm admitido",
        href: "/inteligencia",
      },
      {
        categoria: "Contratos",
        data: "Mai · 2026",
        titulo: "Revisão contratual por onerosidade excessiva: o que mudou na jurisprudência",
        href: "/inteligencia",
      },
      {
        categoria: "Patrimônio",
        data: "Mar · 2026",
        titulo: "Conflitos entre sócios familiares: prevenir no acordo, não no processo",
        href: "/inteligencia",
      },
    ],
  },

  tributario: {
    banner: bannerTributario.url,
    hero: "Planejamento, consultivo e contencioso tributário em um cenário de reforma. Redução legítima de carga, gestão de passivos e defesa técnica nas esferas administrativa e judicial.",
    lead: "Em tributário, previsibilidade vale tanto quanto economia. O bom planejamento é aquele que ainda se sustenta cinco anos depois.",
    paragrafos: [
      "Acompanhamos a transição do sistema tributário brasileiro com leitura prática: o que muda na apuração, no preço, no fluxo de caixa e nos contratos de longo prazo de cada cliente. Diagnóstico primeiro, recomendação depois.",
      "No contencioso, atuamos do auto de infração à discussão em tribunais superiores, com atenção especial à tese, à prova documental e ao momento certo de discutir, transacionar ou pagar.",
    ],
    servicos: [
      "Planejamento tributário e revisão de estruturas societárias e operacionais.",
      "Defesas e recursos administrativos perante Receita Federal, Sefaz e municípios.",
      "Contencioso judicial tributário, mandados de segurança e repetição de indébito.",
      "Recuperação de créditos fiscais e revisão de apuração.",
      "Adequação à Reforma Tributária: IBS, CBS e regimes de transição.",
      "Transação tributária, parcelamentos e regularização de passivos.",
    ],
    setores: [
      { label: "Indústria e distribuição", href: H },
      { label: "Varejo e e-commerce", href: H },
      { label: "Instituições financeiras", href: "/atuacao/segmentos/instituicoes-financeiras" },
      { label: "Agronegócio", href: H },
      { label: "Serviços e tecnologia", href: H },
      { label: "Construção e incorporação", href: H },
      { label: "Transporte e logística", href: H },
      { label: "Holdings patrimoniais", href: H },
    ],
    publicacoesTitulo: "Inteligência aplicada à carga tributária.",
    artigos: [
      {
        categoria: "Reforma Tributária",
        data: "Jul · 2026",
        titulo: "IBS e CBS na prática: o que revisar nos contratos de longo prazo agora",
        href: "/inteligencia",
      },
      {
        categoria: "Contencioso Fiscal",
        data: "Abr · 2026",
        titulo: "Prova documental no processo administrativo: o momento de juntar é o primeiro",
        href: "/inteligencia",
      },
      {
        categoria: "Créditos",
        data: "Jan · 2026",
        titulo: "Revisão de apuração: créditos legítimos que se perdem por rotina interna",
        href: "/inteligencia",
      },
    ],
  },

  trabalhista: {
    banner: bannerTrabalhista.url,
    hero: "Consultivo e contencioso trabalhista para empresas com operação intensiva em pessoas. Prevenção de passivos, negociação sindical e defesa técnica conduzidas com previsibilidade de custo e de prazo.",
    lead: "Passivo trabalhista raramente nasce no processo. Nasce na rotina, e é lá que ele se resolve.",
    paragrafos: [
      "Atuamos junto a áreas de RH e diretorias na revisão de jornadas, enquadramentos, políticas internas e terceirizações, antes que a divergência vire reclamatória. Quando o litígio é inevitável, a defesa já encontra documentação organizada e tese definida.",
      "No contencioso, a operação combina padronização de teses, acompanhamento por indicadores e presença regional nas varas em que o cliente tem exposição. A leitura do risco é feita em número: probabilidade, provisão e curva de encerramento.",
    ],
    servicos: [
      "Consultivo preventivo: jornadas, enquadramento, políticas internas e compliance trabalhista.",
      "Defesa em reclamatórias individuais e ações civis públicas.",
      "Negociação coletiva, acordos e relacionamento sindical.",
      "Auditoria de passivo trabalhista e provisionamento contábil.",
      "Saúde e segurança do trabalho, insalubridade e periculosidade.",
      "Terceirização, contratos de prestação de serviços e responsabilidade subsidiária.",
    ],
    setores: [
      { label: "Indústria", href: H },
      { label: "Varejo e serviços", href: H },
      { label: "Clientes corporativos", href: "/atuacao/segmentos/clientes-corporativos" },
      { label: "Transporte e logística", href: H },
      { label: "Construção e incorporação", href: H },
      { label: "Saúde", href: "/areas/direito-medico" },
      { label: "Agronegócio", href: H },
      { label: "Instituições financeiras", href: "/atuacao/segmentos/instituicoes-financeiras" },
    ],
    publicacoesTitulo: "Inteligência aplicada às relações de trabalho.",
    artigos: [
      {
        categoria: "Trabalhista",
        data: "Jul · 2026",
        titulo: "Jornada e controle híbrido: o que a fiscalização tem exigido das empresas",
        href: "/inteligencia",
      },
      {
        categoria: "Negociação Coletiva",
        data: "Mai · 2026",
        titulo: "Acordo coletivo bem desenhado: previsibilidade antes da campanha salarial",
        href: "/inteligencia",
      },
      {
        categoria: "Passivo",
        data: "Fev · 2026",
        titulo: "Provisionamento trabalhista: como transformar risco difuso em número gerenciável",
        href: "/inteligencia",
      },
    ],
  },
};

export function getAreaContent(slug?: string): AreaContent {
  return (slug && AREAS_CONTENT[slug]) || AREAS_CONTENT["direito-medico"];
}

export function getAreaBanner(slug?: string): string {
  return getAreaContent(slug).banner;
}
