import { SignUpCard } from '@/components/organisms/Auth/SignUpCard';

function Auth() {
  return (
    <>
      <div className="h-[100vh] flex items-center justify-center bg-[#ab5d75]">
        <div className="md:h-auto md:w-[420px]">
          <SignUpCard />
        </div>
      </div>
    </>
  );
}

export default Auth;
