import { ScrollView, StyleSheet, Text, View } from "react-native";
import { courses } from "../data";

export default function RingkasanScreen() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.headerTitle}>Mata Kuliah Semester Ini</Text>
      {courses.map((course) => (
        <View key={course.id} style={styles.card}>
          <Text style={styles.courseName}>{course.name}</Text>
          <Text style={styles.courseDetail}>
            {course.code} - {course.sks} SKS - {course.lecturer}
          </Text>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: "#f5f5f5" },
  headerTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 16,
    color: "#333",
  },
  card: {
    backgroundColor: "#fff",
    padding: 16,
    marginBottom: 12,
    borderRadius: 8,
    elevation: 2,
  },
  courseName: { fontSize: 16, fontWeight: "bold", color: "#2c3e50" },
  courseDetail: { fontSize: 14, color: "#7f8c8d", marginTop: 4 },
});
