import { View, Text, Button, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { PRODUCTS, Product } from '@/data/products';
import { router } from 'expo-router';
import {Image} from "expo-image";
export default function ProductList() {
    const renderItem = ({ item }: { item: Product }) => {
        return (
            <TouchableOpacity style={styles.card} onPress={() => router.push(`/products/${item.id}`)}>
                <View style={styles.row}>
                    <Image style={styles.thumb} source={item.image}/>
                    <View style={styles.info}>
                        <Text style={styles.name}>{item.name}</Text>
                        <Text style={styles.category}>{item.category}</Text>
                        <Text style={styles.price}>Rp {item.price.toLocaleString('id-ID')}</Text>
                        <Button onPress={() => {alert("Clicked!")}} title="Add To Cart" accessibilityLabel={"Add " + item.name + " To Cart"} />
                    </View>
                </View>
            </TouchableOpacity>
        );
    };

    return (
        <View style={styles.container}>
            <FlatList
                data={PRODUCTS}
                keyExtractor={(item) => item.id}
                renderItem={renderItem}
                ItemSeparatorComponent={() => <View style={{ height: 12 }} />}
                contentContainerStyle={{ padding: 16 }}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1 },
    card: { backgroundColor: '#fff', borderRadius: 12, padding: 12, elevation: 2 },
    row: { flexDirection: 'row', alignItems: 'center' }, // Flexbox row
    thumb: { width: 64, height: 64, backgroundColor: '#eee', borderRadius: 12, marginRight: 12 },
    info: { flex: 1, justifyContent: 'center' }, // Flex child grows
    name: { fontSize: 16, fontWeight: '600', marginBottom: 4 },
    category: { fontSize: 14, fontWeight: '500' },
    price: { fontSize: 14, opacity: 0.8 },
});