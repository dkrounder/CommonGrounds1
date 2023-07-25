import React, { useState, useRef } from 'react';
import { View, Text, ScrollView } from 'react-native';

const DayScrollComponent = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const scrollViewRef = useRef(null);

  const handleScroll = (event) => {
    const xOffset = event.nativeEvent.contentOffset.x;
    const dayInMilliseconds = 24 * 60 * 60 * 1000;
    const selectedTimestamp = selectedDate.getTime();
    const scrolledDays = Math.round(xOffset / 360); // Assuming each day occupies 360 units of horizontal space

    const newDate = new Date(selectedTimestamp + scrolledDays * dayInMilliseconds);
    setSelectedDate(newDate);
  };

  const renderTimes = (date) => {
    // Function to fetch and render a list of times associated with the selected date
    // Replace this with your logic to fetch and render the times data
    const times = ['9:00 AM', '2:00 PM', '6:00 PM'];

    return times.map((time, index) => (
      <Text key={index} style={{ marginVertical: 5 }}>
        {time}
      </Text>
    ));
  };

  return (
    <View>
      <Text style={{ alignSelf: 'center', fontSize: 20, fontWeight: 'bold' }}>
        {selectedDate.toLocaleString('default', {
          month: 'long',
        })}
      </Text>
      <ScrollView
        ref={scrollViewRef}
        horizontal
        pagingEnabled
        onScroll={handleScroll}
        scrollEventThrottle={16}
        showsHorizontalScrollIndicator={false}
      >
        {Array.from({ length: 30 }, (_, index) => {
          const dayInMilliseconds = 24 * 60 * 60 * 1000;
          const newDate = new Date(selectedDate.getTime() + index * dayInMilliseconds);

          return (
            <View key={index} style={{ width: 180, paddingHorizontal: 20 }}>
              <Text style={{ fontSize: 18, fontWeight: 'bold' }}>
                {newDate.toLocaleString('default', { month: 'long', day: 'numeric' })}
              </Text>
              {renderTimes(newDate)}
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
};

export default DayScrollComponent;
