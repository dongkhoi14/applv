import React from 'react';
import {View,Text} from 'react-native';

export default function SubjectsList({navigation, route}){
    const { mssv, ngay_tao, ngay_cap_nhat, perm,id_lop } = route.params;

    return(
        <View>
            <Text>{JSON.stringify(mssv)}</Text>
        </View>
    );
}