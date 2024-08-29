import { Pressable, View } from 'react-native';
import { useState } from 'react';
import Animated, { FadeIn } from 'react-native-reanimated';
import { Props, ShortInfoProps } from './types';
import styles from './styles';
import TaskItemHeader from '../TaskItemHeader';
import { Show, StyledText } from '@components';

const TaskItem = ({ item }: Props) => {
  const [expanded, setExpanded] = useState(false);
  const [degrees, setDegrees] = useState(0);

  const toggleExpand = () => {
    setExpanded(!expanded);
    if (expanded) {
      setDegrees(0);
    } else {
      setDegrees(90);
    }
  };
  return (
    <View>
      <Pressable style={styles.wrapper} onPress={toggleExpand}>
        <TaskItemHeader degrees={degrees} name={item.type} />
        <View style={{ marginLeft: 52 }}>
          <ShortInfo createdAt={item.createdAt} jobber={item.jobber} />
          <Show when={item.description.length > 0}>
            <StyledText style={styles.onyxText} variant="b2-m">
              {item.description}
            </StyledText>
          </Show>
        </View>
      </Pressable>
      <Show when={expanded}>
        <Animated.View
          entering={FadeIn.duration(250)}
          style={styles.accordianView}
        >
          <StyledText style={styles.accordianHeader} variant="h4">
            Materials used
          </StyledText>
          <View style={styles.row}>
            <StyledText>Item name</StyledText>
            <StyledText>Item quantity</StyledText>
          </View>
          {item.taskToMaterials.map((material) => (
            <View key={material.id} style={styles.row}>
              <StyledText>{material.rawMaterial.name}</StyledText>
              <StyledText>{material.quantityUsed} gms</StyledText>
            </View>
          ))}
        </Animated.View>
      </Show>
    </View>
  );
};

export default TaskItem;

const ShortInfo = ({ createdAt, jobber }: ShortInfoProps) => {
  function formatDate(dateString: string) {
    const date = new Date(dateString);
    return date
      .toLocaleDateString('en-GB', {
        day: '2-digit',
        month: 'short',
        year: '2-digit',
      })
      .replace(/ /g, ' ');
  }

  return (
    <StyledText style={styles.onyxText} variant="b2-m">
      {jobber.name + ', ' + formatDate(createdAt)}
    </StyledText>
  );
};
