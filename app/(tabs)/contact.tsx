import { ContactButton } from '@/components/ContactButton';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { StyleSheet, View } from 'react-native';

export default function ContactScreen() {
    return (
        <ThemedView style={styles.container}>
            <View style={styles.content}>
                <Ionicons name="mail-open-outline" size={80} color="#0a7ea4" style={styles.headerIcon} />
                <ThemedText type="title" style={styles.title}>Contáctame</ThemedText>
                <ThemedText style={styles.subtitle}>
                    ¿Tienes alguna idea o proyecto en mente? ¡Hablemos!
                </ThemedText>

                <View style={styles.buttonsContainer}>
                    <ContactButton
                        title="WhatsApp"
                        url="https://wa.me/907 580 844"
                        iconName="logo-whatsapp"
                        color="#25D366"
                    />
                    <ContactButton
                        title="LinkedIn"
                        url="https://www.linkedin.com/feed/"
                        iconName="logo-linkedin"
                        color="#0077b5"
                    />
                    <ContactButton
                        title="Enviar Correo"
                        url="taquirenexon@gmail.com"
                        iconName="mail"
                        color="#EA4335"
                    />
                    <ContactButton
                        title="GitHub"
                        url="https://github.com/ithan-09"
                        iconName="logo-github"
                        color="#333"
                    />
                </View>
            </View>
        </ThemedView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    content: {
        alignItems: 'center',
        width: '100%',
    },
    headerIcon: {
        marginBottom: 20,
    },
    title: {
        marginBottom: 10,
    },
    subtitle: {
        textAlign: 'center',
        marginBottom: 30,
        fontSize: 16,
        opacity: 0.8,
    },
    buttonsContainer: {
        width: '100%',
        alignItems: 'center',
    },
});
