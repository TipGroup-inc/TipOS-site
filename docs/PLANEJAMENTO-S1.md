# Planejamento S1 — Site de divulgação TipOS

> Documento de base para a issue [#1 — Kickoff do site](https://github.com/TipGroup-inc/TipOS-site/issues/1). Registra as decisões de produto e interface antes de novas ampliações do código.

## Objetivo e escopo

O site apresenta o TipOS como um sistema operacional em desenvolvimento, mostra as tecnologias que já fazem parte da base e cria um caminho simples para acompanhar a TipGroup-inc. A S1 é uma landing page estática, em português, navegável em uma única URL.

| Item da S1 | Decisão | Critério de aceite |
| --- | --- | --- |
| Stack | HTML, CSS e JavaScript puro | Abre com `python3 -m http.server 8000`, sem build. |
| Estrutura | Landing page única com âncoras semânticas | Cada seção principal pode ser alcançada pela navegação. |
| Conteúdo | Sobre, camadas, features, roadmap, docs e contato | O visitante entende o projeto sem abrir o repositório. |
| Identidade | Interface técnica, escura e acolhedora | A linguagem visual reforça a personalidade do TipOS sem prejudicar a leitura. |

## Decisão de stack

Para a S1, a escolha é **HTML + CSS + JavaScript puro**. A página é editorial e não exige estado complexo, autenticação ou dados dinâmicos; uma stack estática reduz dependências, tempo de carregamento e custo de manutenção inicial. O JavaScript fica limitado a navegação móvel, progresso de rolagem, destaque da seção atual e revelação discreta de conteúdo.

| Alternativa | Vantagem | Decisão na S1 |
| --- | --- | --- |
| SSG (Eleventy/Hugo) | Ajuda a expandir documentação repetitiva | Avaliar quando Docs tiver conteúdo frequente e múltiplos autores. |
| Framework SPA | Bom para estado e fluxos de usuário | Não é necessário para uma landing page estática. |
| HTML/CSS/JS puro | Simples de servir, revisar e depurar | Escolhido para o escopo atual. |

Um portal de suporte, login ou tickets pertence a uma issue separada e não deve entrar nesta S1.

## Arquitetura de informação

A primeira versão usa navegação curta e contínua. Em desktop, os links ficam no cabeçalho; em mobile, o mesmo conjunto abre em um painel lateral. As âncoras são adequadas porque cada parte prepara a próxima no mesmo fluxo de leitura.

| Âncora | Papel no fluxo | Conteúdo | Próxima ação |
| --- | --- | --- | --- |
| `#top` | Entrada | Apresentação e prévia de terminal | Explorar camadas. |
| `#sobre` | Contexto | Por que o sistema existe e valores do projeto | Ver o que já funciona. |
| `#stack` | Entendimento técnico | Kernel, GUI, shell e userland | Conhecer features. |
| `#features` | Prova de progresso | Kernel, GUI, FAT32, ELF e MkM> | Consultar roadmap. |
| `#roadmap` | Expectativa | Etapas atuais e próximas | Ver status e documentação. |
| `#docs` | Acompanhamento | Estado público do TipOS, site e docs | Acompanhar atualizações. |
| `#contato` | Saída | Convite para contato e contribuição | Enviar mensagem à equipe. |

### Wireframe textual — desktop

```text
[TipOS.] [Sobre | Stack | Features | Roadmap | Docs] [Falar com a equipe]
[mensagem principal + CTAs]          [janela TipOS / terminal]
[faixa curta de tecnologias]
[Sobre + cartões de valores]
[Camadas do sistema]
[Features em grade]
[Roadmap em linha do tempo]
[Status/Docs]
[Contato + rodapé]
```

### Wireframe textual — mobile

```text
[TipOS.]                                              [menu]
[mensagem principal]
[CTA primário] [CTA secundário]
[terminal sem cartões decorativos]
[seções em uma coluna]
[menu lateral: Sobre, Stack, Features, Roadmap, Docs]
[Contato + rodapé]
```

## Navegação e responsividade

Acima de `960px`, a navegação fica visível no cabeçalho. Abaixo desse ponto, o menu abre em um painel lateral com fundo de bloqueio; ele fecha ao tocar em um link, no fundo ou na tecla `Esc`. A rolagem do documento fica bloqueada enquanto o painel está aberto.

Em telas menores que `680px`, a composição reduz a altura do hero, esconde cartões decorativos do terminal e empilha grids em uma coluna. Os botões mantêm tamanho confortável para toque e o conteúdo essencial aparece antes de detalhes visuais.

## Sistema visual

| Papel | Token | Uso |
| --- | --- | --- |
| Fundo principal | `#071019` | Base azul-marinho do site. |
| Texto principal | `#f5f1e8` | Leitura longa e títulos. |
| Coral | `#ff795f` | CTAs, progresso e termos-chave. |
| Ciano | `#6de7e3` | Sinais técnicos, links e estados secundários. |
| Lima | `#d5ef79` | Indicadores de estado e marca gráfica. |
| Fonte de interface | Space Grotesk | Títulos e conteúdo editorial. |
| Fonte técnica | DM Mono | Navegação, status, comandos e metadados. |

A marca combina o wordmark `TipOS.` com três barras verticais, sugerindo níveis do sistema. O tom visual mistura terminal, documentação técnica e um toque leve da identidade “moe moe kyun” já associada ao projeto, sem transformar a interface em algo difícil de ler.

## Acessibilidade e desempenho

| Regra | Aplicação na S1 |
| --- | --- |
| Movimento | Animações de entrada usam opacidade e transformação; não há animações contínuas na faixa, cartões ou terminal. |
| Interação | Não há efeitos por `pointermove`; a rolagem é agrupada em `requestAnimationFrame`. |
| Pintura | Ruído SVG, filtros pesados, `backdrop-filter` e brilhos amplos foram removidos ou simplificados. |
| Mobile | Menu lateral possui fundo de bloqueio, fechamento por `Esc` e bloqueio de rolagem. |
| Conteúdo | Nenhuma imagem grande ou vídeo é exigido para a primeira dobra. |

## Sequência de execução

1. Registrar este plano e confirmar a decisão de stack, mapa de seções e identidade.
2. Manter o esqueleto semântico da landing page alinhado às seções descritas.
3. Validar desktop, mobile, teclado e preferência por movimento reduzido antes de solicitar review.
4. Só depois expandir conteúdo ou abrir issues separadas para recursos fora da S1.

## Definição de pronto da S1

- [ ] O time concorda com a stack estática e com o escopo de uma landing page por âncoras.
- [ ] Todas as seções da issue estão presentes com conteúdo inicial em português.
- [ ] O menu funciona em desktop e mobile sem bloquear a leitura.
- [ ] A página abre em servidor estático simples e não depende de build.
- [ ] O comportamento com movimento reduzido foi verificado.
- [ ] A revisão do PR confirma que o planejamento e a implementação estão alinhados.

## Referência

O escopo, as páginas obrigatórias, as tecnologias do TipOS e a definição de pronto desta S1 vêm da [issue #1](https://github.com/TipGroup-inc/TipOS-site/issues/1).
