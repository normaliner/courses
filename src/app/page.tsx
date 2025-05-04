import { CoursesList } from "@/feature/courses-list/pub/courses-list";
import { CreateCourseForm } from "@/feature/courses-list/pub/create-courses.form";

export default async function Home() {
  return (
    <div className="flex flex-col min-h-screen p-8">
      <h1>Courses</h1>
      <CreateCourseForm
        revalidatePagePath="/"
        className="max-w-[300px] mb-10"
      />
      <CoursesList revalidatePagePath="/" />
    </div>
  );
}
