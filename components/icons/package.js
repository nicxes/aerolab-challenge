export default function Icon({ size, color }) {
  return (
    <svg height={size || '100'} viewBox="0 0 24 24" fill="none">
      <g fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10">
        <polyline points="7.5 7.5 7.5 17.5 15.5 21 23.5 17.5 23.5 7.5"/>
        <polyline points="7.5 7.5 15.5 11 23.5 7.5"/>
        <polyline points="11.5 5.75 19.5 9.281 19.5 12.5"/>
        <polyline points="7.5 7.5 15.5 4 23.5 7.5"/>
        <polyline points="1.5 13.652 1.547 13.674 5.5 15.5"/>
        <line x1="2.206" x2="5.5" y1="10.478" y2="12"/>
        <line x1="2.865" x2="5.5" y1="7.283" y2="8.5"/>
        <line x1="15.5" x2="15.5" y1="11" y2="21"/>
      </g>
    </svg>
  )
}