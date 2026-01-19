import { router } from "expo-router";
import { useState } from "react";
import { Button, Text, TextInput, View } from "react-native";
import axiosClient from "../../api/axiosClient";
export default function RegisterScreen() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [msg, setMsg] = useState("");
    const onRegister = async () => {
        try {
            const { data } = await axiosClient.post("/api/users/register", { name, email, password });
            setMsg(data.message || "Registration successful. Please log in.");
            router.replace("/auth/login"); // ➜ redirect to login page
        } catch (err:any) {
            setMsg(err?.response?.data?.error || "Registration failed");
        }
    };
    return (
        <View style={{ flex:1, padding:16, justifyContent:"center" }}>
            <Text style={{ fontSize:22, marginBottom:12 }}>Registration</Text>
            <TextInput placeholder="Name" value={name} onChangeText={setName}
                       style={{ borderWidth:1, marginBottom:10, padding:8 }} />
            <TextInput placeholder="Email" value={email} onChangeText={setEmail}
                       style={{ borderWidth:1, marginBottom:10, padding:8 }} keyboardType="email-address" />
            <TextInput placeholder="Password" value={password} onChangeText={setPassword}
                       style={{ borderWidth:1, marginBottom:10, padding:8 }} secureTextEntry />
            <Button title="Register" onPress={onRegister} />
            {msg ? <Text style={{ marginTop:10 }}>{msg}</Text> : null}
        </View>
    );
}