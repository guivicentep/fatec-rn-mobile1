import {
  ScrollView,
  Text,
  TouchableOpacity,
  View,
  ActivityIndicator,
} from 'react-native'

import { useState } from 'react'
import { StatusBar } from 'expo-status-bar'
import { ChevronRight, ArrowLeftFromLine } from 'lucide-react-native'
import { Link, useRouter } from 'expo-router'
import { signOut } from 'firebase/auth'
import { FIREBASE_AUTH } from '../firebaseConfig'

import Logo from '../src/assets/nlw-spacetime-logo.svg'

export default function Home() {
  const [loading, setLoading] = useState(false)
  const router = useRouter()
  const auth = FIREBASE_AUTH
  const logOut = async () => {
    setLoading(true)
    try {
      const response = await signOut(auth)
      console.log(response)
      router.push('/')
    } catch (error) {
      console.log(error)
    } finally {
      setLoading(false)
    }
  }
  return (
    <ScrollView className="bg-white-100 pt-8">
      <View className="w-full flex-row justify-between px-10 pt-10">
        <Logo width={92} height={40} />
        {loading ? (
          <ActivityIndicator size="large" color="#FFF112" />
        ) : (
          <TouchableOpacity onPress={logOut}>
            <ArrowLeftFromLine color="#E02041" />
          </TouchableOpacity>
        )}
      </View>
      <View className="mx-6 mb-8 mt-12">
        <Text className="mb-4 text-3xl font-medium">Bem-vindo!</Text>
        <Text className="text-xl font-medium text-gray-150">
          Escolha um dos casos abaixo e salve o dia.
        </Text>
      </View>
      <View className="mx-6 mb-4 items-center">
        <View className="h-60 w-full  rounded-lg bg-white-50">
          <View className="flex-row">
            <View className="mx-6 my-6 w-1/2">
              <Text className="text-sm font-bold">CASO:</Text>
              <Text className="text-base">Cadelinha atropelada</Text>
            </View>
            <View className="mx-6 my-6 w-1/2">
              <Text className="text-sm font-bold">ONG:</Text>
              <Text className="text-base">APAD</Text>
            </View>
          </View>
          <View className="flex-row">
            <View className="mx-6 my-6 w-1/2">
              <Text className="text-sm font-bold">VALOR:</Text>
              <Text className="text-base">R$ 120,00</Text>
            </View>
          </View>
          <View className="h-14 w-full border-t border-t-gray-50">
            <Link href="/detail" asChild>
              <TouchableOpacity className="ml-6 mr-5 mt-4 h-full flex-row justify-between">
                <Text className="font-semibold text-red-50">
                  Ver mais detalhes
                </Text>
                <ChevronRight color="#E02041" />
              </TouchableOpacity>
            </Link>
          </View>
        </View>
      </View>
      <View className="mx-6 mb-4 items-center">
        <View className="h-60 w-full  rounded-lg bg-white-50">
          <View className="flex-row">
            <View className="mx-6 my-6 w-1/2">
              <Text className="text-sm font-bold">CASO:</Text>
              <Text className="text-base">Cadelinha atropelada</Text>
            </View>
            <View className="mx-6 my-6 w-1/2">
              <Text className="text-sm font-bold">ONG:</Text>
              <Text className="text-base">APAD</Text>
            </View>
          </View>
          <View className="flex-row">
            <View className="mx-6 my-6 w-1/2">
              <Text className="text-sm font-bold">VALOR:</Text>
              <Text className="text-base">R$ 120,00</Text>
            </View>
          </View>
          <View className="h-14 w-full border-t border-t-gray-50">
            <Link href="/detail" asChild>
              <TouchableOpacity className="ml-6 mr-5 mt-4 h-full flex-row justify-between">
                <Text className="font-semibold text-red-50">
                  Ver mais detalhes
                </Text>
                <ChevronRight color="#E02041" />
              </TouchableOpacity>
            </Link>
          </View>
        </View>
      </View>
      <View className="mx-6 mb-4 items-center">
        <View className="h-60 w-full  rounded-lg bg-white-50">
          <View className="flex-row">
            <View className="mx-6 my-6 w-1/2">
              <Text className="text-sm font-bold">CASO:</Text>
              <Text className="text-base">Cadelinha atropelada</Text>
            </View>
            <View className="mx-6 my-6 w-1/2">
              <Text className="text-sm font-bold">ONG:</Text>
              <Text className="text-base">APAD</Text>
            </View>
          </View>
          <View className="flex-row">
            <View className="mx-6 my-6 w-1/2">
              <Text className="text-sm font-bold">VALOR:</Text>
              <Text className="text-base">R$ 120,00</Text>
            </View>
          </View>
          <View className="h-14 w-full border-t border-t-gray-50">
            <Link href="/detail" asChild>
              <TouchableOpacity className="ml-6 mr-5 mt-4 h-full flex-row justify-between">
                <Text className="font-semibold text-red-50">
                  Ver mais detalhes
                </Text>
                <ChevronRight color="#E02041" />
              </TouchableOpacity>
            </Link>
          </View>
        </View>
      </View>
      <StatusBar style="dark" />
    </ScrollView>
  )
}
