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






export const SignUpCard = () => {
      const navigate=useNavigate();
      const [signupForm, setSignupForm] = useState({
            email: '',
            username: '',
            password: '',
            confirmPassword: ''
      });
      return (
            <>
                  <Card>
                        <CardHeader>
                              <CardTitle>Sign Up</CardTitle>
                              <CardDescription>Sign Up to access your account</CardDescription>
                        </CardHeader>
                        <CardContent>
                              <form className='space-y-3'>
                                    <Input
                                          placeholder="Email"
                                          required
                                          type="email"
                                          value={signupForm.email}
                                          onChange={(e) => setSignupForm({ ...signupForm, email: e.target.value })}
                                          disabled={false}

                                    />
                                    <Input
                                          placeholder="Enter your Username"
                                          required
                                          type="text"
                                          value={signupForm.username}
                                          onChange={(e) => setSignupForm({ ...signupForm, username: e.target.value })}


                                    />

                                    <Input
                                          placeholder="Password"
                                          required
                                          type="password"
                                          value={signupForm.password}
                                          onChange={(e) => setSignupForm({ ...signupForm, password: e.target.value })}


                                    />
                                    <Input
                                          placeholder="Confirm Password"
                                          required
                                          type="password"
                                          value={signupForm.confirmPassword}
                                          onChange={(e) => setSignupForm({ ...signupForm, confirmPassword: e.target.value })}


                                    />
                                    <Button
                                          disabled={false}
                                          size="lg"
                                          type="submit"
                                          className="w-full"
                                    >
                                          Continue
                                    </Button>


                              </form>
                              <Separator className="my-5" />
                              <p
                                    className='text-s text-muted-foreground mt-4'
                              >
                                    Already have an account ? {' '}
                                    <span
                                          className='text-sky-600 hover:underline cursor-pointer'
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