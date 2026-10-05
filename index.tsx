import { ScrollView, StyleSheet, Text, View } from "react-native";

type Kopi = {
  id: number;
  nama: string;
  jenis: string;
  berat: number;
  harga: number;
  stok: number;
};

export default function Index() {
  // Array of Objects
  const dataKopi: Kopi[] = [
    {
      id: 1,
      nama: "Arabica Gayo",
      jenis: "Arabica",
      berat: 250,
      harga: 65000,
      stok: 12,
    },
    {
      id: 2,
      nama: "Robusta Temanggung",
      jenis: "Robusta",
      berat: 250,
      harga: 45000,
      stok: 4,
    },
    {
      id: 3,
      nama: "Kopi Toraja",
      jenis: "Arabica",
      berat: 200,
      harga: 70000,
      stok: 0,
    },
  ];

  // Custom Function
  const getStatusStok = (stok: number): string => {
    if (stok === 0) {
      return "HABIS";
    } else if (stok <= 5) {
      return "MENIPIS";
    } else {
      return "TERSEDIA";
    }
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Stok Kopi</Text>
      <Text style={styles.subtitle}>
        Daftar produk kopi kemasan
      </Text>

      {/* Loop menggunakan map */}
      {dataKopi.map((kopi) => (
        <View key={kopi.id} style={styles.card}>
          <Text style={styles.nama}>{kopi.nama}</Text>

          <Text style={styles.detail}>
            Jenis: {kopi.jenis}
          </Text>

          <Text style={styles.detail}>
            Berat: {kopi.berat} gram
          </Text>

          <Text style={styles.detail}>
            Harga: Rp{kopi.harga.toLocaleString("id-ID")}
          </Text>

          <View style={styles.stockRow}>
            <Text style={styles.stok}>
              Stok: {kopi.stok} kemasan
            </Text>

            <Text
              style={{
                fontWeight: "bold",
                color:
                  kopi.stok === 0
                    ? "red"
                    : kopi.stok <= 5
                    ? "orange"
                    : "green",
              }}
            >
              {getStatusStok(kopi.stok)}
            </Text>
          </View>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f4f1ed",
    padding: 20,
  },

  title: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#4E342E",
    marginTop: 35,
  },

  subtitle: {
    fontSize: 14,
    color: "#777",
    marginBottom: 20,
  },

  card: {
    backgroundColor: "white",
    padding: 18,
    borderRadius: 15,
    marginBottom: 15,
    elevation: 3,
  },

  nama: {
    fontSize: 19,
    fontWeight: "bold",
    color: "#4E342E",
    marginBottom: 8,
  },

  detail: {
    fontSize: 14,
    marginBottom: 4,
  },

  stockRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 12,
  },

  stok: {
    fontWeight: "bold",
  },
});