import { CreateChannelModal } from '@/components/molecules/createChannelModal/CreateChannelModal';
import { CreateWorkspaceModal } from '@/components/molecules/CreateWorkspaceModal/CreateWorkspaceModal';
import { PreferenceModal } from '@/components/molecules/PreferenceModal/PreferenceModal';
export const Modals = () => {
  return (
    <>
      <CreateWorkspaceModal />
      <PreferenceModal />
      <CreateChannelModal/>
    </>
  );
};
