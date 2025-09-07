import { NavigationContainer } from '@react-navigation/native'
import { BottomTabsRoutes } from './bottom-tabs.routes'

export function AppRoutes() {
  return (
    <NavigationContainer>
        <BottomTabsRoutes />
    </NavigationContainer>
  )
};