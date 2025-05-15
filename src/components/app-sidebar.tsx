"use client"

import {
  IconBook,
  IconCalendar,
  IconChartBar,
  IconFileDescription,
  IconFileText,
  IconFolder,
  IconHelp,
  IconHome,
  IconInnerShadowTop,
  IconMessage,
  IconSchool,
  IconSettings
} from "@tabler/icons-react"
import * as React from "react"

import { NavDocuments } from "@/components/nav-documents"
import { NavMain } from "@/components/nav-main"
import { NavSecondary } from "@/components/nav-secondary"
import { NavUser } from "@/components/nav-user"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/shared/ui/sidebar"

const data = {
  user: {
    name: "Иван Петров",
    email: "student@lms.ru",
    avatar: "/avatars/user.jpg",
  },
  navMain: [
    {
      title: "Главная",
      url: "/",
      icon: IconHome,
    },
    {
      title: "Мои курсы",
      url: "/courses",
      icon: IconBook,
    },
    {
      title: "Задания",
      url: "/assignments",
      icon: IconFileDescription,
    },
    {
      title: "Оценки",
      url: "/grades",
      icon: IconChartBar,
    },
    {
      title: "Расписание",
      url: "/schedule",
      icon: IconCalendar,
    },
  ],
  navEducation: [
    {
      title: "Учебные материалы",
      icon: IconFolder,
      url: "/materials",
      items: [
        {
          title: "Лекции",
          url: "/materials/lectures",
        },
        {
          title: "Практические работы",
          url: "/materials/practicals",
        },
        {
          title: "Дополнительные ресурсы",
          url: "/materials/resources",
        },
      ],
    },
    {
      title: "Обсуждения",
      icon: IconMessage,
      url: "/discussions",
      items: [
        {
          title: "Форум",
          url: "/discussions/forum",
        },
        {
          title: "Вопросы к лекциям",
          url: "/discussions/lecture-questions",
        },
      ],
    },
  ],
  navSecondary: [
    {
      title: "Настройки",
      url: "/settings",
      icon: IconSettings,
    },
    {
      title: "Помощь",
      url: "/help",
      icon: IconHelp,
    },
    {
      title: "Преподаватели",
      url: "/teachers",
      icon: IconSchool,
    },
  ],
  documents: [
    {
      name: "Библиотека",
      url: "/library",
      icon: IconFileText,
    },
    {
      name: "Архив курсов",
      url: "/archive",
      icon: IconFolder,
    },
    {
      name: "Мои документы",
      url: "/my-documents",
      icon: IconFileDescription,
    },
  ],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="offcanvas" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              asChild
              className="data-[slot=sidebar-menu-button]:!p-1.5"
            >
              <a href="#">
                <IconInnerShadowTop className="!size-5" />
                <span className="text-base font-semibold">Courseo</span>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        <NavDocuments items={data.documents} />
        <NavSecondary items={data.navSecondary} className="mt-auto" />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
    </Sidebar>
  )
}