import {
  Smartphone,
  Monitor,
  Plug,
  Bot,
  Database,
  Compass,
  Target,
  TrendingUp,
  AlertTriangle,
  CheckCircle2,
} from 'lucide-react';

export const menuItems = [
  { label: 'Início', href: '#inicio' },
  { label: 'Sobre', href: '#sobre' },
  { label: 'Serviços', href: '#servicos' },
  { label: 'Método', href: '#metodo' },
  { label: 'Indicadores', href: '#indicadores' },
  { label: 'Contato', href: '#contato' },
];

export const trustItems = ['Web', 'Mobile App', 'API', 'Automação', 'Dados', 'Performance'];

export const dashboardCards = [
  { label: 'Testes API', value: '246' },
  { label: 'Bugs críticos', value: '03' },
  { label: 'Apps validados', value: 'IOS / Android' },
  { label: 'Pipeline', value: 'CI/CD' },
];

export const aboutCards = [
  {
    icon: Target,
    variant: 'qa',
    title: 'O que entregamos na prática',
    items: [
      'Redução de bugs críticos em produção',
      'Maior confiança para deploy',
      'Automação sustentável e menos instável',
      'Visibilidade real de qualidade',
    ],
  },
  {
    icon: TrendingUp,
    variant: 'data',
    title: 'Diferenciais técnicos',
    items: [
      'QA orientado a risco e negócio',
      'Integração com CI/CD',
      'Validação de dados e pipelines',
      'Atuação em Web, App e API',
    ],
  },
];

export const services = [
  {
    icon: Smartphone,
    variant: 'app',
    title: 'Teste de Aplicativos',
    description: 'Validação de jornadas mobile em Android e iOS com foco em estabilidade, usabilidade, fluxo e regressão crítica.',
    items: ['Fluxos de login, compra e contratação', 'Validação em múltiplos dispositivos', 'Integração com device farms'],
  },
  {
    icon: Monitor,
    variant: 'web',
    title: 'Teste Web',
    description: 'Testes funcionais, regressivos e exploratórios em sistemas web, portais, e-commerces e aplicações corporativas.',
    items: ['Validação visual e responsiva', 'Fluxos críticos de negócio', 'Cross-browser testing'],
  },
  {
    icon: Plug,
    variant: 'api',
    title: 'Teste de API',
    description: 'Validação de endpoints, contratos, payloads, autenticação, regras de negócio e integrações entre sistemas.',
    items: ['Status code e schema', 'Regras funcionais e negativas', 'Contratos e integrações'],
  },
  {
    icon: Bot,
    variant: 'automation',
    title: 'Automação de Testes',
    description: 'Criação de suítes automatizadas com arquitetura limpa, manutenção sustentável, relatórios e execução em pipeline.',
    items: ['Web, Mobile e API', 'CI/CD com relatórios', 'Redução de regressão manual'],
  },
  {
    icon: Database,
    variant: 'data',
    title: 'QA em Dados',
    description: 'Validação de bases, pipelines, ETL, transformação, integridade, duplicidade e consistência de dados.',
    items: ['Validação origem x destino', 'Regras de qualidade de dados', 'Auditoria e rastreabilidade'],
  },
  {
    icon: Compass,
    variant: 'qa',
    title: 'Consultoria QA',
    description: 'Diagnóstico de maturidade, estratégia de testes, plano de cobertura, métricas e melhoria contínua do processo.',
    items: ['Mapeamento de riscos', 'Plano de evolução QA', 'Indicadores de qualidade'],
  },
];

export const painPoints = [
  { icon: AlertTriangle, title: 'Bugs em produção', description: 'Falhas que afetam cliente, receita e reputação.' },
  { icon: AlertTriangle, title: 'Regressão manual pesada', description: 'Tempo perdido repetindo validações sem ganho estratégico.' },
  { icon: AlertTriangle, title: 'Automação frágil', description: 'Testes quebrando mais por instabilidade do que por defeito real.' },
];

export const methodSteps = [
  { number: '1', title: 'Diagnóstico', description: 'Avaliamos produto, arquitetura, bugs recorrentes, cobertura atual e pontos de maior risco.' },
  { number: '2', title: 'Estratégia', description: 'Definimos o que deve ser manual, automatizado, monitorado ou validado em pipeline.' },
  { number: '3', title: 'Execução', description: 'Construímos testes funcionais, APIs, automações, massas, relatórios e validações técnicas.' },
  { number: '4', title: 'Evolução', description: 'Medimos estabilidade, cobertura, flakiness, defeitos escapados e eficiência do processo.' },
];

export const metrics = [
  { value: 'Web', label: 'Fluxos críticos e responsividade' },
  { value: 'API', label: 'Contratos, payloads e integrações' },
  { value: 'App', label: 'Android, iOS e jornadas nativas' },
  { value: 'CI/CD', label: 'Execução recorrente em pipeline' },
];

export const serviceOptions = services.map((service) => service.title);
