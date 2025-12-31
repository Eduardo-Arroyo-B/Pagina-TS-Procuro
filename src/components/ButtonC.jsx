import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"


export default function MyButton({ className, ...props }) {
    return (
        <Button
            {...props}
            className={cn("bg-white text-[#026DB8] rounded-full p-6 shadow-2xl border hover:bg-transparent hover:text-white hover:border-1", className)}
        />
    )
}
