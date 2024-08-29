import { useSignInStatus } from '@hooks';
import { LoginFlow, PostLoginFlow } from './flows';
import { Show } from '@components';

const Routes = () => {
  const { isSignedIn } = useSignInStatus();
  return (
    <Show fallback={<LoginFlow />} when={isSignedIn}>
      <PostLoginFlow />
    </Show>
  );
};

export default Routes;
