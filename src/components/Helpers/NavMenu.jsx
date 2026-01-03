import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
} from "@/components/ui/navigation-menu.js";
import { Button } from "@/components/ui/button.js";

export default function NavMenu() {
    return (
        <>
            <header className="flex w-full h-full">

                <div className="text-lg content-center text-white font-bold">Yo desbloqueo y reparo</div>

                <div className="flex ml-auto">
                    <NavigationMenu>
                        <NavigationMenuList className="gap-6">
                            <NavigationMenuItem className="hover:cursor-pointer">

                                <NavigationMenuLink className="text-white" href="#Inicio">
                                    Inicio
                                </NavigationMenuLink>

                            </NavigationMenuItem>

                            <NavigationMenuItem className="hover:cursor-pointer">

                                <NavigationMenuLink className="text-white" href="#Beneficios">
                                    Beneficios
                                </NavigationMenuLink>

                            </NavigationMenuItem>

                            <NavigationMenuItem className="hover:cursor-pointer">

                                <NavigationMenuLink className="text-white" href="#para-quien">
                                    ¿Para quien?
                                </NavigationMenuLink>

                            </NavigationMenuItem>

                            <NavigationMenuItem className="hover:cursor-pointer">

                                <NavigationMenuLink className="text-white" href="#temario">
                                    Temario
                                </NavigationMenuLink>

                            </NavigationMenuItem>

                            <NavigationMenuItem className="hover:cursor-pointer">

                                <NavigationMenuLink className="text-white" href="#testimonios">
                                    Testimonios
                                </NavigationMenuLink>

                            </NavigationMenuItem>

                            <NavigationMenuItem className="hover:cursor-pointer">

                                <NavigationMenuLink className="text-white" href="">
                                    FAQ
                                </NavigationMenuLink>

                            </NavigationMenuItem>

                            <NavigationMenuItem className="hover:cursor-pointer">

                                <NavigationMenuLink className="text-white">
                                    Inscribirme
                                </NavigationMenuLink>

                            </NavigationMenuItem>
                        </NavigationMenuList>
                    </NavigationMenu>

                    <Button className="appearance-none py-2 px-4 bg-white text-[#026DB8] font-semibold rounded-lg shadow-md hover:bg-[#00A1FE] focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-opacity-75 hover:text-white hover:underline underline-offset-4 ml-6">Quiero el curso</Button>
                </div>


            </header>

        </>
    );
}
