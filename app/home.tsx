import {
  ScrollView,
  Text,
  TouchableOpacity,
  View,
  ActivityIndicator,
} from 'react-native'

import { useEffect, useState } from 'react'
import { StatusBar } from 'expo-status-bar'
import { ChevronRight, ArrowLeftFromLine, Plus } from 'lucide-react-native'
import { Link, useRouter } from 'expo-router'
import { signOut } from 'firebase/auth'
import { FIREBASE_AUTH, FIREBASE_DB } from '../firebaseConfig'
import { collection, onSnapshot, query } from 'firebase/firestore'

import Logo from '../src/assets/nlw-spacetime-logo.svg'
import { SafeAreaView } from 'react-native-safe-area-context'

export default function Home() {
  const [loading, setLoading] = useState(false)
  const [cases, setCases] = useState([])
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
  useEffect(() => {
    const q = query(collection(FIREBASE_DB, 'cases'))
    onSnapshot(q, (querySnapshot) => {
      setCases(
        querySnapshot.docs.map((doc) => ({
          data: doc.data(),
        })),
      )
    })
  }, [])

  return (
    <SafeAreaView className="flex-1 bg-white-100">
      <ScrollView>
        <View className="flex-row justify-between px-10 pt-10">
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

        {cases.map((cas) => (
          <View className="mx-6 mb-4 items-center" key={cas.data.id}>
            <View className="h-60 w-full  rounded-lg bg-white-50">
              <View className="flex-row">
                <View className="mx-6 my-6 w-1/2">
                  <Text className="text-sm font-bold">CASO:</Text>
                  <Text className="text-base">{cas.data.description}</Text>
                </View>
                <View className="mx-6 my-6 w-1/2">
                  <Text className="text-sm font-bold">ONG:</Text>
                  <Text className="text-base">{cas.data.ongname}</Text>
                </View>
              </View>
              <View className="flex-row">
                <View className="mx-6 my-6 w-1/2">
                  <Text className="text-sm font-bold">VALOR:</Text>
                  <Text className="text-base">R$ {cas.data.value}</Text>
                </View>
              </View>
              <View className="h-14 w-full border-t border-t-gray-50">
                <Link
                  href={{
                    pathname: '/detail',
                    params: { case: cas },
                  }}
                  asChild
                >
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
        ))}

        <StatusBar style="dark" />
      </ScrollView>
      <TouchableOpacity
        className="absolute bottom-3 right-2 h-12 w-12 items-center justify-center rounded-full 
    bg-red-50"
        onPress={() => router.push('/createcase')}
      >
        <Plus color="white" />
      </TouchableOpacity>
    </SafeAreaView>
  )
}
