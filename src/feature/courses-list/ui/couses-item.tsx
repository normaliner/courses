"use client";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useTransition } from "react";

export const CourseItem = ({
  course,
  onDelete,
}: {
  course: CourseListElement;
  onDelete: () => Promise<void>;
}) => {
  const [isLoadingDelete, startDeleteTransition] = useTransition();

  const handleDelete = () => {
    startDeleteTransition(async () => {
      await onDelete();
    });
  };
  console.log(isLoadingDelete);
  return (
    <Card>
      <CardHeader>
        <CardTitle>{course.name}</CardTitle>
        <CardDescription>{course.description}</CardDescription>
      </CardHeader>
      <CardFooter>
        <Button onClick={handleDelete} disabled={isLoadingDelete}>
          Удалить
        </Button>
      </CardFooter>
    </Card>
  );
};
