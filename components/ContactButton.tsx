import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { Alert, Linking, StyleSheet, Text, TouchableOpacity } from 'react-native';

interface ContactButtonProps {
    title: string;
    url: string;
    iconName: keyof typeof Ionicons.glyphMap;
    color?: string;
}

export function ContactButton({ title, url, iconName, color = '#0a7ea4' }: ContactButtonProps) {
    const handlePress = async () => {
        // Check if the link is supported (for real devices mostly)
        // For demo purposes, we'll try to open it
        try {
            const supported = await Linking.canOpenURL(url);
            if (supported) {
                await Linking.openURL(url);
            } else {
                Alert.alert(`Opening ${title}...`); // Fallback for simulation
            }
        } catch (error) {
            Alert.alert(`Opening ${title}...`);
        }
    };

    return (
        <TouchableOpacity style={[styles.button, { backgroundColor: color }]} onPress={handlePress}>
            <Ionicons name={iconName} size={24} color="#fff" style={styles.icon} />
            <Text style={styles.text}>{title}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 14,
        paddingHorizontal: 24,
        borderRadius: 12,
        marginVertical: 8,
        width: '100%',
        maxWidth: 350,
    },
    icon: {
        marginRight: 10,
    },
    text: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
});
