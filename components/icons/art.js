export default function Icon({ size, color }) {
  return (
    <svg height={size || '100'} viewBox="0 0 24 24">
      <g fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round">
        <path d="M8.693 7.807l-2.754 2.754M.5 7V1.5l3 2h3l.468 3.125-2.211 2.211zM2.5 18.5l17-17 3 3-17 17L1 23z" />
        <path d="M11.363 9.637L6.968 6.625 4.757 8.836l3.012 4.395M11.072 15.928L20.5 23.5l.708-.708-7.257-9.743M5.5 21.5l-3-3M1 23l-.5.5M22 2l-1 1M21 6l-4.5-4.5-5 5" />
      </g>
    </svg>
  )
}