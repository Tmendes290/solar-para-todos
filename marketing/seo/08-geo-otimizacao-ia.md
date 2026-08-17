# Passo 8 — GEO: aparecer em respostas de IA (ChatGPT, Gemini, Perplexity)

**Limitação honesta:** não tenho como testar diretamente dentro do ChatGPT/Gemini/Perplexity a partir daqui — isso precisa ser feito manualmente, abrindo cada ferramenta e perguntando algo como "qual a melhor empresa de energia solar em Parauapebas?". Recomendo fazer esse teste manual e me trazer o resultado, daí eu ajusto a estratégia com base no que essas IAs realmente respondem hoje.

O que dá pra preparar sem esse teste (e que ajuda de qualquer forma, porque são boas práticas de conteúdo que também melhoram o SEO tradicional):

## Por que importa

Cada vez mais gente pergunta direto pra uma IA "qual empresa de energia solar em Parauapebas" em vez de pesquisar no Google. Quem a IA cita ganha lead qualificado de graça — sem pagar clique.

## FAQ Schema — pronto pra implementar no site

Baseado nas perguntas reais encontradas na pesquisa (Passo 1):

```json
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Quanto tempo leva pra energia solar se pagar em Parauapebas?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Na região de Parauapebas, o retorno do investimento costuma acontecer entre 4 e 6 anos, considerando a irradiação solar local de cerca de 5,3 kWh/m² por dia."
      }
    },
    {
      "@type": "Question",
      "name": "Quanto tempo demora pra instalar energia solar?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A instalação física leva de 1 a 3 dias úteis. Depois disso, a homologação junto à concessionária (Equatorial Pará) leva entre 15 e 45 dias."
      }
    },
    {
      "@type": "Question",
      "name": "Energia solar funciona pra padaria ou comércio que consome muita energia?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Sim — negócios como padarias e lava jatos costumam ter os equipamentos de maior consumo funcionando justamente no horário de mais sol, o que torna a energia solar ainda mais eficiente pra esse tipo de estabelecimento."
      }
    }
  ]
}
```

(Expandir com as perguntas do item 10 da lista de conteúdo, Passo 5, conforme forem escritas.)

## Como estruturar o conteúdo pra IA citar

- Cada artigo do Passo 5 deve responder a pergunta principal **na primeira ou segunda frase**, sem enrolar — IA prioriza resposta direta
- Usar dados concretos e verificáveis: "5,3 kWh/m²", "4 a 6 anos", "duas unidades no Pará" — não "excelente irradiação solar" (vago, IA ignora)
- Estruturar com perguntas reais como H2/H3 (formato pergunta-resposta), não só títulos genéricos

## Citações externas — o que reforça a chance de aparecer

IAs pesam menções em fontes de terceiros, não só o próprio site. Prioridade:

1. Completar os perfis nos diretórios listados no Passo 3 (GetNinjas, Habitissimo, Portal Solar, Solartask)
2. A matéria de imprensa que a Promessolar conseguiu (Passo 2 — "melhor do Norte") é exatamente esse tipo de menção externa. Vale considerar buscar imprensa local (Correio de Carajás, ZÉ DUDU — ambos já indexados e citados nas buscas desta pesquisa) pra alguma matéria sobre a Solar Para Todos

## Teste manual recomendado (fazer e trazer o resultado)

Perguntar em cada ferramenta:
1. "Qual a melhor empresa de energia solar em Parauapebas?"
2. "Onde instalar energia solar em Canaã dos Carajás?"
3. "Energia solar vale a pena pra padaria no Pará?"

Anotar: a Solar Para Todos apareceu? Quem apareceu no lugar? Qual fonte a IA citou?
