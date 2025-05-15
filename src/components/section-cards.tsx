import { Badge } from "@/shared//ui/badge"
import {
  Card,
  CardAction,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/shared//ui/card"
import { IconTrendingDown, IconTrendingUp } from "@tabler/icons-react"

export function SectionCards() {
  return (
    <div className="*:data-[slot=card]:from-primary/5 *:data-[slot=card]:to-card dark:*:data-[slot=card]:bg-card grid grid-cols-1 gap-4 px-4 *:data-[slot=card]:bg-gradient-to-t *:data-[slot=card]:shadow-xs lg:px-6 @xl/main:grid-cols-2 @5xl/main:grid-cols-4">
      {/* Карточка активных студентов */}
      <Card className="@container/card">
        <CardHeader>
          <CardDescription>Активные студенты</CardDescription>
          <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
            1,250
          </CardTitle>
          <CardAction>
            <Badge variant="outline">
              <IconTrendingUp />
              +12.5%
            </Badge>
          </CardAction>
        </CardHeader>
        <CardFooter className="flex-col items-start gap-1.5 text-sm">
          <div className="line-clamp-1 flex gap-2 font-medium">
            Рост активности <IconTrendingUp className="size-4" />
          </div>
          <div className="text-muted-foreground">
            За последний месяц
          </div>
        </CardFooter>
      </Card>

      {/* Карточка завершенных курсов */}
      <Card className="@container/card">
        <CardHeader>
          <CardDescription>Завершено курсов</CardDescription>
          <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
            89%
          </CardTitle>
          <CardAction>
            <Badge variant="outline">
              <IconTrendingUp />
              +4.2%
            </Badge>
          </CardAction>
        </CardHeader>
        <CardFooter className="flex-col items-start gap-1.5 text-sm">
          <div className="line-clamp-1 flex gap-2 font-medium">
            Успеваемость растёт <IconTrendingUp className="size-4" />
          </div>
          <div className="text-muted-foreground">
            По сравнению с прошлым месяцем
          </div>
        </CardFooter>
      </Card>

      {/* Карточка новых зачислений */}
      <Card className="@container/card">
        <CardHeader>
          <CardDescription>Новые зачисления</CardDescription>
          <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
            456
          </CardTitle>
          <CardAction>
            <Badge variant="outline">
              <IconTrendingDown />
              -5%
            </Badge>
          </CardAction>
        </CardHeader>
        <CardFooter className="flex-col items-start gap-1.5 text-sm">
          <div className="line-clamp-1 flex gap-2 font-medium">
            Снижение зачислений <IconTrendingDown className="size-4" />
          </div>
          <div className="text-muted-foreground">
            Требуется внимание к маркетингу
          </div>
        </CardFooter>
      </Card>

      <Card className="@container/card">
        <CardHeader>
          <CardDescription>Средний балл</CardDescription>
          <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
            4.5
          </CardTitle>
          <CardAction>
            <Badge variant="outline">
              <IconTrendingUp />
              +0.3
            </Badge>
          </CardAction>
        </CardHeader>
        <CardFooter className="flex-col items-start gap-1.5 text-sm">
          <div className="line-clamp-1 flex gap-2 font-medium">
            Улучшение успеваемости <IconTrendingUp className="size-4" />
          </div>
          <div className="text-muted-foreground">
            По всем текущим курсам
          </div>
        </CardFooter>
      </Card>
    </div>
  )
}