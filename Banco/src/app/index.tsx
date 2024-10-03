import { View,Text,Image,FlatList, Button} from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import {CustomButton} from '@/components/button'
import data, { renderItem } from '@/components/DataComponents';


export default function Index(){
    return(

        <View className="flex-1 gap-12">

            <View className='bg-blue-700 w-full h-96 flex justify-center items-center'>
                <View className='flex-row w-10/12 h-24'>
                    <View>
                        <Image source={{
                                uri: 'https://static.vecteezy.com/ti/fotos-gratis/t1/33332757-o-negocio-homem-retrato-com-oculos-de-sol-e-borrado-escritorio-dentro-fundo-ai-generativo-foto.jpg',
                            }}
                            style={{ width: 82 , height: 82 , borderRadius:20, }}/>
                    </View>
                    <View className='justify-center ml-4 w-2/3'>
                            <Text className='text-[15px] font-bold color-white'>Olá,</Text>
                            <Text className='text-[20px] font-bold color-white'>Lucas Goulart</Text>
                    </View>
                    <View className='justify-center items-center'>
                        
                    <CustomButton icon='power-standby' color='red' size={35}/>
                        
                    </View>
                </View>
                
            </View>
            <FlatList 
                data={data}
                renderItem={renderItem}
                keyExtractor={item => item.title}
                horizontal={true}
                />
        </View>
        
    )
} 
