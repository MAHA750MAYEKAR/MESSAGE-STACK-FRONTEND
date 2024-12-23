import { useState } from 'react';
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



export const SignInCard = () => {
      const navigate=useNavigate();
      const [signInForm, setSigninForm] = useState({
            email: '',
            password: ''
      });

      return (
            <Card>
                  <CardHeader>
                        <CardTitle>Sign In </CardTitle>
                        <CardDescription>Sign In to access your account</CardDescription>
                  </CardHeader>
                  <CardContent>
                        <form className="space-y-3">
                              <Input
                                    disabled={false}
                                    placeholder="Email"
                                    required
                                    type="email"
                                    value={signInForm.email}
                                    onChange={(e) => setSigninForm({ ...signInForm, email: e.target.value })}

                              />
                              <Input
                                    disabled={false}
                                    placeholder="Password"
                                    required
                                    type="password"
                                    value={signInForm.password}
                                    onChange={(e) => setSigninForm({ ...signInForm, password: e.target.value })}

                              />
                              <Button className="w-full " disabled={false} size="lg" type="submit">
                                    Continue

                              </Button>


                        </form>
                        <Separator className="my-5" />
                        <p
                              className='text-s text-muted-foreground mt-4'
                        >
                              Don't have an account ? {' '}
                              <span
                                    className='text-sky-600 hover:underline cursor-pointer'
                                    onClick={() => navigate('/auth/signup')}
                              >
                                    Sign Up
                              </span>
                        </p>

                  </CardContent>

            </Card>

      );
};