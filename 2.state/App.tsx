// import { View, Text,StyleSheet } from 'react-native'
// import React from 'react'

// const App = () => {
//   return (
//     <View style={styles.container}>
//       <Text style={{color:'blue','fontSize':30,'fontWeight':300,'margin-top':100}}>Welocme To First Application</Text>
//     </View>
//   )
// }


// const styles = StyleSheet.create({
//   container:{
//     flex: 1,
//     backgroundColor:'#f4dbdb',
//   }
// })
// export default App

import { View, Text,StyleSheet } from 'react-native'
import React, { useState } from 'react'

const App = () => {

  const [data,setData]=useState('This is initial state of object of useState')
  return (
    <View style={styles.container}>
      <Text style={{color:'blue','fontSize':30,'fontWeight':300,'margin-top':100}}>{data}</Text>
    </View>
  )
}


const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor:'#f4dbdb',
  }
})
export default App