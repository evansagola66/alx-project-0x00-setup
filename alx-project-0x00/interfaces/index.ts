export interface PillProps {
  title: string
}


export interface ButtonProps {
  title: string, 
  onClick: () => void,
  size?: "small" | "medium" | "large",
  shape?: "rounded-sm" | "rounded-md" | "rounded-full",
  variant?: "primary" | "secondary" | "tertiary",
  styles?: string
}