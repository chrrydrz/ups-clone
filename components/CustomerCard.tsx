import { useNavigation } from '@react-navigation/native';
import { Card, Icon } from '@rneui/base';
import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native';
import { useTailwind } from 'tailwind-rn/dist';
import useCustomerOrders from '../hooks/useCustomerOrders';
import { CustomerScreenNavigationProp } from '../screens/CustomersScreen';

type Props = {
  userId: string;
  name: string;
  email: string;
};

const CustomerCard = ({ email, name, userId }: Props) => {
  const { loading, error, orders } = useCustomerOrders(userId);
  const tw = useTailwind();
  const navigation = useNavigation<CustomerScreenNavigationProp>();

  return (
    <TouchableOpacity onPress={() => navigation.navigate("ModalScreen", {
      name: name,
      userId: userId,
    })}>
      <Card containerStyle={tw("p-5 rounded-lg")}>
        <View>
          <View style={tw("flex-row justify-between")}>
            <View>
              <Text style={tw("text-2xl font-bold")}>{name}</Text>
              <Text style={[tw("text-sm"), { color: "#59C1CC" }]}>ID: {userId}</Text>
            </View>

            <View style={tw("flex-row items-center justify-end")}>
              <Text style={{ color: "#59C1CC" }}>
                {loading ? "loading..." : `${orders.length} x`}</Text>
              <Icon
                style={tw("mb-5 ml-auto")}
                name="box"
                type="entypo"
                color="#59C1CC"
                size={50}
              />
            </View>
          </View>
        </View>
        <Card.Divider />
        <Text>{email}</Text>
      </Card>
    </TouchableOpacity>
  )
}

export default CustomerCard;