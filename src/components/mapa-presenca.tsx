/**
 * MapaPresenca — mapa animado da abrangência geográfica.
 *
 * Contorno do Brasil em traço fino (estados), nove sedes plotadas como
 * pontos dourados pulsantes e arcos que partem da matriz (Blumenau) em
 * direção a cada unidade, desenhados em sequência.
 *
 * Interação: passar o mouse (ou focar) em uma sede na lista acende o
 * ponto e o arco correspondentes; o inverso também vale.
 */
import * as React from "react";
import { BRASIL_ESTADOS, BRASIL_VIEWBOX } from "./brasil-paths";

export type Sede = {
  cidade: string;
  uf: string;
  matriz?: boolean;
  linhas: string[];
  cep: string;
  x: number;
  y: number;
  /** deslocamento do rótulo no mapa */
  anchor?: "start" | "end";
  dx?: number;
  dy?: number;
};

export const SEDES: Sede[] = [
  {
    cidade: "Blumenau",
    uf: "SC",
    matriz: true,
    linhas: ["Rua Frederico Guilherme Busch, 87", "Jardim Blumenau"],
    cep: "89010-360",
    x: 479.3,
    y: 639.4,
    anchor: "end",
    dx: -14,
    dy: 4,
  },
  {
    cidade: "São Paulo",
    uf: "SP",
    linhas: ["Avenida Paulista, 1636", "Conj. 1507-1509, Bela Vista"],
    cep: "01310-200",
    x: 526.1,
    y: 567.7,
    anchor: "end",
    dx: -14,
    dy: -6,
  },
  {
    cidade: "Rio de Janeiro",
    uf: "RJ",
    linhas: ["Rua Visconde de Inhaúma, 134", "Salas 2001 a 2004, Centro"],
    cep: "20091-901",
    x: 592.7,
    y: 554.3,
    anchor: "start",
    dx: 14,
    dy: 8,
  },
  {
    cidade: "Curitiba",
    uf: "PR",
    linhas: ["Rua da Glória, 251", "Ed. NEO Corporate, Conj. 202", "Centro Cívico"],
    cep: "80030-060",
    x: 475.3,
    y: 607.4,
    anchor: "end",
    dx: -14,
    dy: -4,
  },
  {
    cidade: "Porto Alegre",
    uf: "RS",
    linhas: ["Avenida Ipiranga, 40", "Conj. 603-604-605, Praia de Belas"],
    cep: "90160-090",
    x: 437.9,
    y: 707.5,
    anchor: "end",
    dx: -14,
    dy: 4,
  },
  {
    cidade: "Salvador",
    uf: "BA",
    linhas: ["Avenida Tancredo Neves, 450", "23º andar, Caminho das Árvores"],
    cep: "41820-901",
    x: 682.5,
    y: 353.2,
    anchor: "start",
    dx: 14,
    dy: 10,
  },
  {
    cidade: "Goiânia",
    uf: "GO",
    linhas: ["Avenida 136, Quadra F44, nº 761", "Sala A1, Setor Sul"],
    cep: "74093-250",
    x: 475.5,
    y: 427.1,
    anchor: "end",
    dx: -14,
    dy: 4,
  },
  {
    cidade: "Maceió",
    uf: "AL",
    linhas: ["Rua José Maia Gomes, 258", "SL 5, CXPST 264, Jatiúca"],
    cep: "57036-240",
    x: 736.2,
    y: 288.3,
    anchor: "start",
    dx: 14,
    dy: -6,
  },
  {
    cidade: "Aracaju",
    uf: "SE",
    linhas: ["Rua Manoel Espírito Santo, 165", "Sala 201, Pavimento Superior", "Grageru"],
    cep: "49025-440",
    x: 710.0,
    y: 313.3,
    anchor: "start",
    dx: 14,
    dy: 14,
  },
];

const MATRIZ = SEDES[0];

/** Arco suave da matriz até a sede, curvado para fora do eixo. */
function arco(sede: Sede) {
  const dx = sede.x - MATRIZ.x;
  const dy = sede.y - MATRIZ.y;
  const mx = MATRIZ.x + dx / 2;
  const my = MATRIZ.y + dy / 2;
  const len = Math.hypot(dx, dy) || 1;
  const bow = Math.min(len * 0.22, 90);
  const cx = mx + (dy / len) * bow;
  const cy = my - (dx / len) * bow;
  return `M${MATRIZ.x},${MATRIZ.y} Q${cx},${cy} ${sede.x},${sede.y}`;
}

/* ── Interiorização ───────────────────────────────────────────────
   Pontos de atuação distribuídos por todas as unidades federativas.
   São derivados dos próprios contornos dos estados (centroide e dois
   pontos intermediários), garantindo que caiam dentro do território.
   Cada ponto é vinculado à unidade mais próxima: ao acionar uma sede,
   o mapa "interioriza" e mostra o alcance que parte dela.            */
export type PontoInterior = { uf: string; x: number; y: number; sede: string };

function vertices(d: string): Array<[number, number]> {
  const nums = d.match(/-?\d+(?:\.\d+)?/g) ?? [];
  const pts: Array<[number, number]> = [];
  for (let i = 0; i + 1 < nums.length; i += 2) {
    pts.push([parseFloat(nums[i]), parseFloat(nums[i + 1])]);
  }
  return pts;
}

function construirInterior(): PontoInterior[] {
  const out: PontoInterior[] = [];
  for (const [uf, d] of Object.entries(BRASIL_ESTADOS)) {
    const pts = vertices(d);
    if (pts.length < 3) continue;
    const cx = pts.reduce((a, p) => a + p[0], 0) / pts.length;
    const cy = pts.reduce((a, p) => a + p[1], 0) / pts.length;
    const candidatos: Array<[number, number]> = [[cx, cy]];
    for (const frac of [0.28, 0.72]) {
      const v = pts[Math.floor(pts.length * frac)];
      candidatos.push([cx + (v[0] - cx) * 0.42, cy + (v[1] - cy) * 0.42]);
    }
    for (const [x, y] of candidatos) {
      let sede = MATRIZ.cidade;
      let melhor = Infinity;
      for (const s of SEDES) {
        const dist = Math.hypot(s.x - x, s.y - y);
        if (dist < melhor) {
          melhor = dist;
          sede = s.cidade;
        }
      }
      out.push({ uf, x, y, sede });
    }
  }
  return out;
}

const INTERIOR = construirInterior();


export function MapaPresenca({
  ativa,
  onAtivar,
}: {
  ativa: string | null;
  onAtivar: (cidade: string | null) => void;
}) {
  const ufsAtivas = React.useMemo(() => {
    const set = new Set<string>();
    if (ativa) {
      for (const p of INTERIOR) if (p.sede === ativa) set.add(p.uf);
    }
    return set;
  }, [ativa]);

  return (
    <div className="relative w-full">
      <svg
        viewBox={BRASIL_VIEWBOX}
        role="img"
        aria-label="Mapa do Brasil com as nove unidades do Oliveira Ritzmann Advogados"
        className="h-auto w-full overflow-visible"
      >
        <defs>
          <linearGradient id="or-arc" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="var(--gold)" stopOpacity="0.15" />
            <stop offset="55%" stopColor="var(--gold)" stopOpacity="0.9" />
            <stop offset="100%" stopColor="var(--gold)" stopOpacity="0.35" />
          </linearGradient>
          <radialGradient id="or-halo">
            <stop offset="0%" stopColor="var(--gold)" stopOpacity="0.5" />
            <stop offset="100%" stopColor="var(--gold)" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* Contorno dos estados */}
        <g className="mapa-estados">
          {Object.entries(BRASIL_ESTADOS).map(([uf, d], i) => {
            const coberto = ativa !== null && ufsAtivas.has(uf);
            return (
              <path
                key={uf}
                d={d}
                fill={
                  coberto
                    ? "color-mix(in oklab, var(--gold) 16%, color-mix(in oklab, var(--sand) 55%, transparent))"
                    : "color-mix(in oklab, var(--sand) 55%, transparent)"
                }
                stroke={
                  coberto
                    ? "color-mix(in oklab, var(--gold) 55%, transparent)"
                    : "color-mix(in oklab, var(--ink) 22%, transparent)"
                }
                strokeWidth={coberto ? 1 : 0.8}
                strokeLinejoin="round"
                style={{
                  animationDelay: `${i * 26}ms`,
                  transition: "fill 420ms ease, stroke 420ms ease",
                }}
              />
            );
          })}
        </g>

        {/* Arcos da matriz para as demais unidades */}
        <g fill="none" strokeLinecap="round">
          {SEDES.filter((s) => !s.matriz).map((s, i) => {
            const on = ativa === null || ativa === s.cidade;
            return (
              <path
                key={s.cidade}
                d={arco(s)}
                stroke="url(#or-arc)"
                strokeWidth={ativa === s.cidade ? 2 : 1.1}
                className="mapa-arco"
                style={{
                  animationDelay: `${400 + i * 170}ms`,
                  opacity: on ? 1 : 0.18,
                }}
              />
            );
          })}
        </g>

        {/* Interiorização: capilaridade a partir da unidade acionada */}
        <g>
          {INTERIOR.map((p, i) => {
            const origem = SEDES.find((s) => s.cidade === p.sede) ?? MATRIZ;
            const on = ativa === p.sede;
            return (
              <g
                key={`${p.uf}-${i}`}
                style={{
                  opacity: on ? 1 : ativa === null ? 0.28 : 0.08,
                  transition: `opacity 420ms ease ${on ? (i % 12) * 45 : 0}ms`,
                }}
              >
                {on && (
                  <line
                    x1={origem.x}
                    y1={origem.y}
                    x2={p.x}
                    y2={p.y}
                    stroke="color-mix(in oklab, var(--gold) 70%, transparent)"
                    strokeWidth={0.6}
                  />
                )}
                <circle
                  cx={p.x}
                  cy={p.y}
                  r={on ? 2.4 : 1.5}
                  fill={
                    on
                      ? "var(--gold)"
                      : "color-mix(in oklab, var(--ink) 45%, transparent)"
                  }
                  style={{ transition: "r 300ms ease, fill 300ms ease" }}
                />
              </g>
            );
          })}
        </g>


        {/* Pontos */}
        <g>
          {SEDES.map((s, i) => {
            const on = ativa === s.cidade;
            const dim = ativa !== null && !on;
            return (
              <g
                key={s.cidade}
                className="mapa-ponto cursor-pointer"
                style={{
                  animationDelay: `${600 + i * 150}ms`,
                  opacity: dim ? 0.25 : 1,
                }}
                onMouseEnter={() => onAtivar(s.cidade)}
                onMouseLeave={() => onAtivar(null)}
                onFocus={() => onAtivar(s.cidade)}
                onBlur={() => onAtivar(null)}
                tabIndex={0}
                role="button"
                aria-label={`${s.cidade} — ${s.uf}`}
              >
                <circle
                  cx={s.x}
                  cy={s.y}
                  r={on ? 26 : 18}
                  fill="url(#or-halo)"
                  className="mapa-halo"
                />
                <circle
                  cx={s.x}
                  cy={s.y}
                  r={s.matriz ? 6.5 : 4.5}
                  fill="var(--gold)"
                  stroke="var(--ink)"
                  strokeWidth={s.matriz ? 1.6 : 0}
                />
                <text
                  x={s.x + (s.dx ?? 12)}
                  y={s.y + (s.dy ?? 0)}
                  textAnchor={s.anchor ?? "start"}
                  className="select-none"
                  style={{
                    fill: "var(--ink)",
                    fontSize: on ? 17 : 15,
                    letterSpacing: "0.06em",
                    fontWeight: s.matriz ? 600 : 400,
                  }}
                >
                  {s.cidade}
                </text>
              </g>
            );
          })}
        </g>
      </svg>
    </div>
  );
}
