enum DayOfWeek {
  Monday = "Mon",
  Tuesday = "Tue",
  Wednesday = "Wed",
  Thursday = "Thu",
  Friday = "Fri",
  Saturday = "Sat",
  Sunday = "Sun"
}

const isWeekend = (day: DayOfWeek): boolean => {
    return day === DayOfWeek.Saturday || day === DayOfWeek.Sunday;
}

export {};