import { View, StyleSheet } from 'react-native';
import React, { useState, useEffect } from 'react';
import { TextInput } from 'react-native-paper';
import { Text } from 'react-native-paper';
import { Button } from 'react-native-paper';
import lankaNIC from 'lanka-nic';

export default function Lanka() {

    const [nic, setNic] = useState('');
    const [gender, setGender] = useState('');
    const [dateofbirth, setDateofbirth] = useState('');

    const onSignPressed = () => {
        let { dateOfBirth, gender } = lankaNIC.getInfoFromNIC(nic);
        setDateofbirth(dateOfBirth);
        setGender(gender);
    }

    return (
        <View>
            <Text variant="displayMedium" style={styles.head1}>Lanka NIC</Text>

            <TextInput
                label="NIC"
                mode="flat"
                style={styles.input}
                value={nic}
                onChangeText={x => setNic(x)}
            />

            <TextInput
                label="Gender"
                mode="flat"
                style={styles.input}
                editable={false}
                value={String(gender)}
            />

            <TextInput
                label="Date of Birth"
                mode="flat"
                style={styles.input}
                editable={false}
                value={String(dateofbirth)}
            />

            <Button mode="contained-tonal" onPress={() => onSignPressed()} style={styles.btn}>
                Submit
            </Button>

        </View>
    )
}

const styles = StyleSheet.create({
    head1: {
        color: 'white',
        alignSelf: 'center',
        marginTop: '15%'
    },
    input: {
        width: '60%',
        alignSelf: 'center',
        marginTop: '5%'
    },

    btn: {
        width: '50%',
        alignSelf: 'center',
        marginTop: '5%'
    }
})