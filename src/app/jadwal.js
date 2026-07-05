import { SectionList, StyleSheet, Text, View } from "react-native";
import { schedules } from "../data";

export default function JadwalScreen() {
  return (
    <View style={styles.container}>
      <SectionList
        sections={schedules}
        keyExtractor={(item, index) => item.course + index}
        renderSectionHeader={({ section: { title } }) => (
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionHeaderText}>{title}</Text>
          </View>
        )}
        renderItem={({ item }) => (
          <View style={styles.itemContainer}>
            <Text style={styles.courseName}>{item.course}</Text>
            <Text style={styles.courseDetails}>
              {item.room} - {item.time}
            </Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fdfdfd" },
  sectionHeader: {
    backgroundColor: "#2980b9",
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  sectionHeaderText: { fontSize: 18, fontWeight: "bold", color: "#fff" },
  itemContainer: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#ecf0f1",
  },
  courseName: { fontSize: 16, fontWeight: "600", color: "#2c3e50" },
  courseDetails: { fontSize: 14, color: "#7f8c8d", marginTop: 4 },
});
