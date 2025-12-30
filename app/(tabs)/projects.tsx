import { ProjectCard } from '@/components/ProjectCard';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import React from 'react';
import { FlatList, StyleSheet } from 'react-native';

const projects = [
    {
        id: '1',
        title: 'sitio web restaurantes',
        description: 'una web conpleta para un restaurante que muestra los platos y los precios.',
        tech: ['html', 'javascript', 'css'],
    },
    {
        id: '2',
        title: 'sitio wep de una cafeteria',
        description: 'una web conpleta para una cafeteria que muestra los platos y los precios.',
        tech: ['html', 'javascript', 'css'],
    },
    {
        id: '3',
        title: 'mi portfolio',
        description: 'mi portfolio que muestra mis proyectos y habilidades.',
        tech: ['html', 'javascript', 'css'],
    },
    {
        id: '4',
        title: 'sitio web ventas',
        description: 'un sitio wep de ventas de accesorios de telefonos .',
        tech: ['html', 'javascript', 'css'],
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
