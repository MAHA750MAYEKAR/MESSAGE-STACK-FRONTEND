import { CreateWorkspaceModal } from '@/components/molecules/CreateWorkspaceModal/CreateWorkspaceModal';
import { PreferenceModal } from '@/components/molecules/PreferenceModal/PreferenceModal';
import { CreateChannelModal } from '@/components/molecules/createChannelModal/CreateChannelModal';
export const Modals = () => {
  return (
    <>
      <CreateWorkspaceModal />
      <PreferenceModal />
      <CreateChannelModal/>
    </>
  );
};
