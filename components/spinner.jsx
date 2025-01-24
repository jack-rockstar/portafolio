import { cn } from '@/lib/utils'
import { cva } from 'class-variance-authority'
import { Loader } from 'lucide-react'

const spinnerVariants = cva(
  'text-muted animate-spin',
  {
    variants: {
      size: {
        default: 'h-4 w-4',
        sm: 'h-2 w-2',
        lg: 'h-5 w-6',
        icon: 'h-10 w-10'
      }
    },
    defaultVariants: {
      size: 'default'
    }
  }
)

// Definir los props del componente usando VariantProps

export default function Spinner({ size }) {
  return (
    <Loader className={cn(spinnerVariants({ size }))} />
  )
}
