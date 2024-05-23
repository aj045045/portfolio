"use client";
import { rubik } from "@/lang";
import {
    Navbar,
    NavbarMenuToggle,
    NavbarMenuItem,
    NavbarMenu,
    NavbarContent,
    NavbarItem,
} from "@nextui-org/navbar";
import { Link } from 'react-scroll';
import { useState } from "react";
import { Switch } from "@nextui-org/switch";
import { IoMdSunny } from "react-icons/io";
import { IoIosMoon } from "react-icons/io";

export function NavbarComponent({ isSelected, valueChange }: { isSelected: any, valueChange: any }) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState("");
    const menuItems = [
        "home",
        "who am i ?",
        "about",
        "services",
        "projects",
        "skills",
        "education",
        "contact",
    ];

    return (
        <Navbar isBordered isBlurred position="sticky" isMenuOpen={isMenuOpen} onMenuOpenChange={setIsMenuOpen}>
            <NavbarContent className="sm:hidden" justify="start">
                <NavbarMenuToggle aria-label={isMenuOpen ? "Close menu" : "Open menu"} />
            </NavbarContent>

            <NavbarContent className={`${rubik.className} pr-3 text-3xl md:text-4xl select-none`} justify="start">
                AJ.
            </NavbarContent>
            <NavbarContent className="hidden sm:flex lg:gap-10 sm:gap-4 md:gap-6" justify="end">
                {menuItems.map((item, index) => (
                    <NavbarItem key={`${item}-${index}`}>
                        <Link
                            onClick={() => setActiveSection(item)}
                            activeClass="active"
                            to={item}
                            spy={true}
                            smooth={true}
                            offset={-100}
                            duration={500}
                            className={`w-full capitalize after:content-["/>"]  select-none ${item === activeSection
                                ? " dark:text-green-300 text-green-700  underline-offset-8 underline"
                                : "dark:hover:text-white text-slate-500 hover:text-black"
                                }`}
                            size={2}
                        >
                            {item}
                        </Link>
                    </NavbarItem>
                ))}
            </NavbarContent>

            <NavbarMenu>
                {menuItems.map((item, index) => (
                    <NavbarMenuItem key={`${item}-${index}`}>
                        <Link
                            onClick={() => setActiveSection(item)}
                            activeClass="active"
                            to={item}
                            spy={true}
                            smooth={true}
                            offset={-100}
                            duration={500}
                            className={`w-full capitalize after:content-["/>"]  select-none ${item === activeSection
                                ? " dark:text-green-300 text-green-700  underline-offset-8 underline"
                                : "dark:hover:text-white text-slate-500 hover:text-black"
                                }`}
                            size={2}
                        >
                            {item}
                        </Link>
                    </NavbarMenuItem>
                ))}
            </NavbarMenu>
            <NavbarContent justify="end">
                <Switch
                    isSelected={isSelected}
                    onValueChange={valueChange}
                    defaultSelected
                    size="md"
                    color="success"
                    startContent={<IoMdSunny />}
                    endContent={<IoIosMoon />}
                >
                </Switch>
            </NavbarContent>
        </Navbar>
    );
}
