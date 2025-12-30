import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

interface ProjectCardProps {
    title: string;
    description: string;
    tech: string[];
}

export function ProjectCard({ title, description, tech }: ProjectCardProps) {
    return (
        <ThemedView style={styles.card}>
            <ThemedText type="subtitle" style={styles.title}>{title}</ThemedText>
            <ThemedText style={styles.description}>{description}</ThemedText>
            <View style={styles.techContainer}>
                {tech.map((t, index) => (
                    <View key={index} style={styles.techBadge}>
                        <Text style={styles.techText}>{t}</Text>
                    </View>
                ))}
            </View>
        </ThemedView>
    );
}

const styles = StyleSheet.create({
    card: {
        padding: 16,
        borderRadius: 12,
        marginVertical: 8,
        marginHorizontal: 16,
        // Shadow for iOS
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        // Elevation for Android
        elevation: 3,
        borderWidth: 1,
        borderColor: 'rgba(150, 150, 150, 0.2)',
    },
    title: {
        marginBottom: 8,
    },
    description: {
        marginBottom: 12,
        lineHeight: 20,
    },
    techContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: 8,
    },
    techBadge: {
        backgroundColor: '#0a7ea4',
        paddingHorizontal: 10,
        paddingVertical: 4,
        borderRadius: 16,
    },
    techText: {
        color: '#fff',
        fontSize: 12,
        fontWeight: '600',
    },
});
