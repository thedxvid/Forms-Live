
import React from 'react';
import { QuestionConfig } from './types';

export const WEBHOOK_URL = 'https://autowebhook.mgtinc.cloud/webhook/Forms-grupo-whatsApp';

export const QUESTIONS: QuestionConfig[] = [
  {
    id: 'question1',
    label: 'O que falta hoje para você faturar mais?',
    sublabel: 'Identifique seu principal gargalo atual',
    placeholder: 'Ex: Falta clareza na minha estratégia de vendas, não sei escalar meu time, preciso de processos mais eficientes...',
    minChars: 20,
    maxChars: 500
  },
  {
    id: 'question2',
    label: 'Se você tivesse que mirar em um foco em 2026 qual seria?',
    sublabel: 'Pense no principal objetivo que transformaria seu negócio',
    placeholder: 'Ex: Triplicar meu faturamento, abrir nova unidade, automatizar meu negócio, formar um time de alta performance...',
    minChars: 15,
    maxChars: 500
  },
  {
    id: 'question3',
    label: 'Toparia passar por uma imersão de 3 dias comigo, o que gostaria de aprender?',
    sublabel: 'Seja específico: quanto mais detalhes, melhor preparamos o conteúdo',
    placeholder: 'Ex: Estratégias de precificação, como criar ofertas irresistíveis, estruturar funil de vendas, liderança de equipe...',
    minChars: 20,
    maxChars: 500
  }
];

export const WHATSAPP_LINK = 'https://chat.whatsapp.com/C2lriBaXu2nKuNaLtthl8O';
