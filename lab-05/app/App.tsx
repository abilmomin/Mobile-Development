
// app/app.tsx
import React, { useEffect, useState } from 'react'
import { View, Text, TextInput, Button, FlatList, StyleSheet, Alert } from 'react-native'
import { getUsers, addUser, deleteUser } from '../lib/supabase_crud'

export default function App() {
  const [users, setUsers] = useState<any[]>([])
  const [name, setName] = useState('')
  const [age, setAge] = useState('')
  const [email, setEmail] = useState('')

  const loadUsers = async () => {
    const data = await getUsers()
    if (data) setUsers(data)
  }

  useEffect(() => {
    loadUsers()
  }, [])

  const handleAdd = async () => {
    if (!name || !age || !email) {
      Alert.alert('Error', 'Please fill all fields')
      return
    }
    await addUser({ name, age: parseInt(age), email })
    setName('')
    setAge('')
    setEmail('')
    loadUsers()
  }

  const handleDelete = async (id: number) => {
    await deleteUser(id)
    loadUsers()
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Supabase Users</Text>

      <FlatList
        data={users}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text>{item.name} ({item.age})</Text>
            <Text>{item.email}</Text>
            <Button title="Delete" onPress={() => handleDelete(item.id)} />
          </View>
        )}
      />

      <TextInput style={styles.input} placeholder="Name" value={name} onChangeText={setName} />
      <TextInput style={styles.input} placeholder="Age" value={age} onChangeText={setAge} keyboardType="numeric" />
      <TextInput style={styles.input} placeholder="Email" value={email} onChangeText={setEmail} keyboardType="email-address" />
      <Button title="Add User" onPress={handleAdd} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, paddingTop: 60 },
  title: { fontSize: 22, fontWeight: 'bold', marginBottom: 20 },
  input: { borderWidth: 1, padding: 10, marginBottom: 10, borderRadius: 5 },
  card: { padding: 10, borderWidth: 1, borderRadius: 5, marginBottom: 10 }
})