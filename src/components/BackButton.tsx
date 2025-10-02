import { Button } from '@/components/ui/button'
import { ArrowLeftIcon } from 'lucide-react'

export default function BackButton() {
  return (
    <Button
      variant="link"
      className="bg-blue-400 rounded text-white my-4 shadow-lg flex items-center gap-1"
      onClick={() => {
        window.history.back()
      }}
    >
      <ArrowLeftIcon className="w-4 h-4" />
      Back
    </Button>
  )
}
