import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Chapter, Course, UserProgress } from "@prisma/client";
import { Menu } from "lucide-react";
import { CourseSidebar } from "./course-sidebar";

interface CourseNavbarProps {
  course: Course & {
    chapters: (Chapter & {
      userProgress: UserProgress[] | null;
    })[];
  };
  progress: number;
}

export const CourseMobileSidebar = ({
  course,
  progress,
}: CourseNavbarProps) => {
  return (
    <Sheet>
      <SheetTrigger className="md:hidden pr-4 hover:opacity-75 transition">
        <Menu />
      </SheetTrigger>
      <SheetContent side={"left"} className="p-0 bg-white w-72">
        <CourseSidebar course={course} progress={progress} />
      </SheetContent>
    </Sheet>
  );
};
