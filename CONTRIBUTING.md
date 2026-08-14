# Contribuindo no TipOS Site <3

Moe moe kyun~ O site é a vitrine do TipOS pro mundo, então capricha! Aqui o fluxo rápido (o fluxo completo da org mora no CONTRIBUTING do [TipOS-staging](https://github.com/TipGroup-inc/TipOS-staging/blob/main/CONTRIBUTING.md)).

## Pegando uma tarefa

- Tarefas no board **"TipOS Site — Kanban"**: https://github.com/orgs/TipGroup-inc/projects/2
- **Só pega card com: descrição + critério de aceite + label de squad.** Card vago não existe.
- Labels: `squad/site-divulgacao` (dono), `sprint/*`, `dificuldade/*`, `good first issue`

## Fluxo de trabalho

```bash
git checkout -b <squad>/<numero-issue>-<descricao-curta>   # ex: site-divulgacao/3-pagina-sobre
# ...commits pequenos e incrementais (feat:, fix:, docs:, chore:)...
git push origin <sua-branch>
# abre o PR — o template tem o checklist automático <3
```

- **Reviews**: 2 approvals obrigatórios (`main` protegida)
- **Teste local**: `python3 -m http.server 8000` (ou o comando do SSG escolhido)
- **Screenshot no PR**: site é visual — todo PR de página/componente leva print

## Regras que não têm discussão (>_<)

1. **Ninguém deleta arquivo num commit sem aprovação de 2 pares** — documenta no card
2. **PR com mais de 20 arquivos** precisa de reunião de alinhamento antes
3. **Nada de informação interna não-pública** no site (senhas, tokens, docs históricos duvidosos)
4. Conteúdo em pt-BR, estilo moe moe kyun (padrão da org, não discute >_<)