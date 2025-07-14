
"use client"

import React from "react"
import { Home, Moon, Sun } from "lucide-react"
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import { useTheme } from "next-themes"

interface AppSidebarProps {
  onNavigateToContents: () => void
  getColorMode: (value:string) => void
}

export function AppSidebar({ onNavigateToContents, getColorMode }: AppSidebarProps) {
  const { theme, setTheme } = useTheme()

  const toggleTheme = () => {
    getColorMode(theme === "dark" ? "light" : "dark")
    setTheme(theme === "dark" ? "light" : "dark")
  }

  return (
    <Sidebar className="border-r">
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton onClick={onNavigateToContents}>
                  <Home className="h-4 w-4" />
                  <span>Table of Contents</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton onClick={toggleTheme}>
                  {theme === "dark" ? (
                    <Sun className="h-4 w-4" />
                  ) : (
                    <Moon className="h-4 w-4" />
                  )}
                  <span>{theme === "dark" ? "Light Mode" : "Dark Mode"}</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}
