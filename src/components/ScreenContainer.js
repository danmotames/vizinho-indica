import { useWindowDimensions, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { getHorizontalPadding } from '../theme/layout';
import { colors } from '../theme/tokens';

export const ScreenContainer = ({ children, withBottomInset = true }) => {
  const { width } = useWindowDimensions();

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: colors.background,
      }}
      edges={withBottomInset ? ['top', 'left', 'right', 'bottom'] : ['top', 'left', 'right']}
    >
      <View
        style={{
          flex: 1,
          paddingHorizontal: getHorizontalPadding(width),
          paddingTop: 12,
        }}
      >
        {children}
      </View>
    </SafeAreaView>
  );
};
