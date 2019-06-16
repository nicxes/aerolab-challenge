export default function Icon({ size, color }) {
  return (
    <svg viewBox="0 0 24 24" height={size || '100'}>
      <g fill="none" stroke={color} strokeLinejoin="round" strokeMiterlimit="10">
        <polygon points="6.5 21 8 22 9.5 21 9.5 19.5 8 18.5 6.5 19.5"/>
        <polygon points="17.5 21 19 22 20.5 21 20.5 19.5 19 18.5 17.5 19.5"/>
        <polyline points="2.5 12.5 2.5 17.5 15.5 17.5 15.5 7.5 11.5 7.5" strokeLinecap="round"/>
        <polyline points="22.5 19.5 23.5 19.5 23.5 17.5 23.5 15.5 20 9.5 15.5 9.5" strokeLinecap="round"/>
        <polyline points="21.167 11.5 17.5 11.5 17.5 14.5 22.864 14.5" strokeLinecap="round"/>
        <line x1="23.5" x2="15.5" y1="17.5" y2="17.5" strokeLinecap="round"/>
        <line x1="15.5" x2="11.5" y1="19.5" y2="19.5" strokeLinecap="round"/>
        <line x1="4.5" x2="2.5" y1="19.5" y2="19.5" strokeLinecap="round"/>
        <g strokeLinecap="round">
          <polygon points="9.5 8.75 5.5 11 1.5 8.75 1.5 4.25 5.5 2 9.5 4.25"/>
          <polyline points="5.5 4.5 5.5 7.5 7.5 7.5"/>
        </g>
      </g>
    </svg>
  )
}