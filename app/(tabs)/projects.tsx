import { ProjectCard } from '@/components/ProjectCard';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import React from 'react';
import { FlatList, StyleSheet } from 'react-native';

const projects = [
    {
        id: '1',
        title: 'E-commerce App',
        description: 'Una aplicación móvil completa de comercio electrónico con carrito de compras, pagos y perfil de usuario.',
        tech: ['React Native', 'Redux', 'Stripe'],
    },
    {
        id: '2',
        title: 'Task Manager',
        description: 'Aplicación de gestión de tareas y productividad con recordatorios y categorías personalizables.',
        tech: ['React', 'Firebase', 'TypeScript'],
    },
    {
        id: '3',
        title: 'Weather Tracker',
        description: 'App del clima que muestra pronósticos en tiempo real utilizando geolocalización.',
        tech: ['JavaScript', 'API Integration', 'UI Kit'],
    },
    {
        id: '4',
        title: 'Fitness Tracker',
        description: 'Seguimiento de entrenamientos y dietas con gráficos de progreso.',
        tech: ['React Native', 'Victory Charts', 'HealthKit'],
    },
];

export default function ProjectsScreen() {
    return (
        <ThemedView style={styles.container}>
            <FlatList
                data={projects}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <ProjectCard
                        title={item.title}
                        description={item.description}
                        tech={item.tech}
                    />
                )}
                ListHeaderComponent={
                    <ThemedView style={styles.header}>
                        <ThemedText type="title" style={styles.title}>Mis Proyectos</ThemedText>
                        <ThemedText style={styles.subtitle}>
                            Aquí puedes ver algunos de los proyectos en los que he trabajado.
                        </ThemedText>
                    </ThemedView>
                }
                contentContainerStyle={styles.listContent}
            />
        </ThemedView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    listContent: {
        paddingBottom: 20,
        paddingTop: 60,
    },
    header: {
        paddingHorizontal: 20,
        marginBottom: 10,
        alignItems: 'center',
    },
    title: {
        marginBottom: 8,
    },
    subtitle: {
        textAlign: 'center',
        marginBottom: 20,
    },
});
