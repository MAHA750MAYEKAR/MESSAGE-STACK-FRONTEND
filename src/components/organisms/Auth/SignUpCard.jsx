import { useState } from 'react';

import {
      Card,
      CardContent,
      CardDescription,
      CardHeader,
      CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';




export const SignUpCard = () => {
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
                                          onChange={(e) => setSignupForm({ ...signupForm,username: e.target.value })}


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
                                          onChange={(e) => setSignupForm({ ...signupForm,  confirmPassword: e.target.value })}


                                    />
                                  





                              </form>
                        </CardContent>

                  </Card>



            </>
      );

};