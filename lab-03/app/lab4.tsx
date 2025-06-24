import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, ActivityIndicator, ScrollView } from 'react-native';
import vacationsDestinations, { VacationDestination } from '../lib/vacationsDestinations';

type WikiSummary = {
    extract: string;
    thumbnail?: { source: string };
};

const Lab4 = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);
    const [wikiData, setWikiData] = useState<Record<number, WikiSummary | null>>({});
    const [loading, setLoading] = useState<Record<number, boolean>>({});

    const handlePress = async (index: number, city: string) => {
        if (openIndex === index) {
            setOpenIndex(null);
            return;
        }
        setOpenIndex(index);

        if (!wikiData[index]) {
            setLoading((prev) => ({ ...prev, [index]: true }));
            try {
                const res = await fetch(`https://en.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(city)}`);
                const data = await res.json();
                setWikiData((prev) => ({
                    ...prev,
                    [index]: {
                        extract: data.extract,
                        thumbnail: data.thumbnail,
                    },
                }));
            } catch (e) {
                setWikiData((prev) => ({
                    ...prev,
                    [index]: { extract: 'No description found.' },
                }));
            } finally {
                setLoading((prev) => ({ ...prev, [index]: false }));
            }
        }
    };

    return (
        <ScrollView contentContainerStyle={styles.container}>
            {vacationsDestinations.map((dest, idx) => (
                <View key={dest.location} style={styles.itemContainer}>
                    <TouchableOpacity onPress={() => handlePress(idx, dest.location)} style={styles.button}>
                        <Text style={styles.city}>{dest.location}</Text>
                    </TouchableOpacity>
                    {openIndex === idx && (
                        <View style={styles.details}>
                            <Text>Price: ${dest.price}</Text>
                            <Text>Avg Temp: {dest.average_yearly_temperature}°C</Text>
                            {loading[idx] ? (
                                <ActivityIndicator />
                            ) : wikiData[idx] ? (
                                <>
                                    {wikiData[idx]?.thumbnail && (
                                        <Image
                                            source={{ uri: wikiData[idx]?.thumbnail.source }}
                                            style={styles.image}
                                            resizeMode="cover"
                                        />
                                    )}
                                    <Text style={styles.description}>{wikiData[idx]?.extract}</Text>
                                </>
                            ) : null}
                        </View>
                    )}
                </View>
            ))}
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: { padding: 16 },
    itemContainer: { marginBottom: 16, borderBottomWidth: 1, borderColor: '#ccc' },
    button: { padding: 12, backgroundColor: '#e0e0e0', borderRadius: 8 },
    city: { fontSize: 18, fontWeight: 'bold' },
    details: { padding: 12, backgroundColor: '#f9f9f9' },
    image: { width: '100%', height: 150, borderRadius: 8, marginVertical: 8 },
    description: { fontSize: 14, color: '#333' },
});

export default Lab4;