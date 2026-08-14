# TipOS Site <3

Site de divulgação e apresentação do **TipOS** — sistema operacional próprio feito do zero pela galera da TipGroup-inc: kernel x86-64 (C + NASM + Zig), GUI própria (VESA + OWT + WM), FAT32, userland ring 3 e compat com ELF Linux.

## Objetivo

- Apresentar o projeto pro mundo: o que é, como funciona, quem fez
- Divulgar as features (GUI, shell MkM>, syscalls, drivers)
- Documentar como buildar/rodar em QEMU
- Roadmap público e como contribuir

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
