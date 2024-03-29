import { StatusBar } from 'expo-status-bar'
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  ActivityIndicator,
} from 'react-native'
import { useRouter, Link } from 'expo-router'

import {
  useFonts,
  Roboto_400Regular,
  Roboto_700Bold,
} from '@expo-google-fonts/roboto'

import { BaiJamjuree_700Bold } from '@expo-google-fonts/bai-jamjuree'
import Logo from '../src/assets/nlw-spacetime-logo.svg'
import { useState } from 'react'
import { FIREBASE_AUTH } from '../firebaseConfig'
import { signInWithEmailAndPassword } from 'firebase/auth'

export default function App() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const router = useRouter()
  const auth = FIREBASE_AUTH

  const signIn = async () => {
    setLoading(true)
    try {
      const response = await signInWithEmailAndPassword(auth, email, password)
      console.log(response)
      router.push('/home')
    } catch (error) {
      console.log(error)
      alert('Login ou senha incorretos!')
      router.push('/')
    } finally {
      setLoading(false)
    }
  }

  const [hasLoadedFonts] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold,
    BaiJamjuree_700Bold,
  })

  if (!hasLoadedFonts) {
    return null
  }
  return (
    <View className="flex-1 items-center bg-white-100 py-10">
      <View className="flex-1 items-center justify-center gap-6">
        <Logo />
        <View className="flex-col items-center space-y-3 ">
          <Text className="mb-6 mt-20 font-title text-2xl leading-tight text-gray-250">
            Faça seu logon
          </Text>
          <TextInput
            className="mb-3 h-14 w-72 rounded-lg border border-gray-50 bg-white-50 px-5 py-3 text-base"
            placeholder="Seu E-mail"
            autoCapitalize="none"
            onChangeText={(text) => setEmail(text)}
            value={email}
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
            onPress={signIn}
          >
            <Text className="font-title text-sm text-white-100 ">Entrar</Text>
          </TouchableOpacity>
        )}
      </View>

      <View className="flex-row">
        <Link
          href="/register"
          className="text-center font-body text-sm leading-relaxed text-gray-200"
        >
          Não tenho cadastro
        </Link>
      </View>
      <StatusBar style="dark" />
    </View>
  )
}
