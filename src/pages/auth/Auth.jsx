
function Auth({children}) {
  return (
    <>
      <div className="h-[100vh] flex items-center justify-center bg-[#8e4256]">
        <div className="md:h-auto md:w-[420px] gap-6">
        {children}
        </div>
      </div>
    </>
  );
}

export default Auth;
