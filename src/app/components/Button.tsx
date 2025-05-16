import styles from "./Button.module.scss"

interface ButtonProps {
  theme?: 'light' | 'dark',
  children: React.ReactNode,
  className?: string
}

/**
 * Component that represents a stylized button
 */
export default function Button({ theme, children, className }: ButtonProps) {
  console.log(theme);

  return (
    <span
      className={`${styles.button} ${theme === 'light' ? styles.light : ""} ${className}`}
    >
      {children}
    </span>
  )
}
