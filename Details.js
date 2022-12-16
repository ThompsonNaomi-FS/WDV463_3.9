import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Button, SafeAreaView, StyleSheet, Switch, Text, View } from 'react-native';

import styles from './Appstyles';

export default function Details({navigation}) {
    return (
        <SafeAreaView style={styles.container}>
        <Text style={[styles.largeHeading, styles.italicFont]}>Details</Text>
        <Button title='Go to home' onPress={() => navigation.navigate('Home')} />
        <Button title='Go to categories' onPress={() => navigation.navigate('Categories')} />
        </SafeAreaView>
);
} 