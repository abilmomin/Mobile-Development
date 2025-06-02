import React from 'react';
import { StyleSheet, Text, View, Alert, Pressable } from 'react-native';

// Define the type for group members
type GroupMember = {
  name: string;
  github_repo: string;
  group_no: string;
};

export default function App() {
  // Create a list of group members
  const groupMembers: GroupMember[] = [
    { name: "Johan Nunez Quintero", github_repo: "JHNSTVN", group_no: "6" },
    { name: "Bedgel Fadhil Ndam Woukouo", github_repo: "fadhil-bit", group_no: "6" },
    { name: "Abil Momin", github_repo: "abilmomin", group_no: "6" },
  ];

  // Event handler for the pressable text
  const handlePress = () => {
    Alert.alert("Lab 1 done");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Group Members</Text>
      
      {/* Map over the group members list */}
      <View style={styles.memberList}>
        {groupMembers.map((member, index) => (
          <Text key={index} style={styles.memberName}>
            {member.name}
          </Text>
        ))}
      </View>
      
      {/* Pressable text to show alert */}
      <Pressable onPress={handlePress}>
        <Text style={styles.pressableText}>Complete Lab</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  memberList: {
    width: '100%',
    marginBottom: 30,
  },
  memberName: {
    fontSize: 18,
    padding: 10,
    backgroundColor: '#f0f0f0',
    marginBottom: 10,
    borderRadius: 5,
    width: '100%',
  },
  pressableText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
    backgroundColor: '#007bff',
    padding: 15,
    borderRadius: 5,
  },
});