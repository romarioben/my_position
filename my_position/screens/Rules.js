import React from 'react'
import { Text, View } from 'react-native'

export default function Rules() {
  return (
      <View style={{ margin: 20 }} >
          <Text style={{ fontSize:20, fontWeight: 'bold' }} >
              Règles de confidentialité
          </Text>
          <Text >
              Cette application utilise vos données de localisation pour le bon fonctionnement.
              Ces données ne sont ni stockées, ni partagées par nous à des tiers, les données sont partagées par vous même aux personnes de votre choix
          </Text>
    </View>
  )
}
