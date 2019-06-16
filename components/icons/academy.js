export default function Icon({ size, color }) {
  return (
    <svg viewBox="0 0 24 24" height={size || '100'}>
      <g fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10">
				<rect x=".5" y="2.5" width="23" height="17"/>
				<line x1="6.5" x2="17.5" y1="23.5" y2="23.5"/>
				<line x1="10.5" x2="10.5" y1="19.5" y2="23.5"/>
				<line x1="13.5" x2="13.5" y1="19.5" y2="23.5"/>
        <polygon points="12.5 12 19.5 9 12.5 6 5.5 9"/>
        <polyline points="8.5 10.286 8.5 14 12.5 16 16.5 14 16.5 10.286"/>
        <line x1="5.5" x2="5.5" y1="9" y2="12.5"/>
        <polyline points="5.5 12.5 4 15.5 7 15.5 5.5 12.5"/>
      </g>
    </svg>
  )
}