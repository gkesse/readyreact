import { View, Text, StyleSheet } from 'react-native';

export default function Home() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>ReadyReact Mobile 🚀</Text>
      <Text style={styles.subtitle}>Bienvenue Gérard 👋</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  title: { fontSize: 32, fontWeight: 'bold', color: 'white' },
  subtitle: { fontSize: 18, marginTop: 10, color: 'white' }
});
