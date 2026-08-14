## Checklist — leia antes de abrir o PR, baka~ >_<

**Antes de abrir:**
- [ ] Card no board em "Code Review" (move o card, não deixa no backlog)
- [ ] Branch com nome padrão: `<squad>/<issue-numero>-<descricao-curta>` (ex: `site-divulgacao/3-pagina-sobre`)
- [ ] Commits seguem a política: `feat:`, `fix:`, `docs:`, `chore:` (zoeira opcional depois do `~~`)

**Código:**
- [ ] Testei local: `python3 -m http.server 8000` (ou comando do SSG escolhido) e a página abre
- [ ] Responsivo: testei em janela pequena (mobile-ish) além do desktop
- [ ] **Menos de 20 arquivos mudados** — se passou disso, precisa reunião de alinhamento antes (nem pro Coelho, dnv!)

**Regras sagradas:**
- [ ] Não deletei nenhum arquivo — se deletei, tenho aprovação de 2 pares documentada no card
- [ ] Critério de aceite do card foi atendido (linka o card na descrição)
- [ ] Conteúdo em pt-BR e sem dar spoiler de informação que não pode ser pública

**Depois de abrir:**
- [ ] Aguardar 2 approvals do time (ou 1 se for fix urgente combinado no daily)
- [ ] Screenshot do resultado no comentário do PR (site é visual, todo mundo quer ver <3)