import { View, Text, StyleSheet } from 'react-native';
import DayScrollComponent from '../../components/ScrollDates';
//import {Calendar, CalendarList, Agenda} from 'react-native-calendars';
import CalendarStrip from 'react-native-calendar-strip';

function ClassDescriptions({ route, navigation }) {
  const { classId, className, classDescription, classInstructor, classStudents, classDaysAvailable, classStartTime, classEndTime } = route.params;
    return (
      <View style={styles.container}>
        <View style={styles.nameContainer}>
          <View style={styles.nameInstructorContainer}>
            <View style={{ marginBottom: 15 }}>
              <Text style={styles.nameText}>{className}</Text>
            </View>
            <View style={{ marginBottom: 15 }}>   
              <Text style={styles.instructorText}>Instructor: {classInstructor}</Text>
            </View>
          </View>
          <View style={styles.descriptionContainer}>
            <Text style={{ fontWeight: 'bold' }}>Description: </Text>
            <Text>{classDescription}</Text>
          </View>
          <View style={styles.descriptionContainer}>
            <Text style={{ fontWeight: 'bold' }}>DaysAvailable: </Text>
            <Text> {classDaysAvailable}</Text>
          </View>
          <View style={{ marginTop: 15}}>
        </View>
          <CalendarStrip
                      calendarAnimation={{type: 'sequence', duration: 30}}
                      scrollable= {true}
                      daySelectionAnimation={{type: 'border', duration: 200, borderWidth: 1, borderHighlightColor: 'white'}}
                      style={{height: 100, paddingTop: 20, paddingBottom: 10}}
                      calendarHeaderStyle={{color: 'white'}}
                      calendarColor={'#7743CE'}
                      dateNumberStyle={{color: 'white'}}
                      dateNameStyle={{color: 'white'}}
                      highlightDateNumberStyle={{color: 'yellow'}}
                      highlightDateNameStyle={{color: 'yellow'}}
                      disabledDateNameStyle={{color: 'grey'}}
                      disabledDateNumberStyle={{color: 'grey'}}
                      // datesWhitelist={datesWhitelist}
                      // datesBlacklist={datesBlacklist}
                      // iconLeft={require('./img/left-arrow.png')}
                      // iconRight={require('./img/right-arrow.png')}
                      iconContainer={{flex: 0.1}}
                  />
        </View>
      </View>
    );
}

export default ClassDescriptions;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  nameContainer: {
    flex: 1,
    paddingTop: 20,
    width: '90%',
  },
  nameText: {
    fontWeight: 'bold',
    fontSize: 22,
    marqinBottom: 10,
  },
  instructorText: {
    fontSize: 16,
  },
  nameInstructorContainer: {
    borderBottomWidth : 1,
    borderBottomColor: '#ccc',
    paddingBottom: 10,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  descriptionContainer: {
    paddingTop: 10,
    flexDirection: 'row',
  },
});


