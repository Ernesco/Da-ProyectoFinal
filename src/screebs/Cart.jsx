import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import cart_data from "../data/cart_data.json"
import CartItem from '../componets/CartItem'
import { colors } from '../global/Color'
import { useState, useEffect } from 'react';

const Cart = () => {

  const [total, setTotal] = useState()
  useEffect(() => {
    const totalCart = cart_data.reduce((accumulator, currentItem) => (
      accumulator += currentItem.price * currentItem.quantity
    ), 0)
    setTotal(totalCart)
  }, [])

  const renderCartItem = ({ item }) => (
    <CartItem item={item} />
  )

  return (
    <View style={styles.cartContainer}>
      <FlatList
        data={cart_data}
        renderItem={renderCartItem}
        keyExtractor={item => item.id}
      />
      <View style={styles.cartConfirm}>
        <Text style={styles.totalPrice}>Total: ${total}</Text>
        <TouchableOpacity style={styles.confirmButton} onPress={null}>
          <Text style={styles.textConfirm}>Confirmar</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default Cart

const styles = StyleSheet.create({

  cartContainer: {
    flex: 1,
  },
  cartConfirm: {
    marginBottom: 130,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 25,
  },
  totalPrice: {
    fontSize: 25,
    fontFamily: 'DancingScript-Regular',
    color: "black"
  },
  confirmButton: {
    backgroundColor: colors.primary,
    padding: 10,
    borderRadius: 10,
  },
  textConfirm: {
    fontFamily: 'DancingScript-Regular',
    fontSize: 20,
    color: "black"
  }
})