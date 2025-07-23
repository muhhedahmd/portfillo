
import "../../(homePage)/globals.css";

export default function layout({


    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    
    if(typeof window === 'undefined')
    return (
      <html 
      
      
      lang="en">
        <body
      
        >
          {children}
        </body>
      </html>
    );
  }
  