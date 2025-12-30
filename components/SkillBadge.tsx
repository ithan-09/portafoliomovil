import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

interface SkillBadgeProps {
    skill: string;
}

export function SkillBadge({ skill }: SkillBadgeProps) {
    return (
        <View style={styles.badge}>
            <Text style={styles.text}>{skill}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    badge: {
        backgroundColor: '#e0e0e0',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 25,
        margin: 6,
        borderWidth: 1,
        borderColor: '#ccc',
    },
    text: {
        fontSize: 16,
        color: '#333',
        fontWeight: '500',
    },
});
