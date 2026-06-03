// Thin-line SVG icons for the ingredients section
// stroke-based, no fill — matches nuhua's minimal aesthetic

const props = { fill: 'none', stroke: 'currentColor', strokeWidth: '1.25', strokeLinecap: 'round', strokeLinejoin: 'round' }
const size  = { width: 30, height: 30 }

export const IconHydration = () => (
  <svg {...size} viewBox="0 0 30 30" {...props}>
    {/* Water drop */}
    <path d="M15 4 C15 4 6 13 6 19 a9 9 0 0 0 18 0 C24 13 15 4 15 4 Z" />
  </svg>
)

export const IconVitamin = () => (
  <svg {...size} viewBox="0 0 30 30" {...props}>
    {/* Hexagon — references molecular / B3 vitamin */}
    <polygon points="15,3.5 24,8.75 24,19.25 15,24.5 6,19.25 6,8.75" />
    <line x1="15" y1="3.5" x2="15" y2="24.5" strokeOpacity="0.35" />
    <line x1="6" y1="8.75" x2="24" y2="19.25" strokeOpacity="0.35" />
    <line x1="24" y1="8.75" x2="6" y2="19.25" strokeOpacity="0.35" />
  </svg>
)

export const IconBotanical = () => (
  <svg {...size} viewBox="0 0 30 30" {...props}>
    {/* Leaf + stem — botanical origin */}
    <path d="M15 26 C15 26 5 19 5 11 C5 6.5 9.5 3 15 3 C20.5 3 25 6.5 25 11 C25 19 15 26 15 26 Z" />
    <line x1="15" y1="26" x2="15" y2="10" />
  </svg>
)

export const IconShield = () => (
  <svg {...size} viewBox="0 0 30 30" {...props}>
    {/* Shield — protection / adaptogen */}
    <path d="M15 3 L24 8 L24 16 C24 21 20 25.5 15 27 C10 25.5 6 21 6 16 L6 8 Z" />
  </svg>
)

export const IconPeptide = () => (
  <svg {...size} viewBox="0 0 30 30" {...props}>
    {/* Diamond — precision biomimetic */}
    <polygon points="15,3 27,15 15,27 3,15" />
    <line x1="3" y1="15" x2="27" y2="15" strokeOpacity="0.3" />
  </svg>
)

// Map by ingredient key so pages can look up by name
export const ingredientIcons = {
  hyaluronic: <IconHydration />,
  niacinamide: <IconVitamin />,
  bakuchiol:   <IconBotanical />,
  ectoin:      <IconShield />,
  peptide:     <IconPeptide />,
}
