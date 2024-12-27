//this function accepts all providers and returns a single provider


export default function CombinedProvider (...Providers){//providers is array which contains all providers


    return ({ children }) => {
        return Providers.reduceRight((accumulator,CurrentProvoder) => {
            return<CurrentProvoder>{accumulator}</CurrentProvoder>;
            
        },children);
        
    };
}
/**
 * <A>
 *  <B>
 *      <C>
 *          <D>
 *          {children}
 *         </D>
 *      </C>
 *   </B>
 * </A>
 */
/**
 * <CombinedProvider>
 * {children}
 * </CombinedProvider>
 * 
 * children is like all components inside
 */