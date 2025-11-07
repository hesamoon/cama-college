// components
import ScheduleView from "@/components/ScheduleView";
import TeacherProgramsSkeleton from "@/components/skeletons/TeacherProgramsSkeleton";

function page() {
  if (false) return <TeacherProgramsSkeleton />;

  return (
    <div className="mobile-grid-system-level0 md:grid-system-level0 w-full space-y-9">
      {/* schedule */}
      <div className="space-y-4">
        <h2 className="mobile-title-large md:title-large text-on_surface-light">
          Programs Schedule
        </h2>

        <ScheduleView />
      </div>

      {/* progrmas */}
      <div className="space-y-9">my programs</div>
    </div>
  );
}

export default page;
