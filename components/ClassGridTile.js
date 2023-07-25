import { Pressable, View, Text, StyleSheet, Platform, Image} from 'react-native';

function ClassGridTile({ title, onPress, imageUrl }) {
  //console.log(onPress)
  //console.log(typeof function () {})
  return (
    <View style={styles.gridItem}>
      <Pressable
        android_ripple={{ color: '#ccc' }}
        style={({ pressed }) => [
          styles.button,
          pressed ? styles.buttonPressed : null,
        ]}
        onPress={onPress}
      >
        <View style={styles.innerContainer}>
          <View style={styles.titleContainer}>
            <Text style={styles.title}>{title}</Text>
          </View>
            <Image source={{ uri: imageUrl }}  style={styles.image} />
        </View>
      </Pressable>
    </View>
  );
}

export default ClassGridTile;

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 15,
    height: 200,
  },
  image: {
    width: '100%',
    height: 150,
    margin: 10,
  },
  imageContainer: {
  },
  button: {
    flex: 1,
  },
  buttonPressed: {
    opacity: 0.5,
  },
  innerContainer: {
    flex: 1,
    padding: 16,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 18,
    marginTop: 15,
  },
  titleContainer: {
    borderBottomWidth: 1,
    borderBottomColor: 'black',
}});
