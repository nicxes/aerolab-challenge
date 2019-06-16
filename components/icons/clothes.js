export default function Icon({ size, color }) {
  return (
    <svg height={size || '100'} viewBox="0 0 24 24">
      <g fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 3L.5 20.5 3 21l3.5-11M20 3l3.5 17.5-2.5.5-3.5-11M7.886 1.786l3.997 9.195" />
        <path d="M18.5 23.5l-1-4.5v-9L20 3 12 .5 4 3l2.5 7v9l-1 4.5z" />
        <path d="M16.1 1.781L10.5 14v9.5M12.5 15.5v1M12.5 18.5v1" />
      </g>
      <path fill="none" d="M0 0h24v24H0z" />
    </svg>
  )
}