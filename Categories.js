import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Button, SafeAreaView, StyleSheet, Switch, Text, View } from 'react-native';

import styles from './Appstyles';

export default function Categories({navigation}) {
    return (
        <SafeAreaView style={styles.container}>
        <Text style={[styles.largeHeading, styles.italicFont, styles.headingColor]}>Categories</Text>
        <Button title='Go to home' onPress={() => navigation.navigate('Home')} />
        <Button title='Go to details' onPress={() => navigation.navigate('Details')} />
        </SafeAreaView>
);
} 