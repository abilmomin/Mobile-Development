import React, { useState } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    Image,
    ActivityIndicator,
    ScrollView,
    Button,
    SafeAreaView,
} from 'react-native';
import { useRouter } from 'expo-router';
import vacationsDestinations, { VacationDestination } from '../lib/vacationsDestinations';

type WikiSummary = {
    extract: string;
    thumbnail?: { source: string };
};

const Lab4 = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);
    const [wikiData, setWikiData] = useState<Record<number, WikiSummary | null>>({});
    const [loading, setLoading] = useState<Record<number, boolean>>({});
    const router = useRouter();

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
        <SafeAreaView style={styles.safeArea}>
            <View style={styles.container}>
                <ScrollView contentContainerStyle={styles.scrollContent}>
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

                {/* Button fixed at the bottom */}
                <View style={styles.footer}>
                    <Button title="Go Back Home" onPress={() => router.push('/')} />
                </View>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: '#fff',
    },
    container: {
        flex: 1,
    },
    scrollContent: {
        padding: 16,
        paddingBottom: 100, // Space for button
    },
    itemContainer: {
        marginBottom: 16,
        borderBottomWidth: 1,
        borderColor: '#ccc',
    },
    button: {
        padding: 12,
        backgroundColor: '#e0e0e0',
        borderRadius: 8,
    },
    city: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    details: {
        padding: 12,
        backgroundColor: '#f9f9f9',
    },
    image: {
        width: '100%',
        height: 150,
        borderRadius: 8,
        marginVertical: 8,
    },
    description: {
        fontSize: 14,
        color: '#333',
    },
    footer: {
        padding: 16,
        borderTopWidth: 1,
        borderColor: '#ccc',
        backgroundColor: '#fafafa',
    },
});

export default Lab4;