import { BiErrorAlt } from 'react-icons/bi';
import { CgDanger } from 'react-icons/cg';
import { FiLoader } from 'react-icons/fi';
import {useNavigate } from 'react-router-dom';

import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Separator } from '@/components/ui/separator';


export const SignUpCard = ({
  signupForm,
  setSignupForm,
  validationError,
  onsignupFormSubmit,
  isPending,
  error,
  isSuccess,
}) => {

 const navigate=useNavigate();
  return (
    <>
      <Card>
        <CardHeader>
          <CardTitle>Sign Up</CardTitle>
          <CardDescription>Sign Up to access your account</CardDescription>
          {validationError && (
            <div className="w-full bg-orange-500/50 rounded p-3 flex gap-4 border-spacing-11 shadow-lg">
              <CgDanger className="mt-0.5 size-5" />
              <p>{validationError.message}</p>
            </div>
          )}
          {error && (
            <div className="w-full bg-orange-500/50 rounded p-3 flex gap-4 border-spacing-11 shadow-lg">
              <BiErrorAlt className="mt-0.5 size-6" />
              <p>{error.message}</p>
            </div>
          )}
          {isSuccess && (
            <div className="w-full bg-green-500/50 rounded p-3 flex gap-4 border-spacing-11 shadow-lg">
              <FiLoader className="mt-0.5 size-10" />
              <p>
                Successfully signup. You will be redirected to login page in few
                seconds....
              </p>
            </div>
          )}
        </CardHeader>
        <CardContent>
          <form className="space-y-3" onSubmit={onsignupFormSubmit}>
            <Input
              placeholder="Email"
              required
              type="email"
              value={signupForm.email}
              onChange={(e) =>
                setSignupForm({ ...signupForm, email: e.target.value })
              }
              disabled={isPending}
            />
            <Input
              placeholder="Enter your Username"
              required
              type="text"
              value={signupForm.username}
              onChange={(e) =>
                setSignupForm({ ...signupForm, username: e.target.value })
              }
              disabled={isPending}
            />

            <Input
              placeholder="Password"
              required
              type="password"
              value={signupForm.password}
              onChange={(e) =>
                setSignupForm({ ...signupForm, password: e.target.value })
              }
              disabled={isPending}
            />
            <Input
              placeholder="Confirm Password"
              required
              type="password"
              value={signupForm.confirmPassword}
              onChange={(e) =>
                setSignupForm({
                  ...signupForm,
                  confirmPassword: e.target.value,
                })
              }
              disabled={isPending}
            />
            <Button disabled={false} size="lg" type="submit" className="w-full">
              Continue
            </Button>
          </form>
          <Separator className="my-5" />
          <p className="text-s text-muted-foreground mt-4">
            Already have an account ?{' '}
            <span
              className="text-sky-600 hover:underline cursor-pointer"
              onClick={() => navigate('/auth/signin')}
            >
              Sign In
            </span>
          </p>
        </CardContent>
      </Card>
    </>
  );
};
