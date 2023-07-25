import { View, Text, FlatList, LogBox } from 'react-native';
import { CLASSES } from '../../data/dummy-data';
import ClassGridTile from '../../components/ClassGridTile';



function Classes({ navigation }) {
  function RenderClassItem( itemData ) {
    function pressHandler() {
      console.log("teacher: " + itemData.item.teacher)
      navigation.navigate('ClassDescriptions', {
        classId: itemData.item.id,
        className: itemData.item.name,
        classDescription: itemData.item.description,
        classInstructor: itemData.item.teacher,
        classStudents: itemData.item.students,
        classDaysAvailable: itemData.item.days_available,
        classStartTime: itemData.item.starttime,
        classEndTime: itemData.item.endtime,
      });
    }
    const classItemProps = {
      title: itemData.item.name,
      onPress: {pressHandler},
      imageUrl: itemData.item.imageUrl,
    };
    return (
      <ClassGridTile 
        title={itemData.item.name}
        onPress={pressHandler}
        imageUrl={itemData.item.imageUrl}
    />
    );
  }
    return (
      <View>
        <FlatList data={CLASSES} keyExtractor={(item) => item.id} renderItem={RenderClassItem} />
      </View>
    )
}

export default Classes;