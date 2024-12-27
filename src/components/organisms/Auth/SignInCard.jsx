import { useState } from 'react';
import { BiErrorAlt } from 'react-icons/bi';
import { CgDanger } from 'react-icons/cg';
import { FiLoader } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';

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
export const SignInCard = ({
  signInForm,
  setSigninForm,
  error,
  isPending,
  isSuccess,
  onSubmitSignin,
  validationError,
}) => {
  const navigate = useNavigate();
  return (
    <Card>
      <CardHeader>
        <CardTitle>Sign In </CardTitle>
        <CardDescription>Sign In to access your account</CardDescription>
        {validationError?.message && (
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
              Successfully signin. You will be redirected to Home page in few
              seconds....
            </p>
          </div>
        )}
      </CardHeader>
      <CardContent>
        <form className="space-y-3" onSubmit={onSubmitSignin}>
          <Input
            disabled={isPending}
            placeholder="Email"
            required
            type="email"
            value={signInForm.email}
            onChange={(e) =>
              setSigninForm({ ...signInForm, email: e.target.value })
            }
          />
          <Input
            disabled={isPending}
            placeholder="Password"
            required
            type="password"
            value={signInForm.password}
            onChange={(e) =>
              setSigninForm({ ...signInForm, password: e.target.value })
            }
          />
          <Button className="w-full" disabled={false} size="lg" type="submit">
            Continue
          </Button>
        </form>
        <Separator className="my-5" />
        <p className="text-s text-muted-foreground mt-4">
          Don't have an account ?{' '}
          <span
            className="text-sky-600 hover:underline cursor-pointer"
            onClick={() => navigate('/auth/signup')}
          >
            Sign Up
          </span>
        </p>
      </CardContent>
    </Card>
  );
};
