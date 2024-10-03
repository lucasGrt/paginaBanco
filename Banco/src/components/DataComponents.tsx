import React from 'react';
import { View, Text, ListRenderItem } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons'
import clsx from 'clsx'

type Variants = 'primary'|'secondary'

export interface ItemData {
  title: string;
  Variant?:Variants;
  icon:string;
  color:string;
  size:number;
  value:number;
  date?:string
}


const data: ItemData[] = [
  {  title: 'Entrada', icon:'arrow-up-circle-outline' ,color:'green', size:35, value:34000,date:"13 de abril"},
  {  title: 'Saida', icon:'arrow-down-circle-outline' ,color:'red', size:35, value:18600, date:"03 de abril" },
  {  title: 'Saldo', Variant:'secondary', icon:'currency-usd',color:'white', size:35, value:24000 },

];


export const renderItem: ListRenderItem<ItemData> = ({ item }) => (

  <View className={clsx('w-72 h-52 m-4 p-4 border rounded-lg',
  {"bg-orange-600": item.Variant == 'secondary'}
  )}>
               <View className='flex-row justify-between items-center h-10 '>
                    <Text className={clsx('text-xl',
                    {"text-white": item.Variant == 'secondary' })}>{item.title}</Text>
                    <MaterialCommunityIcons
                        name= {item.icon}
                        color= {item.color}
                        size={item.size}
                        />
                </View>
                <View className='flex justify-end items-start h-28'>
                    <Text className={clsx('text-[25px] font-bold',
                    {"text-white": item.Variant == 'secondary' })}>R${item.value}</Text>
                    <Text className='text-sm color-gray-300'>ultima alteração dia {item.date}</Text>
                </View>
            </View>
);

export default data;