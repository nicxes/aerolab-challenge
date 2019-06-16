export default function Icon({ size, color }) {
  return (
    <svg height={size || '100'} viewBox="0 0 24 24">
      <g fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round">
        <path d="M.5 13.5h5v8h-5zM.5 19.5h5" />
        <path d="M2.5 11.498V8.5h8v11h-3" />
        <path d="M4.5 6.499V3.5h18v14h-10M10.5 17.5h-3M22.5 14.5h-10M13.5 17.5v4M9.5 21.5h8M17 5.999L20 9M19.5 5.499l1 1" />
      </g>
    </svg>
  )
}