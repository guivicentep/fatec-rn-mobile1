import { Link } from 'expo-router'
import { StatusBar } from 'expo-status-bar'
import {
  Text,
  TextInput,
  TouchableOpacity,
  View,
  ActivityIndicator,
} from 'react-native'
import Logo from '../src/assets/nlw-spacetime-logo.svg'
import { ChevronLeft } from 'lucide-react-native'
import { FIREBASE_AUTH } from '../firebaseConfig'
import { useState } from 'react'
import { createUserWithEmailAndPassword } from 'firebase/auth'

export default function Register() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const auth = FIREBASE_AUTH

  const signUp = async () => {
    setLoading(true)
    try {
      const response = await createUserWithEmailAndPassword(
        auth,
        email,
        password,
      )
      console.log(response)
      alert('Verifique seu e-mail!')
    } catch (error: any) {
      console.log(error)
      alert('Não foi possível concluir seu cadastro: ' + error.message)
    } finally {
      setLoading(false)
    }
  }
  return (
    <View className="flex-1 items-center bg-white-100 py-8">
      <View className="w-full flex-row justify-between px-10 pt-10">
        <Logo width={92} height={40} />
        <Link href="/">
          <ChevronLeft color="#E02041" />
        </Link>
      </View>
      <View className="flex-1 items-center justify-center gap-6">
        <View className="flex-col items-center space-y-3">
          <Text className="mb-6 font-title text-2xl leading-tight text-gray-250">
            Faça seu cadastro
          </Text>
          <TextInput
            className="mb-3 h-14 w-72 rounded-lg border border-gray-50 bg-white-50 px-5 py-3 text-base"
            placeholder="Nome da ONG"
          />
          <TextInput
            className="mb-3 h-14 w-72 rounded-lg border border-gray-50 bg-white-50 px-5 py-3 text-base"
            placeholder="E-mail"
            onChangeText={(text) => setEmail(text)}
            value={email}
          />
          <TextInput
            className="mb-3 h-14 w-72 rounded-lg border border-gray-50 bg-white-50 px-5 py-3 text-base"
            placeholder="Usuário"
          />
          <TextInput
            className="mb-3 h-14 w-72 rounded-lg border border-gray-50 bg-white-50 px-5 py-3 text-base"
            placeholder="Senha"
            secureTextEntry={true}
            autoCapitalize="none"
            onChangeText={(text) => setPassword(text)}
            value={password}
          />
        </View>
        {loading ? (
          <ActivityIndicator size="large" color="#FFF112" />
        ) : (
          <TouchableOpacity
            activeOpacity={0.7}
            className="h-14 w-72 items-center justify-center rounded-lg bg-red-50 px-5 py-2"
            onPress={signUp}
          >
            <Text className="font-title text-sm text-white-100 ">
              Cadastrar
            </Text>
          </TouchableOpacity>
        )}
      </View>

      <StatusBar style="dark" />
    </View>
  )
}
