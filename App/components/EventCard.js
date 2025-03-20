import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
const EventCard = ({ event, onPress }) => {
  return (
    <View style={styles.card}>
      <Image
        source={{ uri: `http://urIP:3000${event.imageSrc}` }}
        style={styles.image}
      />
      <Text style={styles.cardTitle}>{event.title}</Text>{" "}
      <Text>Club Name: {event.clubName}</Text>
      <Text>Date & Day: {event.date}</Text>
      <Text>Time: {event.time}</Text>
      <Text>Location: {event.location}</Text>
      <TouchableOpacity style={styles.button} onPress={onPress}>
        <Text style={styles.buttonText}>View Details</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#ffffff",
    padding: 15,
    borderRadius: 15,
    marginBottom: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
  },
  cardTitle: {
    fontSize: 25,
    color: "#e8343f",
    fontWeight: "bold",
  },
  image: {
    width: "100%",
    height: 600,
    borderRadius: 8,
    marginBottom: 10,
  },
  button: {
    marginTop: 10,
    backgroundColor: "#e8343f",
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
    height: 40,
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
  },
});

export default EventCard;
