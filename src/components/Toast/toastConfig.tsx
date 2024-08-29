import { Dimensions, View } from "react-native";
import FastImage from "react-native-fast-image";
import StyledText from "../StyledText";
import Show from "../Show";
import styles from "./styles";
import { ToastConfig } from "react-native-toast-message";
import { colors, dimensions } from "@foundation";

const toastConfig: ToastConfig = {
  successToast: ({ text1, text2 }) => (
    <View style={styles.successWrapper}>
      <View style={styles.imageWrapper}>
        <FastImage
          resizeMode="contain"
          source={require('@assets/common/success-toast.webp')}
          style={{ flex: 1 }}
        />
      </View>
      <View style={{ flex: 1 }}>
        <StyledText style={styles.label} variant="b1-m">
          {text1}
        </StyledText>
        <Show when={!!text2 ?? false}>
          <View>
            <View style={{ height: 4 }} />
            <StyledText style={styles.label} variant="b2-m">
              {text2}
            </StyledText>
          </View>
        </Show>
      </View>
    </View>
  ),
  warningToast: ({ text1 }) => (
    <View
      style={{
        backgroundColor: colors.monoVariants.chillGrey_1,
        width: Dimensions.get('screen').width - 40,
        paddingHorizontal: dimensions[4],
        paddingVertical: dimensions[3],
        flexDirection: 'row',
        gap: dimensions[3],
        alignItems: 'center',
        borderRadius: dimensions[3],
      }}
    >
      <FastImage
        source={require('@assets/common/warning-toast.webp')}
        style={{
          aspectRatio: 1 / 1,
          height: dimensions[8],
        }}
      />
      <StyledText
        style={{
          flex: 1,
        }}
      >
        {text1}
      </StyledText>
    </View>
  ),
};

export default toastConfig;