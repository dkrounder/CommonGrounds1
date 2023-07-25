import Meals from '../models/meals';
import Classes from '../models/classes';


export const CLASSES = [
  new Classes(1, 'Yoga', 'Relax and strengthen your body and mind', 'John Doe', ['Alice', 'Bob'],['Monday', 'Wednesday', 'Friday'], '10:00 AM', '11:00 AM',"https://cdn.pixabay.com/photo/2016/11/23/18/34/woman-1854265_1280.jpg"),
  new Classes(2, 'Meditation', 'Find your inner peace', 'Jane Smith', ['Charlie', 'Diana'], ['Tuesday', 'Thursday'],'12:00 PM', '1:00 PM', "https://cdn.pixabay.com/photo/2023/04/03/01/35/meditation-7895775_640.jpg"),
  new Classes(3, 'Gardening', 'Learn from a master gardener', 'Sarah Johnson', ['Eve', 'Frank'], ['Monday', 'Wednesday', 'Friday'],'2:00 PM', '3:00 PM',"https://cdn.pixabay.com/photo/2015/07/26/20/18/flower-861728_640.jpg"),
  new Classes(4, 'Guitar', 'Learn to strum', 'Michael Williams', ['Grace', 'Henry'], ['Tuesday', 'Thursday'],'4:00 PM', '5:00 PM',"https://cdn.pixabay.com/photo/2023/07/13/17/04/ai-generated-8125329_640.jpg"),
  new Classes(5, 'Ornithology', 'Watch these birds', 'Emily Davis', ['Isaac', 'Julia'], ['Monday', 'Wednesday', 'Friday'],'6:00 PM', '7:00 PM',"https://cdn.pixabay.com/photo/2023/07/16/04/14/bird-8130022_640.jpg"),
];




export const MEALS = [
  new Meals(1, ["Pizza", "Coke"], "Pizza Hut", 15.99, new Date("2022-01-01")),
  new Meals(2, ["Burger", "Fries", "Coke"], "McDonald's", 10.99, new Date("2022-01-02")),
  new Meals(3, ["Sushi", "Miso Soup", "Green Tea"], "Sushi Bar", 25.99, new Date("2022-01-03")),
];






