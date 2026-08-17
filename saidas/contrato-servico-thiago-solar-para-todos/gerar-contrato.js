const {
  Document, Packer, Paragraph, TextRun, HeadingLevel, AlignmentType,
  Table, TableRow, TableCell, WidthType, BorderStyle,
} = require('docx');
const fs = require('fs');
const path = require('path');

const NAVY = '0D2156';
const MUTED = '555555';

const titulo = (texto) => new Paragraph({
  heading: HeadingLevel.HEADING_1,
  spacing: { before: 320, after: 160 },
  children: [new TextRun({ text: texto, bold: true, color: NAVY, size: 24 })],
});

const paragrafo = (texto, opts = {}) => new Paragraph({
  spacing: { after: 160 },
  alignment: AlignmentType.JUSTIFIED,
  children: [new TextRun({ text: texto, size: 22, ...opts })],
});

const item = (texto) => new Paragraph({
  spacing: { after: 100 },
  alignment: AlignmentType.JUSTIFIED,
  indent: { left: 360 },
  children: [new TextRun({ text: texto, size: 22 })],
});

const doc = new Document({
  sections: [{
    properties: {
      page: { margin: { top: 1100, bottom: 1100, left: 1100, right: 1100 } },
    },
    children: [

      new Paragraph({
        alignment: AlignmentType.CENTER,
        spacing: { after: 80 },
        children: [new TextRun({ text: 'CONTRATO DE PRESTAÇÃO DE SERVIÇOS', bold: true, color: NAVY, size: 30 })],
      }),
      new Paragraph({
        alignment: AlignmentType.CENTER,
        spacing: { after: 300 },
        children: [new TextRun({ text: 'DE MARKETING DIGITAL E DESIGN VISUAL', bold: true, color: NAVY, size: 26 })],
      }),

      paragrafo(
        'Pelo presente instrumento particular, de um lado:'
      ),

      new Paragraph({
        spacing: { after: 160 },
        alignment: AlignmentType.JUSTIFIED,
        children: [
          new TextRun({ text: 'CONTRATANTE: ', bold: true, size: 22 }),
          new TextRun({
            text: 'Solar Para Todos Ltda, inscrita no CNPJ sob o nº 53.611.892/0001-23, com sede na Av. G, Qd. 49, Lt. 03 — Cidade Jardim, Parauapebas/PA, neste ato representada por [Nome completo do representante legal], portador(a) do CPF nº [000.000.000-00];',
            size: 22,
          }),
        ],
      }),

      new Paragraph({
        spacing: { after: 160 },
        alignment: AlignmentType.JUSTIFIED,
        children: [
          new TextRun({ text: 'e de outro lado,', size: 22 }),
        ],
      }),

      new Paragraph({
        spacing: { after: 240 },
        alignment: AlignmentType.JUSTIFIED,
        children: [
          new TextRun({ text: 'CONTRATADO: ', bold: true, size: 22 }),
          new TextRun({
            text: 'Thiago Mendes, portador do CPF nº [000.000.000-00], residente e domiciliado em [endereço completo];',
            size: 22,
          }),
        ],
      }),

      paragrafo('Têm entre si justo e contratado o que segue.'),

      titulo('Cláusula 1 — Do objeto'),
      paragrafo('O presente contrato tem por objeto a prestação de serviços de marketing digital e design visual pelo CONTRATADO em favor da CONTRATANTE, compreendendo:'),
      item('a) Desenvolvimento e publicação de site institucional;'),
      item('b) Produção e publicação de carrosséis educativos mensais para Instagram;'),
      item('c) Criação de posts focados no segmento comercial (padarias, lava jatos, comércios em geral);'),
      item('d) Redação de legendas e hashtags para os posts produzidos;'),
      item('e) Suporte direto via WhatsApp.'),
      paragrafo('Parágrafo único. Como parte do valor inicial já pago, o CONTRATADO também entregou à CONTRATANTE um modelo de contrato comercial personalizado, de uso da CONTRATANTE junto aos seus próprios clientes.', { italics: true }),

      titulo('Cláusula 2 — Do prazo'),
      paragrafo('As primeiras entregas (site publicado e primeiro carrossel) ocorrerão em até 7 (sete) dias corridos, contados da confirmação do pagamento inicial previsto na Cláusula 3. O presente contrato vigora por prazo indeterminado a partir do 2º (segundo) mês, renovando-se automaticamente a cada mês mediante o pagamento da mensalidade prevista na Cláusula 3.'),

      titulo('Cláusula 3 — Do valor e forma de pagamento'),
      paragrafo('3.1. Pela configuração inicial descrita na Cláusula 1, a CONTRATANTE pagará ao CONTRATADO o valor de R$ 2.500,00 (dois mil e quinhentos reais), à vista via PIX, ou em 3 (três) parcelas de R$ 900,00 no cartão de crédito, totalizando R$ 2.700,00.'),
      paragrafo('3.2. A partir do 2º (segundo) mês, a CONTRATANTE pagará ao CONTRATADO uma mensalidade de R$ 500,00 (quinhentos reais), com vencimento todo dia [DD] de cada mês, referente à manutenção mensal do serviço (itens "b", "c" e "d" da Cláusula 1).'),
      paragrafo('3.3. Em caso de atraso no pagamento, incidirão juros de mora de 1% (um por cento) ao mês e multa de 2% (dois por cento) sobre o valor em atraso, sem prejuízo da correção monetária.'),

      titulo('Cláusula 4 — Das obrigações do CONTRATADO'),
      item('a) Entregar os materiais descritos na Cláusula 1 dentro dos prazos acordados, ressalvados atrasos decorrentes de fato da CONTRATANTE;'),
      item('b) Manter a identidade visual da marca (cores, tipografia e logotipo) em todo material produzido;'),
      item('c) Prestar suporte direto via WhatsApp para dúvidas relacionadas ao serviço contratado;'),
      item('d) Zelar pela qualidade técnica e pela originalidade do conteúdo produzido.'),

      titulo('Cláusula 5 — Das obrigações da CONTRATANTE'),
      item('a) Efetuar os pagamentos nas datas e condições previstas na Cláusula 3;'),
      item('b) Fornecer, em tempo hábil, as informações, fotos, textos e acessos necessários (incluindo, quando aplicável, acesso à conta do Instagram) à execução do serviço;'),
      item('c) Aprovar ou solicitar ajustes no conteúdo produzido no prazo de até 3 (três) dias úteis a partir do envio pelo CONTRATADO, sob pena de prorrogação proporcional do prazo de entrega;'),
      item('d) Não utilizar o material produzido para finalidade distinta da promoção do próprio negócio, sem autorização prévia do CONTRATADO.'),

      titulo('Cláusula 6 — Da propriedade dos materiais'),
      paragrafo('6.1. Após a quitação do respectivo pagamento, os materiais produzidos (site, artes, textos e o modelo de contrato comercial mencionado na Cláusula 1) passam a ser de propriedade exclusiva da CONTRATANTE, que poderá utilizá-los livremente em suas atividades.'),
      paragrafo('6.2. Fica assegurado ao CONTRATADO o direito de exibir os materiais produzidos como parte de seu portfólio profissional, podendo omitir, a pedido da CONTRATANTE, quaisquer dados sigilosos (como valores contratuais).'),

      titulo('Cláusula 7 — Da rescisão'),
      paragrafo('Qualquer uma das partes poderá rescindir o presente contrato mediante aviso prévio de 30 (trinta) dias, comunicado por escrito (mensagem de WhatsApp é considerada válida para esse fim). Valores referentes a serviços já prestados e ainda não pagos permanecem devidos até a data da rescisão.'),

      titulo('Cláusula 8 — Da confidencialidade'),
      paragrafo('As partes se comprometem a manter sigilo sobre informações estratégicas, valores contratuais e dados de acesso trocados durante a vigência deste contrato, exceto quando a divulgação for exigida por lei ou autorizada expressamente pela outra parte.'),

      titulo('Cláusula 9 — Da proteção de dados (LGPD)'),
      paragrafo('Eventuais dados pessoais compartilhados entre as partes para a execução deste contrato serão utilizados exclusivamente para essa finalidade, não sendo repassados a terceiros sem autorização.'),

      titulo('Cláusula 10 — Do foro'),
      paragrafo('Fica eleito o foro da comarca de Parauapebas/PA para dirimir quaisquer controvérsias oriundas deste contrato, com renúncia a qualquer outro, por mais privilegiado que seja.'),

      paragrafo('E por estarem assim justas e contratadas, as partes firmam o presente instrumento em 2 (duas) vias de igual teor, na presença das testemunhas abaixo.', { spacing: { before: 200 } }),

      new Paragraph({
        spacing: { before: 400, after: 500 },
        alignment: AlignmentType.CENTER,
        children: [new TextRun({ text: '[Parauapebas/PA], [DD] de [mês] de [AAAA]', size: 22 })],
      }),

      new Paragraph({
        spacing: { before: 500, after: 60 },
        children: [new TextRun({ text: '_________________________________________', size: 22 })],
      }),
      new Paragraph({
        spacing: { after: 20 },
        children: [new TextRun({ text: 'Solar Para Todos Ltda — CONTRATANTE', bold: true, size: 22 })],
      }),
      new Paragraph({
        spacing: { after: 400 },
        children: [new TextRun({ text: 'CNPJ 53.611.892/0001-23', size: 20, color: MUTED })],
      }),

      new Paragraph({
        spacing: { before: 200, after: 60 },
        children: [new TextRun({ text: '_________________________________________', size: 22 })],
      }),
      new Paragraph({
        spacing: { after: 20 },
        children: [new TextRun({ text: 'Thiago Mendes — CONTRATADO', bold: true, size: 22 })],
      }),
      new Paragraph({
        spacing: { after: 500 },
        children: [new TextRun({ text: 'CPF [000.000.000-00]', size: 20, color: MUTED })],
      }),

      new Paragraph({
        spacing: { before: 300, after: 200 },
        children: [new TextRun({ text: 'Testemunhas:', bold: true, size: 22 })],
      }),

      new Table({
        width: { size: 100, type: WidthType.PERCENTAGE },
        borders: {
          top: { style: BorderStyle.NONE }, bottom: { style: BorderStyle.NONE },
          left: { style: BorderStyle.NONE }, right: { style: BorderStyle.NONE },
          insideHorizontal: { style: BorderStyle.NONE }, insideVertical: { style: BorderStyle.NONE },
        },
        rows: [
          new TableRow({
            children: [
              new TableCell({
                width: { size: 50, type: WidthType.PERCENTAGE },
                children: [
                  new Paragraph({ spacing: { after: 60 }, children: [new TextRun({ text: '1) _____________________________', size: 22 })] }),
                  new Paragraph({ children: [new TextRun({ text: 'Nome:', size: 20, color: MUTED })] }),
                  new Paragraph({ children: [new TextRun({ text: 'CPF:', size: 20, color: MUTED })] }),
                ],
              }),
              new TableCell({
                width: { size: 50, type: WidthType.PERCENTAGE },
                children: [
                  new Paragraph({ spacing: { after: 60 }, children: [new TextRun({ text: '2) _____________________________', size: 22 })] }),
                  new Paragraph({ children: [new TextRun({ text: 'Nome:', size: 20, color: MUTED })] }),
                  new Paragraph({ children: [new TextRun({ text: 'CPF:', size: 20, color: MUTED })] }),
                ],
              }),
            ],
          }),
        ],
      }),

    ],
  }],
});

Packer.toBuffer(doc).then((buffer) => {
  const outPath = path.resolve(__dirname, 'contrato-servico-thiago-solar-para-todos.docx');
  fs.writeFileSync(outPath, buffer);
  console.log('Gerado:', outPath);
});
