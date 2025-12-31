import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"

export default function MyBadge({ className, ...props }) {
    return (
        <Badge
            {...props}
            className={cn("bg-[#11528A] border border-white", className)}
        />
    )
}