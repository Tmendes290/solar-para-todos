# Passo 4 — Otimização on-page do site

Site atual: `saidas/site-solar-para-todos/index.html` (página única, seções âncora: hero, sobre, zequinha, serviços, como-funciona, depoimentos/confiança, contato).

## Situação atual

O site é uma landing page de seção única (sem URLs separadas por página), o que é bom pra conversão mas limita o alcance em SEO — cada página extra é uma chance a mais de aparecer em buscas diferentes. Ver recomendação de páginas novas mais abaixo.

## Meta tags — o que já existe vs. o que falta

O `<title>` e `<meta description>` atuais:
- Title: "Solar Para Todos — Energia Solar em Parauapebas e Canaã"
- Description: "Projetos personalizados de energia solar residencial e comercial em Parauapebas e Canaã dos Carajás, Pará. Orçamento gratuito."

Isso já está bem direcionado. Falta:
- [ ] Open Graph tags (`og:title`, `og:description`, `og:image`) — importante pra quando o link for compartilhado no WhatsApp/Instagram, hoje aparece sem preview
- [ ] Canonical tag
- [ ] Favicon

## Schema Markup (JSON-LD) — não existe hoje, é a maior lacuna técnica

Adicionar ao `<head>` do site um schema `LocalBusiness`, com **duas entradas** (uma por unidade, como no GMB). Isso ajuda o Google a entender que são dois endereços físicos reais — reforça exatamente o diferencial contra a GSH Engenharia (Passo 2).

```json
{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Solar Para Todos - Parauapebas",
  "image": "[URL do logo]",
  "telephone": "+5594999085671",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Av. G, Qd. 49, Lt. 03 - Cidade Jardim",
    "addressLocality": "Parauapebas",
    "addressRegion": "PA",
    "addressCountry": "BR"
  },
  "priceRange": "$$",
  "url": "[URL do site]"
}
```
(repetir bloco separado pra Canaã dos Carajás, com endereço próprio)

## Palavras-chave por seção (mapeamento)

| Seção do site | Palavra-chave alvo | H2 sugerido |
|---|---|---|
| Hero | energia solar Parauapebas / conta de luz | (já está bom: "Chega de pagar caro na conta de luz") |
| Serviços | energia solar residencial e comercial | manter, já cobre os dois públicos |
| Como funciona | orçamento energia solar grátis | manter |
| Contato | energia solar Parauapebas + Canaã dos Carajás | já usa as duas cidades — bom |

## Checklist técnico

- [x] Mobile-friendly (corrigido nesta sessão)
- [x] Responsivo
- [ ] Sitemap.xml
- [ ] robots.txt
- [ ] Alt text em todas as imagens (conferir — algumas usam `alt="Solar Para Todos"` genérico, podia descrever o conteúdo real da imagem)
- [ ] Velocidade de carregamento (não testado ainda — recomendo rodar no PageSpeed Insights depois que o domínio `.com.br` estiver ativo)

## Recomendação: páginas novas (maior ganho de SEO disponível)

Hoje é tudo uma página só. Isso limita quantos termos diferentes o site pode ranquear. Sugestão de páginas dedicadas (viram parte do cluster de conteúdo do Passo 5):

1. `/energia-solar-comercial` — página focada em padaria/lava jato/comércio (o forte da empresa, sem concorrência local segundo Passo 2)
2. `/energia-solar-canaa-dos-carajas` — página só pra essa cidade, já que a concorrência lá é mais fraca
3. `/energia-solar-residencial` — separa do comercial pra cada público achar exatamente o que busca
