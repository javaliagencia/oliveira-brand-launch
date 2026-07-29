## Problema

Na dobra "Em ponto" (Publicações) o vídeo de fundo está esticado para cobrir a altura inteira da seção (que tem várias telas de altura). Com `object-cover`, isso amplia muito o quadro: as partículas ficam gigantes e o movimento fica quase imperceptível, parecendo travado.

## O que fazer

**1. Tirar o zoom (partículas menores)**
- Parar de dimensionar o vídeo pela altura da seção (`h-[calc(100%+52vh)]`).
- Passar a dimensionar pela altura da janela (~`110vh`), que é o tamanho em que o vídeo foi pensado. Assim as bolinhas voltam ao tamanho natural, bem menores.

**2. Fazer o vídeo andar de verdade com o scroll**
- Fixar o vídeo em relação à janela (camada `fixed`, recortada pelos limites da seção), como no Simmons & Simmons: o conteúdo (colagem de publicações) desliza por cima e o fundo permanece visível durante toda a dobra, do verde claro ao verde escuro.
- Somar a esse comportamento um deslocamento suave por scroll (parallax de baixa amplitude, ~10 a 15% da altura da janela), para que o fundo desça junto, sem repetir o efeito de "travado".
- O vídeo começa acima do headline "O mesmo método que conduz operações…" e acompanha até o último card/CTA.

**3. Ajustes finos**
- Manter o véu em gradiente atual (verde claro no topo → verde escuro na base) para preservar a leitura dos cards.
- Garantir que a camada fique atrás do conteúdo (z-index) e sem interferir em cliques.
- Respeitar `prefers-reduced-motion`: sem parallax nesse caso.

## Detalhes técnicos

- Arquivo: `src/routes/index.tsx`, componente `PublicacoesFold`.
- Trocar o wrapper do vídeo por um container com `clip-path: inset(0)` / `contain` na `<section>` e vídeo `position: fixed; inset: 0; height: 110vh` com `object-cover`.
- No `requestAnimationFrame`, calcular o progresso da seção e aplicar `translate3d(0, progress * 0.12 * innerHeight, 0)` em vez do curso longo atual.
- Verificar no preview com scroll real (Playwright) que a matriz de transform muda e que o quadro do vídeo não está ampliado.
