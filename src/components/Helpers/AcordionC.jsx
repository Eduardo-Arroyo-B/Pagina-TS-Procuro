import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

export default function AcordionC({ title, text }) {
    return (
        <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
                <AccordionTrigger className="font-bold text-xl">{title}</AccordionTrigger>
                <AccordionContent>
                    {text}
                </AccordionContent>
            </AccordionItem>
        </Accordion>
    )
}