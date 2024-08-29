import { createContext, ReactNode, useContext } from 'react';
import { SharedValue } from 'react-native-reanimated';

type ContextValue = Readonly<SharedValue<string>>;
interface Props {
  children: ReactNode;
  colorValue: ContextValue;
}

const AnimatedIconColorContext = createContext<ContextValue | null>(null);

const AnimatedIconColorProvider = ({ children, colorValue }: Props) => {
  return (
    <AnimatedIconColorContext.Provider value={colorValue}>
      {children}
    </AnimatedIconColorContext.Provider>
  );
};

const useAnimatedIconColor = () => {
  const colorValue = useContext(AnimatedIconColorContext);
  if (!colorValue) {
    throw new Error(
      'useAnimatedIconColor hook must be used within AnimatedIconColorProvider sub-tree.'
    );
  }

  return colorValue;
};

export default AnimatedIconColorProvider;
export { useAnimatedIconColor };
