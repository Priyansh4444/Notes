import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@radix-ui/react-tooltip'
function IOBounds() {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger>IO Bounds</TooltipTrigger>
        <TooltipContent>
          <p>IO Bounds</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}

export default IOBounds
