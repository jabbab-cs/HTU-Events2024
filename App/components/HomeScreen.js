import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  Dimensions,
  StyleSheet,
  ImageBackground,
} from "react-native";
import axios from "axios";
import Carousel from "react-native-reanimated-carousel";
import EventCard from "./EventCard";

const HomeScreen = ({ navigation }) => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const width = Dimensions.get("window").width;

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await axios.get("http://192.168.1.6:3000/api/events");
        setEvents(response.data);
      } catch (error) {
        console.error("Error fetching events:", error);
        setError("Failed to load events. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchEvents();
  }, [events]);

  const renderEventCard = ({ item }) => {
    return (
      <EventCard
        event={item}
        onPress={() =>
          navigation.navigate("Details", { event: item, category: "Event" })
        }
      />
    );
  };

  if (loading) {
    return (
      <View style={styles.container}>
        <Text>Loading events...</Text>
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.container}>
        <Text style={styles.errorText}>{error}</Text>
      </View>
    );
  }

  return (
    <ImageBackground
      source={require("../images/bg.png")}
      style={styles.background}
    >
      <View style={styles.container}>
        {events.length === 0 ? (
          <View style={styles.noEventsContainer}>
            <Text style={styles.noEventsText}>No events found</Text>
          </View>
        ) : (
          <Carousel
            data={events}
            renderItem={renderEventCard}
            width={500}
            height={900}
            mode="parallax"
          />
        )}
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 100,
  },
  noEventsContainer: {
    backgroundColor: "#f3f4f6",
    borderColor: "#e5e7eb",
    borderWidth: 1,
    borderRadius: 8,
    padding: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  noEventsText: {
    fontSize: 16,
    color: "#6b7280",
  },
  errorText: {
    color: "red",
    fontSize: 16,
    textAlign: "center",
  },
  background: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
});

export default HomeScreen;
