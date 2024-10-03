import { TouchableOpacity, Text } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons'

interface CustomButtonProps {
  icon:string
  color:string
  size:number
}

  export function CustomButton({icon,color,size}:CustomButtonProps) {
  return (
    <TouchableOpacity>
      <MaterialCommunityIcons
        name= {icon}
        color= {color}
        size={size}
        />
    </TouchableOpacity>
  );

};