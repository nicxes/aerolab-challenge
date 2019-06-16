export default function Icon({ size, color }) {
  return (
    <svg height={size || '100'} viewBox="0 0 24 24">
      <g fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round">
        <path d="M.5 9.5h18v11H.5zM13.5 9.5v-3M5.5 9.5v-3" />
        <path d="M16.5 17.5h-2v-5h2M14.5 15.5h2M10.5 12.5v5h2M4.5 12.5h-2v2l2 1v2h-2M6.5 17.5V14l1-1.5 1 1.5v3.5M6.5 15.5h2M23.5 23.5h-3V2L22 .5 23.5 2zM20.5 6.5h-17L2.5 5l1-1.5h17z" />
      </g>
      <path fill="none" d="M0 0h24v24H0z" />
    </svg>
  )
}