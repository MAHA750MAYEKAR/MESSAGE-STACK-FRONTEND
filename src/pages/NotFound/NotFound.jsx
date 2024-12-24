import { useNavigate } from 'react-router-dom';

import { Button } from '@/components/ui/button';
import {
   Card,
   CardContent,
   CardDescription,
   CardHeader,
   CardTitle,
} from '@/components/ui/card';


export const NotFound = () => {
   const navigate=useNavigate();
   return (
      <>
         <div className="h-screen bg-[#d2c8bf]  flex items-center justify-center">
            <Card className="text-center shadow-lg max-w-lg ">
               <CardHeader>
                  <CardTitle > 404 Not Found</CardTitle>
                  <CardDescription>The page you are looking for does not exist.</CardDescription>
               </CardHeader>
               <CardContent>
                  <img src="https://png.pngtree.com/png-vector/20201224/ourlarge/pngtree-error-404-page-not-found-png-image_2598541.jpg" alt="Not Found image"
                     className="shadow-xl rounded"/>


                  <Button
                     className="w-full hover:bg-red-600 rounded-lg  mt-7 shadow-xl"                    
                     variant="destructive"
                     onClick={()=>navigate(-1)}
                                      >
                     Go Back
                  </Button>
               
                  
               </CardContent>

            </Card>

         </div>

      </>

   );
};