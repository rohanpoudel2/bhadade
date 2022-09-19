import ScheduleCard from '../schedulecard/ScheduleCard';
import './schedule.scss';

const Schedule = () => {
  return (
    <div className="schedule">
      <div className="schedule-title">
        <span>Schedule</span>
        <i class="fa-solid fa-plus"></i>
      </div>
      <ScheduleCard />
      <ScheduleCard />
      <ScheduleCard />
      <ScheduleCard />
      <ScheduleCard />
      <ScheduleCard />
    </div>
  )
}

export default Schedule