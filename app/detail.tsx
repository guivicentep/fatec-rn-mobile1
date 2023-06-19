import { Text, TouchableOpacity, View } from 'react-native'
import Logo from '../src/assets/nlw-spacetime-logo.svg'
import { ChevronLeft } from 'lucide-react-native'
import { Link } from 'expo-router'

export default function Detail() {
  return (
    <View className="flex-1 bg-white-100 pt-8">
      <View className="w-full flex-row justify-between px-10 pt-10">
        <Logo width={92} height={40} />
        <Link href="/home">
          <ChevronLeft color="#E02041" />
        </Link>
      </View>
      <View className="mx-6 mb-4 mt-10 items-center">
        <View className="h-80 w-full  rounded-lg bg-white-50">
          <View className="flex-row">
            <View className="mx-6 my-6 w-1/2">
              <Text className="text-sm font-bold">CASO:</Text>
              <Text className="text-base text-gray-150">
                Cadelinha atropelada
              </Text>
            </View>
            <View className="mx-6 my-6 w-1/2">
              <Text className="text-sm font-bold">ONG:</Text>
              <Text className="text-base text-gray-150">APAD</Text>
            </View>
          </View>
          <View className="flex-row">
            <View className="mx-6 my-6 w-72">
              <Text className="text-sm font-bold">DESCRIÇÃO:</Text>
              <Text className="text-base text-gray-150">
                A cadelinha Jolie foi atropelada por um carro no bairro Santana
                e teve que passar por uma cirurgia às pressas.
              </Text>
            </View>
          </View>
          <View className="flex-row">
            <View className="mx-6 my-6 w-1/2">
              <Text className="text-sm font-bold">VALOR:</Text>
              <Text className="text-base text-gray-150">R$ 120,00</Text>
            </View>
          </View>
        </View>
      </View>
      <View className="mx-6 mb-4 mt-10 items-center">
        <View className="h-56 w-full  rounded-lg bg-white-50">
          <View className="flex-row">
            <View className="mx-6 my-6 w-72">
              <Text className="pb-1 text-xl font-medium">Salve o dia!</Text>
              <Text className="text-xl font-medium">
                Seja o herói desse caso
              </Text>
              <Text className="mt-4 text-sm font-normal text-gray-150">
                Entre em contato:
              </Text>
              <View className="flex-row">
                <TouchableOpacity className="mr-4 mt-6 h-12 w-1/2 items-center justify-center rounded-lg bg-red-50">
                  <Text className="text-white-100">WhatsApp</Text>
                </TouchableOpacity>
                <TouchableOpacity className="mt-6 h-12 w-1/2 items-center justify-center rounded-lg bg-red-50">
                  <Text className="text-white-100">E-mail</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>
  )
}
