class Classes {
  constructor(id, name, description, teacher, students, days_available, starttime, endtime, imageUrl) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.teacher = teacher;
    this.students = students;
    this.days_available = days_available;
    this.starttime = starttime;
    this.endtime = endtime;
    this.imageUrl = imageUrl;
  }
}

export default Classes;