import { SkillBadge } from '@/components/SkillBadge';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';

const skills = [
    'JavaScript',
    'python', 'CSS', 'HTML', 'Git', 
    'SQL'
];

export default function SkillsScreen() {
    return (
        <ThemedView style={styles.container}>
            <ScrollView contentContainerStyle={styles.scrollContent}>
                <ThemedText type="title" style={styles.title}>Mis Habilidades</ThemedText>
                <ThemedText style={styles.subtitle}>Tecnologías que domino</ThemedText>

                <View style={styles.skillsContainer}>
                    {skills.map((skill, index) => (
                        <SkillBadge key={index} skill={skill} />
                    ))}
                </View>
            </ScrollView>
        </ThemedView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    scrollContent: {
        padding: 20,
        paddingTop: 60,
    },
    title: {
        fontSize: 32,
        fontWeight: 'bold',
        marginBottom: 8,
        textAlign: 'center',
    },
    subtitle: {
        fontSize: 18,
        textAlign: 'center',
        marginBottom: 24,
        opacity: 0.7,
    },
    skillsContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
    },
});
