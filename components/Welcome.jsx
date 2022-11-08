import React from "react";
import { Text, StyleSheet } from "react-native"

export default function Welcome({ firstName }) {
    return (
        <Text style={style.largeText}> {firstName}! </Text>
    )
}

const style = StyleSheet.create({
    largeText: {
        fontSize: 55,
        fontWeight: '900',
        color: '#ffff99'

    }
})