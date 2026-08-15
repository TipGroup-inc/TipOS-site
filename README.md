# TipOS Site <3

Site de divulgação e apresentação do **TipOS** — sistema operacional próprio feito do zero pela galera da TipGroup-inc: kernel x86-64 (C + NASM + Zig), GUI própria (VESA + OWT + WM), FAT32, userland ring 3 e compat com ELF Linux.

## Objetivo

- Apresentar o projeto pro mundo: o que é, como funciona, quem fez
- Divulgar as features (GUI, shell MkM>, syscalls, drivers)
- Documentar como buildar/rodar em QEMU
- Roadmap público e como contribuir

## Decisões da S1

A primeira versão usa **HTML, CSS e JavaScript puro**, porque o site precisa abrir com um servidor estático simples e permitir que o time evolua a identidade visual sem depender de uma etapa de build. A landing page reúne as áreas de sobre, camadas do sistema, features, roadmap, primeiros passos e contato em uma navegação por âncoras responsiva.

A identidade visual parte de um fundo azul-marinho quase preto, acentos coral, ciano e lime, títulos em Space Grotesk e detalhes técnicos em DM Mono. As animações são implementadas com CSS e JavaScript nativos, com suporte a `prefers-reduced-motion`.

O detalhamento de escopo, mapa de seções, navegação, wireframes textuais e critérios de qualidade está em [docs/PLANEJAMENTO-S1.md](docs/PLANEJAMENTO-S1.md).

## Seções planeadas

- **Sobre** — o que é o TipOS e a história do projeto
- **Features** — kernel, GUI, FS, userland (com screenshots!)
- **Docs** — tutoriais, tabela de syscalls, arquitetura
- **Roadmap** — sprints e próximos passos
- **Contato** — Discord da org, GitHub, insta <3

## Como rodar local

```bash
# com qualquer servidor estatico simples:
python3 -m http.server 8000
# ou:
npx serve .
```

## Contribuir

- Issue boa pra começar: labels `good first issue` e `dificuldade/facil`
- PR precisa de 2 approvals (regra KANBAN da org)
- Mais detalhes no [CONTRIBUTING do staging](https://github.com/TipGroup-inc/TipOS-staging/blob/main/CONTRIBUTING.md)

## Time

- Squad **site-divulgacao** — donos desse repo
