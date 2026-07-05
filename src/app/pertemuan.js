import { FlatList, StyleSheet, Text, View } from "react-native";
import { meetings } from "../data";

export default function PertemuanScreen() {
  const renderSeparator = () => <View style={styles.separator} />;
  const renderHeader = () => (
    <View style={styles.header}>
      <Text style={styles.headerText}>Total 20 pertemuan Semester Ganjil</Text>
    </View>
  );
  const renderEmpty = () => (
    <View style={styles.empty}>
      <Text style={styles.emptyText}>Tidak ada data pertemuan saat ini.</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={meetings}
        keyExtractor={(item) => item.id}
        ItemSeparatorComponent={renderSeparator}
        ListHeaderComponent={renderHeader}
        ListEmptyComponent={renderEmpty}
        renderItem={({ item }) => (
          <View style={styles.itemContainer}>
            <Text style={styles.title}>
              {item.course} - Pertemuan {item.meetNum}
            </Text>
            <Text style={styles.subtitle}>
              {item.topic} - {item.date}
            </Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff" },
  header: {
    padding: 16,
    backgroundColor: "#e0f7fa",
    borderBottomWidth: 1,
    borderColor: "#b2ebf2",
  },
  headerText: {
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
    color: "#006064",
  },
  separator: { height: 1, backgroundColor: "#e0e0e0", marginHorizontal: 16 },
  empty: { padding: 20, alignItems: "center" },
  emptyText: { fontStyle: "italic", color: "#7f8c8d" },
  itemContainer: { padding: 16 },
  title: { fontSize: 16, fontWeight: "600", color: "#333" },
  subtitle: { fontSize: 14, color: "#666", marginTop: 4 },
});
