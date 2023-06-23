import { Link, useRouter } from 'expo-router'
import { useState } from 'react'
import { FIREBASE_DB } from '../firebaseConfig'
import { addDoc, collection } from 'firebase/firestore'
import uuid from 'react-native-uuid'

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

export default function CreateCase() {
  const [description, setDescription] = useState('')
  const [ongname, setOngname] = useState('')
  const [amount, setAmount] = useState('')
  const router = useRouter()
  const [loading, setLoading] = useState(false)

  const addCase = async () => {
    setLoading(true)
    try {
      await addDoc(collection(FIREBASE_DB, 'cases'), {
        id: uuid.v4(),
        description,
        ongname,
        value: amount,
      })
      router.push('/home')
    } catch (error) {
      console.log(error)
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
            Cadastre seu caso
          </Text>
          <TextInput
            className="mb-3 h-14 w-72 rounded-lg border border-gray-50 bg-white-50 px-5 py-3 text-base"
            placeholder="CASO: "
            onChangeText={(text) => setDescription(text)}
            value={description}
          />
          <TextInput
            className="mb-3 h-14 w-72 rounded-lg border border-gray-50 bg-white-50 px-5 py-3 text-base"
            placeholder="Nome da ONG"
            autoCapitalize="none"
            onChangeText={(text) => setOngname(text)}
            value={ongname}
          />
          <TextInput
            className="mb-3 h-14 w-72 rounded-lg border border-gray-50 bg-white-50 px-5 py-3 text-base"
            placeholder="Valor"
            keyboardType="numeric"
            autoCapitalize="none"
            onChangeText={(text) => setAmount(text)}
            value={amount}
          />
        </View>
        {loading ? (
          <ActivityIndicator size="large" color="#FFF112" />
        ) : (
          <TouchableOpacity
            activeOpacity={0.7}
            className="h-14 w-72 items-center justify-center rounded-lg bg-red-50 px-5 py-2"
            onPress={addCase}
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
